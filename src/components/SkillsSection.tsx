import { motion } from "motion/react";
import { Code2, Palette, Users, Clock } from "lucide-react";

const technicalSkills = [
  { name: "UI/UX Design", category: "Design" },
  { name: "HTML", category: "Development" },
  { name: "CSS", category: "Development" },
  { name: "Figma", category: "Tools" },
  { name: "WordPress", category: "Tools" },
  { name: "Loveable", category: "Tools" },
  { name: "Adobe Express", category: "Tools" },
  { name: "Canva", category: "Tools" },
  { name: "Excel", category: "Productivity" },
  { name: "MS Word", category: "Productivity" },
  { name: "PowerPoint", category: "Productivity" },
];

const softSkills = [
  { name: "Teamwork", icon: Users, color: "primary" },
  { name: "Hardworking Person", icon: Code2, color: "secondary" },
  { name: "Time Management", icon: Clock, color: "accent" },
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4">
            My <span className="text-primary">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A combination of technical expertise and soft skills that help me deliver quality work.
          </p>
        </motion.div>

        {/* Technical Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-6">
            <Palette className="text-primary" size={28} />
            <h3 className="text-primary">Technical Skills</h3>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {technicalSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -5, scale: 1.05 }}
                className="glass rounded-xl p-4 text-center cursor-default pulse-badge"
              >
                <p className="text-foreground">{skill.name}</p>
                <span className="text-xs text-muted-foreground mt-1 block">
                  {skill.category}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <Users className="text-primary" size={28} />
            <h3 className="text-primary">Soft Skills</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {softSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="glass rounded-2xl p-6 text-center"
              >
                <div className={`inline-flex p-4 rounded-xl bg-${skill.color}/10 border border-${skill.color}/20 mb-4`}>
                  <skill.icon className={`text-${skill.color}`} size={32} />
                </div>
                <h4>{skill.name}</h4>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
