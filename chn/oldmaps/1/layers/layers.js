var wms_layers = [];


        var lyr_googlemaps_0 = new ol.layer.Tile({
            'title': 'google maps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });
var lyr_Madras_map_modified_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "Madras_map_modified",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Madras_map_modified_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [8930044.501525, 1459940.623834, 8940989.569300, 1477292.259983]
                            })
                        });

lyr_googlemaps_0.setVisible(true);lyr_Madras_map_modified_1.setVisible(true);
var layersList = [lyr_googlemaps_0,lyr_Madras_map_modified_1];
