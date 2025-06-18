const mathOperations = require('../src/calculator')


// describe => collection of different tests 

describe("Calculator Tests",()=>{


    test('adding 1 + 2 should return 3',()=>{
        expect(mathOperations.sum(1,2)).toBe(3)
        expect(mathOperations.sum(1,2)).not.toBe(5)
    })

    test("Substract Testing",()=>{
        expect(mathOperations.diff(6,2)).toBe(4)
    })

})