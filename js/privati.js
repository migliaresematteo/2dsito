// Definisci un array di oggetti, ognuno rappresenta i dati per un singolo componente
let cars = [
    {
        name: "FORD Focus V",
        imageSrc: "../assets/gigli/ford.jpg",
        description: "1.5 ecoblue Business 120cv c.manuale",
        price: "27.400",
    },
    {
        name: "Volkswagen | Taigo",
        imageSrc: "../assets/gigli/taigoo.jpg",
        description: "LIFE C.16 Tetto Clima2Zone LED AppleCarPlay",
        price: "27.500",
    },
    {
        name: "BMW | Serie 1 F40",
        imageSrc: "../assets/gigli/serie1.jpg",
        description: "I Msport C.Lega17 LED Clima2Zone M-Sport M Sport",
        price: "29.900",
    },
    {
        name: "Porsche | 911 IV Carrera 996",
        imageSrc: "../assets/gigli/carrera996.jpg",
        description: "3.6 Carrera 320cv coupe",
        price: "31.900",
    },
    {
        name: "Volkswagen | Golf VIII",
        imageSrc: "../assets/gigli/golf8.jpg",
        description: "ETSI C.16 Tetto Nav LedMatrix Clima3Zone",
        price: "35.800",
    },
    {
        name: "BMW | X2 F39",
        imageSrc: "../assets/gigli/f39.jpg",
        description: "Xdrive18d Msport auto",
        price: "35.900",
    },
];
cars.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));

function filterCars() {
    let priceRangeInput = document.getElementById("priceRange").value;
    let carNameFilter = document.getElementById("carName").value.toLowerCase();
    let [minPrice, maxPrice] = priceRangeInput.split("-").map(Number);
    if (isNaN(maxPrice) || maxPrice === undefined || priceRangeInput.endsWith("-")) maxPrice = 10000;

    let filteredCars;

    if (priceRangeInput && carNameFilter) {
        filteredCars = cars.filter(car =>
            car.price >= minPrice &&
            car.price <= maxPrice &&
            car.name.toLowerCase().includes(carNameFilter)
        );
    } else if (priceRangeInput) {
        filteredCars = cars.filter(car =>
            car.price >= minPrice &&
            car.price <= maxPrice
        );
    } else if (carNameFilter) {
        filteredCars = cars.filter(car =>
            car.name.toLowerCase().includes(carNameFilter)
        );
    } else {
        filteredCars = cars;
    }

    const sortBy = document.querySelector('input[name="sort"]:checked').value;
    if (sortBy === "ascending") {
        filteredCars.sort((a, b) => a.price - b.price);
    } else if (sortBy === "descending") {
        filteredCars.sort((a, b) => b.price - a.price);
    }

    displayCars(filteredCars);
}

function displayCars(cars) {
    let carListContainer = document.getElementById("privatilist");
    carListContainer.innerHTML = "";

    cars.forEach(function(car) {
        let carHtml = `
            <div class="row flex-lg-row-reverse align-items-center">
                <div class="col-lg-5">
                    <div class="lc-block">
                        <img loading="lazy" class="img-fluid mt-2 mt-md-0 my-md-5" src="${car.imageSrc}" width="900" height="600" alt="CarImage">
                    </div>
                </div>
                <div class="col-lg-7">
                    <div class="lc-block">
                        <div>
                            <h1 class="mt-3 mt-md-0><i class="fa-solid fa-car-rear"></i> ${car.name}</h1>
                            <h6>${car.description}</h6>
                            <p class="fs-prices m-0"><span class="badge bg-success">${car.price} € / mese</span></p><sub class="text-dark"> IVA Inclusa</sub>
                        </div>
                    </div>
                </div>
            </div>
        `;
        carListContainer.innerHTML += carHtml;
    });
}

displayCars(cars);

// Add event listeners for radio buttons to trigger sorting
document.querySelectorAll('input[name="sort"]').forEach((elem) => {
    elem.addEventListener("change", filterCars);
});
