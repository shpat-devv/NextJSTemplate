"use client";
import React from "react";
import Header from "@/components/header/header";
import ContactForm from "@/components/contact/contact";

export default function AboutPage() {
  return (
    <main className="min-h-screen flex flex-col p-6">
      <Header
        title="Business Name"
        subtitle="Let us know how we can help"
        buttonText="Contact Us"
        menuItems={[
          { title: "Home", link: "/" },
          { title: "About", link: "/about" },
          { title: "Contact", link: "/contact" },
        ]}
      />
      <div className="spacer"></div>
     <div className="contact-page-content"> 
       <ContactForm />
     </div>

    </main>
  );
}
