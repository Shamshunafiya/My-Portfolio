import { motion } from "motion/react";
import { Heart } from "lucide-react";

export function FooterSection() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 border-t border-border bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h3 className="text-primary mb-2">Shamshun Nafiya</h3>
          <p className="text-muted-foreground mb-6">
            UI/UX Designer & Developer
          </p>
          
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <span>© {currentYear} Made with</span>
            <Heart className="text-primary fill-primary" size={16} />
            <span>by Shamshun Nafiya</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
