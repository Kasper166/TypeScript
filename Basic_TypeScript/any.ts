let  x: any = 1; // ignore type checking

let y: unknown = 1; // unknown type checking

if (typeof y === "number") {
    const result = y + 1; // type is number
}
else if (typeof y == "string") {
    const result = y.length;
}

const result = (x as number) + 1; // type assertion


function processFeedback(input: unknown): void { 
    if (typeof input == 'string') {
        console.log(input);
    }
    else if (typeof input == 'number') {
        console.log(input);
    }
    else if (input instanceof Blob) {
        console.log(input.size);
    }
    else {
        console.log("Unknown type");
    }
}


