const User = require("./User")

describe('Test User model',()=>{
    it('should check if password is matching and return false if not same', async () => {
        const user = new User('abc@gmail.com', '$2a$10$Y4SkuSExMGRAcorHG4uEr.HGCD8C0fhpEV83zkzHckRhwbjWBlmhG', 'abc');
        const res = await user.matchPasswords('jugyerf')
        expect(res).toBeFalsy();
    });
    it('should check if password is matching and return true if same after bcrypt', async () => {
        const user = new User('abc@gmail.com', '$2a$10$Y4SkuSExMGRAcorHG4uEr.HGCD8C0fhpEV83zkzHckRhwbjWBlmhG', 'abc');
        const res = await user.matchPasswords('1234')
        expect(res).toBeTruthy();
    })
})