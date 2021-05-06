const express = require('express')
const saveDataController = require('../controllers/saveDataController')
const getDataController = require('../controllers/getDataController')
const deleteDataController = require('../controllers/deleteDataController')
const router = express.Router()
const cors = require('cors')


router.use(express.json({ type: 'application/json' }))

router.post('/save', cors() ,saveDataController)
router.post('/delete',cors(), deleteDataController)
router.get('/', cors(), getDataController)


module.exports = router