const PI = Math.PI;

console.log(calcCircleArea(1));
console.log(calcCirclePeri(1));
console.log(calcAnnulusArea(2, 1));
console.log(calcRightTriangleArea(1, 2));
console.log(calcRightTrianglePeri(1, 2));
console.log(calcEquilateralTriangleArea(1));
console.log(calcEquilateralTrianglePeri(1));
console.log(calcIsoscelesTriangleArea(2, 1));
console.log(calcIsoscelesTriangleArea(2, 1));
console.log(calcTriangleArea(3, 4, 5));
console.log(calcTrianglePeri(3, 4, 5));
console.log(calcSquareArea(1));
console.log(calcSquarePeri(1));
console.log(calcRectangleArea(1, 2));
console.log(calcRectanglePeri(1, 2));
console.log(calcRhombusArea(1, 2));
console.log(calcRhombusPerimeter(1));
console.log(calcRhomboidArea(1, 2, 3));
console.log(calcRhomboidPeri(1, 2, 3));
console.log(calcRegPolygonArea(1, 5));
console.log(calcRegPolygonPeri(1, 5));
console.log(calcRightSolidVolume(1, 2, 3));
console.log(calcRightSolidSurfAr(1, 2, 3));
console.log(calcRightCylinderVolume(1, 1));
console.log(calcRightCylinderSurfAr(1, 1));
console.log(calcUniformPrismVolume(1, 4));
console.log(calcUniformPrismSurfAr(1, 4));
console.log(calcRightPrismVolume(1, 4, 2));
console.log(calcRightPrismSurfAr(1, 4, 2));


/* CIRCLES, ELLIPSES, ETC *************************************************************************************** */

function calcCircleArea(radius) {
    if (radius <= 0) {
        area = null;
    }

    else {
        area = PI * radius ** 2;
    }

    return area;
}

function calcCirclePeri(radius) { // technically circumference, here peri for consistency
    if (radius <= 0) {
        perimeter = null;
    }

    else {
        perimeter = 2 * PI * radius;
    }

    return perimeter;
}

function calcAnnulusArea(outerRadius, innerRadius) {
    if (outerRadius <= 0 || innerRadius <= 0 || outerRadius < innerRadius) {
        area = null;
    }
    
    else {
        area = PI * (outerRadius ** 2 - innerRadius ** 2); 
    }

    return area;
}



/* TRIANGLES ************************************************************************************************** */

function calcRightTriangleArea(cathetus1, cathetus2) {
    if (cathetus1 <= 0 || cathetus2 <= 0) {
        area = null;
    }
    
    else {
        area = 0.5 * (cathetus1 * cathetus2);
    }
    
    return area;
}

function calcRightTrianglePeri(cathetus1, cathetus2){
    if (cathetus1 <= 0 || cathetus2 <= 0) {
        perimeter = null;
    }

    else {
        let hypothenuse = (cathetus1 ** 2 + cathetus2 ** 2) ** 0.5;
        perimeter = cathetus1 + cathetus2 + hypothenuse;
    }

    return perimeter;
}

function calcEquilateralTriangleArea(side) {
    if (side <= 0) {
        area = null;
    }

    else {
        area = 0.25 * (3 ** 0.5) * side;
    }
    
    return area;
}

function calcEquilateralTrianglePeri(side) {
    if (side <= 0) {
        perimeter = null;
    }

    else {
        perimeter = 3 * side;
    }

    return perimeter;
}

function calcIsoscelesTriangleArea(equalSide, differentSide) {
    if (equalSide <= 0 || differentSide <= 0) {
        area = null;
    }

    else {
        let height = (equalSide ** 2 - (0.5 * differentSide) ** 2) ** 0.5;
        area = 0.5 * (height * differentSide);
    }
    
    return area;
}

function calcIsoscelesTrianglePeri (equalSide, differentSide) {
    if (equalSide <= 0 || differentSide <= 0) {
        perimeter = null;
    }

    else {
        perimeter = 2 * equalSide + differentSide;
    }

    return perimeter;
}

function calcTriangleArea() {
    if (arguments[0] <= 0 || arguments[1] <= 0 || arguments[2] <= 0 || arguments.length > 3) {
        area = null;
    }
    // if only one value, it assumes it's equilateral
    else if (arguments.length === 1) {
        area = 0.25 * (3 ** 0.5) * arguments[0];
    }

    // if two values, it assumes it's isosceles and the first value is for the equal sides
    else if(arguments.length === 2) {
        let height = (arguments[0] ** 2 - (0.5 * arguments[1]) ** 2) ** 0.5;
        area = 0.5 * (height * arguments[1]);
    }

    // if three values, it uses Heron's formula
    else if(arguments.length === 3) {
        let semiperimeter = (arguments[0] + arguments[1] + arguments[2]) / 2;
        area = (semiperimeter * (semiperimeter - arguments[0]) * (semiperimeter - arguments[1])
        * (semiperimeter - arguments[2])) ** 0.5;
    }

    return area;
}

function calcTrianglePeri() {
    if (arguments[0] <= 0 || arguments[1] <= 0 || arguments[2] <= 0 || arguments.length > 3) {
        perimeter = null;
    }
    // if only one value, it assumes it's equilateral
    else if (arguments.length === 1) {
        perimeter = 3 * arguments[0];    
    }

    // if two values, it assumes it's isosceles and the first value is for the equal sides
    else if(arguments.length === 2) {
        perimeter = 2 * arguments[0] + arguments[1];
    }

    // if three values, it adds them up
    else if(arguments.length === 3) {
        perimeter = arguments[0] + arguments[1] + arguments[2];
    }

    return perimeter;
}



