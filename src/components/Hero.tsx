import { motion } from "motion/react";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-secondary/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-block mb-6 px-4 py-2 bg-muted/50 rounded-full border border-border"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span className="text-primary">Available for work</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl mb-6 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            Creative Developer & Designer
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Crafting unique digital experiences with a blend of creativity and
            technical expertise. Turning ideas into beautiful, functional
            products.
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground group">
              View My Work
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </Button>
            <Button size="lg" variant="outline" className="border-border hover:bg-muted">
              Get In Touch
            </Button>
          </div>

          <div className="flex gap-4 justify-center">
            <motion.a
              href="#"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 bg-muted/50 rounded-full border border-border hover:border-primary transition-colors"
            >
              <Github size={20} />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 bg-muted/50 rounded-full border border-border hover:border-primary transition-colors"
            >
              <Linkedin size={20} />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 bg-muted/50 rounded-full border border-border hover:border-primary transition-colors"
            >
              <Mail size={20} />
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
          <motion.div
            className="w-1.5 h-1.5 bg-primary rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
