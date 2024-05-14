const connectDB = require("./db");

describe('Test db(json-server) connection', () => {
    const mockResponse = {
        "users": [{
            "id": "bb3d",
            "email": "irfangg@gmail.com",
            "password": "$2a$10$Y4SkuSExMGRAcorHG4uEr.HGCD8C0fhpEV83zkzHckRhwbjWBlmhG",
            "name": "irfan",
            "registrationDate": "2024-05-11T04:54:09.444Z"
        }]
    }
    beforeEach(() => {
        jest.spyOn(global, 'fetch').mockResolvedValue({
            json: jest.fn().mockResolvedValue(mockResponse)
        })
    });

    it('test data coming from json-server', async () => {
        const users = await connectDB('/users');
        expect(users).toEqual(mockResponse);
    })

    afterEach(() => {
        jest.restoreAllMocks();
    });
})
