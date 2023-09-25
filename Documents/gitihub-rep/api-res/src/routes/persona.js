const express = require('express');
const router = express.Router();

const mysqlConnection  = require('../database.js');

//delete
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    mysqlConnection.query('DELETE FROM persona WHERE id = ?', [id], (err, rows, fields) => {
      if(!err) {
        res.json({status: 'Persona eliminado'});
      } else {
        console.log(err);
      }
    });
});

//select
router.get('/', (req, res) => {
  mysqlConnection.query('SELECT * FROM persona', (err, rows, fields) => {
    if(!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });  
});

router.get('/:id', (req, res) => {
    const { id } = req.params; 
    mysqlConnection.query('SELECT * FROM persona WHERE id = ?', [id], (err, rows, fields) => {
      if (!err) {
        res.json(rows[0]);
      } else {
        console.log(err);
      }
    });
});

  ///add -update
router.post('/', (req, res) => {
    const {id, name, apellido,edad,fecha_nacimiento} = req.body;
    console.log(id, name, apellido,edad,fecha_nacimiento);
    const query = `
      SET @id = ?;
      SET @name = ?;
      SET @apellido = ?;
      SET @edad = ?;
      SET @fecha_nacimiento = ?;
      CALL AddOrUpdate(@id , @name, @apellido , @edad , @fecha_nacimiento);
    `;
    mysqlConnection.query(query, [id, name, apellido,edad,fecha_nacimiento], (err, rows, fields) => {
      if(!err) {
        res.json({status: 'Persona guardada'});
      } else {
        console.log(err);
      }
    });
  
});

router.put('/:id', (req, res) => {
    const {  name, apellido,edad,fecha_nacimiento } = req.body;
    const { id } = req.params;
    const query = `
      SET @id = ?;
      SET @name = ?;
      SET @apellido = ?;
      SET @edad = ?;
      SET @fecha_nacimiento = ?;
      CALL AddOrUpdate(@id , @name, @apellido , @edad , @fecha_nacimiento);
    `;
    mysqlConnection.query(query, [id, name, apellido,edad,fecha_nacimiento], (err, rows, fields) => {
      if(!err) {
        res.json({status: 'Persona Actualizada.'});
      } else {
        console.log(err);
      }
    });
});

module.exports=router;
