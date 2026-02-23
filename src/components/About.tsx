import { motion } from "motion/react";
import { Code2, Palette, Rocket, Zap } from "lucide-react";

const skills = [
  {
    icon: Code2,
    title: "Development",
    description: "Building responsive web applications with modern technologies",
    color: "primary",
  },
  {
    icon: Palette,
    title: "Design",
    description: "Creating intuitive and beautiful user interfaces",
    color: "secondary",
  },
  {
    icon: Rocket,
    title: "Performance",
    description: "Optimizing for speed and seamless user experiences",
    color: "accent",
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "Exploring new technologies and creative solutions",
    color: "primary",
  },
];

export function About() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I'm a passionate developer and designer who loves creating unique
            digital experiences that make a difference.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="relative group"
            >
              <div className="relative p-6 bg-muted/30 rounded-2xl border border-border hover:border-primary transition-all duration-300 h-full backdrop-blur-sm">
                <div
                  className={`inline-flex p-3 rounded-xl bg-${skill.color}/10 border border-${skill.color}/20 mb-4`}
                >
                  <skill.icon className={`text-${skill.color}`} size={24} />
                </div>
                <h3 className="mb-2">{skill.title}</h3>
                <p className="text-muted-foreground text-sm">
                  {skill.description}
                </p>

                {/* Hover glow effect */}
                <div className={`absolute inset-0 bg-${skill.color}/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10`} />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 p-8 bg-gradient-to-r from-secondary/10 via-primary/10 to-accent/10 rounded-2xl border border-border"
        >
          <div className="max-w-3xl">
            <h3 className="mb-4">My Journey</h3>
            <p className="text-muted-foreground mb-4">
              With years of experience in web development and design, I've
              worked on diverse projects ranging from startups to enterprise
              solutions. My approach combines technical expertise with creative
              thinking to deliver exceptional results.
            </p>
            <p className="text-muted-foreground">
              I'm constantly learning and experimenting with new technologies to
              stay at the forefront of digital innovation. Let's build something
              amazing together.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
