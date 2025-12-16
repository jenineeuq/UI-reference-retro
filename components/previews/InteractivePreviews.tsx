"use client";

import { useState } from "react";
import { Globe, MapPin, Plane } from "lucide-react";

// InteractiveGlobe Preview
export function InteractiveGlobePreview() {
  const [rotation, setRotation] = useState(0);

  return (
    <div className="w-full max-w-sm font-mono">
      <div className="border-4 theme-border theme-bg p-6 relative overflow-hidden">
        {/* Globe representation */}
        <div
          className="w-48 h-48 mx-auto relative border-4 theme-border rounded-full bg-gradient-to-br from-blue-600 to-blue-900"
          style={{ transform: `rotateY(${rotation}deg)` }}
        >
          {/* Grid lines */}
          <div className="absolute inset-0 rounded-full border-2 theme-border/30" />
          <div className="absolute inset-4 rounded-full border-2 theme-border/30" />
          <div className="absolute inset-8 rounded-full border-2 theme-border/30" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full h-0.5 theme-accent-bg/30" />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-0.5 h-full theme-accent-bg/30" />
          </div>
          {/* Markers */}
          <div className="absolute top-8 left-12 w-3 h-3 bg-red-500 border-2 border-white animate-pulse" />
          <div className="absolute top-16 right-10 w-3 h-3 bg-green-500 border-2 border-white animate-pulse" />
          <div className="absolute bottom-12 left-1/2 w-3 h-3 bg-yellow-500 border-2 border-white animate-pulse" />
        </div>

        {/* Controls */}
        <div className="flex justify-center gap-2 mt-4">
          <button
            onClick={() => setRotation(rotation - 30)}
            className="px-4 py-2 border-4 theme-border theme-accent-bg text-white font-bold uppercase shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
          >
            ← Rotate
          </button>
          <button
            onClick={() => setRotation(rotation + 30)}
            className="px-4 py-2 border-4 theme-border theme-accent-bg text-white font-bold uppercase shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
          >
            Rotate →
          </button>
        </div>
      </div>
      <div className="mt-2 text-center text-xs theme-text-subtle uppercase">
        ■ Interactive 3D Globe
      </div>
    </div>
  );
}

