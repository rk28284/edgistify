
<body>
  <h1>Cart Management API</h1>
  <p>This project provides a simple API to manage a user's shopping cart. It allows adding products to the cart, checking stock availability, and ensuring proper user authentication with JWT tokens.</p>

  <h2>Features</h2>
  <ul>
    <li>Add products to the cart</li>
    <li>Check stock availability before adding to the cart</li>
    <li>JWT-based user authentication</li>
    <li>Frontend built with Angular 15</li>
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

  <h2>Installation</h2>
  <p>Follow the steps below to set up the project:</p>
  <pre><code>git clone https://github.com/your-repo/cart-management-api.git
cd cart-management-api
npm install</code></pre>

  <h2>Environment Variables</h2>
  <p>Create a <code>.env</code> file in the root directory and set the following variables:</p>
  <pre><code>key=YOUR_JWT_SECRET_KEY</code></pre>

  <h2>Usage</h2>
  <p>Start the server with the following command:</p>
  <pre><code>npm start</code></pre>

  <h3>Adding a Product to the Cart</h3>
  <p>Send a POST request to <code>/api/cart/add</code> with the following format:</p>
  <pre><code>{
  "name": "Product Name",
  "stock": 1
}</code></pre>

  <p>Include the <code>Authorization</code> header with a valid JWT token:</p>
  <pre><code>Authorization: Bearer YOUR_JWT_TOKEN</code></pre>

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

