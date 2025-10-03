
const projects = [
  {
    title: "Mi Web Personal",
    description: "Portfolio y blog personal en HTML, CSS y JS.",
    technologies: ["HTML", "CSS", "JS"],
    url: "https://github.com/joanamoros",
    featured: true,
    completion_date: "2025-07-01",
  },
  {
    title: "API de Tareas",
    description: "API REST para gestión de tareas con Node.js y Express.",
    technologies: ["Node.js", "Express", "MongoDB"],
    url: "https://github.com/joanamoros",
    featured: false,
    completion_date: "2025-06-15",
  },
];

export default function Projects() {
  return (
    <>
      <section id="hero">
        <h1>Proyectos</h1>
        <p>Explora mis últimos desarrollos y creaciones técnicas.</p>
      </section>
      <section className="portfolio-grid">
        {projects.map((p) => (
          <div key={p.title} className="portfolio-card">
            <h3>{p.title}</h3>
            <p>{p.description}</p>
            <div className="preview">{p.technologies.join(", ")}</div>
            <a href={p.url} target="_blank">
              Ver demo ➜
            </a>
          </div>
        ))}
      </section>
    </>
  );
}
