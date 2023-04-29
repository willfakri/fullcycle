const express = require('express');
const app = express();
const path = require('path');
const port =3000;

// Define a rota para a página HTML
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};
const mysql = require('mysql')

//const name = randomName();
//const sql = `INSERT INTO people(name) values('${name}')`

//connection.query(sql)


app.post('/insertName', function(req, res) {
    var name = randomName();
    const connection = mysql.createConnection(config);
    connection.query('INSERT INTO people (name) VALUES (?)', [name], function(error, results, fields) {
      if (error) throw error;
      console.log(`O nome '${name}' foi inserido com sucesso.`);
      connection.query('SELECT name FROM people ORDER BY id DESC LIMIT 100', function(error, results, fields) {
        if (error) throw error;
        connection.end();
        var nameList = '';
        results.forEach(function(result) {
          nameList += '<li>' + result.name + '</li>';
        });
        res.send(nameList);
      });
    });
  });
  
  app.get('/getNames', function(req, res) {
    const connection = mysql.createConnection(config);
    connection.query('SELECT name FROM people ORDER BY id DESC LIMIT 100', function(error, results, fields) {
      if (error) throw error;
      connection.end();
      var nameList = '';
      results.forEach(function(result) {
        nameList += '<li>' + result.name + '</li>';
      });
      res.send(nameList);      
    });
  });



// app.get('/', (req,res) => {
//     res.send('<h1>Full Cycle Rocks!</h1>')
// })

app.listen(port, ()=> {
    console.log('Rodando na porta ' + port + '.')
})

function randomName() {
    const names = ["Alice","Beatriz","Carlos","Daniela","Eduardo","Felipe","Guilherme","Helena","Isabela","João","Karina","Leonardo","Marcia","Natalia","Octavio","Paula","Quintino","Ricardo","Sofia","Thiago","Ulisses","Valentina","Willian","Xavier","Yasmin","Zé"];
    const randomIndex = Math.floor(Math.random() * names.length);
    return names[randomIndex];
  }