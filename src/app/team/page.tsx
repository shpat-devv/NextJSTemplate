"use client";
import React from "react";
import Header from "@/components/header/header";
import TeamCard from "@/components/team-card/team-card";

import "./team-page.css";

export default function TeamPage() {
    return (
        <main className="min-h-screen flex flex-col p-6">
            <Header
                title="Business Name"
                subtitle="Meet Our Team"
                buttonText="Menu"
                menuItems={[
                    { title: "Home", link: "/" },
                    { title: "Contact", link: "/contact" },
                ]}
            />
            <div className="spacer"></div>
            <div className="team-page-content">
                <div className="team-cards-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <TeamCard
                        name="Alice Johnson"
                        role="CEO"
                        bio='"Empowering our team every day."'
                        imageUrl="https://media.istockphoto.com/id/1289187966/photo/photo-of-attractive-positive-young-businesswoman-take-selfie-hold-laptop-outdoors-in-downtown.jpg?s=612x612&w=0&k=20&c=EjRnOLSpcmAgup5sEFbM2OBx2GabyiBjS1F7I9mcrNM="
                    />
                    <TeamCard
                        name="Bob Smith"
                        role="CTO"
                        bio='"Building what’s next."'
                        imageUrl="https://portraitpal.ai/wp-content/uploads/2024/08/corporate-headshot.jpg"
                    />
                    <TeamCard
                        name="Catherine Lee"
                        role="CFO"
                        bio='"Numbers tell our story."'
                        imageUrl="https://img.freepik.com/premium-photo/self-portrait-cheerful-toothy-beaming-business-lady-taking-selfie-her-office_274222-19576.jpg"
                    />
                    <TeamCard
                        name="David Kim"
                        role="COO"
                        bio='"Making operations seamless."'
                        imageUrl="https://www.shutterstock.com/image-photo/face-businessman-selfie-smile-modern-600nw-2337136337.jpg"
                    />
                </div>
            </div>
        </main>
    );
}
