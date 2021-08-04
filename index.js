/* const express = require('express');

const app = express();

app.use( express.static('public') );


app.listen(3000, ()=>{
    console.log(`Servidor levantado en el puerto ${ 3000 }`);
})
*/


const sum = (entrada) =>{
    if(entrada.length === 0 || entrada=== ''){
        return 0;
    }

    const arrNum = entrada.split('');
    let nums = [];

    
     //console.log(caracter);
   
   
    if(arrNum[0]==='/' && arrNum[1]==='/'){
         const caracter = entrada.charAt(2)
        entrada = entrada.replace(/\n/g, caracter)
       
         nums = entrada.split(caracter).map(n => 
            !isNaN(n) &&  n!==''
        ? parseFloat(n)
        : 0)

       // console.log(nums);

    }else{
         entrada = entrada.replace(/\n/g, ',')
          nums = entrada.split(',').map(n => parseFloat(n));
         
    }

    const negativos = nums.filter(n => n < 0)

    if (negativos.length > 0) {
        throw new Error(`Negativos no permitidos: ${negativos[0]}`)
    }
   
    let suma = 0;

    for (let i = 0; i < nums.length; i++) {
        suma += nums[i];    
    }

    return suma
}

module.exports = {
    sum
}