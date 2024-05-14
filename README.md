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
![userregistration](https://github.com/irfangg/telecom-app/assets/9660341/66e237ea-412e-493e-8c82-b627394bed30)
![user login to dashboard](https://github.com/irfangg/telecom-app/assets/9660341/00806a73-447f-4476-b5b7-da73680a15ff)
![renewplan](https://github.com/irfangg/telecom-app/assets/9660341/4ccc7a7b-6537-470c-bb70-5a3e78cc5715)
![modifyplan](https://github.com/irfangg/telecom-app/assets/9660341/b24f8f73-b060-4f2d-88c7-8a5ac79045e5)
![Dashboard](https://github.com/irfangg/telecom-app/assets/9660341/1bd6f71e-1e80-4400-98b8-3c1a0bc4945f)
![chooseplan](https://github.com/irfangg/telecom-app/assets/9660341/7d9d4476-fb43-416f-8dd9-af51fded37ae)
![Adding new customer](https://github.com/irfangg/telecom-app/assets/9660341/fccdca9d-542b-49f9-af1b-a87eebf3c12b)



## 📬 Contact

If you want to contact me, you can reach me through below handles.
<a href="https://linkedin.com/in/irfangg" target="_blank"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn"/></a>
<a href="mailto:irfangg.contact@gmail.com"><img  alt="Gmail" src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" /></a>
