import path from 'node:path'
import express from 'express'
const app = express()

// Create midelware to any request
app.use((req, res, next) => {
  console.log('Hello from middleware')
  next()
})

// Handle GET requests
app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>')
})

// Handle index.html
app.get('/html', (req, res) => {
  res.sendFile('index.html', { root: path.resolve() }, (err) => {
    if (err) {
      res.status(500).send('Internal Server Error')
    }
  })
})

// Handle 404 errors
// This should always be the last route
app.use((req, res) => {
  res.status(404).send('<h1>Not Found</h1>')
})

// Start the server
const port = process.env.port || 3000
app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`)
})
