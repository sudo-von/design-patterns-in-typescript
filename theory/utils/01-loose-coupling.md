#### Louse coupling

#### What is loose coupling?

Loose coupling refers to how much a component of code knows about the inner workings of another component of code. If it depends on knowing too much about a certain component, then it is considered highly coupled. When a component doesn’t know too much about the inner workings of other components it is considered loosely coupled.

#### What is high cohesion?

High cohesion refers to a component that is very well defined. Meaning that it serves only one purpose and it accomplishes that purpose very well. If you have a component that reads from a database, sends an email, prints out documents, then it does not have high cohesion. Each one of those should be separated out into its own component. By having a component do only one thing you can gain many benefits, such as testing only what you need, separation of concerns, and ease of maintenance.

* Software parts that communicate with each other have little to no knowledge of each other's actual implementation.
* Black boxes.
* Single responsibility principle.
* Separation of concerns.
* Factory pattern/object pool.
* Dependency injection.

#### Benefits

* Easier to work with large projects.
* Swap implementations.
* Testability.
* Components grow independently.