import { CartItem } from "./cart_item";
import { FormatNumberProtocol } from "./format_number_protocol";

export interface ShoppingCartProtocol {
    items: Readonly<CartItem[]>;
    formatNumber: FormatNumberProtocol;

    addProduct(product: CartItem): void;

    removeProduct(index: number): void;

    totalPrice(): number;

    totalWithDiscount(): number;

    isShoppingCartEmpty(): boolean;

    clearShoppingCart(): void;
}
