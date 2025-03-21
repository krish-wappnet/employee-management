# Employee Management System  

A simple **Employee Management System** built with **Angular, NgRx (State Management), Angular Material**, and **@ngrx-addons/persist-state** to store data in **local storage**. Users can **add, update, delete**, and **toggle employee status** between **Active and Inactive**.  

## Features  
✅ **Dashboard** – View all employees in a table with sorting and filtering.  
✅ **Add Employee** – Add new employees with form validation.  
✅ **Edit Employee** – Update employee details.  
✅ **Delete Employee** – Remove employees from the system.  
✅ **Toggle Status** – Change employee status between **Active** and **Inactive**.  
✅ **State Persistence** – Employee data persists in **local storage**.  
✅ **Responsive Design** – Works on both **desktop** and **mobile** devices.  

---

## Tech Stack  

- **Frontend:** Angular, TypeScript  
- **State Management:** NgRx  
- **UI Library:** Angular Material  
- **Local Storage Persistence:** @ngrx-addons/persist-state  

---

## Installation & Setup  

### 1. Clone the Repository  
```sh
git clone https://github.com/your-username/employee-management.git
cd employee-management
2. Install Dependencies
Make sure you have Node.js and Angular CLI installed. Then, run:

sh
Copy
Edit
npm install
3. Run the Application
sh
Copy
Edit
ng serve
This will start the development server. Open http://localhost:4200 in your browser.

Project Structure
pgsql
Copy
Edit
📦 employee-management
├── 📂 src
│   ├── 📂 app
│   │   ├── 📂 employees
│   │   │   ├── 📜 employees.component.ts
│   │   │   ├── 📜 employees.reducer.ts
│   │   │   ├── 📜 employees.actions.ts
│   │   │   ├── 📜 employees.selectors.ts
│   │   │   ├── 📜 employees.effects.ts
│   │   │   ├── 📜 employee.model.ts
│   │   ├── 📂 services
│   │   │   ├── 📜 employee.service.ts
│   │   ├── 📜 app.component.ts
│   │   ├── 📜 app.routes.ts
│   │   ├── 📜 app.config.ts
│   ├── 📂 assets
│   ├── 📂 styles
│   ├── 📜 main.ts
│   ├── 📜 index.html
│── 📜 angular.json
│── 📜 package.json
│── 📜 README.md
State Management with NgRx
This project uses NgRx to manage application state efficiently.

Actions: Define actions like addEmployee, updateEmployee, deleteEmployee, and toggleStatus.
Reducer: Handles state updates based on dispatched actions.
Selectors: Fetch filtered data from the store.
Effects (Optional): Side effects like API calls (not needed for local storage).
How to Use
1. Add a New Employee
Click the "Add Employee" button.
Fill in the form and click "Save".
2. Edit Employee Details
Click the edit icon next to an employee.
Update details and save changes.
3. Delete an Employee
Click the delete icon.
Confirm the action.
4. Toggle Employee Status
Click the status button (Active/Inactive).
Contributing
Contributions are welcome! Feel free to fork this repo, create a feature branch, and submit a pull request. 🚀


Here's the link to see the demo video: https://www.awesomescreenshot.com/video/37886789?key=cf39412fd1905217c5d634dc324f80bf
Here's the drive link to see the video: https://drive.google.com/file/d/1OYCuaDcAZm6bjvGyXOHKEKWkHW0nLD9B/view?usp=drive_link