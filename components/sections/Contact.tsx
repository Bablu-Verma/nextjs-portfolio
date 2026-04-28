'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactFormSchema, type ContactFormData } from '@/lib/validations';
import { Section, Container, SectionHeader } from '@/components/ui/Section';
import { Input, Textarea } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { FadeIn, StaggerContainer, staggerItem } from '@/components/shared/Animations';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import toast from 'react-hot-toast';

export function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  // ✅ WhatsApp Submit
  const onSubmit = async (data: ContactFormData) => {
    try {
      const message = `
Hello

Name: ${data.name}
Email: ${data.email}
Subject: ${data.subject}

Message:
${data.message}
      `;

      const encodedMessage = encodeURIComponent(message);
      const phoneNumber = "919217205979";

      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

      window.open(whatsappUrl, '_blank');

      toast.success('Opening WhatsApp...');
      reset();
    } catch {
      toast.error('Something went wrong. Please try again.');
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: '[EMAIL_ADDRESS]',
      href: 'mailto:[EMAIL_ADDRESS]',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'India',
      href: '#',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 0000000000',
      href: 'tel:+910000000000',
    },
  ];

  return (
    <Section id="contact" className="relative">
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-secondary/30 to-transparent" />

      <Container className="relative">
        <SectionHeader
          badge="Contact"
          title="Let's Work Together"
          description="Have a project in mind? Let's discuss and build something amazing "
        />

        <div className="grid lg:grid-cols-5 gap-12">

          {/* 🔹 LEFT SIDE */}
          <div className="lg:col-span-2 space-y-8">

            <StaggerContainer className="space-y-6">
              {contactInfo.map((info) => (
                <motion.a
                  key={info.label}
                  variants={staggerItem}
                  href={info.href}
                  className="flex items-start gap-4 p-4 rounded-xl glass group hover:scale-[1.02] transition"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition">
                    <info.icon className="w-5 h-5 text-primary group-hover:text-white" />
                  </div>

                  <div>
                    <p className="text-sm text-muted-foreground">{info.label}</p>
                    <p className="font-medium group-hover:text-primary transition">
                      {info.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </StaggerContainer>

            {/* 🔗 SOCIAL */}
            <FadeIn delay={0.3} className="p-6 rounded-xl glass">
              <h4 className="font-semibold mb-4">Connect with me</h4>

              <div className="flex gap-4">
                <motion.a
                  href="https://github.com/yourusername"
                  target="_blank"
                  whileHover={{ scale: 1.1 }}
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary"
                >
                  <FaGithub />
                </motion.a>

                <motion.a
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  whileHover={{ scale: 1.1 }}
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary"
                >
                  <FaLinkedin />
                </motion.a>


              </div>
            </FadeIn>

          </div>

          {/* 🔹 RIGHT SIDE FORM */}
          <div className="lg:col-span-3">
            <FadeIn delay={0.2}>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name</label>
                    <Input
                      placeholder="John Doe"
                      {...register('name')}
                      error={errors.name?.message}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <Input
                      type="email"
                      placeholder="john@example.com"
                      {...register('email')}
                      error={errors.email?.message}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Subject</label>
                  <Input
                    placeholder="Project Inquiry"
                    {...register('subject')}
                    error={errors.subject?.message}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <Textarea
                    placeholder="Tell me about your project..."
                    {...register('message')}
                    error={errors.message?.message}
                  />
                </div>


                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  isLoading={isSubmitting}
                >
                  Send Message
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  Message will be sent directly to WhatsApp
                </p>

              </form>
            </FadeIn>
          </div>

        </div>
      </Container>
    </Section>
  );
}