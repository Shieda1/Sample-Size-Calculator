// https://calculator.swiftutors.com/sample-size-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const v4 = document.getElementById('v4');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const sampleSizeforInfinitePopulationRadio = document.getElementById('sampleSizeforInfinitePopulationRadio');
const zValueRadio = document.getElementById('zValueRadio');
const percentageofPopulationRadio = document.getElementById('percentageofPopulationRadio');
const confidenceLevelRadio = document.getElementById('confidenceLevelRadio');

let sampleSizeforInfinitePopulation;
let zValue = v1;
let percentageofPopulation = v2;
let confidenceLevel = v3;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');

sampleSizeforInfinitePopulationRadio.addEventListener('click', function() {
  variable1.textContent = '(Z) Z Value';
  variable2.textContent = '(p) Percentage of Population';
  variable3.textContent = '(C) Confidence Level';
  zValue = v1;
  percentageofPopulation = v2;
  confidenceLevel = v3;
  result.textContent = '';
});

zValueRadio.addEventListener('click', function() {
  variable1.textContent = '(SS) Sample Size for Infinite Population';
  variable2.textContent = '(p) Percentage of Population';
  variable3.textContent = '(C) Confidence Level';
  sampleSizeforInfinitePopulation = v1;
  percentageofPopulation = v2;
  confidenceLevel = v3;
  result.textContent = '';
});

percentageofPopulationRadio.addEventListener('click', function() {
  variable1.textContent = '(SS) Sample Size for Infinite Population';
  variable2.textContent = '(Z) Z Value';
  variable3.textContent = '(C) Confidence Level';
  sampleSizeforInfinitePopulation = v1;
  zValue = v2;
  confidenceLevel = v3;
  result.textContent = '';
});

confidenceLevelRadio.addEventListener('click', function() {
  variable1.textContent = '(SS) Sample Size for Infinite Population';
  variable2.textContent = '(Z) Z Value';
  variable3.textContent = '(p) Percentage of Population';
  sampleSizeforInfinitePopulation = v1;
  zValue = v2;
  percentageofPopulation = v3;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(sampleSizeforInfinitePopulationRadio.checked)
    result.textContent = `Sample Size for Infinite Population = ${computeSampleSizeforInfinitePopulation().toFixed(2)}`;

  else if(zValueRadio.checked)
    result.textContent = `Z Value = ${computeZValue().toFixed(2)}`;

  else if(percentageofPopulationRadio.checked)
    result.textContent = `Percentage of Population = ${computePercentageofPopulation().toFixed(2)}`;

  else if(confidenceLevelRadio.checked)
    result.textContent = `Confidence Level = ${computeConfidenceLevel().toFixed(2)}`;
})

// calculation

function computeSampleSizeforInfinitePopulation() {
  return (Math.pow(Number(zValue.value), 2) * Number(percentageofPopulation.value) * (1 - Number(percentageofPopulation.value))) / Math.pow(Number(confidenceLevel.value), 2);
}

function computeZValue() {
  return Math.sqrt((Number(sampleSizeforInfinitePopulation.value) * Math.pow(Number(confidenceLevel.value), 2)) / (Number(percentageofPopulation.value) * (1 - Number(percentageofPopulation.value))));
}

function computePercentageofPopulation() {
  return Number(costofGoodsManufactured.value) - Number(directMaterialsCost.value) - Number(factoryOverheadCost.value) - Number(openingWorkinProcessInventory.value) + Number(endingWorkinProcessInventory.value);
}

function computeConfidenceLevel() {
  return Math.sqrt((Math.pow(Number(zValue.value), 2) * Number(percentageofPopulation.value) * (1 - Number(percentageofPopulation.value))) / Number(sampleSizeforInfinitePopulation.value));
}