import { createServer } from 'node:http'
import { readFile } from 'node:fs/promises'

const routes = async (req, res) => {
  const { method, url } = req
  // console.log('Request: ', url)

  // Check the method
  if (method === 'GET') {
    // Set the content type to HTML
    res.setHeader('Content-Type', 'html')
    // Check the URL
    switch (url) {
      // Respose index to the root path
      case '/': {
        // Set code success
        res.statusCode = 200
        // Send information to the body
        const app = await readFile('../../index.html', 'utf-8')
        res.write(app)
        // End the response and send it to the client
        res.end()
        break
      }
      // Set 404
      default: {
        res.statusCode = 404
        res.end('<h1>404 Not Found</h1>')
        break
      }
    }
    return
  }

  // Response 404 to any other path
  res.statusCode = 404
  res.end('Error 404')
}

const server = createServer(routes)

// Get port from the environment or use default port
const port = process.env.PORT ?? 3000
// Start the server
server.listen(port, () => {
  console.log(`Server is running on: http://localhost:${server.address().port}`)
})
