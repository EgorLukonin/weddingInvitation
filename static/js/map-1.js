function init(){
    let map = new ymaps.Map('map-1', {
        center: [55.61460706909041,37.680499499999975],
        zoom: 17
    })

    let placemark = new ymaps.Placemark([55.61460706909041,37.680499499999975], {}, {});
    map.geoObjects.add(placemark);
}


ymaps.ready(init);