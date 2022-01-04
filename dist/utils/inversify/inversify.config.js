"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var inversify_1 = require("inversify");
var concretea_1 = require("./concretea");
var concreteb_1 = require("./concreteb");
var concretec_1 = require("./concretec");
var types_1 = require("./types");
var container = new inversify_1.Container();
// IDepA will be singleton.
container.bind(types_1.TYPES.IDepA).to(concretea_1.ConcreteA).inSingletonScope();
// IDepB will be transient. We will get a new instance very time we request one.
container.bind(types_1.TYPES.IDepB).to(concreteb_1.ConcreteB).inTransientScope();
// IDepC will have request scope. It will return the same instance until we call container.unbind.
container.bind(types_1.TYPES.IDepC).to(concretec_1.ConcreteC).inRequestScope();
exports.default = container;
//# sourceMappingURL=inversify.config.js.map