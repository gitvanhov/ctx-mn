 import Map from 'ol/map';
 import View from 'ol/view';
 import OSM from 'ol/source/OSM';
 import TileLayer from 'ol/layer/Tile';

 const map: Map = new Map({
    target: 'map',
    layers: [
      new TileLayer({
        source: new OSM()
      })
    ],
    view: new View({
      center: [0, 0],
      zoom: 4
    })

  }); 
