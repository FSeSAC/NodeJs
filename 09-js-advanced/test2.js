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
console.log('---------------');

// 직사각형 클래스
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
console.log(rec2.getArea());

console.log('---------------');

// 삼각형 클래스
class Triangle extends Shape {
    constructor (width, height) {
        super(width, height);
    }
    // 오버라이딩: 부모 클래스랑 동일한 메서드 존재시 본인의 메서드 우선 사용
    getArea() {
        return this.width * this.height / 2
    }
}

let tri = new Triangle(4,5);
console.log(tri.getArea());
console.log('---------------');

// 원 클래스
class Circle extends Shape {
    constructor (width, height, radius) {
        super(width, height);
        this.radius = radius;
    }
    getArea() {
        return this.radius**2 * Math.PI
    }
}

let cir = new Circle(2,2,3);
console.log(cir.getArea());