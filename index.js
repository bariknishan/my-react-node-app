
const express = require('express');
const cors= require('cors')
const app = express();
const port = process.env.PORT || 5000;

app.use(cors())
app.use(express.json())



app.get('/', (req, res) => {
    res.send(" My name is Barik")
})


const users = [

    { id: 1, name: ' barik', email: 'bark@gmail.com ', phone: '01749091523' },
    { id: 2, name: ' tarik', email: 'taark@gmail.com ', phone: '01749091524' },
    { id: 3, name: ' tarin', email: 'tarin@gmail.com ', phone: '01749091525' },



]

app.get('/users', (req, res) => {

    /// filter by search query parameter
    if(req.query.name){
        const search= req.query.name.toLowerCase() ;
        const match = users.filter(user=> user.name.toLowerCase().includes(search))
        res.send(match)

    }
    else{
        res.send(users)
    }
    
})




app.get('/user/:id', (req, res) => {

    console.log(req.params)
    const id =  parseInt( req.params.id);
    const user = users.find( u => u.id== id);

    res.send(user)
})

app.post('/user' , (req, res) =>{
    console.log( 'request' , req.body)
    const user= req.body;
    user.id= users.length +1 ;
    users.push(user)
    res.send(user)
})




app.listen(port, () => {


    console.log("Listen to the", port)
})