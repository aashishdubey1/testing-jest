const mathOperations = require("../src/calculator")


describe("Calculator Test",()=>{
    beforeAll(()=>{
        console.log("running Before All")
    })

    beforeEach(()=>{
        console.log("Running before each ")
    })

    afterEach(()=>{
        console.log("Running after Each ")
    })

    afterAll(()=>{
        console.log("Running after All")
    })

    test("add",()=>{
        let res = mathOperations.sum(4,4);
        expect(res).toBe(8)
    })

    test("Substract",()=>{
        let res = mathOperations.diff(6,5);
        expect(res).toBe(1)
    })
})