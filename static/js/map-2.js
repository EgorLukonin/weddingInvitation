function init(){
    let map = new ymaps.Map('map-2', {
        center: [55.61834356912975,37.683347],
        zoom: 17
    })

    let placemark = new ymaps.Placemark([55.618320617579684,37.68364807507704], {}, {});
    map.geoObjects.add(placemark);
}


ymaps.ready(init);