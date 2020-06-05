This is not a program to use. This project was created in order to show my skills that I acquired for 1 year of university.
  

# The idea of the program #
  

The program allows you to put objects in a warehouse and pick them up from there, interact with that objects. You can find items by it vendor code(number).
  

# About code #
  

Class Warehouse is the main class with methods. There will be added more methods soon. Method changeQuantity allows you to change parametr of quantity in the object instanceses.
Class Items extends from the class Warehouse. It has general characteristics of all the items that will be added.
Another classes that extend from the class Items has unique information for their type. And can have their own methods.
Function findByNumber(findByName) allows you to find the information about item by it number(name).
You can create and add new object with function createInstance. It creates instance of the class and add it to the warehouse. If there was such an object it will throw error to the object 'errors'.


