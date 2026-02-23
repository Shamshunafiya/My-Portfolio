import { motion } from "motion/react";
import { GraduationCap, Award } from "lucide-react";

const education = [
  {
    degree: "B.Tech – Information Technology",
    institution: "University College of Engineering, Tindivanam",
    duration: "2021 – 2025",
    grade: "CGPA: 7.25",
    color: "primary"
  },
  {
    degree: "Higher Secondary (12th)",
    institution: "Kanchana Devi Matric Hr. Sec School",
    duration: "2020 – 2021",
    grade: "Percentage: 82%",
    color: "secondary"
  },
  {
    degree: "SSLC (10th)",
    institution: "Dr. RKS Matric Hr. Sec School",
    duration: "2018 – 2019",
    grade: "Percentage: 83%",
    color: "accent"
  }
];

const certificates = [
  {
    title: "HTML & CSS",
    issuer: "Udemy",
    icon: Award
  },
  {
    title: "UI/UX Masterclass",
    issuer: "Novi Tech",
    icon: Award
  }
];

export function EducationSection() {
  return (
    <section id="education" className="py-24 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-12">
            <GraduationCap className="text-primary" size={32} />
            <h2 className="text-4xl md:text-5xl">
              <span className="text-primary">Education</span>
            </h2>
          </div>

          <div className="space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ x: 8 }}
                className="glass rounded-2xl p-6 md:p-8"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="mb-2">{edu.degree}</h3>
                    <p className="text-muted-foreground mb-1">
                      {edu.institution}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {edu.duration}
                    </p>
                  </div>
                  <div className={`px-4 py-2 bg-${edu.color}/10 border border-${edu.color}/20 rounded-xl inline-block pulse-badge`}>
                    <span className={`text-${edu.color}`}>
                      {edu.grade}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certificates */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="flex items-center gap-3 mb-12">
            <Award className="text-primary" size={32} />
            <h2 className="text-4xl md:text-5xl">
              <span className="text-primary">Certificates</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certificates.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="glass rounded-2xl p-6 text-center"
              >
                <div className="inline-flex p-4 rounded-xl bg-primary/10 border border-primary/20 mb-4">
                  <cert.icon className="text-primary" size={32} />
                </div>
                <h3 className="mb-2">{cert.title}</h3>
                <p className="text-muted-foreground">{cert.issuer}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
