
![Logo](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/th5xamgrr6se0x5ro4g6.png)


# NARC E-commerce

The Ecommerce project is an API that manages an online store, allowing the administration of users with roles such as administrator, customer, and vendor. The application also provides functionalities for managing stores, products, shopping carts, and purchase orders. The project uses PostgreSQL as the database and interacts with it through the Sequelize ORM. The PostgreSQL database is hosted on the ElephantSQL platform.

## Technologies Used

- **dotenv**: A library that loads environment variables from a `.env` file to facilitate the configuration of variables in the development environment.

- **express**: A Node.js framework that provides a flexible and lightweight structure for building web applications and APIs.

- **http-status**: A module that provides a comprehensive list of HTTP status codes and their corresponding messages.

- **joi**: A data validation library for JavaScript that makes it easy to validate user input, such as request parameters.

- **jsonwebtoken**: An implementation of JSON Web Tokens (JWT) for Node.js, allowing the generation and verification of authentication tokens.

- **morgan**: A middleware for logging HTTP requests on the server, providing detailed information about each incoming request.

- **nodemon**: A tool that automatically restarts the server when it detects changes in files, facilitating real-time development.

- **pg**: A PostgreSQL client for Node.js that enables interaction with a PostgreSQL database.

- **pg-hstore**: A package that provides support for storing hstore data in PostgreSQL.

- **sequelize**: A Node.js ORM (Object-Relational Mapping) that simplifies database interaction through models and queries.

- **@types/express**: Type definitions for Express.js, providing typing support for building Express applications in TypeScript.

These technologies were used in the project to facilitate development, database management, and the construction of a robust and secure API.

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

- `PORT`: designed_port
- `ENVIRONMENT`: environment_workplace


- `POSTGRES_PASSWORD`: elephant_password
- `POSTGRES_DB`: elephant_database

- `JWT_SECRET`: auth_secret


## Installation

### Clone the repository
```bash
git clone <repository-url>
```

### Install dependencies
```bash
npm install
```
### Configure environment variables creating a .env file in the root directory and add this environment variables.
```shell
DB_HOST=localhost
DB_PORT=5432
DB_USER=myuser
DB_PASSWORD=mypassword
```
#### Start the server
```bash
npm start
```

## Deployment

To deploy this project run

```bash
  npm run deploy
```


## API Reference

### Users

#### Get all Users
```http
  GET /users
```

|      Class    | Parameter         |       Type     | Description                |
|---------------| :---------------- | :------------- | :------------------------- |
|`Authorization`|                   | `Bearer Token` | **Required**               |


#### Get a User
```http
  GET /users/${id}
```

|      Class    | Parameter         |       Type     | Description                |
|---------------| :---------------- | :------------- | :------------------------- |
|`Authorization`|                   | `Bearer Token` | **Required**               |
|`param`        | `userId`          | `uuid`         | **Required**               |


#### Create User
```http
  POST /users
```

|      Class    |   Parameter       |       Type     | Description                |
|---------------| :---------------- | :------------- | :------------------------- |
|`body`         | `dni`             | `String`       | **Required**               |
|`body`         | `name`            | `String`       | **Required**               |
|`body`         | `lastname`        | `String`       | **Required**               |
|`body`         | `email`           | `String`       | **Required**               |
|`body`         | `birthdate`       | `Date`         | **Required**               |
|`body`         | `password`        | `String`       | **Required**               |
|`body`         | `phone`           | `String`       | **Required**               |
|`body`         | `address`         | `String`       | **Required**               |
|`body`         | `role`            | `String`       | **Required**               |
|`body`         | `active`          | `Boolean`      | **Required**               |

#### Update User
```http
  PATCH /users/:id
```

|      Class    |   Parameter       |       Type     | Description                |
|---------------| :---------------- | :------------- | :------------------------- |
|`Authorization`|                   | `Bearer Token` | **Required**               |
|`param`        | `userId`          | `uuid`         | **Required**               |
|`body`         | `dni`             | `String`       | **Optional**               |
|`body`         | `name`            | `String`       | **Optional**               |
|`body`         | `lastname`        | `String`       | **Optional**               |
|`body`         | `email`           | `String`       | **Optional**               |
|`body`         | `birthdate`       | `Date`         | **Optional**               |
|`body`         | `password`        | `String`       | **Optional**               |
|`body`         | `phone`           | `String`       | **Optional**               |
|`body`         | `address`         | `String`       | **Optional**               |
|`body`         | `role`            | `String`       | **Optional**               |
|`body`         | `active`          | `Boolean`      | **Optional**               |

#### Delete User
```http
  DELETE /users/:id
```

