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
console.log(calcRightSolidVolume(1, 1));
console.log(calcRightSolidSurfAr(1, 1));
console.log(calcRightCylinderVolume(1, 1));
console.log(calcRightCylinderSurfAr(1, 1));
console.log(calcUniformPrismVolume(1, 4));
console.log(calcUniformPrismSurfAr(1, 4));
console.log(calcRightPrismVolume(1, 4, 2));
console.log(calcRightPrismSurfAr(1, 4, 2));


/* CIRCLES, ELLIPSES, ETC *************************************************************************************** */

function calcCircleArea(radius) {
    area = PI * radius ** 2;

    if (area === 0) {
        area = null;
    }

    return area;
}

function calcCirclePeri(radius) { // technically circumference, here peri for consistency
    perimeter = 2 * PI * radius;

    if (perimeter === 0) {
        perimeter = null;
    }

    return perimeter;
}

function calcAnnulusArea(outerRadius, innerRadius) {
    let areaOuter = calcCircleArea(outerRadius);
    let areaInner = calcCircleArea(innerRadius);
    area = areaOuter - areaInner;

    if (area <= 0) {
        area = null;
    }

    return area;
}



/* TRIANGLES ************************************************************************************************** */

function calcRightTriangleArea(cathetus1, cathetus2) {
    area = 0.5 * (cathetus1 * cathetus2);
    
    if (area === 0) {
        area = null;
    }
    
    return area;
}

function calcRightTrianglePeri(cathetus1, cathetus2, hypothenuse){
    if (hypothenuse == undefined) {
        hypothenuse = (cathetus1 ** 2 + cathetus2 ** 2) ** 0.5;
    }
    perimeter = cathetus1 + cathetus2 + hypothenuse;
    
    if (perimeter === 0) {
        perimeter = null;
    }

    return perimeter;
}

function calcEquilateralTriangleArea(side) {
    area = 0.25 * (3 ** 0.5) * side;
    
    if (area === 0) {
        area = null;
    }
    
    return area;
}

function calcEquilateralTrianglePeri(side) {
    perimeter = 3 * side;
    
    if (perimeter === 0) {
        perimeter = null;
    }

    return perimeter;
}

function calcIsoscelesTriangleArea(equalSide, differentSide) {
    height = (equalSide ** 2 - (0.5 * differentSide) ** 2) ** 0.5;
    area = 0.5 * (height * differentSide);
    
    if (area === 0) {
        area = null;
    }
    
    return area;
}

function calcIsoscelesTrianglePeri (equalSide, differentSide) {
    perimeter = 2 * equalSide + differentSide;
    
    if (perimeter === 0) {
        perimeter = null;
    }

    return perimeter;
}

function calcTriangleArea() {
    // if only one value, it assumes it's equilateral
    if (arguments.length === 1) {
        area = calcEquilateralTriangleArea(arguments[0]);
        return area;
    }

    // if two values, it assumes it's isosceles
    else if(arguments.length === 2) {
        area = calcIsoscelesTrianglePeri(arguments[0], arguments[1]);
        return area;
    }

    // if three values, it uses Heron's formula
    else if(arguments.length === 3) {
        semiperimeter = (arguments[0] + arguments[1] + arguments[2]) / 2;
        area = (semiperimeter * (semiperimeter - arguments[0]) * (semiperimeter - arguments[1]) * (semiperimeter - arguments[2])) ** 0.5;
        
        if (area === 0) {
            area = null;
        }

        return area;
    }

    else {
        area = null;
        return area;
    }

}

function calcTrianglePeri() {
    // if only one value is entered, it assumes it's equilateral
    if (arguments.length === 1) {
        perimeter = calcEquilateralTrianglePeri(arguments[0]);
        return perimeter;
    }

    // if two values are entered, it assumes it's isosceles
    else if(arguments.length === 2) {
        perimeter = calcIsoscelesTrianglePeri(arguments[0], arguments[1]);
        return perimeter;
    }

    // if three values are entered, it adds them up
    else if(arguments.length === 3) {
        perimeter = arguments[0] + arguments[1] + arguments[2];
        
        if (perimeter === 0) {
            perimeter = null;
        }

        return perimeter;
    }

    // if no values or more than 3 values are entered, the result is null
    else {
        perimeter = null;
        return perimeter;
    }
}



