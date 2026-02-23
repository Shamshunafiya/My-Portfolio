import { motion } from "motion/react";
import { Lightbulb, Layers, PenTool, Navigation } from "lucide-react";

const responsibilities = [
  {
    icon: PenTool,
    title: "Interface Design",
    description: "Designed intuitive and visually appealing interfaces using Figma.",
    color: "primary"
  },
  {
    icon: Layers,
    title: "Wireframes & Prototypes",
    description: "Created wireframes and interactive prototypes to visualize user flows.",
    color: "secondary"
  },
  {
    icon: Lightbulb,
    title: "Creative Problem Solving",
    description: "Solved design challenges using creative thinking.",
    color: "accent"
  },
  {
    icon: Navigation,
    title: "User Experience",
    description: "Ensured smooth navigation and engaging user experience.",
    color: "primary"
  }
];

export function ResponsibilitiesSection() {
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
            My <span className="text-primary">Responsibilities</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Key areas where I contribute my skills and expertise.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {responsibilities.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="glass rounded-2xl p-8"
            >
              <div className={`inline-flex p-4 rounded-xl bg-${item.color}/10 border border-${item.color}/20 mb-4`}>
                <item.icon className={`text-${item.color}`} size={28} />
              </div>
              <h3 className="mb-3">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
