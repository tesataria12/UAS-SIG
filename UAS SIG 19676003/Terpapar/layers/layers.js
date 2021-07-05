var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});

        var lyr_GoogleRoad_0 = new ol.layer.Tile({
            'title': 'GoogleRoad_0',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: [new ol.Attribution({html: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>'})],
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });var format_Salatiga_total_Terpapar_1 = new ol.format.GeoJSON();
var features_Salatiga_total_Terpapar_1 = format_Salatiga_total_Terpapar_1.readFeatures(json_Salatiga_total_Terpapar_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Salatiga_total_Terpapar_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Salatiga_total_Terpapar_1.addFeatures(features_Salatiga_total_Terpapar_1);var lyr_Salatiga_total_Terpapar_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Salatiga_total_Terpapar_1, 
                style: style_Salatiga_total_Terpapar_1,
    title: 'Salatiga_total_Terpapar<br />\
    <img src="styles/legend/Salatiga_total_Terpapar_1_0.png" />  345 - 382 <br />\
    <img src="styles/legend/Salatiga_total_Terpapar_1_1.png" />  382 - 443 <br />\
    <img src="styles/legend/Salatiga_total_Terpapar_1_2.png" />  443 - 500 <br />\
    <img src="styles/legend/Salatiga_total_Terpapar_1_3.png" />  500 - 540 <br />'
        });var format_Vaksinasi_2 = new ol.format.GeoJSON();
var features_Vaksinasi_2 = format_Vaksinasi_2.readFeatures(json_Vaksinasi_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Vaksinasi_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Vaksinasi_2.addFeatures(features_Vaksinasi_2);var lyr_Vaksinasi_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Vaksinasi_2, 
                style: style_Vaksinasi_2,
                title: '<img src="styles/legend/Vaksinasi_2.png" /> Vaksinasi'
            });

lyr_GoogleRoad_0.setVisible(true);lyr_Salatiga_total_Terpapar_1.setVisible(true);lyr_Vaksinasi_2.setVisible(true);
var layersList = [baseLayer,lyr_GoogleRoad_0,lyr_Salatiga_total_Terpapar_1,lyr_Vaksinasi_2];
lyr_Salatiga_total_Terpapar_1.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Terpapar': 'Terpapar', });
lyr_Vaksinasi_2.set('fieldAliases', {'x': 'x', 'y': 'y', });
lyr_Salatiga_total_Terpapar_1.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Terpapar': 'TextEdit', });
lyr_Vaksinasi_2.set('fieldImages', {'x': 'TextEdit', 'y': 'TextEdit', });
lyr_Salatiga_total_Terpapar_1.set('fieldLabels', {'id': 'inline label', 'Nama': 'inline label', 'Terpapar': 'inline label', });
lyr_Vaksinasi_2.set('fieldLabels', {'x': 'no label', 'y': 'no label', });
lyr_Vaksinasi_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});