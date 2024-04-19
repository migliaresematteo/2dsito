let cars = [
    {
        name: "PORSCHE Carrera 4S 911",
        imageSrc: "../assets/carrera/PORSCHE CARRERA 4s_page-0001.jpg",
        mensile: "2.000 € / 48 mesi",
        acconto: "10.000",
        riscatto: "50.000",
        pdfLink: "../assets/carrera/PORSCHE CARRERA 4s.pdf",
        id : ""
    },
    {
        name: "MUSTANG Shelby",
        imageSrc: "../assets/mustang/Screenshot 2024-03-28 164545.png",
        mensile: "1.800 € / 48 mesi",
        acconto: "10.000",
        riscatto: "40.000",
        pdfLink: "../assets/mustang/MUSTANG SHELBY.pdf",
        id : ""
    },
    {
        name: "CLASSE A AMG 45s",
        imageSrc: "../assets/classea/Screenshot 2024-03-28 164954.png",
        mensile: "1.500 € / 48 mesi",
        acconto: "10.000",
        riscatto: "40.000",
        pdfLink: "../assets/classea/CLASSE A AMG 45s.pdf",
        id: ""
    },
]

cars.sort((a, b) => parseFloat(a.mensile) - parseFloat(b.mensile));

function displayCars(cars) {
    let carListContainer = document.getElementById("noscoringlist");
    carListContainer.innerHTML = "";
    let currentId = 1;
    cars.forEach(function(car) {
        if(car.id=="") car.id = currentId++;
        let carHtml = `
        <div id="car${car.id}" class="row flex-lg-row-reverse align-items-center mx-1 mb-5 mt-3">
            <div class="col-lg-6 px-0">
                <div class="lc-block car-image-container">
                    <img loading="lazy" class="img-fluid rounded-4" src="${car.imageSrc}" alt="CarImage">
                </div>
            </div>
            <div class="col-lg-6 px-0">
                <div class="d-flex flex-column justify-content-between">
                    <h2><i class="fa-solid fa-car-rear mt-4 mt-lg-0"></i> ${car.name}</h2>
                    <p class="fs-prices mt-1"><span class="badge bg-success"> ${car.mensile}</span></p>
                    <p class="fw-bold mb-1"><i class="fa-solid fa-circle-info"></i> Costi aggiuntivi:</p>
                    <p class="small my-1">Acconto pari a: ${car.acconto} €</p>
                    <p class="small my-1 mb-2">Riscatto pari a: ${car.riscatto} €</p>
                    <div class="d-flex flex-wrap">
                    <a href="https://wa.me/message/RI6FQG2DAJJHB1" class="bcolorSecondary px-4 py-2 me-2 mt-2 colorWhite border-0 rounded-2 bg-success text-light fw-bold w-max"><i class="fa-brands fa-whatsapp me-1"></i>Personalizza</a>
                        <a target="_blank" href="${car.pdfLink}" class="bcolorSecondary px-4 py-2 me-1 mt-2 colorWhite border-0 rounded-2"><i class="fa-solid fa-image"></i></a>
                        <div class="bcolorSecondary px-4 py-2 me-1 mt-2 colorWhite border-0 rounded-2 text-decoration-none" data-tf-live="01HVVZAHQVZD1916CXK3G96RMB"></div>
                        <script src="//embed.typeform.com/next/embed.js"></script>
                    </div>
                </div>
            </div>
        </div>
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