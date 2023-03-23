const router = require('express').Router();
const { errorHandler } = require("../utils/errorHandler");

/*

router.get('/logout', (req, res) => {
    res.json({});
});
*/

router.post('/login', async (req, res) => {
    try {
        const user = await req.auth.login(req.body.username, req.body.password);
        res.json(user);
    } catch (error) {
        return error;
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