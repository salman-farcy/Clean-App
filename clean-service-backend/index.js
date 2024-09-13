const express = require('express')
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express()
const port = 5001

//DB URI
const uri = "mongodb+srv://CleaneApp:6XxUXiM51DuJ7Thy@cluster0.rb5g6hh.mongodb.net/Clean-App?retryWrites=true&w=majority&appName=Cluster0";
//MongoDB Cennection
const client = new MongoClient(uri, {
   serverApi: {
     version: ServerApiVersion.v1,
     strict: true,
     deprecationErrors: true,
   }
 });
 

 async function run() {
   try {
     // Connect the client to the server	(optional starting in v4.7)
     await client.connect();

     const ServicesCollection = client.db('Clean-App').collection('Services')


     app.get('/Api/v1/services',async (req, res) => {
      const cursor = ServicesCollection.find()
      const result = await cursor.toArray()
       res.send(result)
    })
     // Send a ping to confirm a successful connection
     await client.db("admin").command({ ping: 1 });
     console.log("Pinged your deployment. You successfully connected to MongoDB!");
   } finally {
     // Ensures that the client will close when you finish/error
   //   await client.close();
   }
 }
 run().catch(console.dir);


app.get('/', (req, res) => {
  res.send('Hello Clean App User')
})



app.listen(port, () => {
  console.log(`Clean App Server is listening on prot ${port}`)
})