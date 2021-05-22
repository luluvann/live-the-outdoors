const router = require('express').Router();

router.get('/', (req,res)=>{
    res.send("blah")
});

module.exports = router;