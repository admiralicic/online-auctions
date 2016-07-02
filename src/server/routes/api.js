var express = require('express');
var router = express.Router();
var jwt = require('express-jwt');

var auth = jwt({
    secret: process.env.JWT_SECRET,
    userProperty: 'payload'
});

var authCtrl = require('../controllers/auth.controller');


router.post('/login', authCtrl.login);
router.post('/register', authCtrl.register);

// router.get('/', auth, hivesCtrl.list);
// router.post('/', auth, hivesCtrl.create);
// router.get('/:hiveId',auth, hivesCtrl.read);
// router.put('/:hiveId',auth, hivesCtrl.update);
// router.delete('/:hiveId',auth, hivesCtrl.delete);

// router.get('/:hiveId/inspections',auth, inspectionsCtrl.list);
// router.post('/:hiveId/inspections',auth, inspectionsCtrl.create);
// router.get('/:hiveId/inspections/:inspectionId',auth, inspectionsCtrl.read);
// router.put('/:hiveId/inspections/:inspectionId',auth, inspectionsCtrl.update);
// router.delete('/:hiveId/inspections/:inspectionId',auth, inspectionsCtrl.delete);

module.exports = router;