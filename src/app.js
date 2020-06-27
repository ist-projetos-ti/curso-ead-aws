const express = require ('express')
const routes = require ('./routes')
const awsIot = require('aws-iot-device-sdk')
const controller = require ('./controllers/controller')

const device = awsIot.device({
    keyPath: 'seu-certificado.key',
   certPath: 'seu-certificado.pem',
     caPath: 'rootCA.pem',
   clientId: 'seu-nome-de-iot',
       host: 'nome-host-iot-core'
 });

 device.on('connect', function() {
   console.log('connected');
   device.subscribe('nome-topico-iot-core');
 });

device.on('message', function(topic, payload) {
   console.log('message', topic, payload.toString());
   controller.registry(payload.toString())
});

const app = express();
app.use(routes);

app.listen (3334, () => console.log ('Servidor rodando'))