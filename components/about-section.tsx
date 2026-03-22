export function AboutSection() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            About Me
          </h2>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-4">
            <p className="text-muted-foreground leading-relaxed text-justify">
              As a fresher with keen interest in enhancing problem-solving, research, and technical capabilities,
              I am eager to kickstart my career in the software and technology sector. I aim to evolve into a
              highly analytical and committed team member, known for precision in technical proficiency coupled
              with a talent for verbal communication and public speaking.
            </p>
            <p className="text-muted-foreground leading-relaxed text-justify">
              I have about 1 year 2 months of experience working as a Junior Support Engineer at UnifyCX
              (GlowTouch Technologies), providing good support to clients with web hosting services,
              having a good performance in real-time troubleshooting of websites and emails to fix
              issues in a time span of 30 minutes.
            </p>
            <p className="text-muted-foreground leading-relaxed text-justify">
              I completed JAVA Full Stack Development course from JAVA Learning Center (JLC) from
              June 2024 to December 2024, further enhancing my development skills.
            </p>

            <div className="pt-4 space-y-6">
              <h3 className="text-foreground font-semibold mb-3">Education</h3>

              <div className="border-l-2 border-primary pl-4">
                <p className="text-foreground font-medium">B.E. in Computer Science and Engineering</p>
                <p className="text-muted-foreground text-sm">Vivekananda Institute of Technology (VTU)</p>
                <p className="text-muted-foreground text-sm">Kumbalagodu, Bengaluru | 2020 - 2024</p>
                <p className="text-primary text-sm font-medium">CGPA: 7</p>
              </div>

              <div className="border-l-2 border-border pl-4">
                <p className="text-foreground font-medium">Pre-University (PCMC)</p>
                <p className="text-muted-foreground text-sm">Alvas Pre-University College</p>
                <p className="text-muted-foreground text-sm">Moodbidri, Dakshina Kannada | 2018 - 2020</p>
                <p className="text-primary text-sm font-medium">Percentage: 76%</p>
              </div>

              <div className="border-l-2 border-border pl-4">
                <p className="text-foreground font-medium">ICSE Board</p>
                <p className="text-muted-foreground text-sm">BGS World School</p>
                <p className="text-muted-foreground text-sm">Chikkaballapura | 2018</p>
                <p className="text-primary text-sm font-medium">Percentage: 76%</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square bg-card rounded-lg border border-border overflow-hidden">
              <img
                src="/images/amruth-profile.jpeg"
                alt="Amruth M - Java Developer"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center mt-4">
              <p className="text-sm text-foreground font-medium">Amruth M</p>
              <p className="text-xs text-muted-foreground mt-1">Chikkaballapura, Karnataka</p>
            </div>

            <div className="mt-6 space-y-2">
              <h4 className="text-foreground font-semibold text-sm">Languages</h4>
              <div className="flex flex-wrap gap-2">
                {["English", "Hindi", "Kannada", "Telugu"].map((lang) => (
                  <span
                    key={lang}
                    className="px-2 py-1 text-xs bg-secondary text-foreground rounded-md border border-border"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
