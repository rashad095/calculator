function calculateTriangleArea() {
    const baseField = document.getElementById('triangle-base');
    const baseValueText = baseField.value;
    const base = parseFloat(baseValueText);
    console.log(base);

    const heightField = document.getElementById('triangle-height');
    const heightValueText = heightField.value;
    const height = parseFloat(heightValueText)
    console.log(height);

    const area = 0.5 * base * height;
    console.log(area);

    const areaSpan = document.getElementById('triangle-area');
    areaSpan.innerText = area;

    addToCalculationEntry('Triangle', area);

}

function calculateRectangleArea() {
    const widthField = document.getElementById('rectangle-width');
    const widthValueText = widthField.value;
    const width = parseFloat(widthValueText);
    console.log(width);

    const lenghtField = document.getElementById('rectangle-length');
    const lenghtValueText = lenghtField.value;
    const length = parseFloat(lenghtValueText);
    console.log(length);

    if(isNaN(width) || isNaN(length)){
        alert('Please insert a number');
        return;
    }

    const area = width * length;

    const rectangleAreaSpan = document.getElementById('rectangle-area');
    rectangleAreaSpan.innerText = area;

    addToCalculationEntry('Rectangle', area);
}

function calculateParallelogramArea(){
    const base = getInputValue('parallelogram-base');
    const height = getInputValue('parallelogram-height');
    // if(isNaN(base) || (height)){
    //     alert('Please insert number');
    //     return;
    // }


    const area = base * height;
    setElementInnerText('parallelogram-area', area);

    addToCalculationEntry('Parallelogram', area)
}


function calculateEllipseArea (){
    const large = getInputValue('ellipse-radius');
    const short = getInputValue('ellipse-second');
    const area = 3.14 * large * short;
    const areaTwoDecimal = area.toFixed(2);
    setElementInnerText('ellipse-area', areaTwoDecimal);

    addToCalculationEntry('ellipse-area', areaTwoDecimal);
}

function getInputValue(fieldId){
    const inputField = document.getElementById(fieldId);
    const inputValueText = inputField.value;
    const value = parseFloat(inputValueText);
    return value;
}

function setElementInnerText(elementId, area){
    const element = document.getElementById(elementId);
    element.innerText = area;
}

function addToCalculationEntry(areaType, area){
    console.log(areaType+ '' + area);
    const calculationEntry = document.getElementById('calculation-entry');

    const count = calculationEntry.childElementCount;

    const p = document.createElement('p');
    p.classList.add('my-4');
    p.innerHTML = `${areaType} ${area} cm<sup>2</sup> <button class="btn btn-sm btn-success">Convert</button>`;

    calculationEntry.appendChild(p);
}