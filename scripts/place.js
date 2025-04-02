const temperature = 45; 
const windSpeed = 10; // in mph

const weatherTemperature = document.querySelector('#temperature');
const weatherWindSpeed = document.querySelector('#windSpeed');
weatherTemperature.innerHTML = `${temperature} °F`;
weatherWindSpeed.innerHTML = `${windSpeed} mph`;

function calculateWindChill(temp, speed) {
  return (
    35.74 +
    0.6215 * temp -
    35.75 * Math.pow(speed, 0.16) +
    0.4275 * temp * Math.pow(speed, 0.16)
  ).toFixed(2);
}

let windChill = "N/A";
if (temperature <= 50 && windSpeed > 3) {
  windChill = calculateWindChill(temperature, windSpeed) + " °F";
}

const weatherSection = document.querySelector('#weather');
weatherSection.innerHTML = `${windChill}`;

console.log(`Temperature: ${temperature} °F`);
console.log(`Wind Speed: ${windSpeed} mph`);
console.log(`Wind Chill: ${windChill}`);
