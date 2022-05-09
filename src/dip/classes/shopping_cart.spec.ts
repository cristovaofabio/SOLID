import { CartItem } from "../../isp/classes/interfaces/cart_item";
import { Discount } from "./discount";
import { ShoppingCart } from "./shopping_cart";

const createSut = () => {
    const discountMock = createDiscountMock();
    const sut = new ShoppingCart(discountMock);
    return { sut, discountMock };
}

const createDiscountMock = () => {
    class DiscountMock extends Discount { };
    return new DiscountMock;
}

const createCartItemMock = (name: string, price: number) => {
    class CartItemMock implements CartItem {
        constructor(
            public name: string,
            public price: number) { }
    }

    return new CartItemMock(name, price);
}

const createSutWithProducts = () => {
    const { sut, discountMock } = createSut();
    const cartItem = createCartItemMock('Bag', 10.20);
    const cartItem2 = createCartItemMock('Shirt', 15.00);

    sut.addProduct(cartItem)
    sut.addProduct(cartItem2);

    return { sut, discountMock };
}

describe('SHOPPING CART', () => {
    it('should be an empty cart when no product is added', () => {
        const sut = createSut().sut;
        expect(sut.isShoppingCartEmpty()).toBe(true);
    });

    it('should have two items', () => {
        const { sut } = createSutWithProducts();
        expect(sut.items.length).toBe(2);
    });

    it('test total and total with discount', () => {
        const { sut } = createSutWithProducts();
        expect(sut.totalPrice()).toBe(25.20);
        expect(sut.totalWithDiscount()).toBe(25.20);
    });

    it('should remove products', () => {
        const { sut } = createSutWithProducts();
        expect(sut.items.length).toBe(2);
        sut.removeProduct(0);
        expect(sut.items.length).toBe(1);
    });
});
