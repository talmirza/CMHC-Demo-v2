// Connecting the cities database
import cities from './cities.js';

// Google Maps Autocomplete initiation
const userInput = document.getElementById('city');
const options = {
    types: ['(cities)'],
    componentRestrictions: { country: 'ca' }
};
const autocomplete = new google.maps.places.Autocomplete(userInput, options);

//Initially hide the output part of the page
document.getElementById('output').style.visibility = 'hidden';

//Conversion from https://apps.neb-one.gc.ca/Conversion/conversion-tables.aspx?GoCTemplateCulture=en-CA#s1ss1
const LIFETIME = 25;

const calculateButton = document.getElementById('calculate');

//Get the output and calculations prepped and displayed once user input is submitted
calculateButton.addEventListener('click', function () {

    let place = autocomplete.getPlace();
    let city = place.address_components[0].long_name.toLowerCase();
    let area = metricFloorArea();

    geocode(place);
    getProvince(place);

    console.log(city);
    console.log(`${getProvince(place)} - Coordinates: ${geocode(place)}`);
    console.log(rate(city), EUI(city));
    

    let electricalSavings = electricitySaved(EUI(city).electricity, area);
    let gasSavings = gasSaved(EUI(city).gas, area);
    let oilSavings = oilSaved(EUI(city).oil, area);

    document.getElementById('electricityOutput').textContent
        = `Electricity savings: ${electricalSavings} kWh and 
        $${electricalCostSavings(electricalSavings, rate(city).electricity)}`;

    document.getElementById('gasOutput').textContent
        = `Natural Gas savings: ${gasSavings} m3 and 
        $${gasCostSavings(gasSavings, rate(city).gas)}`;
    
    document.getElementById('oilOutput').textContent
        = `Diesel savings: ${oilSavings} litres and 
        $${oilCostSavings(oilSavings, rate(city).oil)}`;

    document.getElementById('output').style.visibility = 'visible';
});

/////////////////////////////////////////////////////////////////////////////////////
function getProvince(place) {
    let province = place.formatted_address.split(', ')[1];
    return province;
}

function geocode(place) {
    let lat = place.geometry.location.lat();
    let lng = place.geometry.location.lng();
    return [lat, lng];
}

// Obtain the city's Energy Use Intensity (EUI) in gigajoules per square meter (GJ/m2)
function EUI(city) {
    let housingType = document.getElementById('housingtype').value;
    let baselineCode = document.getElementById('baselinecode').value;

    const cityInfo = cities[city].EUI[baselineCode][housingType];
    const electricity = cityInfo.electricity;
    const gas  = cityInfo.gas;
    const oil  = cityInfo.oil;

    return {electricity, gas, oil};
}

// Implied utility rates
function rate(city) {
    const electricity = cities[city].rate.electricity; // $/kWh
    const gas =         cities[city].rate.gas;         // $/m3
    const oil =         cities[city].rate.oil;         // $/L
    return {electricity, gas, oil};
}

// Switch floor area to metric units
function metricFloorArea() {
    let inputArea = document.getElementById('area').value;
    let inputUnit = document.getElementById('area-unit').value;
    const area = (inputUnit === 'square-feet') ? Math.round(inputArea * 0.0929) : inputArea;
    return area;
} 

// Figure out the closest city within the province to use data from
function getClosestCity (coordinates, province) {
    // Get all cities in the database that are from the same province

    // Loop through each of the cities to find the closest one

    return closestCity;
}

// Calculate electricity savings (kWh and Dollars)
function electricitySaved(EUI, area) {
    
    const GJTOKWH = 277.8; //kWh
    
    let baselinekWh = Math.round(area * EUI * GJTOKWH);
    let efficientkWh = baselinekWh * (1 - target.value);
    return Math.round(baselinekWh - efficientkWh);
}

function electricalCostSavings(savings, rate) {
    return Math.round(savings * rate);
}

// Calculate natural gas savings (cubic meters and Dollars)
function gasSaved(EUI, area) {
    
    const GJTOM3 = 26.853; // Cubic meters (m3)
    
    let baselineGas = Math.round(area * EUI * GJTOM3);
    let efficientGas = baselineGas * (1 - target.value);
    return Math.round(baselineGas - efficientGas);
}

function gasCostSavings(savings, rate) {
    return Math.round(savings * rate);
}

// Calculate oil savings (litres and Dollars)
function oilSaved(EUI, area) {
    
    const GJTOLITRE = 25.9; // Litres (L)
    
    let baselineOil = Math.round(area * EUI * GJTOLITRE);
    let efficientOil = baselineOil * (1 - target.value);
    return Math.round(baselineOil - efficientOil);
}

function oilCostSavings(savings, rate) {
    return Math.round(savings * rate);
}

// Calculate greenhouse gas (GHG) emissions savings
// Make another JS object file with emission factors for each province

// Calculate annual costs savings
function annualCostSavings(electricity, gas, oil) {
    return electricity + gas + oil;
}

// Calculate NPV

