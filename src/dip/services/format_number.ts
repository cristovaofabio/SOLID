import { FormatNumberProtocol } from "../classes/interfaces/format_number_protocol";

export class FormatNumber implements FormatNumberProtocol{
    newFormat(value: number): number {
        return value.toFixed(2) as unknown as number
    }
}