/* QUADRILATERALS ********************************************************************************************** */

function calcSquareArea(side) {
    area = side ** 2;
    
    if (area === 0) {
        area = null;
    }
    
    return area;
}

function calcSquarePeri(side) {
    perimeter = 4 * side;
    
    if (perimeter === 0) {
        perimeter = null;
    }

    return perimeter;
}

function calcRectangleArea(side1, side2) {
    area = side1 * side2;
    
    if (area === 0) {
        area = null;
    }
    
    return area;
}

function calcRectanglePeri(side1, side2) {
    perimeter = 2 * (side1 + side2);
    
    if (perimeter === 0) {
        perimeter = null;
    }

    return perimeter;
}

function calcRhombusArea(diagonal1, diagonal1) {
    area = diagonal1 * diagonal1;
    
    if (area === 0) {
        area = null;
    }
    
    return area;
}

function calcRhombusPerimeter() {
    // if only one value, it assumes it's the side
    if (arguments.length === 1) {
        perimeter = 4 * arguments[0];
    }

    // if two values, it assumes they're the diagonals
    else if (arguments.length === 2) {
        side = (0.5 * arguments[0] + 0.5 * arguments[1]) ** 0.5;
        perimeter = 4 * side;
    }

    else {
        perimeter = null;
    }

    if (perimeter === 0) {
        perimeter = null;
    }

    return perimeter;
}

function calcRhomboidArea(base, side, height) {
    area = base * height;
    
    if (area === 0) {
        area = null;
    }
    
    return area;
}

function calcRhomboidPeri(base, side, height) {
    perimeter = 2 * (base + side);

    if (perimeter === 0) {
        perimeter = null;
    }

    return perimeter;
}



/* REGULAR POLYGONS ******************************************************************************************** */

function calcRegPolygonArea(sideLength, sideNumber) {
    area = (sideLength ** 2 * sideNumber) / (4 * Math.tan(PI / sideNumber));
    
    if (area === 0) {
        area = null;
    }

    return area;
}

function calcRegPolygonPeri(sideLength, sideNumber) {
    perimeter = sideLength * sideNumber;

    if (perimeter === 0) {
        perimeter = null;
    }

    return perimeter;
}



/* RIGHT CYLINDERS AND PRISMS */

function calcRightSolidVolume(baseArea, height) {
    volume = baseArea * height;

    if(volume === 0) {
        volume = null;
    }

    return volume;
}

function calcRightSolidSurfAr(baseArea, sideArea) {
    surfaceArea = 2 * baseArea + sideArea;

    if(surfaceArea === 0) {
        surfaceArea = null;
    }

    return surfaceArea;
}

function calcRightCylinderVolume(radius, height) {
    baseArea = calcCircleArea(radius);
    volume = calcRightSolidVolume(baseArea, height);
    return volume;
}

function calcRightCylinderSurfAr(radius, height) {
    baseArea = calcCircleArea(radius);
    basePeri = calcCirclePeri(radius);
    sideArea = calcRectangleArea(basePeri, height);
    surfaceArea = calcRightSolidSurfAr(baseArea, sideArea);
    return surfaceArea;
}

function calcUniformPrismVolume(sideLength, sideNumber) {
    baseArea = calcRegPolygonArea(sideLength, sideNumber);
    volume = calcRightSolidVolume(baseArea, sideLength);
    return volume;
}

function calcUniformPrismSurfAr(sideLength, sideNumber) {
    baseArea = calcRegPolygonArea(sideLength, sideNumber);
    sideArea = calcSquareArea(sideLength) * sideNumber;
    surfaceArea = calcRightSolidSurfAr(baseArea, sideArea);
    return surfaceArea;
}

function calcRightPrismVolume(sideLength, sideNumber, height) {
    baseArea = calcRegPolygonArea(sideLength, sideNumber);
    volume = calcRightSolidVolume(baseArea, height);
    return volume;
}

function calcRightPrismSurfAr(sideLength, sideNumber, height) {
    baseArea = calcRegPolygonArea(sideLength, sideNumber);
    sideArea = calcRectangleArea(sideLength, height) * sideNumber;
    surfaceArea = calcRightSolidSurfAr(baseArea, sideArea);
    return surfaceArea;
}

