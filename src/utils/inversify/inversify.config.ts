import 'reflect-metadata';
import { Container } from "inversify";
import { ConcreteA } from "./concretea";
import { ConcreteB } from "./concreteb";
import { ConcreteC } from "./concretec";
import { IDepA } from "./idepa";
import { IDepB } from "./idepb";
import { IDepC } from "./idepc";
import { TYPES } from "./types";

let container = new Container();

// IDepA will be singleton.
container.bind<IDepA>(TYPES.IDepA).to(ConcreteA).inSingletonScope();

// IDepB will be transient. We will get a new instance very time we request one.
container.bind<IDepB>(TYPES.IDepB).to(ConcreteB).inTransientScope();

// IDepC will have request scope. It will return the same instance until we call container.unbind.
container.bind<IDepC>(TYPES.IDepC).to(ConcreteC).inRequestScope();

export default container;