function displayFooter() {
    var footerHtml = `
    <footer id="contacts">
        <div class="container py-5 text-left">
            <div class="py-5 border-top">
            <img class="my-4" src="../assets/LOGO_2D_SERVICES_SRL_Nuovo-removebg-preview.png" width="128px">
                <div class="my-4">
                    <h4><i class="fa-solid fa-map-pin"></i> Indirizzo</h4>
                </div>
                <div class="footer-links-list">
                    <p class="text-dark my-0 mb-1" href="#">Via Lepetit, 8</p>
                    <p class="text-dark my-0 mb-1" href="#">20045 - Lainate (MI)</p>
                </div>
                <div class="my-4">
                    <h4><i class="fa-solid fa-phone"></i> Contatti</h4>
                </div>
                <div class="small>
                <div class="footer-links-list">
                    <a target="_blank" class="text-dark d-block my-0 mb-1" href="https://wa.me/message/RI6FQG2DAJJHB1"><i class="fa-brands fa-whatsapp"></i> Whatsapp: (+39) 345 808 4933</a>
                    <a target="_blank" class="text-dark d-block my-0 mb-1"><i class="fa-solid fa-envelope"></i> Email: ceo.dimartino@2dservices.it</a>
                    <a target="_blank" class="text-dark d-block my-0 mb-1" href="https://www.facebook.com/profile.php?id=61552927612401"><i class="fa-brands fa-facebook"></i> Facebook: 2D Services</a>
                    <a target="_blank" class="text-dark d-block my-0 mb-1" href="https://www.instagram.com/2d_services.srl/"><i class="fa-brands fa-instagram"></i> Instagram: 2d_services.srl</a>
                </div>
                </div>
                <div class="rounded-4 card-footer p-4 mb-3">
                    <p><i class="fa-solid fa-circle-info"></i> Scarica la nostra applicazione gratuitamente seguendo il link qui sotto!</p>
                    <a target="_blank" href="https://www.cittacoupon.it/scarica-app/2d-services"
                        class="bcolorSecondary px-4 py-2 colorWhite border-0 rounded-2 w-max">Scarica <i
                        class="fa-solid fa-right-long ms-2"></i></a>  
                </div>
            </div>
            <div class="bg-dark text-center p-3">
                <p class="text-light my-0 mb-2 fw-bold">Sviluppato da:</p>
                <p class="text-light my-0 mb-2"><i class="fa-solid fa-envelope"></i> migliaresematteo@gmail.com</p>
                <a target="_blank" href="https://wa.me/393396446669" class="text-light my-0"><i class="fa-brands fa-whatsapp"></i> Whatsapp: (+39) 339 644 6669</a>
            </div>
        </div>
    </footer>`;
    
    // Append the footer HTML to the specified container
    document.getElementById('footerContainer').innerHTML = footerHtml;
}

// Call displayFooter function when needed
displayFooter();