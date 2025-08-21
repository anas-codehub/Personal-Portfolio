"use client";
import React, { useRef } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Twitter,
  Facebook,
  Instagram,
} from "lucide-react";
import Link from "next/link";
import { Button, Form, Input, Textarea } from "@heroui/react";
import emailjs from "@emailjs/browser";

const ContactSection = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "service_75bhuhg",
          "template_9y9u8ir",
          form.current,
          "41syiGIL4NKelypvb"
        )
        .then(
          (result) => {
            alert("Message sent successfully!");
            (e.target as HTMLFormElement).reset();
          },
          (error) => {
            alert("Failed to send message. Try again.");
          }
        );
    }
  };

  return (
    <div className="bg-[#0D1117]">
      <section
        id="contact"
        className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-center"
      >
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 text-green-400">
          &gt;_ contact
        </h2>
        <p className="text-base sm:text-lg text-white mb-10 sm:mb-12 max-w-2xl mx-auto">
          Let’s build something amazing together! Fill the form or reach out via
          social links below.
        </p>

        {/* Contact Form */}
        <Form
          onSubmit={sendEmail}
          className="max-w-2xl mx-auto space-y-5 sm:space-y-6 px-2 sm:px-0"
        >
          <Input
            type="text"
            placeholder="Your Name"
            required
            variant="bordered"
            radius="sm"
            classNames={{
              inputWrapper: "border-green-500",
            }}
            className="text-white"
          />
          <Input
            type="email"
            placeholder="Your Email"
            required
            variant="bordered"
            radius="sm"
            classNames={{
              inputWrapper: "border-green-500",
            }}
            className="text-white"
          />
          <Textarea
            required
            className="max-w-2xl text-white"
            label="Description"
            placeholder="Enter your description"
            variant="bordered"
            radius="sm"
            classNames={{
              inputWrapper: "border-green-500",
            }}
          />
          <Button
            type="submit"
            radius="none"
            className="w-full font-medium"
            color="success"
          >
            Send Message 🚀
          </Button>
        </Form>

        {/* Social Links */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-10 sm:mt-12">
          {[
            { href: "https://github.com/anas-codehub", icon: <Github /> },
            {
              href: "https://www.linkedin.com/in/talat-mahmud-anas-a54705354/",
              icon: <Linkedin />,
            },
            { href: "mailto:youremail@example.com", icon: <Mail /> },
            { href: "https://twitter.com/your-username", icon: <Twitter /> },
            {
              href: "https://www.facebook.com/talat.mahmud.9615",
              icon: <Facebook />,
            },
            { href: "https://instagram.com/weirdo_anas", icon: <Instagram /> },
          ].map((link, idx) => (
            <Link
              key={idx}
              href={link.href}
              target="_blank"
              className="p-3 sm:p-4 rounded-full border text-success hover:bg-green-600 hover:text-white transition-all"
            >
              {link.icon}
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ContactSection;