/* QUADRILATERALS ********************************************************************************************** */

function calcSquareArea(side) {
    if (side <= 0) {
        area = null;
    }

    else {
        area = side ** 2;
    }
    
    return area;
}

function calcSquarePeri(side) {
    if (side <= 0) {
        area = null;
    }

    else {
        perimeter = 4 * side;
    }

    return perimeter;
}

function calcRectangleArea(side1, side2) {
    if (side1 <= 0 || side2 <= 0) {
        area = null;
    }

    else {
        area = side1 * side2;
    }
    
    return area;
}

function calcRectanglePeri(side1, side2) {
    if (side1 <= 0 || side2 <= 0) {
        perimeter = null;
    }
    
    else {
        perimeter = 2 * (side1 + side2);
    }

    return perimeter;
}

function calcRhombusArea(diagonal1, diagonal2) {
    if (diagonal1 <= 0 || diagonal2 <= 0) {
        area = null;
    }

    else {
        area = diagonal1 * diagonal2;
    }

    return area;
}

function calcRhombusPerimeter() {
    if (arguments[0] <= 0 || arguments[1] <= 0 || arguments.length > 2) {
        perimeter = null;
    }

    // if only one value, it assumes it's the side
    if (arguments.length === 1) {
        perimeter = 4 * arguments[0];
    }

    // if two values, it assumes they're the diagonals
    else if (arguments.length === 2) {
        let side = (0.5 * arguments[0] + 0.5 * arguments[1]) ** 0.5;
        perimeter = 4 * side;
    }

    return perimeter;
}

function calcRhomboidArea(base, height) {
    if (base <= 0 || height <= 0) {
        area = null;
    }

    else {
        area = base * height;
    }
    
    return area;
}

function calcRhomboidPeri(base, side) {
    if (base <= 0 || side <= 0) {
        perimeter = null;
    }

    else {
        perimeter = 2 * (base + side);
    }

    return perimeter;
}



/* REGULAR POLYGONS ******************************************************************************************** */

function calcRegPolygonArea(sideLength, sideNumber) {
    if (sideLength <= 0 || sideNumber < 3 || sideNumber % 1 !== 0) {
        area = null;
    }

    else {
        area = (sideLength ** 2 * sideNumber) / (4 * Math.tan(PI / sideNumber));
    }

    return area;
}

function calcRegPolygonPeri(sideLength, sideNumber) {
    if (sideLength <= 0 || sideNumber < 3 || sideNumber % 1 !== 0) {
        perimeter = null;
    }

    else {
        perimeter = sideLength * sideNumber;
    }

    return perimeter;
}



/* RIGHT CYLINDERS AND PRISMS */

function calcRightSolidVolume(baseArea, height) {
    if (baseArea <= 0 || height <= 0) {
        volume = null;
    }

    else {
        volume = baseArea * height;
    }

    return volume;
}

function calcRightSolidSurfAr(baseArea, basePerimeter, height) {
    if (baseArea <= 0 || basePerimeter <= 0 || height <= 0) {
        surfaceArea = null;
    }

    else {
        surfaceArea = 2 * baseArea + basePerimeter * height;
    }

    return surfaceArea;
}

function calcRightCylinderVolume(radius, height) {
    if (radius <= 0 || height <= 0) {
        volume = null;
    }

    else {
        let baseArea = PI * radius ** 2;
        let basePerimeter = 2 * PI * radius;
        volume = 2 * baseArea + basePerimeter * height;
    }

    return volume;
}

function calcRightCylinderSurfAr(radius, height) {
    if (radius <= 0 || height <= 0) {
        surfaceArea = null;
    }

    else {
        let baseArea = PI * radius ** 2;
        let basePerimeter = 2 * PI * radius;
        surfaceArea = 2 * baseArea + basePerimeter * height;
    }
    return surfaceArea;
}

function calcUniformPrismVolume(sideLength, sideNumber) {
    if (sideLength <= 0 || sideNumber < 3 || sideNumber % 1 !== 0) {
        volume = null;
    }

    else {
        let baseArea = (sideLength ** 2 * sideNumber) / (4 * Math.tan(PI / sideNumber));
        volume = baseArea * sideLength;
    }

    return volume;
}

function calcUniformPrismSurfAr(sideLength, sideNumber) {
    if (sideLength <= 0 || sideNumber < 3 || sideNumber % 1 !== 0) {
        surfaceArea = null;
    }

    else {
        let baseArea = (sideLength ** 2 * sideNumber) / (4 * Math.tan(PI / sideNumber));
        let basePerimeter = sideLength * sideNumber;
        surfaceArea = 2 * baseArea + basePerimeter * sideLength;
    }

    return surfaceArea;
}

function calcRightPrismVolume(sideLength, sideNumber, height) {
    if (sideLength <= 0 || sideNumber < 3 || sideNumber % 1 !== 0 || height <= 0) {
        volume = null;
    }

    else {
        let baseArea = (sideLength ** 2 * sideNumber) / (4 * Math.tan(PI / sideNumber));
        volume = baseArea * height;
    }

    return volume;
}

function calcRightPrismSurfAr(sideLength, sideNumber, height) {
    if (sideLength <= 0 || sideNumber < 3 || sideNumber % 1 !== 0 || height <= 0) {
        surfaceArea = null;
    }

    else {
        let baseArea = (sideLength ** 2 * sideNumber) / (4 * Math.tan(PI / sideNumber));
        let basePerimeter = sideLength * sideNumber;
        surfaceArea = 2 * baseArea + basePerimeter * height;
    }

    return surfaceArea;
}