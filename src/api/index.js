const express = require('express');

const emojis = require('./emojis');

const router = express.Router();
const NosisMockupController = require('../Controllers/NosisMockupController');
const CrmBancoMockup = require('../Controllers/CrmBancoMockupController');
//whatsapp
const WhatsappMockupController = require('../Controllers/WhatsappMockupController');
const middlewares = require('../middlewares');


router.get('/', (req, res) => {
  res.json({
    message: 'API - 👋🌎🌍🌏',
  });
});

router.get('/alive', NosisMockupController.alive);
//Nosis
router.post('/login',NosisMockupController.login);
router.post('/validacion-nosis',NosisMockupController.validacionNosis);
router.post('/evaluacion-nosis',NosisMockupController.evaluacionNosis);
//Crm banco
//router.post('/login',NosisMockupController.login);
//orden de los parametros (path url,middleware,funcion)
// router.post('/get-status-case',middlewares.notFoundToken,CrmBancoMockup.statusCase);
// router.post('/get-case-dni',middlewares.notFoundToken,CrmBancoMockup.getCaseDni);

router.post('/get-status-case',CrmBancoMockup.statusCase);
router.post('/get-case-dni',CrmBancoMockup.getCaseDni);
//whatsapp
//router.post('/get-files',WhatsappMockupController.evaluacionNosis);
router.post('/whatsapp-mockup', WhatsappMockupController.aliveWhatsapp);
router.post('/guiasdeasesoramiento', WhatsappMockupController.guiasDeAsesoramiento);
router.post('/productos', WhatsappMockupController.Productos);
router.post('/opciones', WhatsappMockupController.opciones);
//ruta nueva donde un solo endpoint debe hacer todo mockupGuias
router.post('/nodes', WhatsappMockupController.nodes);
router.get('/nodes', WhatsappMockupController.nodes);

router.use('/emojis', emojis);

module.exports = router;


