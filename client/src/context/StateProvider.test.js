import {
    fetchCustemers
} from "./StateProvider";

describe('Test fetchCustemers', () => {
    const customersData = [{
        "name": "irfangg",
        "dob": "2024-05-12",
        "email": "irfan@gmail.com",
        "adharNumber": "213",
        "registrationDate": 1746962857860,
        "assignedMobileNumber": "122",
        "plan": {
            "planName": "Gold",
            "planCost": 299,
            "validity": 180,
            "planStatus": true
        },
        "id": "cb3e"
    }]
    const mockResponse = {
        success: 200,
        data: {
            customers: customersData
        }
    }
    beforeEach(() => {
        jest.spyOn(global, 'fetch').mockResolvedValue({
            json: jest.fn().mockResolvedValue(mockResponse)
        })
    });
    it('Should call fetch customer api and passed call back', async () => {
        const callback = jest.fn();
        const token = 'Dummy Auth token';
        await fetchCustemers(callback, token);
        expect(callback).toHaveBeenCalledWith({customers: customersData});
    })
    afterEach(() => {
        jest.restoreAllMocks();
    });
})