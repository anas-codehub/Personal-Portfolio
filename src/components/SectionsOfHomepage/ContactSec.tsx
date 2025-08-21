"use client";
import React from "react";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import Link from "next/link";
import { Button, Form, Input, Textarea } from "@heroui/react";

const ContactSection = () => {
  return (
    <div className="bg-[#0D1117]">
      <section
        id="contact"
        className="w-full max-w-7xl mx-auto px-6 py-20 text-center"
      >
        <h2 className="text-4xl font-bold mb-6 text-green-500">
          📬 Contact Me
        </h2>
        <p className="text-lg text-white mb-12">
          Let’s build something amazing together! Fill the form or reach out via
          social links below.
        </p>

        {/* Contact Form */}
        <Form className="max-w-2xl mx-auto space-y-6">
          <Input
            type="text"
            placeholder="Your Name"
            required
            variant="bordered"
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
            classNames={{
              inputWrapper: "border-green-500",
            }}
            className="text-white"
          />
          <Textarea
            className="max-w-2xl text-white"
            label="Description"
            placeholder="Enter your description"
            variant="bordered"
            classNames={{
              inputWrapper: "border-green-500",
            }}
          />
          ;
          <Button
            type="submit"
            radius="none"
            className="w-full "
            color="success"
          >
            Send Message 🚀
          </Button>
        </Form>

        {/* Social Links with Link */}
        <div className="flex justify-center gap-6 mt-12">
          <Link
            href="https://github.com/your-username"
            target="_blank"
            className="p-3 rounded-full border text-success hover:bg-green-600 hover:text-white transition-all"
          >
            <Github />
          </Link>
          <Link
            href="https://linkedin.com/in/your-username"
            target="_blank"
            className="p-3 rounded-full border text-success hover:bg-green-600 hover:text-white transition-all"
          >
            <Linkedin />
          </Link>
          <Link
            href="mailto:youremail@example.com"
            className="p-3 rounded-full border text-success hover:bg-green-600 hover:text-white transition-all"
          >
            <Mail />
          </Link>
          <Link
            href="https://twitter.com/your-username"
            target="_blank"
            className="p-3 rounded-full border text-success hover:bg-green-600 hover:text-white transition-all"
          >
            <Twitter />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ContactSection;
