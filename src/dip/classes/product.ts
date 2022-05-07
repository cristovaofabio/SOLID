import { CartItem } from "./interfaces/cart_item";

export class Product implements CartItem {
    constructor(
        public name: string,
        public price: number,
    ) { }
}
