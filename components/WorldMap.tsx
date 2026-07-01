"use client";

import { ComposableMap, Geographies, Geography, Marker, Line } from "react-simple-maps";

const GEO_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const destinations = [
  { name: "Hamburg",    coords: [9.99, 53.55] as [number, number] },
  { name: "Rotterdam",  coords: [4.47, 51.92] as [number, number] },
  { name: "Dubai",      coords: [55.27, 25.20] as [number, number] },
  { name: "Singapore",  coords: [103.82, 1.35] as [number, number] },
  { name: "Jakarta",    coords: [106.85, -6.21] as [number, number] },
  { name: "Shanghai",   coords: [121.47, 31.23] as [number, number] },
  { name: "Nairobi",    coords: [36.82, -1.29] as [number, number] },
  { name: "New York",   coords: [-74.00, 40.71] as [number, number] },
  { name: "London",     coords: [-0.12, 51.51] as [number, number] },
  { name: "Riyadh",     coords: [46.68, 24.69] as [number, number] },
];

// Bangalore — source
const ORIGIN: [number, number] = [77.59, 12.97];

export default function WorldMap() {
  return (
    <ComposableMap
      projectionConfig={{ scale: 140, center: [20, 10] }}
      style={{ width: "100%", height: "100%" }}
    >
      <Geographies geography={GEO_URL}>
        {({ geographies }: { geographies: any[] }) =>
          geographies.map((geo: any) => (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              fill="#1A2D4A"
              stroke="#0B1120"
              strokeWidth={0.5}
              style={{
                default: { outline: "none" },
                hover:   { outline: "none", fill: "#22385A" },
                pressed: { outline: "none" },
              }}
            />
          ))
        }
      </Geographies>

      {/* Trade route lines from Bangalore */}
      {destinations.map((d) => (
        <Line
          key={`line-${d.name}`}
          from={ORIGIN}
          to={d.coords}
          stroke="#C9A84C"
          strokeWidth={0.6}
          strokeOpacity={0.35}
          strokeDasharray="3 4"
        />
      ))}

      {/* Origin — Bangalore */}
      <Marker coordinates={ORIGIN}>
        <circle r={5} fill="#C9A84C" stroke="#FAF5EE" strokeWidth={1.5} />
        <circle r={10} fill="#C9A84C" fillOpacity={0.15} />
      </Marker>

      {/* Destination pins */}
      {destinations.map((d) => (
        <Marker key={d.name} coordinates={d.coords}>
          <circle r={3.5} fill="#C9A84C" stroke="#FAF5EE" strokeWidth={1} />
          <circle r={7} fill="#C9A84C" fillOpacity={0.12} />
        </Marker>
      ))}
    </ComposableMap>
  );
}
