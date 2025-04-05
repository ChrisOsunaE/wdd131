document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.getElementById('menu-toggle');
  const nav = document.getElementById('nav');

  menuToggle.addEventListener('click', function() {
    nav.classList.toggle('active');
  });
});


const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  // Add more temple objects here...
];

console.log(temples);


function clearTempleContainer() {
  const container = document.getElementById("temple-container");
  container.innerHTML = ""; 
}

function showOldTemples(){
  const oldTemples=temples.filter(temple =>  temple.dedicated.split(",")[0] < 1900);
  showTemples(oldTemples);
  console.log(oldTemples);
}
function showNewTemples(){
  const newTemples=temples.filter(temple => temple.dedicated.split(",")[0] >= 2000);
  showTemples(newTemples);
}

function showLargeTemples(){
  const largeTemples=temples.filter(temple => temple.area > 90000);
  showTemples(largeTemples);
}

function showSmallTemples(){
  const smallTemples=temples.filter(temple =>  temple.area < 10000);
  showTemples(smallTemples);
}

function showTemples(temples) {
  clearTempleContainer();
  const container = document.getElementById("temple-container");
  temples.forEach((temple) => {
    const templeName = temple.templeName;
    const location = temple.location;
    const dedicated = temple.dedicated;
    const size = temple.area;
    const imageUrl = temple.imageUrl;

    const templeCard = document.createElement("div");
    templeCard.classList.add("temple-card");
    templeCard.innerHTML = `
      <h3>${templeName}</h3>
      <p>Location: ${location}</p>
      <p>Dedicated: ${dedicated}</p>
      <p>Size: ${size} sq ft</p>
      <img src="${imageUrl}" alt="${templeName}">
    `;
    container.appendChild(templeCard);
  });
}
function showAllTemples() {
  showTemples(temples);
}

document.addEventListener("DOMContentLoaded", showAllTemples);

document.getElementById('old-temples').addEventListener('click', showOldTemples);
document.getElementById('new-temples').addEventListener('click', showNewTemples);
document.getElementById('large-temples').addEventListener('click', showLargeTemples);
document.getElementById('small-temples').addEventListener('click', showSmallTemples);
document.getElementById('all-temples').addEventListener('click', showAllTemples);