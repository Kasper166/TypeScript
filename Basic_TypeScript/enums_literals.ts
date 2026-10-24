let direction1: string;

direction1 = "North";

let direction: "north" | "south" | "east" | "west"; // literal type


// enum type

enum Size {
    Small, 
    Medium,
    Large
}

Size.Small;

//var size: Size = 0;
var size: Size = Size.Small;


enum Direction {
    Up =  "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT"
}



