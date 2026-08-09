# 🛠️ Tools and Material Movement Logging System

> **⚠️ Notice on Source Code & Data Confidentiality:**  
> The source code and operational database for this project are proprietary and subject to strict non-disclosure guidelines established by the **510 Army Base Workshop (Meerut Cantonment, Indian Army)**. This repository serves strictly as a technical showcase, system architecture documentation, and video demonstration of the functional system.

---

## 📽️ Project Video Demonstration

GitHub does not render repository-hosted `<video>` elements inside README files.

[▶ Watch the project video demonstration](./assets/video/project_video.mp4)

If the preview does not play in your browser, use the link above to open the
video file and download it from GitHub.

---

## 📌 Executive Summary
In large-scale industrial defense workshops like **510 Army Base Workshop**, managing the continuous movement of specialized tools, machinery parts, and materials across various sub-sections is critical to maintaining operational readiness.

Historically, item issuance and returns were logged manually using paper registers. This web application digitizes the tracking process, providing real-time visibility into inventory stock, automated transaction logs with timestamps, role-based access control, and complete audit history.

---

## 🎯 Key Objectives & Core Features

- **Digital Issue & Return Tracking:** Replaces error-prone physical registers with real-time digital entry logging.
- **Inventory & Stock Monitoring:** Tracks live availability, nomenclature, laser/part numbers, and triggers low-stock alerts.
- **Searchable Transaction History:** Instant filtering and search capabilities across items, personnel, sections, and dates.
- **Role-Based Access Control (RBAC):** Distinct dashboards and permission levels for **Admin** (Store Keeper/Supervisor) and **Staff**.
- **Audit & Reporting Engine:** Instant generation of movement records and summary logs for operational audits.

---

## 🛠️ Technology Stack

| Layer | Technology | Purpose |
| :--- | :--- | :--- |
| **Frontend** | HTML5, CSS3, JavaScript (ES6+) | Responsive UI, dynamic form validation, and interactive dashboards |
| **Backend** | Node.js, Express.js | RESTful routing, transaction logic, and authentication control |
| **Database** | MySQL / SQLite | Relational schema storing users, master items, and movement logs |
| **Tooling & VCS** | Git, GitHub, VS Code | Version control, collaborative development, and code management |

---

## 👥 Team & Individual Contributions

This project was successfully delivered over a 28-day industrial internship cycle at **510 Army Base Workshop**

### **Adarsh Maurya — Lead Backend Developer & Project Coordinator (90% Core Architecture)**
- **Backend Architecture:** Built the Node.js API endpoints and server-side validation logic.
- **Database Engineering:** Designed the relational MySQL schema (`Users`, `Items`, and `Transactions` tables with foreign key integrity).
- **System Integration:** Spearheaded the integration between frontend forms and backend REST endpoints.
- **Project Coordination:** Led the overall system workflow design, digitized the manual register logic, and authored system documentation.

### **Team Contributors:**
- **Aakansha Verma:** Database design support and documentation assistance.
- **Manvi Sharma:** Module integration support and test case verification.
- **Prashant Kumar:** Frontend UI layout implementation (HTML/CSS/JS).

---

## 📐 System Architecture & Workflow

### 1. Database Schema
- **`Users`**: `User_ID`, `Username`, `Password`, `Role` (Admin/Staff), `Email`
- **`Items`**: `Item_ID`, `Item_Name`, `Nomenclature`, `Part_No`, `Category`, `Quantity`, `Location`
- **`Transactions`**: `Transaction_ID`, `Item_ID`, `User_ID`, `Type` (Issue/Return), `Quantity`, `Date`, `Status`

### 2. DFD Level 1 (Process Decomposition)
System core processes:
- **1.0 Login & Authentication:** Handles RBAC session validation via `Users` table.
- **2.0 Material Management / Inventory:** Handles item updates in `Items` table.
- **3.0 Issue & Return Handling:** Manages stock decrement/increment operations.
- **4.0 Movement Logging & Reporting:** Appends immutable log entries into `Transactions` table.

---

## 🧩 Comprehensive Module Breakdown

### 🔑 1. Login & Authentication Module
- Enforces secure session management using hashed passwords.
- Routes users to specific views based on authorization flags:
  - **Admin View:** Full CRUD access over tools, user accounts, and system settings.
  - **Staff View:** Limited to submitting issue requests, logging returns, and querying inventory status.

### 📦 2. Inventory & Material Management Module
- Enables Store Keepers to manage tool nomenclature, part numbers (NIV), page numbers, and laser numbers.
- Tracks exact quantity allocations across various workshop groups/sections.
- Automatically calculates and updates remaining stock balance upon item issuance or return.

### 🔄 3. Movement Logging & Transaction History Module
- Maintains a real-time ledger recording:
  - Issue Voucher Number & Laser Number
  - Recipient Name & Group/Section
  - Date & Time Stamping for Issue and Return events
- Implements dynamic search filters across Material ID, Recipient, Section, and Date range.

---

## ⚙️ System & Hardware Requirements

### Software Requirements
- **Operating System:** Windows 10/11 or Linux Enterprise Server
- **Runtime / Environment:** Node.js v14+ 
- **Database:** MySQL v8.0 / SQLite v3
- **Browser:** Modern Web Browser (Chrome, Edge, Firefox)

### Recommended Hardware Specifications
- **Processor:** Intel Core i3 (2.0 GHz) or equivalent
- **RAM:** 4 GB minimum (8 GB recommended)
- **Disk Space:** 10 GB free space for transaction log persistence

---

## 🛡️ Security & Defense Compliance Measures

- **No Sensitive Network Data:** Database schemas and demo videos do not show internal military IP addresses, network topologies, or restricted serial numbers.
- **Data Sanitization:** Operational UI text shown in demonstrations uses representative dummy data to protect operational security.
- **Restricted Access Boundary:** The application is architected for local intranet/LAN deployment within the workshop premises.

---

## 🚀 Future Roadmap & Scope

1. **Barcode / QR Code Scanner Integration:** Automating item entry during physical store checkouts.
2. **RFID Tagging:** Continuous automated tracking of high-value machinery assets.
3. **Automated Audit Analytics:** Graphical visual analytics for predicting monthly tools matanence cycles.
