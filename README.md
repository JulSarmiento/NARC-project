
![Logo](https://firebasestorage.googleapis.com/v0/b/narc-e-commerce.appspot.com/o/NARC-e-commerce-logo-white.png?alt=media&token=1eae9c91-2b13-4ce9-bbc5-c33c4c936435)


# NARC E-commerce

The Ecommerce project is an API that manages an online store, allowing the administration of users with roles such as administrator, customer, and vendor. The application also provides functionalities for managing stores, products, shopping carts, and purchase orders. The project uses PostgreSQL as the database and interacts with it through the Sequelize ORM. The PostgreSQL database is hosted on the ElephantSQL platform.

## Deployed URL 

[NARC-ecommerce](https://narc-ecommerce.lat)

## Google Service Account

[Google Service Account](https://console.cloud.google.com/iam-admin/serviceaccounts/details/101832751034889941786/keys?hl=es&project=narc-e-commerce)


## Secrete Manager

[Secret Manager](https://console.cloud.google.com/security/secret-manager?hl=es&project=narc-e-commerce)

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

- **Firebase Functions**: A serverless compute platform provided by Firebase that allows you to run server-side code in response to events and HTTPS requests.

- **GitHub Actions**: A continuous integration and delivery (CI/CD) platform provided by GitHub that allows you to automate workflows and build, test, and deploy your code.

- **Namecheap**: A domain name registered and managed through Namecheap, a popular domain registrar.

These technologies were used in the project to facilitate development, database management, and the construction of a robust and secure API.


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

- `PORT_TO_USE`: designed_port
- `ENVIRONMENT`: environment_workplace

- `POSTGRES_PASSWORD`: elephant_password
- `POSTGRES_DB`: elephant_database

- `JWT_SECRET`: auth_secret


## Installation

### Clone the repository
To get started, clone the repository to your local machine using the following command:

```bash
git clone <repository-url>
```

### Install dependencies
Next, navigate to the project's root directory and install the required dependencies by running the following command:

```bash
npm install
```
### Configure environment variables 
Create a .env file in the root directory of the project and add the following environment variables to configure your database connection. Make sure to replace the values with your actual database configuration.

```shell
DB_HOST=localhost
DB_PORT=5432
DB_USER=myuser
DB_PASSWORD=mypassword
```
#### Start the server
Once the dependencies are installed and the environment variables are configured, you can start the server using the following command:

```bash
npm start
```

## Deployment

### Deployment with Firebase Functions

1. Clone the repository.
2. Install project dependencies: `npm install`.
3. Configure Firebase credentials.
4. Deploy the functions to Firebase: `firebase deploy --only functions`.

### Deployment with GitHub Actions and Firebase Functions

1. Clone the repository.
2. Create a Firebase project and obtain the credentials.
3. Configure the environment variables in GitHub Actions with the Firebase credentials.
4. Make the necessary changes in the GitHub Actions configuration file.
5. Commit and push to your GitHub repository.
6. GitHub Actions will automate the deployment of the functions to Firebase.





## Authors

- [@Julieth Sarmiento](https://github.com/JulSarmiento)

