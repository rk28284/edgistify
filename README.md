<body>
  <h1>Cart Management API</h1>
  <p>This project provides a simple API to manage a user's shopping cart. It allows adding products to the cart, checking stock availability, placing orders, and ensuring proper user authentication with JWT tokens.</p>

  <h2>Features</h2>
  <ul>
    <li>Frontend built with Angular 15</li>
    <li>User registration and login</li>
    <li>Add products to the cart</li>
    <li>Check stock availability before adding to the cart</li>
    <li>Place orders</li>
    <li>Get all products and fetch individual products by ID</li>
    <li>JWT-based user authentication</li>
  
  </ul>

  <h2>Frontend</h2>
  <p>The frontend is built using the following technologies:</p>
  <ul>
    <li><strong>Angular 15</strong> - A popular framework for building web applications</li>
    <li><strong>Bootstrap 5</strong> - A CSS framework for responsive design</li>
    <li><strong>TypeScript</strong> - Superset of JavaScript for enhanced development</li>
    <li><strong>HTML</strong> - Markup language for web pages</li>
    <li><strong>CSS</strong> - Styling language for web design</li>
    <li><strong>JavaScript</strong> - Programming language for dynamic web content</li>
  </ul>

  <h2>Backend Routes</h2>
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

  <h2>Installation</h2>
  <p>Follow the steps below to set up the project:</p>
  <pre><code>git clone https://github.com/rk28284/edgistify.git
cd cart-management-api
npm install</code></pre>

  <h2>Environment Variables</h2>
  <p>Create a <code>.env</code> file in the root directory and set the following variables:</p>
  <pre><code>key=YOUR_JWT_SECRET_KEY</code></pre>

  <h2>Usage</h2>
  <p>Start the server with the following command:</p>
  <pre><code>npm start</code></pre>

  <h2>Middleware</h2>
  <p>The authentication middleware ensures that only authenticated users can access the API. It extracts the user ID from the JWT token and attaches it to the request object.</p>

  <h2>Dependencies</h2>
  <ul>
    <li><code>express</code> - Web framework for Node.js</li>
    <li><code>jsonwebtoken</code> - For JWT token generation and verification</li>
    <li><code>mongoose</code> - MongoDB object modeling for Node.js</li>
    <li><code>dotenv</code> - Loads environment variables from a <code>.env</code> file</li>
  </ul>

 
</body>

