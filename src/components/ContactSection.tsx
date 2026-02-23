import { motion } from "motion/react";
import { Mail, Phone, MapPin, Linkedin, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useState } from "react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Feel free to reach out for collaborations, opportunities, or just to say hello!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="glass rounded-2xl p-8">
              <h3 className="text-primary mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                <motion.a
                  href="mailto:shamshunnafiya@gmail.com"
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 p-4 bg-primary/5 rounded-xl border border-primary/20 hover:bg-primary/10 transition-colors"
                >
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Mail className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Email</p>
                    <p className="text-foreground">shamshunnafiya@gmail.com</p>
                  </div>
                </motion.a>

                <motion.a
                  href="tel:+918778848095"
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 p-4 bg-secondary/5 rounded-xl border border-secondary/20 hover:bg-secondary/10 transition-colors"
                >
                  <div className="p-3 bg-secondary/10 rounded-lg">
                    <Phone className="text-secondary" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Phone</p>
                    <p className="text-foreground">+91 8778848095</p>
                  </div>
                </motion.a>

                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 p-4 bg-accent/5 rounded-xl border border-accent/20"
                >
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <MapPin className="text-accent" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Location</p>
                    <p className="text-foreground">Kallakurichi, Tamil Nadu</p>
                  </div>
                </motion.div>

                <motion.a
                  href="https://linkedin.com/in/shamshunnafiya-n-0274ab382"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 p-4 bg-primary/5 rounded-xl border border-primary/20 hover:bg-primary/10 transition-colors"
                >
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Linkedin className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">LinkedIn</p>
                    <p className="text-foreground text-sm">shamshunnafiya-n-0274ab382</p>
                  </div>
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-2xl p-8"
          >
            <h3 className="text-primary mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block mb-2 text-muted-foreground">Name</label>
                <Input
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="bg-input-background border-border focus:border-primary"
                  required
                />
              </div>

              <div>
                <label className="block mb-2 text-muted-foreground">Email</label>
                <Input
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="bg-input-background border-border focus:border-primary"
                  required
                />
              </div>

              <div>
                <label className="block mb-2 text-muted-foreground">Message</label>
                <Textarea
                  placeholder="Your message..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="bg-input-background border-border focus:border-primary min-h-[150px]"
                  required
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground group"
              >
                <span>Send Message</span>
                <Send className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
