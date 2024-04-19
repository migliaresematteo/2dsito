// Definisci un array di oggetti, ognuno rappresenta i dati per un singolo componente
let cars = [
    {
        name: "Fiat 500",
        imageSrc: "../assets/oliva/500.jpg",
        description: "1.0 70cv Hybrid Dolcevita",
        price: "199.00",
        anticipo: "4.000",
        price2: "319.00",
        durata: "36 mesi",
        durata2: "60 mesi",
        kminc: "100.000",
        kminc2: "40.000",
        id: ""
    },
    {
        name: "Fiat Panda",
        imageSrc: "../assets/oliva/panda.jpg",
        description: "1.0 70 Cv S&S Hybrid",
        price: "209.00",
        anticipo: "4.000",
        price2: "279.00",
        durata: "36 mesi",
        durata2: "60 mesi",
        kminc: "100.000",
        kminc2: "40.000",
        id: ""
    },
    {
        name: "Renault Clio",
        imageSrc: "../assets/oliva/clio.jpg",
        description: "1.0 Sce 65 CV Evolution",
        price: "219.00",
        anticipo: "4.000",
        price2: "399.00",
        durata: "36 mesi",
        durata2: "60 mesi",
        kminc: "100.000",
        kminc2: "40.000",
        id: ""
    },
    {
        name: "Renault Twingo",
        imageSrc: "../assets/oliva/twin.jpg",
        description: "10 SCE Equilibre",
        price: "229.00",
        anticipo: "4.000",
        price2: "329.00",
        durata: "36 mesi",
        durata2: "60 mesi",
        kminc: "100.000",
        kminc2: "40.000",
        id: ""
    },
    {
        name: "Citroen C3",
        imageSrc: "../assets/oliva/c3pure.webp",
        description: "Puretech 82 S&S Max",
        price: "249.00",
        anticipo: "4.000",
        price2: "349.00",
        durata: "36 mesi",
        durata2: "60 mesi",
        kminc: "100.000",
        kminc2: "40.000",
        id: ""
    },
    {
        name: "Seat Ibiza",
        imageSrc: "../assets/oliva/ibi.jpeg",
        description: "1.0 MPI 5 porte Style",
        price: "269.00",
        anticipo: "4.000",
        price2: "359.00",
        durata: "36 mesi",
        durata2: "60 mesi",
        kminc: "100.000",
        kminc2: "40.000",
        id: ""
    },
    {
        name: "Ford Ecosport",
        imageSrc: "../assets/oliva/feco.webp",
        description: "1.0 EcoBoost 100 CV ST-Line",
        price: "279.00",
        anticipo: "4.000",
        price2: "389.00",
        durata: "36 mesi",
        durata2: "60 mesi",
        kminc: "100.000",
        kminc2: "40.000",
        id: ""
    },
    {
        name: "Fiat 500X",
        imageSrc: "../assets/oliva/500x.webp",
        description: "1.0 T3 120 CV Club",
        price: "299.00",
        anticipo: "4.000",
        price2: "399.00",
        durata: "36 mesi",
        durata2: "60 mesi",
        kminc: "100.000",
        kminc2: "40.000",
        id: ""
    },
    {
        name: "Nissan Micra",
        imageSrc: "../assets/oliva/micra.jpg",
        description: "IGT 92 Acenta",
        price: "299.00",
        anticipo: "3.000",
        price2: "359.00",
        durata: "36 mesi",
        durata2: "60 mesi",
        kminc: "100.000",
        kminc2: "40.000",
        id: ""
    },
    {
        name: "Peugeot 208",
        imageSrc: "../assets/oliva/208.jpg",
        description: "Active PureTech 75 S/S",
        price: "299.00",
        anticipo: "3.000",
        price2: "349.00",
        durata: "36 mesi",
        durata2: "60 mesi",
        kminc: "100.000",
        kminc2: "40.000",
        id: ""
    },
    {
        name: "Jeep Avenger",
        imageSrc: "../assets/oliva/ave.jpeg",
        description: "1.2 Turbo Longitude",
        price: "299.00",
        anticipo: "6.000",
        price2: "399.00",
        durata: "36 mesi",
        durata2: "60 mesi",
        kminc: "100.000",
        kminc2: "40.000",
        id: ""
    },
    {
        name: "Opel Mokka",
        imageSrc: "../assets/oliva/mok.jpg",
        description: "1.2 T 100cv Edition MT6",
        price: "309.00",
        anticipo: "5.000",
        price2: "419.00",
        durata: "36 mesi",
        durata2: "60 mesi",
        kminc: "100.000",
        kminc2: "40.000",
        id: ""
    },
    {
        name: "Renault Captur",
        imageSrc: "../assets/oliva/cap.webp",
        description: "1.0 TCE 66 Kw Equilibre",
        price: "339.00",
        anticipo: "4.000",
        price2: "389.00",
        durata: "36 mesi",
        durata2: "60 mesi",
        kminc: "100.000",
        kminc2: "40.000",
        id: ""
    },
    {
        name: "BMW Serie 1",
        imageSrc: "../assets/gigli/serie1.jpg",
        description: "116i",
        price: "339.00",
        anticipo: "5.000",
        price2: "459.00",
        durata: "36 mesi",
        durata2: "60 mesi",
        kminc: "100.000",
        kminc2: "40.000",
        id: ""
    },
    {
        name: "Ford Fiesta",
        imageSrc: "../assets/oliva/fie.jpeg",
        description: "1.0 Ecoboost Hybrid 125 CV Titanium",
        price: "339.00",
        anticipo: "3.000",
        price2: "389.00",
        durata: "36 mesi",
        durata2: "60 mesi",
        kminc: "100.000",
        kminc2: "40.000",
        id: ""
    },
    {
        name: "Audi A3",
        imageSrc: "../assets/oliva/a3.webp",
        description: "Sportback 30 TFSI",
        price: "349.00",
        anticipo: "6.000",
        price2: "499.00",
        durata: "36 mesi",
        durata2: "60 mesi",
        kminc: "100.000",
        kminc2: "40.000",
        id: ""
    },
    {
        name: "Nissan Juke",
        imageSrc: "../assets/oliva/juke.jpg",
        description: "1.0 DIG-T N-Connecta MT",
        price: "349.00",
        anticipo: "5.000",
        price2: "429.00",
        durata: "36 mesi",
        durata2: "60 mesi",
        kminc: "100.000",
        kminc2: "40.000",
        id: ""
    },
    {
        name: "Peugeot 2008",
        imageSrc: "../assets/oliva/2008.jpg",
        description: "Puretech 100 Active",
        price: "359.00",
        anticipo: "4.000",
        price2: "439.00",
        durata: "36 mesi",
        durata2: "60 mesi",
        kminc: "100.000",
        kminc2: "40.000",
        id: ""
    },
    {
        name: "Volkswagen T-Cross",
        imageSrc: "../assets/oliva/tc.jpeg",
        description: "1.0 TSI Style",
        price: "369.00",
        anticipo: "4.000",
        price2: "439.00",
        durata: "36 mesi",
        durata2: "60 mesi",
        kminc: "100.000",
        kminc2: "40.000",
        id: ""
    },
    {
        name: "Alfa Romeo Tonale",
        imageSrc: "../assets/oliva/ton.jpg",
        description: "1.5 130 CV MHEV TCT7 Sprint",
        price: "499.00",
        anticipo: "6.000",
        price2: "599.00",
        durata: "36 mesi",
        durata2: "60 mesi",
        kminc: "100.000",
        kminc2: "40.000",
        id: ""
    },
    {
        name: "BMW Serie 3 Touring",
        imageSrc: "../assets/oliva/bmw.jpg",
        description: "318d 48V Touring auto",
        price: "519.00",
        anticipo: "6.000",
        price2: "639.00",
        durata: "36 mesi",
        durata2: "60 mesi",
        kminc: "100.000",
        kminc2: "40.000",
        id: ""
    },
    {
        name: "Tesla Model 3",
        imageSrc: "../assets/oliva/t3.jpg",
        description: "50 KWh Rwd",
        price: "699.00",
        anticipo: "6.000",
        price2: "759.00",
        durata: "36 mesi",
        durata2: "60 mesi",
        kminc: "100.000",
        kminc2: "40.000",
        id: ""
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
    let currentId = 1;
    cars.forEach(function(car) {
        if(car.id=="") car.id = currentId++;
        let carHtml = `
            <div id="${car.id}" class="row flex-lg-row-reverse align-items-center mb-5 mx-1">
                <div class="col-lg-8 px-0">
                    <div class="lc-block car-image-container">
                        <img loading="lazy" class="img-fluid rounded-4" src="${car.imageSrc}" alt="CarImage">
                    </div>
                </div>
                <div class="col-lg-4 px-0 pe-md-4">
                    <div class="lc-block">
                        <div>
                            <h1 class="mt-3 mt-md-0"><i class="fa-solid fa-car-rear"></i> ${car.name}</h1>
                            <h6>${car.description}</h6>
                            <p class="fs-prices m-0"><span class="badge bg-success">${car.price} € / mese</span></p><sub class="text-dark"> IVA Inclusa</sub>
                            <table class="table mt-1">
                                <tbody>
                                    <tr>
                                    <td class="fw-bold ps-0">Anticipo</td>
                                    <td>${car.anticipo} €</td>
                                    </tr>
                                    <tr>
                                    <td class="fw-bold ps-0">Durata</td>
                                    <td>${car.durata}</td>
                                    </tr>
                                    <tr>
                                    <td class="fw-bold ps-0">Km. inc</td>
                                    <td>${car.kminc}</td>
                                    </tr>
                                </tbody>
                            </table>
                            <p class="fs-prices m-0"><span class="badge bg-success">${car.price2} € / mese</span></p><sub class="text-dark"> IVA Inclusa</sub>
                            <table class="table mt-1">
                                <tbody>
                                    <tr>
                                    <td class="fw-bold">Anticipo</td>
                                    <td>ZERO</td>
                                    </tr>
                                    <tr>
                                    <td class="fw-bold">Durata</td>
                                    <td>${car.durata2}</td>
                                    </tr>
                                    <tr>
                                    <td class="fw-bold">Km. inc</td>
                                    <td>${car.kminc2}</td>
                                    </tr>
                                </tbody>
                            </table>
                            <div class="d-flex">
                            <a href="https://wa.me/message/RI6FQG2DAJJHB1" class="bcolorSecondary px-4 py-2 me-1 colorWhite border-0 rounded-2 bg-success text-light fw-bold w-max"><i class="fa-brands fa-whatsapp me-1"></i>Personalizza</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr>
        `;
        carListContainer.innerHTML += carHtml;
    });
}

function copyLink(id) {
    let link = window.location.href + '#' + id;
    navigator.clipboard.writeText(link).then(function() {
        console.log('Link copiato negli appunti');
        alert('Link copiato negli appunti');
    }, function(err) {
        console.error('Unable to copy link to clipboard', err);
        alert('Impossibile copiare il link negli appunti');
    });
}

displayCars(cars);

// Add event listeners for radio buttons to trigger sorting
document.querySelectorAll('input[name="sort"]').forEach((elem) => {
    elem.addEventListener("change", filterCars);
});
