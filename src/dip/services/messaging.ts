import { MessagingProtocol } from "../classes/interfaces/messaging_protocol";

export class Messaging implements MessagingProtocol{
    sendMessage(msg: string): void {
        console.log(msg);
    }
}
