import { Order } from './order';
import { ShoppingCartMock, MessagingMock, PersistencyMock, CustomerMock } from './order_mocks';

const createSut = () => {
    const shoppingCartMock = new ShoppingCartMock();
    const messagingMock = new MessagingMock();
    const persistencyMock = new PersistencyMock();
    const customerMock = new CustomerMock();
    const sut = new Order(
        shoppingCartMock,
        messagingMock,
        persistencyMock,
        customerMock
    );

    return {
        sut,
        shoppingCartMock,
        messagingMock,
        persistencyMock,
        customerMock
    }
}

describe("ORDER", () => {
    it('should not checkout if cart is empty', () => {
        const { sut, shoppingCartMock } = createSut();
        const shoppingCartMockSpy = jest
            .spyOn(shoppingCartMock, 'isShoppingCartEmpty')
            .mockReturnValueOnce(false);
        sut.checkout();
        expect(shoppingCartMockSpy).toHaveBeenCalledTimes(1);
        expect(sut.orderStatus).toBe('closed');
    });

    it('should send an email to customer', () => {
        const { sut, messagingMock } = createSut();
        const messagingMockSpy = jest
            .spyOn(messagingMock, 'sendMessage');
        sut.checkout();
        expect(messagingMockSpy).toHaveBeenCalledTimes(1);
    });
});
