// Se importa el módulo http de Node.js
const http = require('http');
// Se importa chalk de manera síncrona
const chalk = require('chalk');

// Se definen las constantes para el host y el puerto
const host = 'localhost';
const puerto = 8000; // 8080, 3000

// Se crea un listener para el servidor
const servidor = http.createServer((req, res) => {
  // Configuración de las respuestas de HTTP
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Creación del objeto JSON con tu nombre y un mensaje
  const respuesta = {
    nombre: 'Santiago',
    mensaje: 'Hola, este es un servidor.'
  };

  // Envío de la respuesta en formato JSON
  res.end(JSON.stringify(respuesta));
});

// Se levanta el servidor y se muestra un mensaje en verde con chalk
servidor.listen(puerto, host, () => {
  console.log(chalk.green(`Servidor escuchando en http://${host}:${puerto}`));
});
