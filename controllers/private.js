const connectDB = require("../config/db");
const Customer = require("../models/Customer");
const Plan = require("../models/Plan");
const { postData } = require("../utils/sendEmail");
const ErrorResponse = require("../utils/errorResponse");

const getPrivateData = (req, res, next) => {
  return res.status(200).json({
    success: true,
    data: "You got access to the private data in this route",
  });
};

const modifyPlan = async (req, res, next) => {
  try {
    const {
      customerId,
      plan
    } = req.body;
    // Check if any of them is undefined
    if (!customerId || !plan ) {
      return next(
        new ErrorResponse("Invalid customer id", 400)
      );
    }

    // Check if user already exists in our DB
    const customers = await connectDB('customers');
    const availablePlans = await connectDB('availablePlans');
    const customer = customers.filter((u) => u.id === customerId);
    const selectedPlan = availablePlans.filter((p) => p.planName === plan.header && p.planCost === plan.price)

    // console.log('customers ', customer, availablePlans, selectedPlan)
    let postedData = {}
    if (customer.length > 0 && selectedPlan.length > 0) {
      try {
        const payload = {
          ...new Customer({
            ...customer[0]
          }),
          plan:{
            ...new Plan({
              ...selectedPlan[0],
              planStatus: true
            })
          }
        }
       
        postedData = await postData(`${process.env.MONGO_URI}/customers/${customerId}`, payload, 'PATCH');
      } catch (error) {
        return next(new ErrorResponse("Error modifying plan", 400));
      }
    }else{
      return next(new ErrorResponse("Customer invalid", 400));
    }


    return res.status(200).json({
      success: true,
      data: postedData
    });
  } catch (error) {
    return next(error);
  }
}

const getCustomers = async (req, res, next) => {
  try{
    const customers = await connectDB('customers');

    const isPlanActive = (validity, regDate, id) => {
        if(validity === 365){
          let Difference_In_Time = +regDate - new Date().getTime();
          let Difference_In_Days = Math.round(Difference_In_Time / (1000 * 3600 * 24));
          if (Difference_In_Days > 365){
            return false;
          }
          return true;
        }else if(validity === 180){
          let Difference_In_Time = +regDate - new Date().getTime();
          let Difference_In_Days = Math.round(Difference_In_Time / (1000 * 3600 * 24));
          console.log(validity, Difference_In_Days, +regDate, new Date().getTime(), id)
          if (Difference_In_Days > 180) {
            return false;
          }
          return true;
        } else if( validity === 90){
          let Difference_In_Time = +regDate - new Date().getTime();
          let Difference_In_Days = Math.round(Difference_In_Time / (1000 * 3600 * 24));
          if (Difference_In_Days > 90) {
            return false;
          }
          return true;
        }

        
      return true;
    }

    customers.map((customer)=>{
      const plan = customer?.plan || {};
      plan.planStatus = isPlanActive(plan.validity, customer.registrationDate, customer.id)
      customer.plan = customer.plan ? plan : null;
    })
    return res.status(200).json({
      success: true,
      data: customers,
    });
  } catch (error) {
    return next(error);
  }
  
};


const addCustomer = async (req, res, next) => {
  try {
    const {
      name,
      email,
      adharNumber,
      assignedMobileNumber,
      dob
    } = req.body;

    // Check if any of them is undefined
    if (!name || !email || !adharNumber ||
      !assignedMobileNumber,
      !dob) {
      return next(
        new ErrorResponse("Please provide all the details", 400)
      );
    }
    if(!adharNumber.length === 12){
      return next(
        new ErrorResponse("Adharnumber length should be 12", 400)
      );
    }
    if (!assignedMobileNumber.length === 10) {
      return next(
        new ErrorResponse("Mobile number length should be 10", 400)
      );
    }

    // Check if user already exists in our DB
    const customers = await connectDB('customers');
    const data = customers.filter((u) => u.email === email);
    const customerExists = data.length > 0;

    if (customerExists) {
      return next(new ErrorResponse("User already exists", 400));
    }

   
    const customer = new Customer({email, name, dob, adharNumber, assignedMobileNumber});
    let postedData = {}
    try {
      console.log('customer', customer)
      postedData = await postData(`${process.env.MONGO_URI}/customers`, customer);
    } catch (error) {
      return next(new ErrorResponse("Error adding customer", 400));
    }
   
    return res.status(200).json({
      success: true,
      data: postedData
    });
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  getPrivateData,
  addCustomer,
  getCustomers,
  modifyPlan
};
