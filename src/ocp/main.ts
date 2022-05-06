import { FiftyPercentDiscount } from "./classes/discount";
import { Order } from "./classes/order";
import { Product } from "./classes/product";
import { ShoppingCart } from "./classes/shopping_cart";
import { Messaging } from "./services/messaging";
import { Persistency } from "./services/persistency";

const fiftyPercentDiscount = new FiftyPercentDiscount();
const shoppingCart = new ShoppingCart(fiftyPercentDiscount);
const messaging = new Messaging();
const persistency = new Persistency();

const order = new Order(shoppingCart, messaging, persistency);

shoppingCart.addProduct(new Product('Shirt', 29.99));
shoppingCart.addProduct(new Product('Pant', 49.99));
shoppingCart.addProduct(new Product('Cap', 10.99));

console.log(shoppingCart.items);
console.log('Total:', shoppingCart.totalPrice());
console.log('Total with discount:', shoppingCart.totalWithDiscount());
order.checkout();
