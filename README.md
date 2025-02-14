A simple React + Spring Boot contact form application that allows users to submit their contact details, which are processed by the backend. The form includes fields for name, email, phone number, and address.

🚀 Features

✔️ Fully Responsive UI built with React & Tailwind CSS
✔️ Form Validation to ensure correct input
✔️ Axios Integration for handling form submissions
✔️ Spring Boot Backend for handling requests
✔️ PostgreSQL Database for storing submitted data
✔️ Success Message Popup upon successful submission
✔️ Proper Folder Structure for scalability

⚙️ Tech Stack

Frontend: React, Tailwind CSS, Axios
Backend: Spring Boot, Java, REST API
Database: PostgreSQL
Tools: Git, GitHub, Postman

📂 Folder Structure

/contact-form-app
│── /frontend (React app)
│   ├── src/
│   │   ├── components/ (UI Components)
│   │   ├── pages/ (Page Components)
│   │   ├── App.js
│   │   ├── index.js
│── /backend (Spring Boot API)
│   ├── src/main/java/com/example/contactus/
│   │   ├── controller/ (Handles API requests)
│   │   ├── model/ (Defines database structure)
│   │   ├── repository/ (Database interactions)
│   │   ├── service/ (Business logic)
│   │   ├── ContactUsApplication.java (Main class)
│── /database (PostgreSQL setup)

🛠️ Installation & Setup

1️⃣ Clone the Repository
bash
Copy
Edit
git clone https://github.com/your-username/contact-form-app.git
cd contact-form-app

2️⃣ Run the Backend (Spring Boot)
Configure application.properties with your PostgreSQL credentials
Start the backend:
mvn spring-boot:run
 
3️⃣ Run the Frontend (React)
cd frontend
npm install
npm start

📬 API Endpoints
Method	Endpoint	Description
POST	/api/contact/submit	Submit contact form
