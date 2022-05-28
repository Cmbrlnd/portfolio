const path = require('path')
const express = require('express')
const hbs = require('hbs', )

const app = express()
const port = process.env.PORT || 3000

 
// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

console.log(partialsPath)

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

 
// Setup static directory to serve
app.use(express.static(publicDirectoryPath))


app.get('', (req, res) => {
  res.render('index', {
    title: 'Jesse Cumberland',
    name: 'Jesse Cumberland'
  })
})

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About Me',
    name: 'Jesse Cumberland'
  })
})

app.get('/contact', (req, res) => {
  res.render('contact', {
    title: 'Contact Me',
    name: 'Jesse Cumberland'
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})