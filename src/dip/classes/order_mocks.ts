import { ShoppingCartProtocol } from './interfaces/shopping_cart_protocol';
import { CartItem } from './interfaces/cart_item';
import { FormatNumberProtocol } from './interfaces/format_number_protocol';
import { FormatNumber } from '../services/format_number';
import { MessagingProtocol } from './interfaces/messaging_protocol';
import { PersistencyProtocol } from './interfaces/persistency_protocol';
import { CustomerOrder } from './interfaces/customer_protocol';

export class ShoppingCartMock implements ShoppingCartProtocol {
    items: readonly CartItem[] = [];
    formatNumber: FormatNumberProtocol = new FormatNumber();
    addProduct(product: CartItem): void {
        return;
    }
    removeProduct(index: number): void {
        return;
    }
    totalPrice(): number {
        return 1;
    }
    totalWithDiscount(): number {
        return 1;
    }
    isShoppingCartEmpty(): boolean {
        return false;
    }
    clearShoppingCart(): void {
        return;
    }
}

export class MessagingMock implements MessagingProtocol {
    sendMessage(msg: string): void {
        console.log('some message');
    }
}

export class PersistencyMock implements PersistencyProtocol {
    saveOrder(): void {
        console.log('order saved');
    }
}

export class CustomerMock implements CustomerOrder {
    getName(): string {
        return '';
    }
    getIDN(): string {
        return '';
    }
}
