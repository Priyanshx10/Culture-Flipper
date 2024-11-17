"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import L from "leaflet";

// Dynamically import the components that rely on window, with ssr: false
const MapContainer = dynamic(() => import("react-leaflet").then(mod => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import("react-leaflet").then(mod => mod.TileLayer), { ssr: false });
const Marker = dynamic(() => import("react-leaflet").then(mod => mod.Marker), { ssr: false });
const Popup = dynamic(() => import("react-leaflet").then(mod => mod.Popup), { ssr: false });

const LANGUAGES = [
  { name: "English", coordinates: [40, -95], color: "#3B82F6" },
  { name: "Korean", coordinates: [37, 127], color: "#10B981" },
  { name: "Chinese", coordinates: [35, 105], color: "#F59E0B" },
  { name: "Japanese", coordinates: [36, 138], color: "#EC4899" },
  { name: "Thai", coordinates: [15, 100], color: "#8B5CF6" },
  { name: "Vietnamese", coordinates: [14, 108], color: "#EF4444" },
  { name: "Russian", coordinates: [60, 105], color: "#6366F1" },
];

export default function LanguagesSection() {
  const [isClient, setIsClient] = useState(false);

  // Set state to true when the component mounts, indicating we're on the client
  useEffect(() => {
    setIsClient(true);
  }, []);

  // If not on the client, render a loading state or nothing
  if (!isClient) {
    return <div>Loading...</div>;
  }

  // Ensure that the MapContainer and other components are only rendered on the client
  return (
    <section className="relative py-24 bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            Breaking Language Barriers
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Expertise in {LANGUAGES.map((lang) => lang.name).join(", ")}
          </p>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl -m-4" />
          <div className="absolute inset-0 bg-white/40 backdrop-blur-sm rounded-3xl" />

          {isClient && ( // Ensure MapContainer is only rendered on the client
            <div className="relative rounded-3xl overflow-hidden shadow-xl transition-all duration-300 hover:shadow-2xl bg-white">
              <MapContainer
                center={[20, 0]} // Center of map (adjust as necessary)
                zoom={2} // Zoom level for world view
                scrollWheelZoom={false}
                style={{ minHeight: "500px" }}
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {LANGUAGES.map(({ name, coordinates, color }) => (
                  <Marker key={name} position={[coordinates[0], coordinates[1]]} icon={L.divIcon({ 
                    className: 'custom-icon', 
                    html: `<div style="background-color:${color}; width:25px; height:41px; border-radius:5px;"></div>`, 
                    iconSize: [25, 41], 
                    iconAnchor: [12.5, 41] 
                  })}>
                    <Popup>{name}</Popup>
                  </Marker>
                ))}
              </MapContainer>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}