import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Card = ({ live, github, image,description }) => {
  console.log({ live, github, image }); // Check the received props
  return (
    <div className="mt-10 mb-0">
      <div className="max-w-sm w-80 overflow-hidden shadow-xl ml-8 bg-white rounded-lg ">
        <div className="w-full h-56 overflow-hidden bg-[#EDF9FD] flex items-center justify-center rounded-t-lg">
          <Image
            className="object-cover transition-transform duration-500 ease-out hover:scale-110"
            src={image}
            alt="Project"
            width={280}
            height={224}
          />
        </div>
        <div className="px-4 py-4">
          <p className="text-center text-gray-700">
            {description}
          </p>
        </div>
        <div className="px-4 py-4 flex items-center justify-center gap-4">
          <Link href={github || "#"} target="_blank" rel="noopener noreferrer">
            <Button className="bg-[#EDF9FD] rounded-xl p-2">GitHub</Button>
          </Link>
          <Link href={live || "#"} target="_blank" rel="noopener noreferrer">
            <Button className="bg-[#EDF9FD] rounded-xl p-2">Live Demo</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};


export default Card;
