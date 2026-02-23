import { motion } from "motion/react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <section className="py-24 px-6 bg-muted/20">
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
            Have a project in mind or just want to chat? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="mb-6">Let's work together</h3>
              <p className="text-muted-foreground mb-8">
                I'm always interested in hearing about new projects and
                opportunities. Whether you have a question or just want to say
                hi, I'll try my best to get back to you!
              </p>
            </div>

            <div className="space-y-4">
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-start gap-4 p-4 bg-muted/30 rounded-xl border border-border"
              >
                <div className="p-2 bg-primary/10 rounded-lg border border-primary/20">
                  <Mail className="text-primary" size={20} />
                </div>
                <div>
                  <p className="mb-1">Email</p>
                  <p className="text-muted-foreground">hello@example.com</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-start gap-4 p-4 bg-muted/30 rounded-xl border border-border"
              >
                <div className="p-2 bg-secondary/10 rounded-lg border border-secondary/20">
                  <Phone className="text-secondary" size={20} />
                </div>
                <div>
                  <p className="mb-1">Phone</p>
                  <p className="text-muted-foreground">+1 (555) 123-4567</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-start gap-4 p-4 bg-muted/30 rounded-xl border border-border"
              >
                <div className="p-2 bg-accent/10 rounded-lg border border-accent/20">
                  <MapPin className="text-accent" size={20} />
                </div>
                <div>
                  <p className="mb-1">Location</p>
                  <p className="text-muted-foreground">San Francisco, CA</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="bg-input-background border-border focus:border-primary"
                  required
                />
              </div>

              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="bg-input-background border-border focus:border-primary"
                  required
                />
              </div>

              <div>
                <Textarea
                  placeholder="Your Message"
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
                Send Message
                <Send className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
