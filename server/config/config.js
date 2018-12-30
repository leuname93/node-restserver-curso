/* PORT */
process.env.PORT = process.env.PORT || 3000;

/* ENTORNO */
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

/* BASE DE DATOS */
let urlDB;

if(process.env.NODE_ENV === 'dev'){
    urlDB = 'mongodb://localhost:27017/cafe';
}else{
    urlDB = 'mongodb://esantiagohz:nugetmsk93@ds121674.mlab.com:21674/cafeesh';
}

process.env.URLDB = urlDB;