import {Deserializable} from "./deserializable.model";

export class LoanInformation implements Deserializable {
    public loanAmount: number;
    public loanTerm: number;
    public loanTermUnit: string; 
    public interestRate: number;

    deserialize(input: any) {
        // TODO don't include extra vars 
        Object.assign(this, input);
        return this;
    }

}

