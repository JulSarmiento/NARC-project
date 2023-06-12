
![Logo](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/th5xamgrr6se0x5ro4g6.png)


# NARC E-commerce

The Ecommerce project is an API that manages an online store, allowing the administration of users with roles such as administrator, customer, and vendor. The application also provides functionalities for managing stores, products, shopping carts, and purchase orders. The project uses PostgreSQL as the database and interacts with it through the Sequelize ORM. The PostgreSQL database is hosted on the ElephantSQL platform.



## Authors

- [@Julieth Sarmiento](https://github.com/JulSarmiento)


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


    
## API Reference

### Users

#### Get all Users
```http
  GET /users
```

|      Class    | Parameter |       Type     | Description                |
|---------------| :-------- | :------------- | :------------------------- |
|`Authorization`|           | `Bearer Token` | **Required**               |


#### Get item
```http
  GET /users/${id}
```

|      Class    | Parameter |       Type     | Description                |
|---------------| :-------- | :------------- | :------------------------- |
|`Authorization`|           | `Bearer Token` | **Required**               |
|`param`        | `userId`  | `Bearer Token` | **Required**               |


#### Create User
```http
  POST /users
```

|      Class    |   Parameter   |       Type     | Description                |
|---------------| :------------ | :------------- | :------------------------- |
|`body`         | `dni`         | `String`       | **Required**               |
|`body`         | `name`        | `String`       | **Required**               |
|`body`         | `lastname`    | `String`       | **Required**               |
|`body`         | `email`       | `String`       | **Required**               |
|`body`         | `birthdate`   | `Date`         | **Required**               |
|`body`         | `password`    | `String`       | **Required**               |
|`body`         | `phone`       | `String`       | **Required**               |
|`body`         | `address`     | `String`       | **Required**               |
|`body`         | `role`        | `String`       | **Required**               |
|`body`         | `active`      | `Boolean`      | **Required**               |

#### Update User
```http
  PATCH /users/:id
```

|      Class    |   Parameter   |       Type     | Description                |
|---------------| :------------ | :------------- | :------------------------- |
|`Authorization`|               | `Bearer Token` | **Required**               |
|`body`         | `dni`         | `String`       | **Optional**               |
|`body`         | `name`        | `String`       | **Optional**               |
|`body`         | `lastname`    | `String`       | **Optional**               |
|`body`         | `email`       | `String`       | **Optional**               |
|`body`         | `birthdate`   | `Date`         | **Optional**               |
|`body`         | `password`    | `String`       | **Optional**               |
|`body`         | `phone`       | `String`       | **Optional**               |
|`body`         | `address`     | `String`       | **Optional**               |
|`body`         | `role`        | `String`       | **Optional**               |
|`body`         | `active`      | `Boolean`      | **Optional**               |

#### Delete User
```http
  PATCH /users/:id
```

|      Class    |   Parameter   |       Type     | Description                |
|---------------| :------------ | :------------- | :------------------------- |
|`Authorization`|               | `Bearer Token` | **Required**               |
|`param`        | `userId`      | `Bearer Token` | **Required**               |

