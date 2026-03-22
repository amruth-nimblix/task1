import { ExternalLink } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    title: "Online Course Registration System",
    description:
      "A web-based course registration system that allows students to register for courses online with a database-backed system for managing enrollments.",
    technologies: ["PHP", "CSS", "HTML", "SQL", "XAMPP"],
  },
  {
    title: "Online Course Registration Application",
    description:
      "An Android mobile application for online course registration, providing students with a mobile-friendly interface for managing their course enrollments.",
    technologies: ["JAVA", "Android Studio"],
  },
  {
    title: "Animated Steam Engine",
    description:
      "A computer graphics project featuring an animated steam engine simulation using OpenGL, demonstrating concepts of 3D graphics and animation.",
    technologies: ["OpenGL (GLUT)", "Visual Studio", "Computer Graphics"],
  },
  {
    title: "Smart Medicine Vending Machine",
    description:
      "An IoT-based smart medicine vending machine using RFID technology for secure access and NodeMCU for connectivity, built with embedded systems.",
    technologies: ["Arduino IDE", "Embedded C", "RFID", "NodeMCU"],
  },
  {
    title: "Crop Recommendation using AI & ML",
    description:
      "An artificial intelligence and machine learning project that recommends suitable crops based on various environmental and soil parameters.",
    technologies: ["AI", "Machine Learning", "Python"],
  },
  {
    title: "Dynamic Blogging Website Design",
    description:
      "A dynamic and responsive blogging website with modern UI/UX design principles, allowing users to create and share blog posts.",
    technologies: ["UI/UX Design", "Figma", "Web Design"],
  },
]

const experience = [
  {
    title: "Junior Support Engineer",
    company: "UnifyCX (GlowTouch Technologies)",
    description:
      "1 year 2 months of experience providing support to clients with web hosting services. Performed real-time troubleshooting of websites and emails, fixing issues within 30 minutes.",
  },
  {
    title: "AI & ML Intern",
    company: "Varcons Technologies Pvt Ltd",
    period: "Aug 2023 - Sep 2023",
    description:
      "Worked on Artificial Intelligence and Machine Learning projects including Crop Recommendation system.",
  },
  {
    title: "UI/UX Design Intern",
    company: "Technofly Solutions",
    period: "Sep 2023 - Oct 2023",
    description:
      "Designed UI/UX interfaces using Figma, including dynamic blogging website designs.",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            Experience
          </h2>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="grid gap-6 mb-16">
          {experience.map((exp, index) => (
            <article
              key={index}
              className="group p-6 bg-card rounded-lg border border-border hover:border-primary/50 transition-all"
            >
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {exp.title}
                </h3>
                <p className="text-primary font-medium">{exp.company}</p>
                {exp.period && (
                  <p className="text-muted-foreground text-sm">{exp.period}</p>
                )}
                <p className="text-muted-foreground leading-relaxed pt-2">
                  {exp.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            Featured Projects
          </h2>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="grid gap-6">
          {projects.map((project, index) => (
            <article
              key={index}
              className="group p-6 bg-card rounded-lg border border-border hover:border-primary/50 transition-all"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex-1 space-y-3">
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs font-mono text-primary bg-primary/10 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="https://www.linkedin.com/in/amruth-musical"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:underline"
          >
            <ExternalLink size={18} />
            Connect with me on LinkedIn
          </Link>
        </div>
      </div>
    </section>
  )
}
