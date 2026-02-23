import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const projects = [
  {
    title: "WhatsApp Clone – UI/UX",
    description: "Designed a WhatsApp clone using Figma. Created user-friendly chat screens and smooth navigation flow. Focused on usability, responsiveness, and interaction. Improved my design and prototyping skills.",
    image: "https://images.unsplash.com/photo-1646766677899-9c1750e28b0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGF0c2FwcCUyMG1vYmlsZSUyMGNoYXR8ZW58MXx8fHwxNzYzNzA1MTA0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tools: ["Figma", "UI/UX Design", "Prototyping"],
    highlights: [
      "User-friendly chat screens",
      "Smooth navigation flow",
      "Responsive design",
      "Interactive prototypes"
    ]
  },
  {
    title: "Food App – UI/UX",
    description: "Designed a complete Food App layout based on my own creative ideas. Included menu layout, order process, and user-friendly interface. Improved design thinking and problem-solving skills.",
    image: "https://images.unsplash.com/photo-1729860649884-40ec104f9dfd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwZGVsaXZlcnklMjBhcHB8ZW58MXx8fHwxNzYzNjI2Nzk0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tools: ["Figma", "Design Thinking", "User Flow"],
    highlights: [
      "Complete menu layout",
      "Order process design",
      "User-friendly interface",
      "Creative problem-solving"
    ]
  },
  {
    title: "Anime Posters & Banner Website",
    description: "Created a fully responsive anime-themed website showcasing posters and banners for anime lovers. The website includes animated poster cards, featured seals, and smooth micro-interactions to enhance the user experience.",
    image: "https://images.unsplash.com/photo-1643560413634-edc1135c7e4b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmltZSUyMHBvc3RlciUyMGFydHxlbnwxfHx8fDE3NjM2OTUxMTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tools: ["Figma", "HTML", "CSS", "Animation"],
    highlights: [
      "Fully responsive design",
      "Animated poster cards",
      "Smooth micro-interactions",
      "Anime-themed aesthetics"
    ]
  }
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-6 bg-muted/30">
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
            A showcase of my UI/UX design work and creative solutions.
          </p>
        </motion.div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, rotateX: 2 }}
              className="glass rounded-3xl overflow-hidden"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Image */}
                <div className="relative h-64 lg:h-auto overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-8 lg:p-10">
                  <h3 className="text-primary mb-4">{project.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tools */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm border border-primary/20 pulse-badge"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  {/* Highlights */}
                  <div className="space-y-2 mb-6">
                    {project.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                        <span className="text-sm text-muted-foreground">{highlight}</span>
                      </div>
                    ))}
                  </div>

                  {/* View Link */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition-colors"
                  >
                    <span>View Design</span>
                    <ExternalLink size={16} />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
