// First test example

const addNumbers = (x, y) => {
    return x + y
}

it('adds both numbers', () => {
    expect(addNumbers(1, 2)).toEqual(3)
})