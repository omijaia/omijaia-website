'use client'
import React, { useState } from "react";
import Work from "./Work";
import { WorkData } from "./types";
import "../globals.css";

const WorkList: React.FC = () => {
  const [selectedWork, setSelectedWork] = useState<WorkData | null>(null);

  const workData: WorkData[] = [
    {
      id: "1",
      title: "Tremunda",
      description: "A personal brand website to promote esoteric services, e-commerce for sell products and e-books, a fortune roulette, integration with Calendly, blog and about me sections.",
      category: ["landing page", "e-commerce"],
      technologies: ["React", "Vite", "Tailwind", "Frame motion", "Paypal", "Calendly"],
      url: "https://www.tremunda.com/",
      imageUrl: "/assets/images/works/tremunda.png",
      showDetails: false,
    },
  ];

  const handleClick = (work: WorkData) => {
    setSelectedWork(work === selectedWork ? null : work);
  };

  return (
    <div className="work-list">
      {workData.map((work) => (
        <div key={work.id} className="work-item" onClick={() => handleClick(work)}>
          <Work {...work} showDetails={selectedWork === work} />
        </div>
      ))}
    </div>
  );
};

export default WorkList;
