class Shape {
    constructor (width, height) {
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width*this.height;
    }
}

let rec1 = new Shape(3,4);
console.log(rec1.getArea());


class Rectangle extends Shape {
    constructor (width, heigth)  {
        super(width, heigth);
    }
    getDiagonal() {
        return Math.sqrt(this.width**2 + this.height**2)
        // Math.sqrt() : 제곱근을 구하는 함수
        
    }

}

let rec2 = new Rectangle(4, 5);
console.log(rec2.getDiagonal());