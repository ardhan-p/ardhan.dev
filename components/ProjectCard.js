export default function ProjectCard({ image, platform, title }) {
  return (
    <section className="project-card">
      <img src={`/images/${image}.png`} alt={`${image} image`} className="project-image"/>
      <p className="project-platform">{platform}</p>
      <h3 className="project-title">{title}</h3>
    </section>
  )
}