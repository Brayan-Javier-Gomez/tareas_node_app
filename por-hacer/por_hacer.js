const fs = require('fs');
let Por_Hacer = [];

const leerDB = () => {

    try {
        Por_Hacer = require('../db/data.json');
    } catch (error) {
        Por_Hacer = [];
    }

}

const almacenarDB = () => {
    let data = JSON.stringify(Por_Hacer);
    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('no se pudo grabar', err);
    });
};




const crear = (descripcion) => {
    leerDB();

    let por_hacer = {
        descripcion,
        completado: false
    }

    Por_Hacer.push(por_hacer);
    almacenarDB();
    return por_hacer;
}

const getLista = () => {
    leerDB();


    return Por_Hacer;

}

const update = (descripcion, completado = true) => {
    leerDB();
    let index = Por_Hacer.findIndex(tarea => tarea.descripcion === descripcion)

    if (index >= 0) {
        Por_Hacer[index].completado = completado;
        almacenarDB();
        return true;

    } else {
        return false
    }
}


const borrar = (descripcion) => {
    leerDB();
    const nuevoListado = Por_Hacer.filter(tarea => {
        return tarea.descripcion !== descripcion;
    })
    if (Por_Hacer.length == nuevoListado.length) {
        console.log(Por_Hacer);
        return false;

    } else {
        Por_Hacer = nuevoListado;
        console.log(Por_Hacer);
        almacenarDB;
        return true;
    }



}

module.exports = {
    crear,
    getLista,
    update,
    borrar
};