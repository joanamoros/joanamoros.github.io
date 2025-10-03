// src/pages/Home.tsx
import { FaGithub, FaLinkedin, FaStrava, FaInstagram, FaYoutube, FaChess } from "react-icons/fa";
import { SiTiktok, SiImdb, SiThreads, SiHevy } from "react-icons/si";
import { MdOutlineSportsEsports } from "react-icons/md";

export default function Home() {
  return (
    <>
      {/* Hero: solo título y subtítulo */}
      <section id="hero">
        <h1 className="text-4xl font-bold">Joan <span className="gradient-text">Amorós</span></h1>
        <p className="mt-2 text-lg">
          Desarrollador apasionado, corredor dedicado y creador de contenido. Conectando código, kilómetros y creatividad.
        </p>
      </section>

      {/* Contenido principal */}
      <section className="connect-section">
        <h2>Conecta Conmigo</h2>
        <p className="subtitle">Sígueme en mis diferentes plataformas y únete a mi viaje</p>

        {/* Tarjetas principales */}
        <div className="platforms-grid">
          <a href="https://github.com/joanamoros" target="_blank" rel="noopener noreferrer" className="platform-card github">
            <div className="platform-icon"><FaGithub size={24} /></div>
            <div className="platform-info">
              <div className="platform-title">GitHub</div>
              <div className="platform-desc">Código y proyectos</div>
            </div>
            <div className="platform-arrow">→</div>
          </a>

          <a href="https://www.linkedin.com/in/joan-amor%C3%B3s-ram%C3%ADrez-645a24224/" target="_blank" rel="noopener noreferrer" className="platform-card linkedin">
            <div className="platform-icon"><FaLinkedin size={24} /></div>
            <div className="platform-info">
              <div className="platform-title">LinkedIn</div>
              <div className="platform-desc">Perfil profesional</div>
            </div>
            <div className="platform-arrow">→</div>
          </a>

          <a href="https://www.strava.com/athletes/tu-id" target="_blank" rel="noopener noreferrer" className="platform-card strava">
            <div className="platform-icon"><FaStrava size={24} /></div>
            <div className="platform-info">
              <div className="platform-title">Strava</div>
              <div className="platform-desc">Actividad deportiva</div>
            </div>
            <div className="platform-arrow">→</div>
          </a>

          <a href="https://instagram.com/tu-usuario" target="_blank" rel="noopener noreferrer" className="platform-card instagram">
            <div className="platform-icon"><FaInstagram size={24} /></div>
            <div className="platform-info">
              <div className="platform-title">Instagram</div>
              <div className="platform-desc">Momentos y lifestyle</div>
            </div>
            <div className="platform-arrow">→</div>
          </a>

          <a href="https://www.youtube.com/@Johan023/" target="_blank" rel="noopener noreferrer" className="platform-card youtube">
            <div className="platform-icon"><FaYoutube size={24} /></div>
            <div className="platform-info">
              <div className="platform-title">YouTube</div>
              <div className="platform-desc">Videos y tutoriales</div>
            </div>
            <div className="platform-arrow">→</div>
          </a>

          <a href="https://www.chess.com/member/johan023" target="_blank" rel="noopener noreferrer" className="platform-card chess">
            <div className="platform-icon"><FaChess size={24} /></div>
            <div className="platform-info">
              <div className="platform-title">Chess.com</div>
              <div className="platform-desc">(ELO: 408)</div>
              <div className="platform-desc">Partidas de ajedrez</div>
            </div>
            <div className="platform-arrow">→</div>
          </a>
        </div>

        {/* Gaming */}
        <div className="gaming-section">
          <h3><MdOutlineSportsEsports /> Gaming</h3>
          <div className="games-grid">
            <a href="https://statsroyale.com/es/profile/J9JVGQJC" target="_blank" rel="noopener noreferrer" className="game-card clash-royale">
              <div className="game-icon">👑</div>
              <div className="game-title">Clash Royale</div>
            </a>
            <a href="https://www.clashofstats.com/players/johan23-L2PLLJLQU/summary" target="_blank" rel="noopener noreferrer" className="game-card clash-clans">
              <div className="game-icon">⚔️</div>
              <div className="game-title">Clash of Clans</div>
            </a>
            <a href="https://brawlify.com/stats/profile/8YYQGL0Q8" target="_blank" rel="noopener noreferrer" className="game-card brawl-stars">
              <div className="game-icon">⭐</div>
              <div className="game-title">Brawl Stars</div>
            </a>
          </div>
        </div>

        {/* Redes adicionales */}
        <div className="extra-socials">
          <a href="https://www.threads.net/@_johan023" target="_blank" rel="noopener noreferrer" className="extra-social">
            <SiThreads size={28} />
            <span>Threads</span>
          </a>
          <a href="https://www.tiktok.com/@joanamoros23" target="_blank" rel="noopener noreferrer" className="extra-social">
            <SiTiktok size={28} />
            <span>TikTok</span>
          </a>
          <a href="https://hevy.com/user/joan_amoros" target="_blank" rel="noopener noreferrer" className="extra-social">
            <SiHevy size={28} />
            <span>Hevy</span>
          </a>
          <a href="https://www.imdb.com/es-es/user/ur184233438/" target="_blank" rel="noopener noreferrer" className="extra-social">
            <SiImdb size={28} />
            <span>IMDb</span>
          </a>
        </div>
      </section>
    </>
  );
}