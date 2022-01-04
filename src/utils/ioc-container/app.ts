import { IoCContainer } from "./ioc-container";

interface IDepA {
    doA(): void;
}

interface IDepB {
    doB(): void;
}

interface IDepC {
    doC(): void;
}

class ConcreteA implements IDepA {
    doA(): void {
        console.log("Doing A");
    }
}

class ConcreteB implements IDepB {
    doB(): void {
        console.log("Doing B");
    }
}

class ConcreteC implements IDepC {
    constructor(private _concreteA: IDepA, private _concreteB: IDepB){}
    doC(): void {
        this._concreteA.doA();
        this._concreteB.doB();
        console.log("Doing C");
    }
}

let container = IoCContainer.instance;
container.register("IDepA", [], ConcreteA);
container.register("IDepB", [], ConcreteB);
container.register("IDepC", ["IDepA", "IDepB"], ConcreteC);

console.log("***********************");
let a = container.resolve<IDepA>("IDepA");
a.doA();
console.log("***********************");
let b = container.resolve<IDepB>("IDepB");
b.doB();
console.log("***********************");
let c = container.resolve<IDepC>("IDepC");
c.doC();
console.log("***********************");