// GlobeMarker Preview
export function GlobeMarkerPreview() {
  const markers = [
    { city: "New York", country: "USA", status: "active", lat: "40.7°N", lng: "74.0°W" },
    { city: "London", country: "UK", status: "active", lat: "51.5°N", lng: "0.1°W" },
    { city: "Tokyo", country: "Japan", status: "pending", lat: "35.7°N", lng: "139.7°E" },
  ];

  return (
    <div className="w-full max-w-sm font-mono border-4 theme-border theme-bg">
      <div className="px-4 py-2 border-b-4 theme-border theme-bg-header flex items-center gap-2">
        <MapPin className="w-4 h-4 theme-text-muted" />
        <span className="font-bold uppercase theme-text">■ Globe Markers</span>
      </div>
      <div className="divide-y-2 theme-border-light">
        {markers.map((marker, i) => (
          <div key={i} className="flex items-center gap-3 px-4 py-3 hover:theme-bg-dark dark:hover:theme-bg-dark">
            <div className={`w-4 h-4 border-2 ${
              marker.status === "active" ? "border-green-600 bg-green-500" : "border-yellow-600 bg-yellow-500"
            } animate-pulse`} />
            <div className="flex-1">
              <div className="font-bold text-sm theme-text uppercase">{marker.city}</div>
              <div className="text-xs theme-text-subtle">{marker.country}</div>
            </div>
            <div className="text-right text-xs theme-text-muted font-mono">
              <div>{marker.lat}</div>
              <div>{marker.lng}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// GlobeArc Preview
export function GlobeArcPreview() {
  const routes = [
    { from: "NYC", to: "LON", distance: "5,567 km", time: "7h 30m" },
    { from: "LAX", to: "TYO", distance: "8,815 km", time: "11h 45m" },
    { from: "SFO", to: "SYD", distance: "11,939 km", time: "15h 20m" },
  ];

  return (
    <div className="w-full max-w-sm font-mono border-4 theme-border theme-bg">
      <div className="px-4 py-2 border-b-4 theme-border theme-bg-header flex items-center gap-2">
        <Plane className="w-4 h-4 theme-text-muted" />
        <span className="font-bold uppercase theme-text">■ Flight Routes</span>
      </div>
      <div className="p-4 space-y-3">
        {routes.map((route, i) => (
          <div key={i} className="p-3 border-4 theme-border-light theme-bg-dark">
            <div className="flex items-center justify-between mb-2">
              <span className="font-bold theme-text">{route.from}</span>
              <div className="flex-1 mx-2 relative h-0.5 theme-bg-header">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 theme-accent-bg border-2 theme-border rotate-45" />
              </div>
              <span className="font-bold theme-text">{route.to}</span>
            </div>
            <div className="flex justify-between text-xs theme-text-subtle uppercase">
              <span>{route.distance}</span>
              <span>{route.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// WorldMap Preview
export function WorldMapPreview() {
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);

  const regions = [
    { id: "na", name: "North America", users: "2.4M" },
    { id: "eu", name: "Europe", users: "3.1M" },
    { id: "asia", name: "Asia Pacific", users: "4.2M" },
    { id: "latam", name: "Latin America", users: "1.8M" },
  ];

  return (
    <div className="w-full max-w-md font-mono border-4 theme-border theme-bg">
      <div className="px-4 py-2 border-b-4 theme-border theme-bg-header flex items-center gap-2">
        <Globe className="w-4 h-4 theme-text-muted" />
        <span className="font-bold uppercase theme-text">■ World Map</span>
      </div>

      {/* Map representation */}
      <div className="p-4">
        <div className="aspect-video border-4 theme-border theme-bg relative overflow-hidden">
          {/* Simple world map representation */}
          <svg viewBox="0 0 400 200" className="w-full h-full">
            {/* Americas */}
            <rect x="20" y="30" width="80" height="100" fill={selectedRegion === "na" ? "#f59e0b" : "#92400e"} stroke="#fbbf24" strokeWidth="2" className="cursor-pointer hover:fill-amber-500 transition-colors" onClick={() => setSelectedRegion("na")} />
            <rect x="40" y="130" width="40" height="50" fill={selectedRegion === "latam" ? "#f59e0b" : "#92400e"} stroke="#fbbf24" strokeWidth="2" className="cursor-pointer hover:fill-amber-500 transition-colors" onClick={() => setSelectedRegion("latam")} />
            {/* Europe/Africa */}
            <rect x="140" y="30" width="60" height="60" fill={selectedRegion === "eu" ? "#f59e0b" : "#92400e"} stroke="#fbbf24" strokeWidth="2" className="cursor-pointer hover:fill-amber-500 transition-colors" onClick={() => setSelectedRegion("eu")} />
            {/* Asia */}
            <rect x="220" y="30" width="140" height="80" fill={selectedRegion === "asia" ? "#f59e0b" : "#92400e"} stroke="#fbbf24" strokeWidth="2" className="cursor-pointer hover:fill-amber-500 transition-colors" onClick={() => setSelectedRegion("asia")} />
          </svg>

          {/* Labels */}
          <div className="absolute bottom-2 left-2 text-xs theme-text-subtle uppercase">Click to select</div>
        </div>
      </div>

      {/* Legend */}
      <div className="grid grid-cols-2 gap-2 p-4 border-t-4 theme-border-light">
        {regions.map(region => (
          <button
            key={region.id}
            onClick={() => setSelectedRegion(region.id)}
            className={`p-2 border-4 text-left transition-all ${
              selectedRegion === region.id
                ? "theme-border theme-bg-header shadow-[2px_2px_0px_0px_rgba(0,0,0,0.5)]"
                : "theme-border-light hover:theme-border"
            }`}
          >
            <div className="text-xs font-bold uppercase theme-text">{region.name}</div>
            <div className="text-xs theme-text-subtle">{region.users} users</div>
          </button>
        ))}
      </div>
    </div>
  );
}
