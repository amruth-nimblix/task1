import { Linkedin, Mail, Phone } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-6">
          <p className="text-primary font-mono text-sm tracking-wide">
            Hi, my name is
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground text-balance">
            Amruth M
          </h1>
          <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-muted-foreground text-balance">
            Software Developer
          </h2>
          <p className="max-w-xl text-muted-foreground text-lg leading-relaxed text-justify">
            A passionate fresher with a strong interest in improving problem-solving, research, and technical skills. Eager to begin my career in the software and technology industry while growing into a highly analytical and dedicated team member with strong technical proficiency.
          </p>

          <div className="flex items-center gap-6 pt-4">
            <Link
              href="https://www.linkedin.com/in/amruth-musical"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </Link>
            <Link
              href="mailto:amruth.nimblix@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail size={24} />
            </Link>
            <Link
              href="tel:+917411537959"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Phone"
            >
              <Phone size={24} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
