import { inject, injectable } from "inversify";
import { IDepA } from "./idepa";
import { IDepB } from "./idepb";
import { IDepC } from "./idepc";
import { TYPES } from "./types";

@injectable()
export class ConcreteC implements IDepC{

    constructor(@inject(TYPES.IDepA)
        private _depA: IDepA, 
        @inject(TYPES.IDepB)
        private _depB: IDepB){
    }

    doC(): void {
        this._depA.doA();
        this._depB.doB();
        console.log("Doing C");
    }
}