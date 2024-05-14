## 📖 Prerequisites

To run the project you need `node>=16` and `npm>=8` installed on your machine.

##  Getting Started

### 1. Clone the `telecom-app` repository:

```bash
git clone https://github.com/irfangg/telecom-app.git
```

### 2. Navigate into repo:
```bash
cd telecom-app
```

### 3. Install package dependencies:

```bash
npm install # Server dependencies
cd client
npm install # Client dependencies
```

### 3.1 Add .env file into root folder and modify config accroding to your need (below config used in this demo project)
```bash
# Application base URL
APP_BASE_URL='http://localhost:3000'
NODE_ENV='development' # Change to "production" when deploying

# Backend configaration
PORT=5000
MONGO_URI="http://localhost:3001"
JWT_SECRET="YOUR_JWT_SECRET"
JWT_EXPIRE=24 # In hours
```

### 4. Run test cases:

```bash
npm run test     # will run test on backend code
cd client 
npm run test     # will run test on front end code
```

### 5. Run project:
In the `root` directory, open three terminal sessions and run these commands separately:

```bash
npm run client   # will run on port 300
npm run server   # configured to run on port 5000
npm run dbup     # configured to run on port 3001 - to use json-server db, modify db.json file according to your need
```

### 6. Open your browser and go to `http://localhost:3000`


### 7. Screenshots for reference
![dashboard-table](https://github.com/irfangg/telecom-app/assets/9660341/59298fdf-6369-41ff-964c-aadaf57b2b1d)
![create-new-account](https://github.com/irfangg/telecom-app/assets/9660341/54dc3581-8b1e-4760-ba80-daf343b33007)
![choose-new-plan](https://github.com/irfangg/telecom-app/assets/9660341/a9835e75-a4dd-4f5f-bff7-d21d0fb3201c)
![renew-plan](https://github.com/irfangg/telecom-app/assets/9660341/44e8eeef-6fd7-484b-a80d-cc24c95c2f09)
![register-new-customer-screen](https://github.com/irfangg/telecom-app/assets/9660341/d7f435fe-77ee-4a8f-a432-19906ac08ebd)
![plans-based-on-existing-or-new-customer](https://github.com/irfangg/telecom-app/assets/9660341/d7c06e55-0dfc-4adc-8763-9f9123322d42)
![modify-existing-plan](https://github.com/irfangg/telecom-app/assets/9660341/87a11623-3f8f-4849-be97-0c7e5cb455d6)
![login-screen](https://github.com/irfangg/telecom-app/assets/9660341/1644ce7b-e079-4332-abd7-50e6d59bfc0a)



## 📬 Contact

If you want to contact me, you can reach me through below handles.
<a href="https://linkedin.com/in/irfangg" target="_blank"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn"/></a>
<a href="mailto:irfangg.contact@gmail.com"><img  alt="Gmail" src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" /></a>
