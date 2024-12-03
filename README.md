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


