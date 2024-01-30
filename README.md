# Next.js and Nest.js CRUD Application

This project is a basic CRUD (Create, Read, Update, Delete) application built with Next.js and Nest.js. It includes a simple frontend built with Next.js and a backend API developed with Nest.js. The application allows managing products stored in a MySQL database.

## Prerequisites

Before you start the application, ensure that you have the following installed:

- Node.js and npm
- MySQL Workbench or any MySQL client
- Your MySQL credentials for creating a table named 'products'

## Getting Started

1. **Create Database Table:**
   - Open MySQL Workbench or any MySQL client.
   - Create a table named 'products' with the required fields.

2. **Update Backend Configuration:**
   - Navigate to `backend-nest/backend` directory.
   - Open `app.module.ts` and update the MySQL database credentials with your username and password.

3. **Start Backend:**
   - In the `backend-nest/backend` directory, run the following command to start the Nest.js backend on port 8000:

     ```bash
     npm run start:dev
     ```

4. **Start Frontend:**
   - Navigate to the `frontend` directory.
   - Run the following command to start the Next.js frontend on port 3000:

     ```bash
     npm run dev
     ```

5. **Access the Application:**
   - Open your web browser and go to [http://localhost:3000](http://localhost:3000) to access the Next.js frontend.

## Usage

- The application allows you to perform CRUD operations on the 'products' table.
- Use the provided frontend UI to interact with the backend API.

## Technologies Used

- Next.js
- Nest.js
- MySQL

## Folder Structure

- `backend-nest`: Nest.js backend application.
  - `backend`: Nest.js backend code.
- `frontend`: Next.js frontend application.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