|      Class    |   Parameter       |       Type     | Description                |
|---------------| :---------------- | :------------- | :------------------------- |
|`Authorization`|                   | `Bearer Token` | **Required**               |
|`param`        | `userId`          | `uuid`         | **Required**               |


### Stores

#### Get all Stores
```http
  GET /stores
```

|      Class    |   Parameter       |       Type     | Description                |
|---------------| :---------------- | :------------- | :------------------------- |
|`Authorization`|                   | `Bearer Token` | **Required**               |


#### Get Store
```http
  GET /stores/:id 
```

|      Class    |   Parameter       |       Type     | Description                |
|---------------| :---------------- | :------------- | :------------------------- |
|`Authorization`|                   | `Bearer Token` | **Required**               |
|`param`        | `storeId`         | `uuid`         | **Required**               |


#### Create Store
```http
  POST /stores
```

|      Class    |   Parameter       |       Type     | Description                |
|---------------| :---------------- | :------------- | :------------------------- |
|`Authorization`|                   | `Bearer Token` | **Required**               |
|`body`         | `name`            | `String`       | **Required**               |
|`body`         | `image`           | `String`       | **Required**               |
|`body`         | `categoryId`      | `String`       | **Required**               |


#### Update Store
```http
  PATCH /stores/:id
```

|      Class    |   Parameter       |       Type     | Description                |
|---------------| :---------------- | :------------- | :------------------------- |
|`Authorization`|                   | `Bearer Token` | **Required**               |
|`param`        | `storeId`         | `uuid`         | **Required**               |
|`body`         | `name`            | `String`       | **Optional**               |
|`body`         | `image`           | `String`       | **Optional**               |
|`body`         | `categoryId`      | `String`       | **Optional**               |

#### Delete Store
```http
  DELETE /stores/:id
```

|      Class    |   Parameter       |       Type     | Description                |
|---------------| :---------------- | :------------- | :------------------------- |
|`Authorization`|                   | `Bearer Token` | **Required**               |
|`param`        | `storeId`         | `uuid`         | **Required**               |


### Products

#### Get all Products
```http
  GET /stores/:storeId/products
```

|      Class    |   Parameter       |       Type     | Description                |
|---------------| :---------------- | :------------- | :------------------------- |
|`Authorization`|                   | `Bearer Token` | **Required**               |


#### Get a Product
```http
  GET /stores/:storeId/products/:id
```

|      Class    |   Parameter       |       Type     | Description                |
|---------------| :---------------- | :------------- | :------------------------- |
|`Authorization`|                   | `Bearer Token` | **Required**               |
|`param`        | `productId`       | `uuid`         | **Required**               |


#### Create a Product
```http
  POST /stores/:Id/products
```

|      Class    |   Parameter       |       Type     | Description                |
|---------------| :---------------- | :------------- | :------------------------- |
|`Authorization`|                   | `Bearer Token` | **Required**               |
|`param`        | `storeId`         | `uuid`         | **Required**               |
|`body`         | `name`            | `String`       | **Required**               |
|`body`         | `description`     | `String`       | **Required**               |
|`body`         | `price`           | `Number`       | **Required**               |
|`body`         | `stock`           | `Number`       | **Required**               |
|`body`         | `image`           | `String`       | **Required**               |
|`body`         | `storeId`         | `uuid`         | **Required**               |
|`body`         | `subcategoryId`   | `uuid`         | **Required**               |


#### Update a Product
```http
  PATCH /stores/:id/products/:id
```

|      Class    |   Parameter       |       Type     | Description                |
|---------------| :---------------- | :------------- | :------------------------- |
|`Authorization`|                   | `Bearer Token` | **Required**               |
|`param`        | `storeId`         | `uuid`         | **Required**               |
|`param`        | `productId`       | `uuid`         | **Required**               |
|`body`         | `name`            | `String`       | **Optional**               |
|`body`         | `description`     | `String`       | **Optional**               |
|`body`         | `price`           | `Number`       | **Optional**               |
|`body`         | `stock`           | `Number`       | **Optional**               |
|`body`         | `image`           | `String`       | **Optional**               |
|`body`         | `storeId`         | `uuid`         | **Optional**               |
|`body`         | `subcategoryId`   | `uuid`         | **Optional**               |

#### Delete Store
```http
  DELETE /stores/:id/products/:id
```

|      Class    |   Parameter       |       Type     | Description                |
|---------------| :---------------- | :------------- | :------------------------- |
|`Authorization`|                   | `Bearer Token` | **Required**               |
|`param`        | `storeId`         | `uuid`         | **Required**               |
|`param`        | `productId`       | `uuid`         | **Required**               |


