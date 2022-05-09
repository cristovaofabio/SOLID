import { Product } from "./product";

const createSut = (name: string, price: number): Product => {
    return new Product(name, price);
}

describe('MESSAGING', () => {
    afterEach(() => jest.clearAllMocks());

    it('should return undefined', () => {
        const sut = createSut('sunglasses', 12.99);

        expect(sut).toHaveProperty('name', 'sunglasses');
        expect(sut.price).toBeCloseTo(12.99);
    });
});
