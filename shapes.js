class Shape {
    constructor(colour = "Transparent") {
      this.colour = colour;
      this.type = "Shape";
    }
    
  
    describe() {
    console.log(`A ${this.colour} ${this.type}`);
  }
}
  const myShape = new Shape("blue");
  myShape.describe();
  console.log(myShape.colour); 
  console.log(myShape.type); 

//3rd question &4th question
class Square extends Shape {
    constructor(colour, sideLength) {
      super(colour);
      this.sideLength = sideLength;
      this.type = "Square";
    }
    area()
    {
        
      return this.sideLength*this.sideLength;
    }
  }
  //5th question
  const mySquare = new Square("voilet", 4);
  console.log(mySquare.colour); 
  console.log(mySquare.sideLength);
  console.log(mySquare.type);
  mySquare.describe(); 
 

  console.log(mySquare.area());

//6th question
  class Rectangle extends Shape {
    constructor(colour, width, height) {
      super(colour);
      this.width = width;
      this.height = height;
      this.type = "Rectangle";
    }
    area()
    {
        return this.width*this.height;
    }
  }
  const myRectangle = new Rectangle("yellow", 4, 8);
  console.log(myRectangle.colour);
  console.log(myRectangle.width); 
  console.log(myRectangle.height); 
  console.log(myRectangle.type); 
  myRectangle.describe(); 
  console.log(myRectangle.area());

//7th question
  //Run the following code and explain it in as much
    //   technical detail as you can:
       const square = new Square("blue", 5);
       const rectangle = new Rectangle("red", 5, 6);
       console.log( square.area() ); // 25
       console.log( rectangle.area() ); // 30
       for ( const shape of [square, rectangle] ) shape.describe();


       //The first line creates a instance of class named Square with color blue and sidelength 5
       //the second line creates a instance of class named Rectangle with color red and height and width respectively
       //the third and fourth line prints the area of the square and rectangle.
       //the for loop runs for square and rectangle  invoked the describe() method