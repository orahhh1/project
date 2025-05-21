const routes=require('express').Router();
const db = require('./db');

//insert
routes.post('/insert',async function(req,res){
    const {Name,age,classe}=req.body;
    await db.query('INSERT INTO `userr( `Name`, `age`, `classe`) VALUES (?,?,?)',[Name,age,classe])
    res.send('new user was created successfully');
});

routes.get('/students',async function(req,res){
    const select=await db.query('SELECT * FROM userr');
    res.send(select[0])
});
routes.delete('/delete', async function(req, res) {
    const {id} = req.body;
     await db.query('DELETE FROM `userr` WHERE id=?', [id]);
    res.send('Student deleted successfully');
});
routes.put('/update', async function(req, res) {
    const { id, Name, age, classe } = req.body;
    await db.query('UPDATE `userr` SET `Name`=?, `age`=?, `classe`=? WHERE `id`=?',
        [Name, age, classe, id]
    );
    res.send('Student updated successfully');
});

module.exports=routes;