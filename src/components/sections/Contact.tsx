'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Linkedin, Github, Instagram, Send, MapPin, Phone } from 'lucide-react';

export function Contact(): JSX.Element {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<string>('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || 'Failed to send message');

      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);

      setTimeout(() => setSubmitStatus(''), 4000);
    } catch (err: any) {
      console.error('Contact form error:', err);
      setSubmitStatus('error');
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(''), 4000);
    }
  };

  const socialLinks = [
    {
      icon: Mail,
      label: 'BusinessEmail',
      value: 'vdhairyaofficial@gmail.com',
      href: 'mailto:vdhairyaofficial@gmail.com',
      color: 'text-red-600 dark:text-red-400',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Dhairya Verma',
      href: 'https://www.linkedin.com/in/dhairya-v-000b44395',
      color: 'text-blue-600 dark:text-blue-400',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'Dhairya-code',
      href: 'https://github.com/Dhairya-code',
      color: 'text-gray-900 dark:text-gray-100',
    },
    {
      icon: Instagram,
      label: 'Instagram',
      value: '@thedhairyaverma',
      href: 'https://instagram.com/thedhairyaverma',
      color: 'text-pink-600 dark:text-pink-400',
    },
  ];

  const contactInfo = [
    {
      icon: MapPin,
      label: 'Location',
      value: 'India • Open to Remote & On-Site Opportunities',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: 'Available on Request',
    },
  ];

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Let's connect and discuss opportunities, projects, or just chat about tech!
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <Card className="lg:col-span-2 border-2 hover:border-blue-500 transition-colors duration-300">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">
                Send a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="border-gray-300 dark:border-gray-700"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="yor.email@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="border-gray-300 dark:border-gray-700"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="What's this about?"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="border-gray-300 dark:border-gray-700"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Your message here..."
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="border-gray-300 dark:border-gray-700 resize-none"
                  />
                </div>

                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-lg border border-green-200 dark:border-green-800">
                    ✓ Message sent successfully! I'll get back to you soon.
                  </div>
                )}

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                >
                  {isSubmitting ? (
                    <>
                      <span className="animate-spin mr-2">⏳</span>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info & Social Links */}
          <div className="space-y-6">
            {/* Contact Information */}
            <Card className="border-2 hover:border-purple-500 transition-colors duration-300">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">
                  Contact Info
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                        <Icon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                          {item.label}
                        </p>
                        <p className="text-gray-900 dark:text-white font-medium">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="border-2 hover:border-purple-500 transition-colors duration-300">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">
                  Connect With Me
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {socialLinks.map((link, index) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors group"
                    >
                      <Icon className={`h-5 w-5 ${link.color} group-hover:scale-110 transition-transform`} />
                      <div className="flex-1 min-w-0">
                        <p className="text-xs text-gray-600 dark:text-gray-400">
                          {link.label}
                        </p>
                        <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                          {link.value}
                        </p>
                      </div>
                    </a>
                  );
                })}
              </CardContent>
            </Card>

            {/* Quick Response Note */}
            <Card className="border-2 border-dashed border-gray-300 dark:border-gray-700">
              <CardContent className="p-6 text-center">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  💬 I typically respond within 24-48 hours
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
