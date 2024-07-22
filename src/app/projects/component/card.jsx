import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const Card = () => {
  return (
    <div className="mt-40">
      <div class="max-w-sm w-80 rounded overflow-hidden shadow-lg ml-40 pt-6">
        <Image
          class="projectimage border rounded ml-5 shadow-lg"
          src="/Gramsterly.png"
          alt=""
          width={280}
          height={100}
        />
        <div>
          <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, sit!</p>
        </div>
      
        <div class="px-6 pt-4 pb-2">
          <Button class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-5 ml-8 mb-2">
            github
          </Button>
          <Button class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            live demo
          </Button>
         
        </div>
      </div>
    </div>
  );
};

export default Card;
