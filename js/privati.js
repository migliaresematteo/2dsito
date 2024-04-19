// Definisci un array di oggetti, ognuno rappresenta i dati per un singolo componente
let cars = [
    {
        name: "FORD Focus V",
        imageSrc: "../assets/gigli/ford.jpg",
        description: "1.5 ecoblue Business 120cv c.manuale",
        price: "27.400",
        iva: "detraibile", 
        immatricolazione: "03/2023",
        chilometri: "3.000", 
        alimentazione: "Diesel", 
        peso: "1.479",
        cambio: "Manuale", 
        cilindrata: "1.500",
        colore: "Grigio Magnetico", 
        rifiniture: "Stoffa",
        pp: "5/5", 
        potenza: "88kW / 120 Cv",
        trazione: "Anteriore", 
        emissioni: "Euro 6D",
        id: ""
    },
    {
        name: "Volkswagen | Taigo",
        imageSrc: "../assets/gigli/taigoo.jpg",
        description: "LIFE C.16 Tetto Clima2Zone LED AppleCarPlay",
        price: "27.500",
        iva: "detraibile", 
        immatricolazione: "da immatricolare",
        chilometri: "6", 
        alimentazione: "Benzina", 
        peso: "1.220",
        cambio: "Manuale", 
        cilindrata: "999",
        colore: "Bianco Puro", 
        rifiniture: "Stoffa",
        pp: "5/5", 
        potenza: "70kW / 95 Cv",
        trazione: "Anteriore", 
        emissioni: "Euro 6D",
        id: ""
    },
    {
        name: "Porsche | 911 IV Carrera 996",
        imageSrc: "../assets/gigli/carrera996.jpg",
        description: "3.6 Carrera 320cv coupe",
        price: "31.900",
        iva: "detraibile", 
        immatricolazione: "07/2003", 
        chilometri: "245.000", 
        alimentazione: "Benzina", 
        peso: "1.345", 
        cambio: "Automatico", 
        cilindrata: "3.596", 
        colore: "Nero", 
        rifiniture: "/", 
        pp: "2/2", 
        potenza: "235kW / 320Cv", 
        trazione: "Posteriore", 
        emissioni: "Euro 3",
        id: ""
    },
    {
        name: "Volkswagen | Golf VIII",
        imageSrc: "../assets/gigli/golf8.jpg",
        description: "ETSI C.16 Tetto Nav LedMatrix Clima3Zone",
        price: "35.800",
        iva: "detraibile", 
        immatricolazione: "12/2023", 
        chilometri: "10", 
        alimentazione: "Ibrido Benzina", 
        peso: "1.302", 
        cambio: "Automatico", 
        cilindrata: "999", 
        colore: "Grigio Lunare", 
        rifiniture: "Stoffa", 
        pp: "5/5", 
        potenza: "81kW / 110Cv", 
        trazione: "Anteriore", 
        emissioni: "Euro 6D",
        id: ""
    },
    {
        name: "BMW | X2 F39",
        imageSrc: "../assets/gigli/f39.jpg",
        description: "Xdrive18d Msport auto",
        price: "34.900",
        iva: "detraibile", 
        immatricolazione: "03/2022", 
        chilometri: "42.000", 
        alimentazione: "Diesel", 
        peso: "1.755", 
        cambio: "Automatico", 
        cilindrata: "1.995", 
        colore: "Nero Zaffiro", 
        rifiniture: "Stoffa", 
        pp: "5/5", 
        potenza: "110kW / 150Cv", 
        trazione: "Integrale", 
        emissioni: "Euro 6",
        id: ""
    },
    {
        name: "Volkswagen | T-Roc",
        imageSrc: "../assets/gigli/troc.jpg",
        description: "Life C.Lega17 Camera AppleCarPlay FullLED",
        price: "31.900",
        iva: "detraibile", 
        immatricolazione: "da immatricolare", 
        chilometri: "5", 
        alimentazione: "Diesel", 
        peso: "1.415", 
        cambio: "Manuale", 
        cilindrata: "1.968", 
        colore: "Nero/Bianco", 
        rifiniture: "Stoffa", 
        pp: "5/5", 
        potenza: "85kW / 115Cv", 
        trazione: "Anteriore", 
        emissioni: "Euro 6D",
        id: ""
    },
    {
        name: "Land Rover | Range Rover Evoque II",
        imageSrc: "../assets/gigli/landro.webp",
        description: "2.0 163CV MhEV R-Dynamic S",
        price: "44.900",
        iva: "detraibile", 
        immatricolazione: "08/2022", 
        chilometri: "15.000", 
        alimentazione: "Ibrido / Diesel", 
        peso: "/", 
        cambio: "Automatico Seq.", 
        cilindrata: "1.997", 
        colore: "Grigio", 
        rifiniture: "Pelle", 
        pp: "5/5", 
        potenza: "120kW / 163 Cv", 
        trazione: "Integrale", 
        emissioni: "Euro 6D",
        id: ""
    },
    {
        name: "Volvo | XC60 II",
        imageSrc: "../assets/gigli/xc60.webp",
        description: "XC60 2.0 B4 R-design geartronic",
        price: "45.900",
        iva: "/", 
        immatricolazione: "03/2022", 
        chilometri: "40.605", 
        alimentazione: "Ibrido / Diesel", 
        peso: "/", 
        cambio: "Automatico", 
        cilindrata: "1.969", 
        colore: "Grigio", 
        rifiniture: "Pelle (parziale)", 
        pp: "5/5", 
        potenza: "145kW / 197Cv", 
        trazione: "Anteriore", 
        emissioni: "Euro 6D",
        id: ""
    },
    {
        name: "Tesla | Model Y",
        imageSrc: "../assets/gigli/tesla.jpg",
        description: "Long Range Dual Motor awd",
        price: "46.700",
        iva: "detraibile", 
        immatricolazione: "11/2022", 
        chilometri: "20.000", 
        alimentazione: "Elettrica", 
        peso: "/", 
        cambio: "Automatico", 
        cilindrata: "/", 
        colore: "Bianco", 
        rifiniture: "/", 
        pp: "5/5", 
        potenza: "324kW / 440Cv", 
        trazione: "Integrale", 
        emissioni: "/",
        id: ""
    },
    {
        name: "Volkswagen | Tiguan II",
        imageSrc: "../assets/gigli/tiguan.jpg",
        description: "2.0 tdi Life 150cv dsg",
        price: "46.800",
        iva: "detraibile", 
        immatricolazione: "/", 
        chilometri: "5", 
        alimentazione: "Diesel", 
        peso: "1.640", 
        cambio: "Automatico", 
        cilindrata: "1.968", 
        colore: "Nero", 
        rifiniture: "Stoffa", 
        pp: "5/5", 
        potenza: "110kW / 150Cv", 
        trazione: "Anteriore", 
        emissioni: "Euro 6D",
        id: ""
    },
    {
        name: "Volkswagen | Passat VIII",
        imageSrc: "../assets/gigli/passat.jpg",
        description: "2.0 tdi Business 150cv dsg",
        price: "46.900",
        iva: "detraibile", 
        immatricolazione: "da immatricolare", 
        chilometri: "10", 
        alimentazione: "Diesel", 
        peso: "1.599", 
        cambio: "Automatico", 
        cilindrata: "1.968", 
        colore: "Grigio", 
        rifiniture: "Stoffa", 
        pp: "5/5", 
        potenza: "110kW / 150Cv", 
        trazione: "Anteriore", 
        emissioni: "Euro 6D",
        id: ""
    },
    {
        name: "Mercedes | Classe C - S/W 206",
        imageSrc: "../assets/gigli/classec.webp",
        description: "220 d mhev Premium Pro auto",
        price: "47.500",
        iva: "detraibile", 
        immatricolazione: "09/2021", 
        chilometri: "26.220", 
        alimentazione: "Ibrido / Diesel", 
        peso: "1.815", 
        cambio: "Automatico seq.", 
        cilindrata: "1.993", 
        colore: "Bianco", 
        rifiniture: "Pelle (parziale)", 
        pp: "5/5", 
        potenza: "147kW / 200Cv", 
        trazione: "Posteriore", 
        emissioni: "Euro 6",
        id: ""
    },
    {
        name: "BMW | Serie 3 G20-21-80-81",
        imageSrc: "../assets/gigli/serie3.jpg",
        description: "320d mhev 48V Msport xdrive auto",
        price: "50.900",
        iva: "detraibile", 
        immatricolazione: "", 
        chilometri: "17.000", 
        alimentazione: "Ibrido / Diesel", 
        peso: "1.875", 
        cambio: "Automatico", 
        cilindrata: "1.995", 
        colore: "Nero", 
        rifiniture: "Pelle / Alcantara", 
        pp: "5/5", 
        potenza: "140kW / 190Cv", 
        trazione: "Integrale", 
        emissioni: "Euro 6",
        id: ""
    },
    {
        name: "BMW | X4 G02-F98",
        imageSrc: "../assets/gigli/x4.jpg",
        description: "Xdrive20d mhev 48V auto",
        price: "56.400",
        iva: "detraibile", 
        immatricolazione: "05/2023", 
        chilometri: "24.450", 
        alimentazione: "Ibrido / Diesel", 
        peso: "1.990", 
        cambio: "Automatico", 
        cilindrata: "1.995", 
        colore: "Nero", 
        rifiniture: "Materiale Sintetico", 
        pp: "5/5", 
        potenza: "140kW / 190Cv", 
        trazione: "Integrale", 
        emissioni: "Euro 6",
        id: ""
    },
    {
        name: "Polestar | 2",
        imageSrc: "../assets/gigli/pole.jpg",
        description: "Long Range Dual Motor",
        price: "56.900",
        iva: "detraibile", 
        immatricolazione: "09/2022", 
        chilometri: "15.001", 
        alimentazione: "Elettrica", 
        peso: "/", 
        cambio: "Automatico", 
        cilindrata: "/", 
        colore: "Bianco", 
        rifiniture: "Stoffa", 
        pp: "4/5", 
        potenza: "300kW / 408Cv", 
        trazione: "Integrale elettronica", 
        emissioni: "Euro 6D",
        id: ""
    },
    {
        name: "Jaguar | E-Pace",
        imageSrc: "../assets/gigli/f.webp",
        description: "2.0 D163 R-Dynamic SE awd auto",
        price: "59.600",
        iva: "detraibile", 
        immatricolazione: "09/2023", 
        chilometri: "6.578", 
        alimentazione: "Ibrido / Diesel", 
        peso: "1.916", 
        cambio: "Automatico", 
        cilindrata: "1.997", 
        colore: "Grigio", 
        rifiniture: "Pelle", 
        pp: "5/5", 
        potenza: "120kW / 163Cv", 
        trazione: "Integrale", 
        emissioni: "Euro 6",
        id: ""
    },
    {
        name: "BMW | X5 G05-F95",
        imageSrc: "../assets/gigli/x5.jpg",
        description: "XDrive 40d ,hev 48V M-Sport auto TETTO LED CAMERA Cerchi 21 Clima3",
        price: "64.400",
        iva: "detraibile", 
        immatricolazione: "02/2023", 
        chilometri: "56.401", 
        alimentazione: "Ibrido / Diesel", 
        peso: "2.275", 
        cambio: "Automatico", 
        cilindrata: "2.993", 
        colore: "Bianco", 
        rifiniture: "Pelle", 
        pp: "5/5", 
        potenza: "250kW / 340Cv", 
        trazione: "Integrale", 
        emissioni: "Euro 6",
        id: ""
    },
    {
        name: "Jaguar | F-Pace",
        imageSrc: "../assets/gigli/fpace.jpg",
        description: "2.0 D204 R-Dynamic SE awd auto",
        price: "69.700",
        iva: "detraibile", 
        immatricolazione: "07/2023", 
        chilometri: "20.000", 
        alimentazione: "Diesel", 
        peso: "1.951", 
        cambio: "Automatico seq.", 
        cilindrata: "1.997", 
        colore: "Bianco", 
        rifiniture: "Pelle", 
        pp: "5/5", 
        potenza: "150kW / 204Cv", 
        trazione: "Integrale", 
        emissioni: "Euro 6D",
        id: ""
    }
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
            <div id="car${car.id}" class="row flex-lg-row-reverse align-items-center mb-5 mx-1">
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
                            <p class="fs-prices m-0"><span class="badge bg-success">${car.price} €</span></p><sub class="text-dark"> IVA Inclusa</sub>
                            <div class="d-flex">
                                <a href="https://wa.me/message/RI6FQG2DAJJHB1" class="bcolorSecondary px-4 py-2 me-1 mt-2 colorWhite border-0 rounded-2 bg-success text-light fw-bold"><i class="fa-brands fa-whatsapp me-1"></i> Personalizza</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="table-responsive mb-4">
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th class="bg-black bg-opacity-25" colspan="2">${car.name}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="fw-bold">Descrizione</td>
                            <td>${car.description}</td>
                        </tr>
                        <tr>
                            <td class="fw-bold">Prezzo</td>
                            <td>${car.price} €</td>
                        </tr>
                        <tr>
                            <td class="fw-bold">IVA</td>
                            <td>${car.iva}</td>
                        </tr>
                        <tr>
                            <td class="fw-bold">Immatricolazione</td>
                            <td>${car.immatricolazione}</td>
                        </tr>
                        <tr>
                            <td class="fw-bold">Chilometri</td>
                            <td>${car.chilometri} km</td>
                        </tr>
                        <tr>
                            <td class="fw-bold">Alimentazione</td>
                            <td>${car.alimentazione}</td>
                        </tr>
                        <tr>
                            <td class="fw-bold">Peso</td>
                            <td>${car.peso} kg</td>
                        </tr>
                        <tr>
                            <td class="fw-bold">Cambio</td>
                            <td>${car.cambio}</td>
                        </tr>
                        <tr>
                            <td class="fw-bold">Cilindrata</td>
                            <td>${car.cilindrata} cm<sup>3</sup></td>
                        </tr>
                        <tr>
                            <td class="fw-bold">Colore</td>
                            <td>${car.colore}</td>
                        </tr>
                        <tr>
                            <td class="fw-bold">Rifiniture</td>
                            <td>${car.rifiniture}</td>
                        </tr>
                        <tr>
                            <td class="fw-bold">Porte/Posti</td>
                            <td>${car.pp}</td>
                        </tr>
                        <tr>
                            <td class="fw-bold">Potenza</td>
                            <td>${car.potenza}</td>
                        </tr>
                        <tr>
                            <td class="fw-bold">Trazione</td>
                            <td>${car.trazione}</td>
                        </tr>
                        <tr>
                            <td class="fw-bold">Emissioni</td>
                            <td>${car.emissioni}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <hr class="mb-5">
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
