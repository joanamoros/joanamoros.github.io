// src/pages/Races.tsx
import { FaStrava } from "react-icons/fa";
import { useState } from "react";

const races = [
  {
    name: "XXVI Carrera al Amanecer Santa Pola",
    distance: "6 km",
    location: "Santa Pola",
    date: "2022-08-28",
    finish_time: "30:16",
    pace: "5:07/km",
    position: null,
    total_participants: null,
    medal_type: "finisher",
    personal_record: false,
  },
  {
    name: "VIII 10k Rotary Elche",
    distance: "10 km",
    location: "Elche",
    date: "2023-02-12",
    finish_time: "52:44",
    pace: "5:18/km",
    position: null,
    total_participants: null,
    medal_type: "finisher",
    personal_record: false,
  },
  {
    name: "Benidorm Half (10k)",
    distance: "10 km",
    location: "Benidorm",
    date: "2023-11-25",
    finish_time: "49:09",
    pace: "4:56/km",
    position: null,
    total_participants: null,
    medal_type: "finisher",
    personal_record: true,
  },
  {
    name: "III Elche Night Race (5k)",
    distance: "5 km",
    location: "Elche",
    date: "2024-05-11",
    finish_time: "28:27",
    pace: "5:49/km",
    position: null,
    total_participants: null,
    medal_type: "finisher",
    personal_record: false,
  },
  {
    name: "52 Media Elche (10k Pompadour) 🟫",
    distance: "10 km",
    location: "Elche",
    date: "2025-03-23",
    finish_time: "48:55",
    pace: "4:59/km",
    position: null,
    total_participants: null,
    medal_type: "finisher",
    personal_record: true,
  },
  {
    name: "IV Elche Night Race (5k)",
    distance: "5 km",
    location: "Elche",
    date: "2025-05-10",
    finish_time: "24:19",
    pace: "4:56/km",
    position: null,
    total_participants: null,
    medal_type: "finisher",
    personal_record: true,
  },
  {
    name: "XXIX Carrera al Amanecer Santa Pola",
    distance: "6 km",
    location: "Santa Pola",
    date: "2025-08-31",
    finish_time: "Próximamente",
    pace: "Próximamente",
    position: null,
    total_participants: null,
    medal_type: null,
    personal_record: false,
  },
  {
    name: "53 Media Elche 🟩",
    distance: "21 km",
    location: "Elche",
    date: "2026-03-22",
    finish_time: "Próximamente",
    pace: "Próximamente",
    position: null,
    total_participants: null,
    medal_type: null,
    personal_record: false,
  },
];

// Extrae el año de la fecha
const getYear = (dateString: string) => new Date(dateString).getFullYear();

// Normaliza el nombre para agrupar (sin números romanos, años, etc.)
const getBaseName = (name: string): string => {
  return name
    .replace(/^[IVXLCDM]+\s+/i, '')        // Quita números romanos iniciales
    .replace(/^\d+\s+/, '')                // Quita números iniciales (52, 53...)
    .replace(/[🟫🟩]/g, '')                 // Quita emojis
    .replace(/\s*\(\d+k\)/g, '')           // Quita (5k), (10k)
    .replace(/\s*Pompadour/g, '')          // Quita "Pompadour"
    .replace(/Media Elche$/, 'Media Maratón Elche') // Opcional: unifica nombre
    .trim();
};

// Agrupar carreras por nombre base
const groupedRaces = races.reduce((acc, race) => {
  const base = getBaseName(race.name);
  if (!acc[base]) acc[base] = [];
  acc[base].push(race);
  return acc;
}, {} as Record<string, typeof races>);

// Ordenar ediciones por año (más reciente primero o viceversa)
Object.keys(groupedRaces).forEach(base => {
  groupedRaces[base].sort((a, b) => getYear(a.date) - getYear(b.date));
});

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString("es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export default function Races() {
  // Estado: para cada carrera base, qué edición está seleccionada (por índice)
  const [selectedEdition, setSelectedEdition] = useState<Record<string, number>>(() => {
    const initial: Record<string, number> = {};
    Object.keys(groupedRaces).forEach(base => {
      initial[base] = 0; // Primera edición por defecto
    });
    return initial;
  });

  return (
    <>
      <section id="hero">
        <h1>Carreras</h1>
        <p>Un recorrido por mis logros y experiencias en el mundo del running.</p>
        <a
          href="https://www.strava.com/athletes/74996691"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            marginTop: "1rem",
            color: "#fc4c02",
            fontWeight: "600",
            textDecoration: "none",
            fontSize: "1.1rem",
          }}
        >
          <FaStrava size={24} />
          Ver en Strava
        </a>
      </section>

      <section className="portfolio-grid">
        {Object.entries(groupedRaces).map(([baseName, editions]) => {
          const selectedIndex = selectedEdition[baseName] ?? 0;
          const currentRace = editions[selectedIndex];

          return (
            <div key={baseName} className="portfolio-card">
              <h3>{baseName}</h3>

              {/* Selector de ediciones */}
              <div style={{ marginBottom: "1rem", display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {editions.map((edition, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedEdition(prev => ({ ...prev, [baseName]: idx }))}
                    style={{
                      padding: "0.25rem 0.5rem",
                      fontSize: "0.85rem",
                      border: "1px solid #cbd5e1",
                      borderRadius: "4px",
                      backgroundColor: idx === selectedIndex ? "#2563eb" : "transparent",
                      color: idx === selectedIndex ? "#fff" : "#475569",
                      cursor: "pointer",
                    }}
                  >
                    Edición {getYear(edition.date)}
                  </button>
                ))}
              </div>

              {/* Datos de la edición seleccionada */}
              <p>
                {currentRace.location} - {formatDate(currentRace.date)}
              </p>
              <p>Distancia: {currentRace.distance}</p>
              <p>Tiempo: {currentRace.finish_time}</p>
              <p>Ritmo: {currentRace.pace}</p>
              {currentRace.medal_type && (
                <div className="preview">
                  {currentRace.medal_type === "finisher" ? "🏅 Finisher" : currentRace.medal_type}
                </div>
              )}
              {currentRace.personal_record && <div className="preview">PR</div>}
            </div>
          );
        })}
      </section>
    </>
  );
}


/*
<td style="background-color: #2596be; color: white;">XXVI Carrera al Amanecer Santa Pola</td>
<td style="background-color: #faae3f; color: #2e56a3;">VIII 10k Rotary Elche</td>
<td style="background-color: #ffffff; color: #82afcd;">Benidorm Half (10k)</td>
<td style="background-color: #59d14b; color: #000000;">III Elche Night Race (5k)</td>
<td style="background-color: #e20909; color: #ffffff;">52 Media Elche (10k Pompadour) 🟫</td>
<td style="background-color: #59d14b; color: #000000;">IV Elche Night Race (5k)</td>
<td style="background-color: #2596be; color: white;">XXIX Carrera al Amanecer Santa Pola</td>
<td style="background-color: #e20909; color: #ffffff;">53 Media Elche 🟩</td>
*/