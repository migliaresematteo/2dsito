// Definisci un array di oggetti, ognuno rappresenta i dati per un singolo componente
let cars = [
    {
        name: "Fiat 500",
        imageSrc: "../assets/oliva/500.jpg",
        description: "1.0 70cv Hybrid Dolcevita",
        price: "199.00",
    },
    {
        name: "Fiat Panda",
        imageSrc: "../assets/oliva/panda.jpg",
        description: "1.0 70 Cv S&S Hybrid",
        price: "209.00",
    },
    {
        name: "Renault Clio",
        imageSrc: "../assets/oliva/clio.jpg",
        description: "1.0 Sce 65 CV Evolution",
        price: "219.00",
    },
    {
        name: "Renault Twingo",
        imageSrc: "../assets/oliva/twin.jpg",
        description: "10 SCE Equilibre",
        price: "229.00",
    },
    {
        name: "Citroen C3",
        imageSrc: "../assets/oliva/c3pure.webp",
        description: "Puretech 82 S&S Max",
        price: "249.00",
    },
    {
        name: "Seat Ibiza",
        imageSrc: "../assets/oliva/ibi.jpeg",
        description: "1.0 MPI 5 porte Style",
        price: "269.00",
    },
    {
        name: "Ford Ecosport",
        imageSrc: "../assets/oliva/feco.webp",
        description: "1.0 EcoBoost 100 CV ST-Line",
        price: "279.00",
    },
    {
        name: "Fiat 500X",
        imageSrc: "../assets/oliva/500x.webp",
        description: "1.0 T3 120 CV Club",
        price: "299.00",
    },
    {
        name: "Nissan Micra",
        imageSrc: "../assets/oliva/micra.jpg",
        description: "IGT 92 Acenta",
        price: "299.00",
    },
    {
        name: "Peugeot 208",
        imageSrc: "../assets/oliva/208.jpg",
        description: "Active PureTech 75 S/S",
        price: "299.00",
    },
    {
        name: "Jeep Avenger",
        imageSrc: "../assets/oliva/ave.jpeg",
        description: "1.2 Turbo Longitude",
        price: "299.00",
    },
    {
        name: "Opel Mokka",
        imageSrc: "../assets/oliva/mok.jpg",
        description: "1.2 T 100cv Edition MT6",
        price: "309.00",
    },
    {
        name: "Renault Kadjar",
        imageSrc: "../assets/oliva/kad.jpg",
        description: "1.5 Dci Business",
        price: "339.00",
    },
    {
        name: "Renault Captur",
        imageSrc: "../assets/oliva/cap.webp",
        description: "1.0 TCE 66 Kw Equilibre",
        price: "339.00",
    },
    {
        name: "BMW Serie 1",
        imageSrc: "../assets/gigli/serie1.jpg",
        description: "116i",
        price: "339.00",
    },
    {
        name: "Ford Fiesta",
        imageSrc: "../assets/oliva/fie.jpeg",
        description: "1.0 Ecoboost Hybrid 125 CV Titanium",
        price: "339.00",
    },
    {
        name: "Audi A3",
        imageSrc: "../assets/oliva/a3.webp",
        description: "Sportback 30 TFSI",
        price: "349.00",
    },
    {
        name: "Nissan Juke",
        imageSrc: "../assets/oliva/juke.jpg",
        description: "1.0 DIG-T N-Connecta MT",
        price: "349.00",
    },
    {
        name: "Peugeot 2008",
        imageSrc: "../assets/oliva/2008.jpg",
        description: "Puretech 100 Active",
        price: "359.00",
    },
    {
        name: "Volkswagen T-Cross",
        imageSrc: "../assets/oliva/tc.jpeg",
        description: "1.0 TSI Style",
        price: "369.00",
    },
    {
        name: "Alfa Romeo Tonale",
        imageSrc: "../assets/oliva/ton.jpg",
        description: "1.5 130 CV MHEV TCT7 Sprint",
        price: "499.00",
    },
    {
        name: "BMW Serie 3 Touring",
        imageSrc: "../assets/oliva/bmw.jpg",
        description: "318d 48V Touring auto",
        price: "519.00",
    },
    {
        name: "Tesla Model 3",
        imageSrc: "../assets/oliva/t3.jpg",
        description: "50 KWh Rwd",
        price: "699.00",
    },
];
cars.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));

function filterCars() {
    let priceRangeInput = document.getElementById("priceRange").value;
    let carNameFilter = document.getElementById("carName").value.toLowerCase();
    let [minPrice, maxPrice] = priceRangeInput.split("-").map(Number);
    if (isNaN(maxPrice) || maxPrice === undefined || priceRangeInput.endsWith("-")) maxPrice = 100000;

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
            <div class="row flex-lg-row-reverse align-items-center mb-5 mx-1">
                <div class="col-lg-6 px-0">
                    <div class="lc-block car-image-container">
                        <img loading="lazy" class="img-fluid rounded-4" src="${car.imageSrc}" alt="CarImage">
                    </div>
                </div>
                <div class="col-lg-6 px-0">
                    <div class="lc-block">
                        <div>
                            <h1 class="mt-3 mt-md-0"><i class="fa-solid fa-car-rear"></i> ${car.name}</h1>
                            <h6>${car.description}</h6>
                            <p class="fs-prices m-0"><span class="badge bg-success">${car.price} € / mese</span></p><sub class="text-dark"> IVA Inclusa</sub>
                            <div class="d-flex">
                                <a href="https://wa.me/message/RI6FQG2DAJJHB1" class="bcolorSecondary px-4 py-2 me-1 mt-2 colorWhite border-0 rounded-2"><i class="fa-brands fa-whatsapp me-1"></i> Finalizza</a>                            </div>
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
