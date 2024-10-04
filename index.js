const express = require ("express")
const app = express()
const expressLayouts =require("express-ejs-layouts");
const port = 3000 // port

app.set("views",__dirname+"/views");
app.set('view engine','ejs');

app.use(expressLayouts);
app.use(express.static('public'));



//route///
app.get("/",(req, res) =>{
    // res.send("hello");
    res.render('index',{title:"halaman home"});

    const berita = [
        {
            judul:"Berita 1",
            isi:"isi berita 1"
        },
        {
            judul:"Berita 2",
            isi:"isi berita 2"

        },
    ];
    res.render('index',{title: 'halaman home',berita,layout:'main'});

});

// route prodi
app.get("/prodi", (req, res) =>{

    const prodis = [
    {
        "prodi"    : "Sistem Informasi",
        "fakultas" : "FIKR",
        "singkatan": "SI"
    },
    {
        "prodi"    : "Informatika",
        "fakultas" : "FIKR",
        "singkatan": "IF" 
    },
    {
        "prodi"    : "Teknik Eektro",
        "fakultas" : "FIKR",
        "singkatan": "TE" 
    },
    {
        "prodi"    : "Manajemen Informatika",
        "fakultas" : "FIKR",
        "singkatan": "MI" 
    },
    {
        "prodi"    : "Manajemen",
        "fakultas" : "FEB",
        "singkatan": "MJ" 
    },
    {
        "prodi"    : "Akuntansi",
        "fakultas" : "FEB",
        "singkatan": "AK" 
    },
];
    res.render('prodi', {title:'Program Studi', prodis,layout:'main'});
});

//route about
app.get("/about",(req,res) => {
    // res.send("about us");
    //  res.sendFile(__dirname + "/about.html");
    res.render('about');
    res.render("about",{title:'About us',layout:'main'});

});

//route contact
app.get("/contact",(req,res) => {
   // res.send("contact us");
    //  res.sendFile(__dirname + "/contact.html");
    res.render('contact',{title:'contact us',
    layout:'main'});
   
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