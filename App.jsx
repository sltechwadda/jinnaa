import React, { useMemo, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Search, Sparkles, Feather, Heart, Share2, X, Menu, ChevronRight, ChevronLeft, ArrowUpRight } from "lucide-react";

const makeSVG = (title, gradA = "#7C3AED", gradB = "#06B6D4", motif = "moon") => {
  const symbols = {
    moon: '<circle cx="70" cy="60" r="24" fill="white" fill-opacity="0.9" />',
    star: '<polygon points="70,40 76,58 96,58 80,69 86,88 70,76 54,88 60,69 44,58 64,58" fill="white" fill-opacity="0.9"/>',
    feather: '<path d="M35 90c30-30 65-55 75-45 5 5-5 16-20 28-17 14-39 26-55 30 6-6 10-9 10-13 0-3-3-5-10 0 12-10 22-20 33-30 12-10 22-19 30-25-9 2-23 10-40 24C46 67 39 78 35 90z" fill="white" fill-opacity="0.85"/>',
    flame: '<path d="M70 30c20 18 30 33 30 50 0 22-18 40-40 40S20 102 20 80c0-17 10-32 30-50 8-7 12-12 20 0z" fill="white" fill-opacity="0.9"/>',
  };
  const motifNode = symbols[motif] || symbols.moon;
  const svg = `<?xml version='1.0' encoding='UTF-8'?>
  <svg xmlns='http://www.w3.org/2000/svg' width='640' height='400' viewBox='0 0 140 90'>
    <defs>
      <linearGradient id='g' x1='0' y1='0' x2='1' y2='1'>
        <stop offset='0%' stop-color='${gradA}' />
        <stop offset='100%' stop-color='${gradB}' />
      </linearGradient>
      <filter id='grain'>
        <feTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='2' stitchTiles='stitch' />
        <feColorMatrix type='saturate' values='0' />
        <feBlend mode='overlay' />
      </filter>
    </defs>
    <rect width='100%' height='100%' rx='10' fill='url(#g)' />
    <g opacity='0.15'>
      <rect x='0' y='0' width='140' height='90' filter='url(#grain)' />
    </g>
    <g transform='translate(0,0)'>
      ${motifNode}
    </g>
    <text x='8' y='80' font-size='7' font-family='Inter,Segoe UI,Arial' fill='white' opacity='0.95'>${title}</text>
  </svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
};

const storiesSeed = [
  { id: "lantern", title: "Lanterns Over Mireya", date: "2024-07-12", tags: ["adventure","night","magic"], excerpt: "Jinna Puka chases a runaway sky lantern...", motif: "star", colors: ["#059669","#06B6D4"] },
  { id: "river", title: "Whispers of the River Cloak", date: "2024-08-01", tags: ["myth","river","mystery"], excerpt: "A cloak spun from river mist reveals voices...", motif: "feather", colors: ["#0EA5E9","#6366F1"] },
  { id: "tower", title: "The Tower of Misted Glass", date: "2024-09-20", tags: ["dream","mirror"], excerpt: "An invisible tower only reveals itself...", motif: "moon", colors: ["#9333EA","#DB2777"] },
  { id: "market", title: "The Midnight Market", date: "2024-10-10", tags: ["market","fantasy"], excerpt: "Only open during eclipses, a market sells starlight jars.", motif: "flame", colors: ["#F59E0B","#EF4444"] },
  { id: "mask", title: "The Mask of Forgotten Songs", date: "2024-11-02", tags: ["mask","mystery"], excerpt: "A mask that whispers the lullabies of ancient heroes.", motif: "feather", colors: ["#10B981","#3B82F6"] },
  { id: "storm", title: "Stormchaser’s Oath", date: "2024-11-28", tags: ["storm","oath"], excerpt: "Jinna Puka swears to follow lightning across oceans.", motif: "star", colors: ["#6366F1","#0EA5E9"] },
  { id: "forest", title: "Forest of Sleeping Giants", date: "2024-12-12", tags: ["forest","giant"], excerpt: "The trees themselves breathe when Jinna passes.", motif: "moon", colors: ["#16A34A","#84CC16"] },
  { id: "veil", title: "Veil of Ember Snow", date: "2025-01-05", tags: ["snow","fire"], excerpt: "Snow that burns instead of chills covers the mountain.", motif: "flame", colors: ["#F43F5E","#F59E0B"] },
  { id: "mirror", title: "The Mirror Lake Prophecy", date: "2025-02-11", tags: ["mirror","prophecy"], excerpt: "Ripples tell the future when gazed upon at dawn.", motif: "moon", colors: ["#06B6D4","#9333EA"] },
  { id: "phoenix", title: "Dance of the Hidden Phoenix", date: "2025-03-21", tags: ["phoenix","rebirth"], excerpt: "Jinna Puka meets the phoenix in a fiery dawn dance.", motif: "flame", colors: ["#DC2626","#FBBF24"] }
];

const ChevronUp = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
  </svg>
);

export default function App() {
  return <div className="text-white bg-black h-screen w-screen flex items-center justify-center">Jinna Puka Website Ready</div>;
}
