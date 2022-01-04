import { injectable } from "inversify";
import { IDepA } from "./idepa";

@injectable()
export class ConcreteA implements IDepA{
    doA(): void {
        console.log("Doing A");
    }
}