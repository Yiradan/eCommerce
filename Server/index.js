const express = require('express')
const app = express();
const cors = require('cors');
const mysql = require('mysql');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());


const db  = mysql.createPool({
  host            : 'localhost',
  user            : 'root',
  password        : 'password',
  database        : 'magazin-online'
});

app.get('/admin/orders', (req,res)=>{
  db.query("SELECT * FROM orders;",(err, result) => {
    if(err) res.send(err)
    else res.send(result)
  })
})

app.post('/orderplaced',(req, res)=>{
  const fName = req.body.fName
  const lName = req.body.lName
  const number = req.body.number
  const email = req.body.email
  const country = req.body.country
  const city = req.body.city
  const pCode = req.body.pCode
  const address = req.body.address
  const order = JSON.stringify(req.body.order)
  const total = req.body.total
  const query = ('INSERT INTO orders (fName, lName, phoneNumber, email, country, city, postalCode, address, orders, total) VALUES (?,?,?,?,?,?,?,?,?,?)')
  db.query(query,[fName, lName, number, email, country, city, pCode, address, order, total],
    (err, result)=>{
      if(err) {
        res.json(err)
      }
      else res.send(result)
    })
})

app.post('/admin/add-product', (req, res)=>{
  const brand = req.body.brand
  const productName = req.body.productName
  const description = req.body.description
  const images = req.body.images
  const quantity = req.body.quantity
  const price = req.body.price
  const tags = req.body.tags
    db.query("INSERT INTO products (brand, productName, description, images, quantity, price, tags) VALUES (?,?,?,?,?,?,?)",
    [brand, productName, description, images, quantity, price, tags],
    (err, result)=>{
    if(err) {
      res.json(err)
    }
    else {
      res.send(result)
    }})
})

app.get('/admin/products/edit/:id', (req,res)=>{
  const id = req.params.id
  const query = 'SELECT * FROM products where id=?'
  db.query(query,id,(err,result)=> {
      if(err) res.json(err)
      else res.send(result)
    })
})

app.get('/shop/products/:id', (req,res) => {
  const id = req.params.id
  const query = 'SELECT * FROM products where id=?'
  db.query(query,id,
    (err,result) => {
      if(err) res.json(err)
      else res.send(result)
    })
})

app.delete('/admin/products/delete/:id', (req, res)=>{
    const id = req.params.id
    db.query("DELETE FROM products WHERE id=?",id,(err, result)=>{
    if(err) res.json(err)
    else res.send(result)
    })
})

app.get('/', (req,res)=>{
  db.query("SELECT * FROM products;",(err, result) => {
    res.send(result)
  })
})

app.put('/admin/products/edit/:id', (req,res) => {
  const id = req.body.id
  const brand = req.body.brand
  const productName = req.body.productName
  const description = req.body.description
  const images = req.body.images
  const quantity = req.body.quantity
  const price = req.body.price
  const tags = req.body.tags
  console.log(req.body)
  const sql =
  'UPDATE products SET brand=?, productName=?, description=?, images=?, quantity=?, price=?, tags=? WHERE id=?'
  db.query(sql,[brand,productName,description,images,quantity,price,tags,id],
  (err,result)=>{
    if(err) res.json(err)
    else res.send(result)
  })
})

app.listen(8080, () => {
    console.log('Server runs on port 8080');
})