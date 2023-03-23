const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User')

const TOKEN_SECRET = "q390vnodzmgszdfgsdz";

module.exports = () => (req, res, next) => {
    if (parseToken(req, res)) {
        req.auth = {
            register,
            login
        };
        next();
    }

    async function createUser(firstname, lastname, username, email, hashedPassword) {
        const user = new User({ firstname, lastname, username, email, hashedPassword });
        return await user.save();
    }

    async function getUserByUsername(username){
        const user = User.findOne({ username: username });
        return await user.lean();
    }

    async function register(firstname, lastname, username, email, password) {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await createUser(firstname, lastname, username, email, hashedPassword);

        return {
            firstname: user.firstname,
            lastname: user.lastname,
            username: user.username,
            _id: user._id,
            email: user.email,
            token: generateToken(user)
        };
    }

    async function login(username, password) {
        const user = await getUserByUsername(username);
        const match = user ? await bcrypt.compare(password, user.hashedPassword) : false;

        if (!user || !match) {
            const error = !user ? new Error('This username does not exist') : new Error('Incorrect username or password');
            error.type = 'credential';
            throw error;
        }

        const token = generateToken(user);

        return {
            username: user.username,
            _id: user._id,
            email: user.email,
            token: token
        };
    }
}

function generateToken(userData) {
    return jwt.sign({
        _id: userData._id,
        username: userData.username,
        email: userData.email
    }, TOKEN_SECRET);
}

function parseToken(req, res) {
    const token = req.headers['x-authorization'];

    if (token) {
        try {
            const userData = jwt.verify(token, TOKEN_SECRET);
            req.user = userData;

            console.log('Known user:', req.user.username);
        } catch (err) {
            return res.status(401).json({ message: 'Please sign in!' });
        }
    }
    return true;
}