import React from "react";
import Card from "./card";

const Pro = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
      <Card
        image="/cartify.png"
        live="ttttt"
        github="tttt"
        description="A cart management system designed for efficient shopping experiences, featuring real-time updates and smooth user interaction."
        stack={["Next.js", "MongoDB", "Styled Components"]}
      />

      <Card
        image="/telcom.png"
        live="https://swiftpay-app-frontend.vercel.app/"
        github="https://github.com/codingwithKenny/Tel-Comunication-App-Front-End"
        description="A telecommunication app with Paystack integration for fast, secure airtime and data transactions."
        stack={["React", "Paystack API", "TailwindCSS", "MongoDB", "Node"]}
      />
      <Card
        image="/Youtubeautomation.png"
        live="https"
        github="https"
        description="An AI-powered YouTube Automation System that transforms simple ideas into complete videos. Built with Next.js and n8n,"
        stack={[
          "Next.js",
          "n8n",
          "OpenRouter AI",
          "Google Veo3",
          "Google Text-to-Speech",
        ]}
      />

      <Card
        image="/store.png"
        live="https://riddy-store.vercel.app/"
        github="https://github.com/codingwithKenny/RiddyStore"
        description="A modern e-commerce platform with Stripe integration, secure checkout, cart management, and user-friendly navigation."
        stack={["Next.js", "Stripe", "MongoDB"]}
      />

      <Card
        image="/Gramsterly.png"
        live=""
        github="https://github.com/codingwithKenny/Gramsterly"
        description="A social media platform clone that allows users to share posts, interact, and build a community — focusing on responsiveness and clean UI."
        stack={["React", "Firebase", "TailwindCSS"]}
      />

      <Card
        image="/newproject.png"
        live="https://muslimgroupofschools.com/"
        github="https://github.com/codingwithKenny/lms"
        description="A School Management System featuring student portals for checking results, managing profiles, and tracking academic progress — designed for efficiency and accessibility."
        stack={["Next.js", "Prisma", "PostgreSQL"]}
      />
      <Card
        image="/reachio1.png"
        // live=""
        github="https://github.com/codingwithKenny/Reachio-Frontend"
        description="A modern React + Tailwind CSS frontend for a business automation tool designed to help business owners reach out to customers automatically via SMS."
        stack={["React", "Prisma", "PostgreSQL", "node", "n8n"]}
      />
      <Card
        image="/webflow13.png"
        live="https://www.loom.com/share/84f0dd65102a4be590058633d6256d3a"
        // github="https://"
        description="An automated Webflow solution enabling business owners to manage orders and generate branded content with ease."
        stack={["Next.js", "n8n"]}
      />
      <Card
        image="/NoteIt.png"
        // live="https://www.loom.com/share/84f0dd65102a4be590058633d6256d3a"
        github="https://github.com/codingwithKenny/NoteIt-App"
        description="Capture ideas the moment they strike. NoteIt lets you jot notes, expand them with AI, record voice memos, and set reminders to turn every thought into action."
        stack={["Next.js", "tailwindcss"]}
      />
    </div>
  );
};

export default Pro;
