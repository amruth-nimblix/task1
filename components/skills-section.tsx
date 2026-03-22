const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["Core JAVA", "Python", "C", "C++", "SQL", "JavaScript", "HTML", "CSS"],
  },
  {
    title: "Design & Tools",
    skills: ["UI/UX Design (Figma)", "Android Studio", "Visual Studio", "XAMPP", "Arduino IDE"],
  },
  {
    title: "Technologies",
    skills: ["OpenGL (GLUT)", "PHP", "Embedded C", "RFID", "NodeMCU"],
  },
  {
    title: "Soft Skills",
    skills: ["Web Design", "Communication", "Problem Solving", "Team Work", "Logical Thinking", "Project Management", "Meeting Deadlines"],
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-6 bg-card/50">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            Technical Skills
          </h2>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category) => (
            <div key={category.title} className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm bg-secondary text-foreground rounded-md border border-border hover:border-primary hover:text-primary transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
