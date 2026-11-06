# MERN E-commerce App --- Feature & Technology Checklist

## 1. Core customer features

- [ ] Sign up, login, logout, email verification and password reset
- [ ] User profile, addresses and account settings
- [ ] Product catalogue with categories, brands, variants and stock
- [ ] Product search, filters, sorting and pagination
- [ ] Product details, image gallery, reviews and ratings
- [ ] Wishlist and recently viewed products
- [ ] Shopping cart with quantity and price updates
- [ ] Checkout, address selection, shipping and order summary
- [ ] Payments: UPI, cards, net banking, wallets and Cash on Delivery
- [ ] Order placement, tracking, history, cancellation and returns
- [ ] Coupons, discounts, offers and tax/shipping calculation
- [ ] Email/SMS notifications and customer support

## 2. Admin features

- [ ] Admin login with role-based permissions
- [ ] Dashboard: sales, orders, revenue and customers
- [ ] Product, category, brand and inventory management
- [ ] Order processing, shipment and refund management
- [ ] Customer and review moderation
- [ ] Coupon, banner and homepage content management
- [ ] Reports, analytics and audit logs

## 3. MERN stack and recommended npm packages

---

Layer Technology / packages Purpose

---

Frontend React, Vite, TypeScript UI and
development/build
tooling

Routing `react-router` Client-side navigation

Styling `tailwindcss`, Responsive UI and icons
`shadcn/ui`,
`lucide-react`

UI motion `framer-motion` (or Animations
current Motion package)

Server state `@tanstack/react-query` API caching and
mutations

Forms `react-hook-form`, `zod`, Form handling and
`@hookform/resolvers` validation

HTTP `axios` (or native API requests
`fetch`)

Backend Node.js, Express REST API and server

Database MongoDB, Mongoose Data storage and
modelling

Authentication `jsonwebtoken`, Token handling and
`bcryptjs` password hashing

Security `helmet`, `cors`, HTTP headers,
`express-rate-limit` cross-origin policy and
rate limiting

Validation `zod` Validate request data

Uploads `multer`, Cloudinary SDK Product images and
media

Email `nodemailer` Transactional email

Logging `pino` or `winston` Application logs

Testing `vitest`, `supertest`, Unit, API and
`playwright` end-to-end tests

API docs `swagger-ui-express`, OpenAPI documentation
`swagger-jsdoc`

Deployment Vercel, Render/Railway, Hosting and managed
MongoDB Atlas database
-------------------------------------------------------------------------

_Choose compatible package versions and check each package's current
documentation before installation. Avoid adding every package at once._

## 4. Protocols, standards and integrations

- [ ] **HTTPS/TLS** for all production traffic
- [ ] **REST over HTTP** for frontend-to-backend APIs
- [ ] **JSON** for request and response payloads
- [ ] **HTTP methods/status codes**: GET, POST, PATCH, DELETE; 2xx,
      4xx and 5xx
- [ ] **JWT or secure server sessions**; prefer HttpOnly, Secure,
      SameSite cookies where suitable
- [ ] **OAuth 2.0 / OpenID Connect** only if adding Google or other
      social sign-in
- [ ] **Webhook signatures** to verify payment-provider callbacks
- [ ] **Payment gateway integration** (e.g. Razorpay or Stripe); never
      store raw card details
- [ ] **SMTP or email provider API** for transactional emails
- [ ] **OpenAPI** to document and test API contracts

## 5. Essential quality and security checklist

- [ ] Enforce server-side validation; never trust frontend prices,
      roles or stock values
- [ ] Store secrets in environment variables; never commit `.env`
- [ ] Use least-privilege admin roles and authorization checks on
      every protected API
- [ ] Hash passwords; never store plain-text passwords
- [ ] Recalculate totals, discounts, taxes and shipping on the server
- [ ] Prevent overselling with atomic stock updates / transactions
      where appropriate
- [ ] Verify payment webhooks and make payment/order operations
      idempotent
- [ ] Add rate limits, input sanitization, secure headers and CORS
      allowlists
- [ ] Back up the database and monitor errors, logs and uptime
- [ ] Test checkout, payment failure, refunds, stock conflicts and
      access control

## 6. Suggested build order

- [ ] 1. Project structure, environment setup and database connection
- [ ] 2. Authentication, users and roles
- [ ] 3. Product catalogue, search and admin product management
- [ ] 4. Cart and wishlist
- [ ] 5. Checkout, shipping, tax and payment integration
- [ ] 6. Orders, tracking, cancellations and returns
- [ ] 7. Admin dashboard, coupons and analytics
- [ ] 8. Testing, security review and deployment

**MVP recommendation:** Start with authentication, product
catalogue/search, cart, checkout, one payment gateway, order history and
a basic admin dashboard. Add reviews, recommendations, loyalty points
and advanced analytics later.
