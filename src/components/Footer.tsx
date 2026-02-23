import { motion } from "motion/react";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo/Name */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h3 className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Your Name
            </h3>
            <p className="text-muted-foreground text-sm mt-1">
              Creative Developer & Designer
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex gap-4"
          >
            <motion.a
              href="#"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 bg-muted/50 rounded-full border border-border hover:border-primary transition-colors"
            >
              <Github size={20} />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 bg-muted/50 rounded-full border border-border hover:border-primary transition-colors"
            >
              <Linkedin size={20} />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 bg-muted/50 rounded-full border border-border hover:border-primary transition-colors"
            >
              <Twitter size={20} />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 bg-muted/50 rounded-full border border-border hover:border-primary transition-colors"
            >
              <Mail size={20} />
            </motion.a>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 pt-8 border-t border-border text-center"
        >
          <p className="text-muted-foreground text-sm">
            © {currentYear} All rights reserved. Built with passion and code.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
