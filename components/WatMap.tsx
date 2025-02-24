"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";

// โหลด react-leaflet แบบ dynamic เพื่อแก้ปัญหา TypeScript & Next.js hydration error
const MapContainer = dynamic(() => import("react-leaflet").then((m) => m.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import("react-leaflet").then((m) => m.TileLayer), { ssr: false });
const Marker = dynamic(() => import("react-leaflet").then((m) => m.Marker), { ssr: false });
const Popup = dynamic(() => import("react-leaflet").then((m) => m.Popup), { ssr: false });

// กำหนดตำแหน่งของวัดพระปฐมเจดีย์
const position: LatLngExpression = [13.8198, 100.0409];

const WatMap: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="w-80 h-80 bg-gray-200 animate-pulse rounded-lg" />; // Skeleton Loading

  return (
    <div className="w-80 h-80 rounded-lg overflow-hidden shadow-lg">
      <MapContainer center={position} zoom={15} className="w-full h-full" scrollWheelZoom={false}>
        {/* Tile Layer (OpenStreetMap) */}
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {/* Marker ที่วัดพระปฐมเจดีย์ */}
        <Marker position={position}>
          <Popup>📍 วัดพระปฐมเจดีย์</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default WatMap;
