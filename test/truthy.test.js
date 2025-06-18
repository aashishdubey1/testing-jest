
test("Truthy Test",()=>{
    const name = "Aashish";
    const age = null

    expect(name).toBeTruthy()
    expect(name).not.toBeNull()
    expect(age).toBeNull()
    expect(age).toBeFalsy()

    const a = 100;
    const b = 50;

    expect(a).toBeGreaterThan(12);

})