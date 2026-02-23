import { motion } from "motion/react";
import { ExternalLink, Github } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const projects = [
  {
    title: "AI Dashboard",
    description: "A modern analytics platform with real-time data visualization",
    image: "https://images.unsplash.com/photo-1644088379091-d574269d422f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzYzNjM0NDY2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["React", "TypeScript", "D3.js"],
    color: "primary",
  },
  {
    title: "Workspace Manager",
    description: "Collaborative tool for teams to organize and track projects",
    image: "https://images.unsplash.com/photo-1623679072629-3aaa0192a391?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3b3Jrc3BhY2UlMjBkZXNrfGVufDF8fHx8MTc2MzYxMzA0NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Next.js", "Tailwind", "Supabase"],
    color: "secondary",
  },
  {
    title: "Creative Studio",
    description: "Portfolio showcase with unique animations and interactions",
    image: "https://images.unsplash.com/photo-1695634183389-53116dd525a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGRlc2lnbiUyMG1vY2t1cHxlbnwxfHx8fDE3NjM2OTgzNDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["React", "Motion", "Three.js"],
    color: "accent",
  },
  {
    title: "Architecture Hub",
    description: "A minimalist platform for showcasing architectural designs",
    image: "https://images.unsplash.com/photo-1520529890308-f503006340b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc2MzY3ODcxNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Vue", "Nuxt", "WebGL"],
    color: "primary",
  },
];

export function Projects() {
  return (
    <section className="py-24 px-6 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of my recent work showcasing diverse skills and creative
            solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-2xl border border-border bg-card">
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-muted rounded-full text-sm border border-border"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3">
                    <motion.a
                      href="#"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-lg border border-primary/20 hover:bg-primary/20 transition-colors"
                    >
                      <ExternalLink size={16} />
                      <span>View Live</span>
                    </motion.a>
                    <motion.a
                      href="#"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 bg-muted rounded-lg border border-border hover:bg-muted/70 transition-colors"
                    >
                      <Github size={16} />
                      <span>Code</span>
                    </motion.a>
                  </div>
                </div>

                {/* Hover glow */}
                <div className={`absolute inset-0 bg-${project.color}/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
