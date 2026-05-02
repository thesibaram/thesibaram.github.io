import React from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "./ui/SectionHeader";
import { PixelDivider } from "./pixels/PixelDivider";
import { CRTMonitor } from "./pixels/CRTMonitor";
import { useForm } from "react-hook-form";
import { useToast } from "../hooks/use-toast";

const EnvelopeIcon = () => (
  <svg viewBox="0 0 16 16" fill="currentColor" className="w-full h-full pixel-art">
    <rect x="2" y="4" width="12" height="8" />
    <rect x="4" y="6" width="8" height="4" fill="var(--px-surface)" />
    <rect x="6" y="8" width="4" height="2" fill="currentColor" />
  </svg>
);

const PinIcon = () => (
  <svg viewBox="0 0 16 16" fill="currentColor" className="w-full h-full pixel-art">
    <rect x="6" y="2" width="4" height="6" />
    <rect x="7" y="8" width="2" height="6" />
    <rect x="4" y="4" width="8" height="2" />
  </svg>
);

export function Contact() {
  const { register, handleSubmit, reset } = useForm();
  const { toast } = useToast();

  const onSubmit = (data: any) => {
    console.log("Form data:", data);
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    reset();
  };

  return (
    <motion.section 
      id="contact"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="max-w-6xl mx-auto px-4 py-20 w-full"
    >
      <SectionHeader title="Contact" icon={<EnvelopeIcon />} />
      <PixelDivider />
      
      <div className="grid md:grid-cols-2 gap-16 mt-12 items-start">
        {/* Left: Contact Info */}
        <div className="flex flex-col gap-8">
          <p className="text-[var(--px-text)] text-lg leading-relaxed">
            I'm currently looking for internship opportunities in Machine Learning and Computer Vision. My inbox is always open.
          </p>
          
          <div className="flex flex-col gap-6 font-mono">
            <div className="flex items-center gap-4 text-[var(--px-text)] hover:text-[var(--px-accent)] transition-colors">
              <div className="w-6 h-6"><EnvelopeIcon /></div>
              <a href="mailto:sibaram@example.com" data-testid="contact-email">sibaram@example.com</a>
            </div>
            
            <div className="flex items-center gap-4 text-[var(--px-text)] hover:text-[var(--px-accent)] transition-colors">
              <div className="w-6 h-6">
                <svg viewBox="0 0 16 16" fill="currentColor" className="pixel-art"><rect x="4" y="2" width="8" height="12"/><rect x="2" y="4" width="12" height="8"/><rect x="6" y="6" width="4" height="4" fill="var(--px-surface)"/></svg>
              </div>
              <a href="https://github.com/thesibaram" target="_blank" rel="noreferrer" data-testid="contact-github">github.com/thesibaram</a>
            </div>
            
            <div className="flex items-center gap-4 text-[var(--px-text)] hover:text-[var(--px-accent)] transition-colors">
              <div className="w-6 h-6">
                <svg viewBox="0 0 16 16" fill="currentColor" className="pixel-art"><rect x="2" y="2" width="12" height="12"/><rect x="4" y="6" width="2" height="6" fill="var(--px-surface)"/><rect x="8" y="6" width="4" height="6" fill="var(--px-surface)"/></svg>
              </div>
              <a href="https://linkedin.com/in/sibaram" target="_blank" rel="noreferrer" data-testid="contact-linkedin">linkedin.com/in/sibaram</a>
            </div>
            
            <div className="flex items-center gap-4 text-[var(--px-text)]">
              <div className="w-6 h-6"><PinIcon /></div>
              <span>Berhampur, Odisha</span>
            </div>
          </div>
        </div>

        {/* Right: Form & Monitor */}
        <div className="flex flex-col gap-12">
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="font-mono text-sm text-[var(--px-text)] font-bold">NAME</label>
              <input 
                id="name"
                {...register("name", { required: true })}
                className="h-12 bg-transparent border border-[var(--px-border)] px-4 font-mono text-[var(--px-text)] focus:outline-none focus:shadow-[0_0_0_2px_var(--px-accent)] transition-shadow"
                data-testid="input-name"
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="font-mono text-sm text-[var(--px-text)] font-bold">EMAIL</label>
              <input 
                id="email"
                type="email"
                {...register("email", { required: true })}
                className="h-12 bg-transparent border border-[var(--px-border)] px-4 font-mono text-[var(--px-text)] focus:outline-none focus:shadow-[0_0_0_2px_var(--px-accent)] transition-shadow"
                data-testid="input-email"
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="font-mono text-sm text-[var(--px-text)] font-bold">MESSAGE</label>
              <textarea 
                id="message"
                {...register("message", { required: true })}
                className="min-h-[120px] bg-transparent border border-[var(--px-border)] p-4 font-mono text-[var(--px-text)] focus:outline-none focus:shadow-[0_0_0_2px_var(--px-accent)] transition-shadow resize-y"
                data-testid="input-message"
              />
            </div>

            <button 
              type="submit"
              className="h-12 bg-[var(--px-accent)] text-[var(--px-bg)] font-mono font-bold px-8 pixel-hover mt-2 uppercase tracking-wider"
              data-testid="btn-submit-contact"
            >
              Send Message
            </button>
          </form>

          <div className="flex justify-center mt-4">
            <CRTMonitor className="w-48 h-auto opacity-80" />
          </div>
        </div>
      </div>
    </motion.section>
  );
}
