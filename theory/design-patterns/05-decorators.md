#### What is a decorator?

* A decorator is an experimental typescript feature that allows us to annotate classes, methods and properties in order to extend their functionality without the need to subclass them.
* Decorator patterns respects the open/closed principle.
* Dinamically adding responsibilitites to an object at runtime.

Javascript does not support decorators.

#### How to enable decorators?

* If you attempt to use decorators in typescript, they won't work out of the box.
* You have to enable two fields in your tsconfig.json file.

#### Types of decorators

* Class.
* Method.
* Property.
* Accessors.

#### Method decorator arguments

* The class constructor.
* The method's name.
* The property descriptor.