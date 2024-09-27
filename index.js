const express = require ("express")
const app = express()
const port = 3000 // port

//route///
app.get("/",(req, res) =>{
    res.send("hello");

});

//route about
app.get("/about",(req,res) => {
    res.send("about us");
});

//route contact
app.get("/contact",(req,res) => {
   // res.send("contact us");
   res.sendFile(__dirname + "/contact.html");
});

// dosen
app.get("/dosen",(req,res) => {
    res.json({
        "status":"succses",
        "mesagge":"dosen",
        "data":[
            {
                prodi:"Sistem informasi",
                dosen:["iis","faris","david"]
            },
            {
                prodi:"informatika",
                dosen:["derry","siska","yohannes"]
            },
        ]
     })
});






//route mahasiswa
app.get("/Mahasiswa",(req,res) => {
    res.json({
        "status":"succes",
        "Message"  :"Data mahasiswa",
        "Data":[
            {
            npm:2226240170,nama:"Dyon"
            },
            {npm:2226240171,nama:"Yo22"
            },{
             npm:2226240172,nama:"yantok"
            }
        ]
    });
});


// handle route yang tidak terdaftar
app.use("/",(req,res) => {
    res.send("<h1> 404 not found</h1>");
});

//jalannkan server
app.listen(port,() =>{
    console.log(`server dapat di akses di http://localhost:${port}`);
});