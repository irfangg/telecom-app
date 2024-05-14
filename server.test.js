describe('server test', () => {
  
    const request = require("supertest");
    const express = require("express");
    
    const app = express();
    app.use(express.json());
    
    // API Routes
    app.use("/api/auth", require("./routes/auth"));
    app.use("/api/private", require("./routes/private"));
    
    
    test("Check if route exist", done => {
        request(app)
            .get("/someotherroute")
            .expect(404, done);
    });

    test('should return 401 if not authorized', async () => {
        const res = await request(app)
            .get('/api/private/customers')
        expect(res.statusCode).toEqual(401);
    })
})

