// import { useTranslation } from 'react-i18next';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

export const Home = () => {
  return (
    <div style={{ width: '100%', height: '100%', overflow: 'none' }}>
      <MapContainer
        center={[51.505, -1]}
        zoom={13}
        scrollWheelZoom={false}
        style={{ minHeight: '100vh', minWidth: '100vw' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};
