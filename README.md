
 

<body>
  <h1>Cart Management API</h1>

  <h2>Introduction</h2>
  <p>This project provides a simple API to manage a user's shopping cart. It allows adding products to the cart, checking stock availability, placing orders, and ensuring proper user authentication with JWT tokens.</p>

  <h2>Project Type</h2>
  <p>Fullstack Project</p>

  <h2>Deployed App</h2>
  <ul>
    <li>Client: <a href="https://famous-truffle-3c86fe.netlify.app/" target="_blank">https://famous-truffle-3c86fe.netlify.app/</a></li>
    <li>Server: <a href="https://edgistify-backend-v5ep.onrender.com" target="_blank">https://edgistify-backend-v5ep.onrender.com</a></li>
  </ul>

  <h2>Directory Structure</h2>
  <pre>
edgistify/
├─ server/
├─ client/

  </pre>

  <h2>Features</h2>
  <ul>
    <li>User registration and login</li>
    <li>Add products to the cart</li>
    <li>Check stock availability before adding to the cart</li>
    <li>Place orders</li>
    <li>Get all products and fetch individual products by ID</li>
    <li>JWT-based user authentication</li>
  </ul>

  <h2>Design Decisions and Assumptions</h2>
  <ul>
    <li>JWT is used for authentication to secure user actions.</li>
    <li>Stock availability is checked before adding items to the cart.</li>
    <li>Products are stored in a MongoDB database.</li>
  </ul>

  <h2>Installation & Getting Started</h2>
  <p>Follow these steps to install and get the project running:</p>
  <pre>
cd client
npm install 
npm start
  </pre>

  <h2>Usage</h2>
  <p>Provide instructions and examples on how to use your project:</p>
  <pre>
# Example usage
npm run start
  </pre>

  <h2>Credentials</h2>
  <p>Provide user credentials for authenticated pages:</p>
  <p><strong>Email:</strong> rk28284@gmail.com<br><strong>Password:</strong> 12345678</p>

  <h2>APIs Used</h2>
  <p>No external APIs were used in this project.</p>

  <h2>API Endpoints</h2>
  <p>List of API endpoints:</p>
  <h3>User Routes</h3>
  <ul>
    <li><code>POST /register</code> - Register a new user</li>
    <li><code>POST /login</code> - Login a user</li>
  </ul>

  <h3>Cart Routes</h3>
  <ul>
    <li><code>POST /add-to-cart</code> - Add a product to the user's cart (requires authentication)</li>
  </ul>

  <h3>Order Routes</h3>
  <ul>
    <li><code>POST /place</code> - Place an order (requires authentication)</li>
  </ul>

  <h3>Product Routes</h3>
  <ul>
    <li><code>GET /product</code> - Get all products</li>
    <li><code>GET /product/:id</code> - Get a single product by its ID</li>
    <li><code>POST /product/add</code> - Add a new product</li>
  </ul>

  <h2>Technology Stack</h2>
  <ul>
    <li><strong>Frontend:</strong> Angular 15, Bootstrap 5, TypeScript, HTML, CSS, JavaScript</li>
    <li><strong>Backend:</strong> Node.js, Express.js</li>
    <li><strong>Database:</strong> MongoDB</li>
    <li><strong>Authentication:</strong> JWT</li>
    <li>Other libraries/modules: dotenv, mongoose, jsonwebtoken</li>
  </ul>

  <h2>License</h2>
  <p>This project is licensed under the MIT License.</p>
</body>

