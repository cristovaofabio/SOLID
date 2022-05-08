describe('PRIMITIVE VALUES', () => {
    it('testing Jest assertions', () => {
        const number = 10;

        expect(number).toBe(10);
    });
});

describe('OBJECTS', () => {
    it('new test with objects', () => {
        const person = { name: 'Fabio', age: 30 };
        const anotherPerson = { ...person };

        expect(person).toEqual(anotherPerson);
        expect(person).toHaveProperty('age');
        expect(person).toHaveProperty('age', 30);
        expect(person.name).toBe('Fabio');
    });
});
