var express = require('express');
var router = express.Router();
var db = require('./connection');
var uuid = require('uuid');


router.post('/',(req,res)=>{
    res.render('registration'); 
 });

 router.post('/register',(req,res)=>{
    var newuser =  {
            id:"1",
        username:"abc123",
        password:"123456",
        email:"harryuan.65@gmail.com",
        years:1,
        notion:1,
        earns:1,
        inputs:1,
        rates:1,
        inflation:1,
        wStart:1,
        wEnd:1,
        mCost:1,
        house_year:1,
        house_cost:1,
        house_debt_year:1,
        car_year:1,
        car_cost:1,
        car_debt_year:1
    };
    
    var cmd = "select * from clientinfo where username="+"\""+newuser.username+"\"";
    cmd = cmd.replace('\'','');
    db.query(cmd,(err,result)=>{
        if(err)
        {
            console.log(err);
        }
        if(result != '')
        {
            res.send('此帳號已註冊!');
        }
        else{
            var id = uuid.v4();
            var cmd2 = `INSERT INTO clientinfo(\`id\`, \`username\`, \`password\`, \`email\`, \`years\`, \`notion\`, \`earns\`, \`inputs\`, \`rates\`, \`inflation\`, \`wStart\`, \`wEnd\`, \`mCost\`, \`house_year\`, \`house_cost\`, \`house_debt_year\`, \`car_year\`, \`car_cost\`, \`car_debt_year\`) VALUES (\"${id}\",\"${newuser.username}\",\"${newuser.password}\",\"${newuser.email}\",0,0,0,0,0,0,0,0,0,0,0,0,0,0,0)`;
            console.log(cmd2);
            db.query(cmd2,(err,result)=>{
                if(err)
                {
                    console.log(err);
                }
                else{
                    res.send('已註冊完成!');
                }
            })
        }
    });    
});
module.exports = router;
