<p align="center">
  <img src="./img.png" alt="Project Banner" width="100%">
</p>
<h3>REPROGRAPHY MANAGEMENT SYSTEM</h3>
## Basic Details

### Team Members
- Member 1: [Rosmin Roy] - [Viswajyothi College of Engineering and Technology]
### Hosted Project Link
https://rosmin07.github.io/rpmmm/

---

## Project Description
RPMMM is a web-based college reprography management system students can easily login to it and place their order by
uploading files and telling which format to choose and can choose number of pages
---

## The Problem Statement
Managing orders for staff and students can be time-consuming and error-prone without a centralized system.by going to the reprography to collect the prints without knowing 
if it is printed or not can be time consumming if it is not printed and it makes a crowd in the repro. and some students will not get the print in their desired amount of 
time. 

---

## The Solution
RPMMM provides a unified platform for order management, streamlining the process and reducing manual errors.it prioratizes the order by the time inputed by the students
and the repro staff can update the status whether or not if it is printed so that the students won't have to waste their time.and they can get the print in their desired 
amount of time . the can know the status of the print before going to the repro

---

## Technical Details
The College Reprography Management System is a static website developed using HTML, CSS, and JavaScript. It provides separate interfaces for students and reprography staff to place and manage print orders.

Student order details such as file name, print type, required time, status, and amount are stored using browser LocalStorage. The system is developed in Visual Studio Code and deployed using
GitHub Pages.
### Technologies/Components Used
HTML – For creating web pages

CSS – For styling the website

JavaScript – For system logic and functions

LocalStorage – For storing order details

Visual Studio Code – Code editor used for development

GitHub Pages – For hosting the website

Web Browser – To run and access the system (Chrome / Edge)
#### Software
- **Languages:** HTML, CSS, JavaScript
- **Frameworks:** None (Vanilla JS)
- **Libraries:** None
- **Tools:** VS Code, Git



---

## Features
- Order placement and tracking
- Order management for staff
- Responsive design
- Easily accessable 

---

## Implementation
### Software
#### Installation
No installation required. All files are static.

#### Run
Open `index.html` in a web browser.



## Project Documentation
### Screenshots
<p align="center">
  <img src="./Screenshot 2026-02-21 074051.png" alt="IMAGE1r" width="100%">
</p>
<p align="center">
  <img src="./Screenshot 2026-02-21 074110.png" alt="IMAGE2" width="100%">
</p>
<p align="center">
  <img src="./Screenshot 2026-02-21 074155.png" alt="IMAGE3" width="100%">
</p>
<p align="center">
  <img src="./Screenshot 2026-02-21 074224.png" alt="IMAGE4" width="100%">
</p>
<p align="center">
  <img src="./Screenshot 2026-02-21 074322.png" alt="IMAGE5" width="100%">
</p>

### DEMO VIDEO
https://drive.google.com/file/d/1KxLAHDuy_EBsvoKfXvTQmn39SIX8Eoje/view?usp=sharing

### Diagrams
#### System Architecture
Student Interface
        │
        ▼
Order Form Page
        │
        ▼
LocalStorage (Browser Database)
        │
        ▼
Staff Dashboard
        │
 Update Status & Amount
        │
        ▼
LocalStorage Updated
        │
        ▼
Student Status Page

#### Application Workflow
Student Uploads File
        ↓
Select Print Type
        ↓
Select Time
        ↓
Submit Order
        ↓
Saved in LocalStorage
        ↓
Staff Views Orders
        ↓
Staff Prints File
        ↓
Update Status + Amount
        ↓
Saved Again
        ↓
Student Checks Status
        ↓
Collects Print
---

### App Flow Diagram
                ┌───────────────┐
                │   START       │
                └──────┬────────┘
                       │
                       ▼
           ┌────────────────────┐
           │ Open Website using │
           │   GitHub Pages     │
           └────────┬───────────┘
                    │
                    ▼
           ┌────────────────────┐
           │  Student Uploads   │
           │       File         │
           └────────┬───────────┘
                    │
                    ▼
           ┌────────────────────┐
           │ Select Print Type  │
           │ (Default = B/W)    │
           └────────┬───────────┘
                    │
                    ▼
           ┌────────────────────┐
           │  Select Time Slot  │
           │ (Before 1:30 PM)   │
           └────────┬───────────┘
                    │
                    ▼
           ┌────────────────────┐
           │   Submit Order     │
           └────────┬───────────┘
                    │
                    ▼
           ┌────────────────────┐
           │ Order Stored in    │
           │   LocalStorage     │
           └────────┬───────────┘
                    │
                    ▼
           ┌────────────────────┐
           │ Staff Dashboard    │
           │   Opens Orders     │
           └────────┬───────────┘
                    │
                    ▼
           ┌────────────────────┐
           │ Orders Sorted by   │
           │ Required Time      │
           └────────┬───────────┘
                    │
                    ▼
           ┌────────────────────┐
           │ Staff Prints File  │
           └────────┬───────────┘
                    │
                    ▼
           ┌────────────────────┐
           │ Update Status      │
           │ Pending → Printing │
           └────────┬───────────┘
                    │
                    ▼
           ┌────────────────────┐
           │ Update Amount      │
           └────────┬───────────┘
                    │
                    ▼
           ┌────────────────────┐
           │ Status = READY     │
           └────────┬───────────┘
                    │
                    ▼
           ┌────────────────────┐
           │ Student Checks     │
           │ Order Status       │
           └────────┬───────────┘
                    │
                    ▼
           ┌────────────────────┐
           │ Collect Print +    │
           │ Pay Amount         │
           └────────┬───────────┘
                    │
                    ▼
                ┌───────────────┐
                │     END       │
                └───────────────┘
                
This flow diagram shows the process from student uploading the file to final print collection.
Orders are stored in LocalStorage and staff updates the status and amount after printing.
Students can view the updated status and collect their prints accordingly.

---

## License
This project is licensed under the [MIT License] License. 

---

## AI Tools Used (Optional)
- Tool Used: GitHub Copilot, Chatgpt
- Purpose: Code suggestions and documentation
- Percentage of AI-generated code: [90]

---

## Team Contributions
-ROSMIN ROY : FULL SYSTEM DEVELOPED

---

_Made with ❤️ at TinkerHub_
