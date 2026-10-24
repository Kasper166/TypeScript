const arr = [{name: "Kasper"}, {name: "John"}, {name: "Jane"}];


// error undifend behavior: const el = arr.pop().name;


const el = arr.pop()?.name; 
