const router = require('express').Router();
const { errorHandler } = require("../utils/errorHandler");

/*const register = async (req, res) => {
    try {
       const user =  await req.auth.register(req.body.firstname.trim(), req.body.lastname.trim(), req.body.username.trim(), req.body.email.trim(), req.body.password.trim());
        res.status(200).json(user);
    } catch (error) {
        errorHandler(error, res, req);
    }
}

const login = async (req, res) => {
    try {
       const user =  await req.auth.login(req.body.username.trim(), req.body.password.trim());
        res.status(200).json(user);
    } catch (error) {
        errorHandler(error, res, req);
    }
}


router.get('/logout', (req, res) => {
    res.json({});
});

module.exports = {
    register, 
    login
};*/

router.post('/login', async (req, res) => {
    try {
        const user = await req.auth.login(req.body.username, req.body.password);
        res.json(user);
    } catch (error) {
        errorHandler(error, res, req)
    }
});

router.post('/register', async (req, res) => {
    try {
    const user = await req.auth.register(req.body.firstname, req.body.lastname, req.body.username,req.body.email, req.body.password);
    res.json(user);
} catch (error) {
    errorHandler(error, res, req)
}
})
module.exports = router;