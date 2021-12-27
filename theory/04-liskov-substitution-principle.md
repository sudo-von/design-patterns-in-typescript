#### Liskov substitution principle

The principle defines that objects of a superclass shall be replaceable with objects of its subclasses without breaking the application. 

An overridden method of a subclass needs to accept the same input parameter values as the method of the superclass. That means you can implement less restrictive validation rules, but you are not allowed to enforce stricter ones in your subclass.

* Also known as substitutability.
* You should be able to use a subclass in place of its parent class.
* A subclass should be used wherever its base class can be used.