# Backend

## Awesome Project Build with TypeORM

## Routes for Api

- url -> `"http://localhost:3000/"`

# Routes Auth

- Post SignUp -> `"/api/signup"`
- Post SignIn -> `"/api/signin"`

# Routes User

- PUT Profile -> `"api/profile/:id"` -> Id must UserId
- PUT User -> `"/api/users/:id"` -> Id must UserId
- GET Profle -> `"api/profile/:id"` -> Id must UserId
- DELETE User with Profile-> `"api/users/:id"` -> Id must ProfileId
- GET Users -> `"api/users"`

# Routes Category

- GET Categorys-> `"/api/category"`
- POST Category-> `"/api/category"`

# Routes Products

- GET Products With Category -> `"api/category/:id"` -> Id must categoryId
- GET Products -> `"/api/products"`
- GET Product -> `"/api/products/:id" ` -> Id must productId
- POST Products -> `"/api/products"`
- PUT Product -> `"/api/products/:id"` -> Not Change Category, alone Change Product, Change Category DELETE Product, Create new Product.
- DELETE Products -> `"/api/products/:id"` -> Id must Product productId

Steps to run this project:

1. Run `npm i` command
2. Run `docker-compose up` command
3. Run `npm start` command
