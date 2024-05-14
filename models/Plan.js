class Plan {
    constructor({
        planName,
        planCost,
        validity,
        planStatus,
    }) {
        this.planName = planName,
        this.planCost = planCost,
        this.validity = validity,
        this.planStatus = planStatus
    }
}
module.exports = Plan;
