let sanitari = [
    {
        name: "ORTOPEDICO",
        description: "Specialista nell'analisi e trattamento delle malattie e dei disturbi del sistema muscolo-scheletrico.",
        contactLink: "https://wa.me/message/RI6FQG2DAJJHB1",
        imageSrc: "../assets/sanitari/ortopedico.png"
    },
    {
        name: "NEUROCHIRURGO",
        description: "Medico specializzato nel trattamento chirurgico dei disturbi del sistema nervoso centrale e periferico.",
        contactLink: "https://wa.me/message/RI6FQG2DAJJHB1",
        imageSrc: "../assets/sanitari/neurochirurgo.png"
    },
    {
        name: "CHIRURGO MEDICINA GENERALE",
        description: "Medico specializzato in interventi chirurgici di routine e nel trattamento di una vasta gamma di patologie.",
        contactLink: "https://wa.me/message/RI6FQG2DAJJHB1",
        imageSrc: "../assets/sanitari/chirurgia generale.png"
    },
    {
        name: "MASSOTERAPISTA",
        description: "Professionista specializzato nel trattamento dei tessuti molli del corpo attraverso massaggi terapeutici.",
        contactLink: "https://wa.me/message/RI6FQG2DAJJHB1",
        imageSrc: "../assets/sanitari/massoterapista.png"
    },
    {
        name: "FISIOTERAPISTA",
        description: "Specialista nella riabilitazione fisica, aiuta i pazienti a recuperare il movimento e la funzione dopo un infortunio o una malattia.",
        contactLink: "https://wa.me/message/RI6FQG2DAJJHB1",
        imageSrc: "../assets/sanitari/fisioterapista.png"
    },
    {
        name: "OSTEOPATA",
        description: "Professionista che utilizza tecniche manuali per trattare i disturbi muscolo-scheletrici e promuovere la salute generale.",
        contactLink: "https://wa.me/message/RI6FQG2DAJJHB1",
        imageSrc: "../assets/sanitari/osteopata.png"
    },
    {
        name: "PERSONAL TRAINER",
        description: "Allenatore personale specializzato nell'assistere gli individui nel raggiungimento dei loro obiettivi di fitness e salute.",
        contactLink: "https://wa.me/message/RI6FQG2DAJJHB1",
        imageSrc: "../assets/sanitari/personaltrainer.png"
    },
    {
        name: "NUTRIZIONISTA",
        description: "Specialista che fornisce consulenza e pianificazione dietetica per migliorare la salute e il benessere.",
        contactLink: "https://wa.me/message/RI6FQG2DAJJHB1",
        imageSrc: "../assets/sanitari/nutrizionista.png"
    },
    {
        name: "PSICHIATRA",
        description: "Medico specializzato nella diagnosi e nel trattamento dei disturbi mentali, emotivi e comportamentali.",
        contactLink: "https://wa.me/message/RI6FQG2DAJJHB1",
        imageSrc: "../assets/sanitari/psichiatra.png"
    },
    {
        name: "PSICOLOGO",
        description: "Professionista che studia il comportamento e i processi mentali umani, fornisce consulenza e terapia psicologica.",
        contactLink: "https://wa.me/message/RI6FQG2DAJJHB1",
        imageSrc: "../assets/sanitari/psicologo.png"
    },
    {
        name: "DIABETOLOGO ENDOCRINOLOGO",
        description: "Specialista medico che si occupa della gestione e del trattamento del diabete e delle malattie endocrine.",
        contactLink: "https://wa.me/message/RI6FQG2DAJJHB1",
        imageSrc: "../assets/sanitari/diabetologo endocrinologo.png"
    }
];

function displaySanitari(sanitari) {
    let sanitarilistcontainer = document.getElementById("sanitarilist");
    sanitarilistcontainer.innerHTML = "";

    sanitari.forEach(function(sanitario) {
        let sanitarioHtml = `
            <div class="row flex-lg-row-reverse align-items-center mb-5 mx-1">
                <div class="col-lg-6 px-0">
                    <div class="lc-block car-image-container">
                        <img loading="lazy" class="img-fluid rounded-4" src="${sanitario.imageSrc}" alt="CarImage">
                    </div>
                </div>
                <div class="col-lg-6 px-0 pe-md-4">
                    <div class="lc-block">
                        <div>
                            <h1 class="mt-3 mt-md-0><i class="fa-solid fa-car-rear"></i> ${sanitario.name}</h1>
                            <h6>${sanitario.description}</h6>
                            <div class="d-flex">
                                <a href="https://wa.me/message/RI6FQG2DAJJHB1" class="bcolorSecondary px-4 py-2 me-1 mt-2 colorWhite border-0 rounded-2"><i class="fa-brands fa-whatsapp me-1"></i> Contatta</a>                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        sanitarilistcontainer.innerHTML += sanitarioHtml;
    });
}

displaySanitari(sanitari);
