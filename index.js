document.addEventListener("DOMContentLoaded", function() {
    const chatInput = document.getElementById("chat-input");
    const chatContent = document.getElementById("chat-content");
    const locationSelect = document.getElementById("location");
    const currentLocation = document.getElementById("current-location");

    chatInput.addEventListener("keypress", function(e) {
        if (e.key === "Enter" && chatInput.value.trim() !== "") {
            const userMessage = chatInput.value;
            addMessage("Você", userMessage);
            chatInput.value = "";

            // Simula uma resposta automática do atendente
            setTimeout(function() {
                addMessage("Atendente", "Olá! Como posso ajudar?");
            }, 1000);
        }
    });

    locationSelect.addEventListener("change", function() {
        const selectedLocation = locationSelect.value;
        currentLocation.textContent = `Localização: ${selectedLocation}`;
    });
});

$(document).ready(function(){
    $('.image-carousel').slick({
        dots: true, /* Adiciona indicadores de página */
        infinite: true, /* Loop infinito */
        speed: 500, /* Velocidade da transição */
        slidesToShow: 1, /* Quantidade de slides visíveis */
        slidesToScroll: 1, /* Quantidade de slides a rolar */
        autoplay: true, /* Ativa o autoplay */
        autoplaySpeed: 3000 /* Velocidade do autoplay */
    });
});

