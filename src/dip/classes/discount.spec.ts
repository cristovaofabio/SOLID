import { Discount, FiftyPercentDiscount, TenPercentDiscount } from "./discount";

const createSut = (className: new () => Discount): Discount => {
    return new className();
}

describe('DISCOUNT', () => {
    afterEach(() => jest.clearAllMocks());

    it('should apply fifty percent discount on price', () => {
        const sut = createSut(FiftyPercentDiscount);

        expect(sut.calculate(100.00)).toBeCloseTo(50.00);
    });

    it('should apply ten percent discount on price', () => {
        const sut = createSut(TenPercentDiscount);

        expect(sut.calculate(100.00)).toBeCloseTo(90.00);
    });
});
