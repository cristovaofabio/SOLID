import { OrderStatus } from "./interfaces/order_status";
import { Messaging } from "../services/messaging";
import { Persistency } from "../services/persistency";
import { ShoppingCart } from "./shopping_cart";

export class Order {
    private _orderStatus: OrderStatus = 'open';

    constructor(
        private readonly cart: ShoppingCart,
        private readonly messaging: Messaging,
        private readonly persistency: Persistency,
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
    }
}
