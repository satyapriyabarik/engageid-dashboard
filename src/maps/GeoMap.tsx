import {
    MapContainer,
    TileLayer,
    Marker,
    Popup,
} from 'react-leaflet';

import 'leaflet/dist/leaflet.css';

import L from 'leaflet';

const position: [number, number] = [
    12.9716,
    77.5946,
];

const markerIcon = new L.Icon({
    iconUrl:
        'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',

    shadowUrl:
        'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',

    iconSize: [25, 41],
    iconAnchor: [12, 41],
});

export default function GeoMap() {
    return (
        <div className="h-[400px] rounded-3xl overflow-hidden border border-slate-800">
            <MapContainer
                center={position}
                zoom={5}
                scrollWheelZoom={false}
                className="h-full w-full"
            >
                <TileLayer
                    attribution='&copy; OpenStreetMap contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                <Marker
                    position={position}
                    icon={markerIcon}
                >
                    <Popup>
                        Bangalore Operations Center
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    );
}