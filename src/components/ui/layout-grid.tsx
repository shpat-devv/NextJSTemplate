"use client";
import React, { useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

type Card = {
  id: number;
  content: React.ReactNode;
  className?: string;
  thumbnail: string;
};

export const LayoutGrid = ({ cards }: { cards: Card[] }) => {
  const [selected, setSelected] = useState<Card | null>(null);

  const handleClick = (card: Card) => setSelected(card);
  const handleOutsideClick = () => setSelected(null);

  return (
    <div
      onClick={handleOutsideClick}
      className="min-h-screen w-full p-10 grid grid-cols-1 md:grid-cols-3 max-w-7xl mx-auto gap-4 relative"
    >
      {cards.map((card) => (
        <div key={card.id} className={cn(card.className)}>
          <motion.div
            onClick={(e) => {
              e.stopPropagation();
              handleClick(card);
            }}
            className={cn(
              "relative overflow-hidden rounded-xl h-72 w-full cursor-pointer",
              selected?.id === card.id ? "z-50" : "z-10",
              "bg-card"
            )}
            layoutId={`card-${card.id}`}
          >
            {selected?.id === card.id && <SelectedCard selected={selected} />}
            <ImageComponent card={card} />
          </motion.div>
        </div>
      ))}
    </div>
  );
};

const ImageComponent = ({ card }: { card: Card }) => (
  <motion.img
    layoutId={`image-${card.id}-image`}
    src={card.thumbnail}
    alt="thumbnail"
    className="h-full w-full object-cover rounded-xl block"
  />
);

const SelectedCard = ({ selected }: { selected: Card | null }) => (
  <div className="absolute inset-0 z-50 flex flex-col justify-end p-4 rounded-xl">
    <motion.div
      layoutId={`content-${selected?.id}`}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="text-white"
    >
      {selected?.content}
    </motion.div>
  </div>
);
