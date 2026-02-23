import { motion } from "motion/react";
import { ArrowDown } from "lucide-react";
import { Button } from "./ui/button";

export function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block mb-4 px-4 py-2 glass rounded-full"
            >
              <span className="text-primary">UI/UX Designer & Developer</span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl mb-6">
              Hi, I'm{" "}
              <span className="text-primary">Shamshun Nafiya</span>
            </h1>

            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              An Information Technology student and a passionate learner with strong 
              interest in UI/UX design and web development. I specialize in creating 
              simple, responsive, and user-friendly interfaces using tools like Figma, 
              HTML, and CSS.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Projects
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-border hover:bg-muted"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get In Touch
              </Button>
            </div>
          </motion.div>

          {/* Right Content - Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center"
          >
            <div className="glass rounded-3xl p-8 max-w-md">
              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 pulse-badge"></div>
                  <div>
                    <h3 className="text-primary mb-1">About Me</h3>
                    <p className="text-muted-foreground">
                      I work well in a team, adapt quickly, and always give my 
                      best to complete tasks successfully.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2 pulse-badge"></div>
                  <div>
                    <h3 className="text-primary mb-1">Current Focus</h3>
                    <p className="text-muted-foreground">
                      B.Tech in Information Technology (2021-2025)
                      <br />
                      CGPA: 7.25
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 pulse-badge"></div>
                  <div>
                    <h3 className="text-primary mb-1">Specialization</h3>
                    <p className="text-muted-foreground">
                      Responsive Design, User-Friendly Interfaces, 
                      Figma Prototyping
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown className="text-primary" size={24} />
        </motion.div>
      </div>
    </section>
  );
}
