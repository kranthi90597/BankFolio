![WhatsApp Image 2024-12-03 at 14 26 41_d4273072](https://github.com/user-attachments/assets/befc220b-1ea5-436c-ae80-bb255ede3a57)# BankFolio
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
3. Build the backend:
```
mvn clean install
```
### 5. Database Setup
1. Create the database using MySQL Workbench:
```
CREATE DATABASE bank_app;
```
2. Import the required SQL schema and data.

## How to Run the Project
### Frontend (React)
1. Navigate to the frontend folder:
```
cd frontend
npm start
```
The React app will run on http://localhost:3000.
2. Backend (Spring Boot)
Run the Spring Boot application from your IDE:
```
mvn spring-boot:run
```
The backend will be available at http://localhost:8080.

## Architecture
![Uploading WhatsApp Image 2024-12-03 at 14.26.41_d4273072.jpg…]()
### Frontend

- index.js: Entry point for the application.
- App.js: Manages routing for Admin and Customer components.
- Components:
   - AdminLogin
   - AdminDashboard
   - BalanceChecking
### Backend
- Entity: Defines database models (e.g., User, Transaction).
- Controller: Handles HTTP requests (@GetMapping, @PostMapping).
- Service: Implements business logic.
- Repository: Interfaces for database operations.
- Database: MySQL tables for users and transactions.

## Future Enhancements
- Two-factor authentication for login.
- Enhanced dashboard with graphical transaction analytics.
- Email notifications for password generation and updates.
- Dockerizing the project for containerized deployment.






