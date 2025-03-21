Employee Management System
A simple Employee Management System built with Angular, NgRx (State Management), Angular Material, and @ngrx-addons/persist-state to store data in local storage. Users can add, update, delete, and toggle employee status between Active and Inactive.

📹 Demo Video
🔗 Awesome Screenshot: Click here
🔗 Google Drive: Click here

🚀 Features
✅ Dashboard – View all employees in a table with sorting and filtering.
✅ Add Employee – Add new employees with form validation.
✅ Edit Employee – Update employee details.
✅ Delete Employee – Remove employees from the system.
✅ Toggle Status – Change employee status between Active and Inactive.
✅ State Persistence – Employee data persists in local storage.
✅ Responsive Design – Works on both desktop and mobile devices.

🛠 Tech Stack
Frontend: Angular, TypeScript
State Management: NgRx
UI Library: Angular Material
Local Storage Persistence: @ngrx-addons/persist-state
📦 Installation & Setup
1️⃣ Clone the Repository
sh
Copy
Edit
git clone https://github.com/your-username/employee-management.git
cd employee-management
2️⃣ Install Dependencies
Make sure you have Node.js and Angular CLI installed. Then, run:

sh
Copy
Edit
npm install
3️⃣ Run the Application
sh
Copy
Edit
ng serve
This will start the development server. Open http://localhost:4200 in your browser.

📂 Folder Structure
pgsql
Copy
Edit
📦 EMPLOYEE-MANAGEMENT
├── 📂 .angular
├── 📂 .vscode
├── 📂 node_modules
├── 📂 public
├── 📂 src
│   ├── 📂 app
│   │   ├── 📂 employees
│   │   │   ├── 📂 dashboard
│   │   │   ├── 📂 employee-form
│   │   │   ├── 📜 employees.actions.ts
│   │   │   ├── 📜 employees.module.ts
│   │   │   ├── 📜 employees.reducer.ts
│   │   │   ├── 📜 employees.selectors.ts
│   │   ├── 📜 app.component.css
│   │   ├── 📜 app.component.html
│   │   ├── 📜 app.component.scss
│   │   ├── 📜 app.component.spec.ts
│   │   ├── 📜 app.component.ts
│   │   ├── 📜 app.config.server.ts
│   │   ├── 📜 app.config.ts
│   │   ├── 📜 app.routes.server.ts
│   │   ├── 📜 app.routes.ts
│   │   ├── 📜 core.module.ts
│   │   ├── 📜 shared.module.ts
│   ├── 📜 index.html
│   ├── 📜 main.server.ts
│   ├── 📜 main.ts
│   ├── 📜 server.ts
│   ├── 📜 styles.css
│── 📜 angular.json
│── 📜 package.json
│── 📜 README.md
🗃 State Management with NgRx
This project uses NgRx to manage application state efficiently.

Actions: Defines actions like addEmployee, updateEmployee, deleteEmployee, and toggleStatus.
Reducer: Handles state updates based on dispatched actions.
Selectors: Fetch filtered data from the store.
Effects (Optional): Side effects like API calls (not needed for local storage).
📖 How to Use
1️⃣ Add a New Employee

Click the "Add Employee" button.
Fill in the form and click "Save".
2️⃣ Edit Employee Details

Click the edit icon next to an employee.
Update details and save changes.
3️⃣ Delete an Employee

Click the delete icon.
Confirm the action.
4️⃣ Toggle Employee Status

Click the status button (Active/Inactive).