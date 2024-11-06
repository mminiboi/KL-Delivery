// Inicializa o mapa para o Restaurante A com rota fictícia em Taubaté-SP
function initMapA() {
    const map = L.map('map').setView([-23.1404599, -45.7795055], 13); // Coordenadas para Taubaté-SP

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
    }).addTo(map);

    const start = L.latLng(-23.0370, -45.5800); // Ponto inicial fictício (Senai de Taubaté)
    const end = L.latLng(-23.1404599, -45.7795055); // Ponto de destino fictício (Restaurante A)

    L.marker(start).addTo(map).bindPopup("Ponto de Partida").openPopup();
    L.marker(end).addTo(map).bindPopup("Restaurante A");

    const route = L.polyline([start, end], { color: 'blue' }).addTo(map);
    map.fitBounds(route.getBounds());
}

// Inicializa o mapa para o Restaurante B com rota fictícia em Taubaté-SP
function initMapB() {
    const map = L.map('map').setView([-23.11944, -45.69606], 13); // Coordenadas para Taubaté-SP

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
    }).addTo(map);

    const start = L.latLng(-23.0370, -45.5800); // Ponto inicial fictício (Senai de Taubaté)
    const end = L.latLng(-23.11944, -45.69606); // Ponto de destino fictício (Restaurante B)

    L.marker(start).addTo(map).bindPopup("Ponto de Partida").openPopup();
    L.marker(end).addTo(map).bindPopup("Restaurante B");

    const route = L.polyline([start, end], { color: 'blue' }).addTo(map);
    map.fitBounds(route.getBounds());
}

