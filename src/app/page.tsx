"use client";
import React from "react";
import Header from "@/components/header/header";
import { LayoutGrid } from "@/components/ui/layout-grid";
import Image from "next/image";

const menuItems = [
  { title: "Team", link: "/team" },
  { title: "Contact", link: "/contact" },
];

// Skeleton cards (from LayoutGridDemo)
const SkeletonOne = () => (
  <div>
    <p className="font-bold md:text-4xl text-xl text-white">
      House in the woods
    </p>
    <p className="font-normal text-base text-white"></p>
    <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      A serene and tranquil retreat, this house in the woods offers a peaceful
      escape from the hustle and bustle of city life.
    </p>
  </div>
);

const SkeletonTwo = () => (
  <div>
    <p className="font-bold md:text-4xl text-xl text-white">
      House above the clouds
    </p>
    <p className="font-normal text-base text-white"></p>
    <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      Perched high above the world, this house offers breathtaking views and a
      unique living experience. It&apos;s a place where the sky meets home,
      and tranquility is a way of life.
    </p>
  </div>
);

const SkeletonThree = () => (
  <div>
    <p className="font-bold md:text-4xl text-xl text-white">Greens all over</p>
    <p className="font-normal text-base text-white"></p>
    <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      A house surrounded by greenery and nature&apos;s beauty. It&apos;s the
      perfect place to relax, unwind, and enjoy life.
    </p>
  </div>
);

const SkeletonFour = () => (
  <div>
    <p className="font-bold md:text-4xl text-xl text-white">
      Rivers are serene
    </p>
    <p className="font-normal text-base text-white"></p>
    <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      A house by the river is a place of peace and tranquility. It&apos;s the
      perfect place to relax, unwind, and enjoy life.
    </p>
  </div>
);

// Cards for LayoutGrid
const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail:
      "https://images.unsplash.com/photo-1476231682828-37e571bc172f?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail:
      "https://images.unsplash.com/photo-1464457312035-3d7d0e0c058e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail:
      "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail:
      "https://images.unsplash.com/photo-1475070929565-c985b496cb9f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6">
      <Header
        title="Business Name"
        subtitle="Professional Services for Your Needs"
        buttonText="Menu"
        menuItems={menuItems}
      />
      <div className="spacer"></div>
      <div className="introduction-text-center">
        <Image
          src="/images/company.jpeg"
          alt="Business Services"
          width={800}
          height={400}
          id="intro-image"
          className="rounded-lg mx-auto"
        />
        <p
          id="intro-text"
          className="mt-4 text-gray-300 max-w-2xl mx-auto"
          style={{
            fontSize: "clamp(1rem, 2vw, 1.2rem)",
            lineHeight: "1.6",
          }}
        >
          Your trusted partner for all business needs. We provide top-notch
          services to help you succeed. Our team is dedicated to delivering
          exceptional results and making sure your experience is as seamless as
          it gets.
        </p>
      </div>

      <div className="spacer"></div>

      <section className="max-w-6xl py-10 w-full">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          Our Services
        </h2>
        <LayoutGrid cards={cards} />
      </section>

      <div className="spacer"></div>

      <footer className="mt-auto py-6 text-gray-500">
        © 2025 Business Name — All rights reserved
      </footer>
    </main>
  );
}
