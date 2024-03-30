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
    {
        name: "Volkswagen | T-Roc",
        imageSrc: "../assets/gigli/troc.jpg",
        description: "Life C.Lega17 Camera AppleCarPlay FullLED",
        price: "31.900",
    },
    {
        name: "Land Rover | Range Rover Evoque II",
        imageSrc: "../assets/gigli/landro.webp",
        description: "2.0 163CV MhEV R-Dynamic S",
        price: "44.900",
    },
    {
        name: "Volvo | XC60 II",
        imageSrc: "../assets/gigli/xc60.webp",
        description: "XC60 2.0 B4 R-design geartronic",
        price: "45.900",
    },
    {
        name: "Tesla | Model Y",
        imageSrc: "../assets/gigli/tesla.jpg",
        description: "Long Range Dual Motor awd",
        price: "46.700",
    },
    {
        name: "Volkswagen | Tiguan II",
        imageSrc: "../assets/gigli/tiguan.jpg",
        description: "2.0 tdi Life 150cv dsg",
        price: "46.800",
    },
    {
        name: "Volkswagen | Passat VIII",
        imageSrc: "../assets/gigli/passat.jpg",
        description: "2.0 tdi Business 150cv dsg",
        price: "46.900",
    },
    {
        name: "Mercedes | Classe C - S/W 206",
        imageSrc: "../assets/gigli/classec.webp",
        description: "220 d mhev Premium Pro auto",
        price: "47.500",
    },
    {
        name: "BMW | Serie 3 G20-21-80-81",
        imageSrc: "../assets/gigli/serie3.jpg",
        description: "320d mhev 48V Msport xdrive auto",
        price: "50.900",
    },
    {
        name: "BMW | X4 G02-F98",
        imageSrc: "../assets/gigli/x4.jpg",
        description: "Xdrive20d mhev 48V auto",
        price: "56.400",
    },
    {
        name: "Polestar | 2",
        imageSrc: "../assets/gigli/pole.jpg",
        description: "Long Range Dual Motor",
        price: "56.900",
    },
    {
        name: "Jaguar | E-Pace",
        imageSrc: "../assets/gigli/f.webp",
        description: "2.0 D163 R-Dynamic SE awd auto",
        price: "56.600",
    },
    {
        name: "BMW | X5 G05-F95",
        imageSrc: "../assets/gigli/x5.jpg",
        description: "XDrive 40d ,hev 48V M-Sport auto TETTO LED CAMERA Cerchi 21 Clima3",
        price: "64.400",
    },
    {
        name: "Jaguar | F-Pace",
        imageSrc: "../assets/gigli/fpace.jpg",
        description: "2.0 D204 R-Dynamic SE awd auto",
        price: "69.700",
    },
];
cars.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));

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
                            <h1 class="mt-3 mt-md-0><i class="fa-solid fa-car-rear"></i> ${car.name}</h1>
                            <h6>${car.description}</h6>
                            <p class="fs-prices m-0"><span class="badge bg-success">${car.price} €</span></p><sub class="text-dark"> IVA Inclusa</sub>
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
