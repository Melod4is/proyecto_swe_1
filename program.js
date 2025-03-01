
var map = L.map('map').setView([4.5720763, -74.1342726], 16);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

async function loadPolygon() {

    try{

        let response= await fetch("tunal.geojson");
        let data = await response.json();

        L.geoJSON(data,
            {
                style: {color: "blue"}
            }
        ).addTo(map);

    }
    catch(error){
        console.error("Can´t load")
    }
    
}

loadPolygon();

let btnTrees = document.getElementById("btnTrees");
btnTrees.addEventListener("click", async function () {

    try{
        let response = await fetch("arboles.geojson");
        let data = await response.json();

        L.geoJSON(data).addTo(map);
    }
    catch(error){
        console.error("Can´t load")
    }
    
}); 
