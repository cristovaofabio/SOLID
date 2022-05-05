import { Messaging } from "./services/messaging";
import { Order } from "./entities/order";
import { Persistency } from "./services/persistency";
import { Product } from "./entities/product";
import { ShoppingCart } from "./entities/shopping_cart";

const shoppingCart = new ShoppingCart();
const messaging = new Messaging();
const persistency = new Persistency();

const order = new Order(shoppingCart, messaging, persistency);

shoppingCart.addProduct(new Product('Shirt', 29.99));
shoppingCart.addProduct(new Product('Pant', 49.99));
shoppingCart.addProduct(new Product('Cap', 10.99));

console.log(shoppingCart.items);
console.log(shoppingCart.totalPrice());
order.checkout();