### Categories

#### Get all Categories
```http
  GET /categories
```

|      Class    |    Parameter      |       Type     | Description                |
|---------------| :---------------- | :------------- | :------------------------- |
|`Authorization`|                   | `Bearer Token` | **Required**               |


#### Get a Category
```http
  GET /categories/:id
```

|      Class    | Parameter         |       Type     | Description                |
|---------------| :---------------- | :------------- | :------------------------- |
|`Authorization`|                   | `Bearer Token` | **Required**               |
|`param`        | `categoryid`      | `uuid`         | **Required**               |


#### Create a Category
```http
  POST /categories
```

|      Class    |   Parameter       |       Type     | Description                |
|---------------| :---------------- | :------------- | :------------------------- |
|`Authorization`|                   | `Bearer Token` | **Required**               |
|`body`         | `name`            | `String`       | **Required**               |


#### Update a Category
```http
  PATCH /categories/:id
```

|      Class    |   Parameter       |       Type     | Description                |
|---------------| :---------------- | :------------- | :------------------------- |
|`Authorization`|                   | `Bearer Token` | **Required**               |
|`param`        | `categoryId`      | `uuid`         | **Required**               |
|`body`         | `name`            | `String`       | **Optional**               |


#### Delete a Category
```http
  DELETE /categories/:id
```

|      Class    |   Parameter       |       Type     | Description                |
|---------------| :---------------- | :------------- | :------------------------- |
|`Authorization`|                   | `Bearer Token` | **Required**               |
|`param`        | `categoryId`      | `uuid`         | **Required**               |


### Subcategories

#### Get all Subcategories
```http
  GET /categories/subcategories
```

|      Class    |   Parameter       |       Type     | Description                |
|---------------| :---------------- | :------------- | :------------------------- |
|`Authorization`|                   | `Bearer Token` | **Required**               |



#### Create a Subcategory
```http
  POST /categories/subcategories
```

|      Class    |   Parameter       |       Type     | Description                |
|---------------| :---------------- | :------------- | :------------------------- |
|`Authorization`|                   | `Bearer Token` | **Required**               |
|`body`         | `name`            | `String`       | **Required**               |
|`body`         | `categoryId`      | `uuid`         | **Required**               |


#### Update a Subcategory
```http
  PATCH /categories/subcategories/:id
```

|      Class    |   Parameter       |       Type     | Description                |
|---------------| :---------------- | :------------- | :------------------------- |
|`Authorization`|                   | `Bearer Token` | **Required**               |
|`param`        | `subcategoryId`   | `uuid`         | **Required**               |
|`body`         | `name`            | `String`       | **Optional**               |


#### Delete a Subcategory
```http
  DELETE /categories/subcategories/:id
```

|      Class    |   Parameter       |       Type     | Description                |
|---------------| :---------------- | :------------- | :------------------------- |
|`Authorization`|                   | `Bearer Token` | **Required**               |
|`param`        | `subcategoryId`   | `uuid`         | **Required**               |


### Orders

#### Get all Order from a Store
```http
  GET /stores/:storeId/orders
```

|      Class    |   Parameter       |       Type     | Description                |
|---------------| :---------------- | :------------- | :------------------------- |
|`Authorization`|                   | `Bearer Token` | **Required**               |


#### Get a Order by a Store from a User
```http
  GET /stores/:storeId/orders/:id
```

|      Class    |   Parameter       |       Type     | Description                |
|---------------| :---------------- | :------------- | :------------------------- |
|`Authorization`|                   | `Bearer Token` | **Required**               |
|`param`        | `storeId`         | `uuid`         | **Required**               |
|`param`        | `orderId`         | `uuid`         | **Required**               |
|`query`        | `userId`          | `uuid`         | **Required**               |


#### Create a Order
```http
  POST /stores/:storeId/orders
```

|      Class    |   Parameter       |       Type     | Description                |
|---------------| :---------------- | :------------- | :------------------------- |
|`Authorization`|                   | `Bearer Token` | **Required**               |
|`param`        | `storeId`         | `uuid`         | **Required**               |
|`query`        | `userId`          | `uuid`         | **Required**               |
|`body`         | `coupon`          | `Number`       | **Optional**               |
|`body`         | `details`         | `String`       | **Required**               |
|`body`         | `status`          | `String`       | **Optional**               |
|`body`         | `deliveryAddress` | `String`       | **Optional**               |
|`body`         | `paymentMethod`   | `String`       | **Optional**               |




## Authors

- [@Julieth Sarmiento](https://github.com/JulSarmiento)

