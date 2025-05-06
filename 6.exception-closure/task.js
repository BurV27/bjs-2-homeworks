function parseCount(parse){
    try {
        let result = +Number.parseFloat(parse);
        if (isNaN(result)){
            throw new Error ("Невалидное значение");
        }
        return result
    } catch(error){
        throw new Error ("Невалидное значение");
    }
}

function validateCount(parse){
    try {
        return parseCount(parse);
    } catch(error){
        return error;
    }
}


class Triangle{
    constructor(firstSide, twoSide, threeSide){
        this.firstSide = +firstSide;
        this.twoSide = +twoSide;
        this.threeSide = +threeSide;
        if ((firstSide + twoSide) < threeSide || (threeSide + twoSide) < firstSide  || (firstSide + threeSide) < twoSide){
            throw new Error ("Треугольник с такими сторонами не существует");
        };
        };
        get perimeter() {
            return this.firstSide + this.twoSide + this.threeSide
        }

        get area(){
            let p = (1 / 2) * (this.firstSide + this.twoSide + this.threeSide);
            let s = Math.sqrt(p*(p - this.firstSide)*(p - this.twoSide)*(p - this.threeSide));
            return +s.toFixed(3)
        }
}

function getTriangle(firstSide, twoSide, threeSide){
    try {
        const newTriangle = new Triangle(firstSide, twoSide, threeSide)
        return newTriangle
    } catch(error){
        return {
            get area() {return "Ошибка! Треугольник не существует"},
            get perimeter() {return "Ошибка! Треугольник не существует"}
        }
}
}
