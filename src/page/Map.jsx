import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import Loader from 'react-loader-spinner';
import { useSelector } from 'react-redux';

const Map = () => {
  const mapCenterPosition = [46.463458, 2];
  const realEstates = useSelector((state) => state.realEstate.realEstateList);

  return (
    <>
      <h1 className="text-center">MES RESIDENCES</h1>
      <MapContainer
        style={{ height: '500px', width: '100%' }}
        center={mapCenterPosition}
        zoom={5}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution="MonRoyaume map using Leaflet"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {!realEstates ? (
          <Loader type="Circles" color="#00BFFF" height={80} width={80} />
        ) : (
          realEstates.map((item) => {
            console.log(item);
            return (
              <Marker key={item.id} position={[item.latitude, item.longitude]}>
                <Popup>{item.name}</Popup>
              </Marker>
            );
          })
        )}
      </MapContainer>
    </>
  );
};

export default Map;
