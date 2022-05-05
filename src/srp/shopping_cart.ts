type Product = { name: string, price: number }
type OrderStatus = 'open' | 'closed';

export class ShoppingCart {
    private readonly _items: Product[] = [];
    private orderStatus: OrderStatus = 'open';

    get items(): Readonly<Product[]> {
        return this._items;
    }

    addProduct(product: Product): void {
        this._items.push(product);
    }

    removeProduct(index: number): void {
        this._items.slice(index, 1);
    }

    totalPrice(): number {
        let totalPrice = this._items.reduce((sum, product) => sum + product.price, 0)
        return this.formatNumber(totalPrice);
    }

    private formatNumber(value: number): number {
        return value.toFixed(2) as unknown as number
    }

    checkout(): void {
        if (this.isShoppingCartEmpty()) {
            console.log("Your shopping cart is empty");
            return;
        }

        this.orderStatus = 'closed';
        this.sendMessage(`received order! total: ${this.totalPrice()}`);
        this.saveOrder();
        this.clearShoppingCart();
    }

    isShoppingCartEmpty(): boolean {
        return this._items.length === 0;
    }

    private sendMessage(msg: string): void {
        console.log(msg);
    }

    private saveOrder(): void {
        console.log('saved order');
    }

    private clearShoppingCart(): void {
        this._items.length = 0;
        console.log('shopping cart has been cleaned');
    }

}

const shoppingCart = new ShoppingCart();
shoppingCart.addProduct({ name: 'Shirt', price: 29.99 });
shoppingCart.addProduct({ name: 'Pant', price: 49.99 });
shoppingCart.addProduct({ name: 'Cap', price: 10.99 });

console.log(shoppingCart.items);
console.log(shoppingCart.totalPrice());
shoppingCart.checkout();
