import { Discount } from "./discount";
import { CartItem } from "./interfaces/cart_item";

export class ShoppingCart {
    private readonly _items: CartItem[] = [];

    constructor(
        private readonly discount: Discount
    ) { }

    get items(): Readonly<CartItem[]> {
        return this._items;
    }

    addProduct(product: CartItem): void {
        this._items.push(product);
    }

    removeProduct(index: number): void {
        this._items.slice(index, 1);
    }

    totalPrice(): number {
        let totalPrice = this._items.reduce((sum, product) => sum + product.price, 0)
        return this.formatNumber(totalPrice);
    }

    totalWithDiscount(): number {
        const newPrice = this.discount.calculate(this.totalPrice())
        return this.formatNumber(newPrice);
    }

    private formatNumber(value: number): number {
        return value.toFixed(2) as unknown as number
    }

    isShoppingCartEmpty(): boolean {
        return this._items.length === 0;
    }

    clearShoppingCart(): void {
        this._items.length = 0;
        console.log('shopping cart has been cleaned');
    }

}
