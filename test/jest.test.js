test('Must know the main Jest assertives', () => {
    let number = null;
    expect(number).toBeNull();
    number = 10;
    expect(number).not.toBeNull();
})

test('Must to know how to handle objects', () => {
    const obj = {
        name: 'John',
        email: 'john@email.com'
    }

    expect(obj).toHaveProperty('name');
});