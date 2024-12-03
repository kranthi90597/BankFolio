# BankFolio
A comprehensive banking system with role-based access control for Admins and Customers, built using React (Frontend), Spring Boot (Backend), and MySQL (Database). The system includes features like account management, secure authentication, and role-specific functionalities.

## Project Description
The Bank Application allows administrators to manage customer accounts, handle transactions, and perform critical operations while providing customers with secure and easy access to their account details.

Key highlights include:
- Secure Random Password Generation for authentication.
- Role-Based Access Control to differentiate Admin and Customer responsibilities.
- Scalable backend powered by Spring Boot and a user-friendly frontend using React.

## Features
### Authentication
- Random password generation during account creation.
- Login system for Admin and Customer roles.
- Secure storage of passwords in the database.

### Authorization
- Role-based access:
  - Admin: Manage accounts, perform transactions, and view all balances.
  - Customer: View balances, check transaction history, and perform basic operations.
- Restricted frontend routes and backend API calls based on user roles.
### Admin Features
- Admin Dashboard to manage user accounts.
- View all user balances and transaction history.
- Add, update, and delete customer accounts.
### Customer Features
- Secure login with random passwords.
- View account balance and transaction history.

## Technologies Used
### Frontend
- React.js
- HTML5, CSS3
- Axios (for API calls)
### Backend
- Spring Boot
- RESTful APIs with role-based authorization
- Random password generation and secure data handling
### Database
- MySQL (Relational Database)
- Tables for user accounts and transactions

## Setup and Installation
### 1. Prerequisites
- Node.js: Install Node.js, which is required for both React and the management of packages using npm (Node Package Manager).
- Java: Install Java for running Spring Boot.
- MySQL Server: Install MySQL server for the database.
- MySQL Workbench: Install MySQL Workbench for database management and queries.

### 2. Download the Files
- Download the above Frontend_BankFolio and Backend_BankFolio files and follow the below procedure

### 3. Frontend Setup
```
cd Frontend_BankFolio
npm install
```
### 4. Backend Setup
1. Import the backend project into Eclipse IDE.
2. Configure the database settings in the application.properties file:
```
spring.datasource.url=jdbc:mysql://localhost:3306/bankingdb
spring.datasource.username=root
spring.datasource.password=root
```
Build the backend:
```
mvn clean install
```
### 5. Database Setup
```
CREATE DATABASE bank_app;
```





