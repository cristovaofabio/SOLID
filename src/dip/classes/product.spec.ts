import { Product } from "./product";

const createSut = (name: string, price: number): Product => {
    return new Product(name, price);
}

describe('PRODUCT', () => {
    afterEach(() => jest.clearAllMocks());

    it('should have properties name and price', () => {
        const sut = createSut('sunglasses', 12.99);

        expect(sut).toHaveProperty('name', 'sunglasses');
        expect(sut.price).toBeCloseTo(12.99);
    });
});
