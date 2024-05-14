class Customer {
    constructor({email, name, dob, adharNumber, assignedMobileNumber}) {
        this.email = email,
            this.name = name,
            this.dob = dob,
            this.adharNumber = adharNumber,
            this.registrationDate = new Date().getTime(),
            this.assignedMobileNumber = assignedMobileNumber,
            this.plan = null
    }
}
module.exports = Customer;
