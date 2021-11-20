import React  from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'


function Consulting() {
    return (
        <div>
       
 
         <MapContainer style={{height:"400px"}} center={[33.87041749615073, 10.115568913892043]} zoom={13} scrollWheelZoom={false}>
  <TileLayer
    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[33.84504330387592, 10.119688786915976]}>
    <Popup>
     blasa test 1
    </Popup>
  </Marker>
</MapContainer>



        </div>
    )
}
export default Consulting

