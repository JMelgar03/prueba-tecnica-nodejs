
const {nombreUsuario} = require('../index');

describe('Pruebas de ejemplo en index.js', () => {

    test('Prueba en nombreUsuario debe ser Jonathan', () => {

        const nombre = 'Jonathan';

        const nombre2 = nombreUsuario();

        expect(nombre2).toBe(nombre);
    
    })
    
})



