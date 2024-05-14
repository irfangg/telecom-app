const ErrorResponse = require("./errorResponse");

describe('Test ErrorResponse',()=>{
    test('Check error message', () => {
        const errorMessage = "Please provide name, email and password";
        expect(new ErrorResponse(errorMessage, 400)).not.toBe(new Error('Some error'));
    });
})