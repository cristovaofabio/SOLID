import { OrderStatus } from "./interfaces/order_status";
import { CustomerOrder } from "./interfaces/customer_protocol";
import { ShoppingCartProtocol } from "./interfaces/shopping_cart_protocol";
import { MessagingProtocol } from "./interfaces/messaging_protocol";
import { PersistencyProtocol } from "./interfaces/persistency_protocol";

export class Order {
    private _orderStatus: OrderStatus = 'open';

    constructor(
        private readonly cart: ShoppingCartProtocol,
        private readonly messaging: MessagingProtocol,
        private readonly persistency: PersistencyProtocol,
        private readonly customer: CustomerOrder,
    ) { }

    get orderStatus(): OrderStatus {
        return this._orderStatus;
    }

    checkout(): void {
        if (this.cart.isShoppingCartEmpty()) {
            console.log("Your shopping cart is empty");
            return;
        }

        this._orderStatus = 'closed';
        this.messaging.sendMessage(`Received order! total: ${this.cart.totalWithDiscount()}`);
        this.persistency.saveOrder();
        this.cart.clearShoppingCart();

        console.log('The customer is: ', this.customer.getName(), this.customer.getIDN());
    }
}
