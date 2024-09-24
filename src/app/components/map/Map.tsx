"use client"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { LatLngExpression, LatLngTuple, divIcon } from 'leaflet';
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import { useEffect } from "react";
import "./map.css"

interface MapProps {
    posix: LatLngExpression | LatLngTuple,
    zoom?: number,
}

const defaults = {
    zoom: 19,
}

const Map = ({ zoom = defaults.zoom, posix }: MapProps) => {

    const liveLocationIcon = divIcon({
        className: 'live-location-icon',
        html: '<div class="pulse"></div>',
    });

    return (
        <MapContainer
            center={posix}
            zoom={zoom}
            scrollWheelZoom={false}
            style={{ height: "100%", width: "100%" }}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={posix} icon={liveLocationIcon} draggable={false}>
                <Popup>Hey! Your bicycle is here</Popup>
            </Marker>
        </MapContainer>
    )
}

export default Map;
