import React from "react";
import { Map, Marker } from 'yandex-map-react';

function Yandex_map(){
    return <div className="home">
            <Map width={'100%'} height={850} center={[43.32475,45.6924]} zoom={20}>
                       <Marker lat='43.32475' lon='45.6924'  >
            </Marker>
           </Map>
        </div>
}

export default Yandex_map;
