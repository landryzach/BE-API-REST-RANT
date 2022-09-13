const router = require('express').Router()

router.get('/', (req,res) => {
    res.send('GET /places')
})

router.get('/new', (req, res) => {
  res.render('places/new')
})

router.post('/', (req, res) => {
  console.log(req.body)
  res.send('POST /places')
})

// GET /places
app.get('/', (req, res) => {  
      res.render('places/index', { places })
  })   

module.exports = router