import {
  faCheckToSlot,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";

const Stack = () => {
  return (
    <div className=" pt-40 lg:flex item-center justify-around">
      <div className="border border-white p-6 rounded-lg bg-white shadow-2xl animate-slideLeft">
        <h1 className="stack text-2xl p-6 border border-white shadow-sm">FRONTEND DEVELOPMENT</h1>

        <div className="lg:flex item-center justify-around mt-5">
          <div >
            <FontAwesomeIcon
              className="h-8 w-8"
              icon={faCircleCheck}
            ></FontAwesomeIcon>
            <span className="ml-2 text-2xl">HTML 5</span>
            <br />
            <span className="ml-10">Experienced</span>
          </div>
          <div className="ml-10">
            <FontAwesomeIcon
              className="h-8 w-8"
              icon={faCircleCheck}
            ></FontAwesomeIcon>
            <span className="ml-2 text-2xl">CSS 3</span>
            <br />
            <span className="ml-10">Experienced</span>
          </div>
        </div>
        {/* this */}
        <div className="lg:flex item-center justify-around mt-5">
          <div>
            <FontAwesomeIcon
              className="h-8 w-8"
              icon={faCircleCheck}
            ></FontAwesomeIcon>
            <span className="ml-2 text-2xl">React js</span>
            <br />
            <span className="ml-10">Experienced</span>
          </div>
          <div className="ml-10">
            <FontAwesomeIcon
              className="h-8 w-8"
              icon={faCircleCheck}
            ></FontAwesomeIcon>
            <span className="ml-2 text-2xl">Next js</span>
            <br />
            <span className="ml-10">Experienced</span>
          </div>
        </div>

        {/* this */}
        <div className="lg:flex item-center justify-around mt-5">
          <div>
            <FontAwesomeIcon
              className="h-8 w-8"
              icon={faCircleCheck}
            ></FontAwesomeIcon>
            <span className="ml-2 text-2xl">Tailwind</span>
            <br />
            <span className="ml-10">Experienced</span>
          </div>
          <div className="ml-10">
            <FontAwesomeIcon
              className="h-8 w-8"
              icon={faCircleCheck}
            ></FontAwesomeIcon>
            <span className="ml-2 text-2xl">Boostrap</span>
            <br />
            <span className="ml-10">Experienced</span>
          </div>
        </div>

        {/* this */}
        <div className="lg:flex item-center justify-around text-center mt-5">
          <div>
            <FontAwesomeIcon
              className="h-8 w-8"
              icon={faCircleCheck}
            ></FontAwesomeIcon>
            <span className="ml-2 text-2xl">JavaScript</span>
            <br />
            <span className="ml-10">Experienced</span>
          </div>
          <div className="ml-10">
            <FontAwesomeIcon
              className="h-8 w-8"
              icon={faCircleCheck}
            ></FontAwesomeIcon>
            <span className="ml-2 text-2xl">TypeScript</span>
            <br />
            <span className="ml-10">Experienced</span>
          </div>
        </div>
      </div>
      {/* side  */}
      <div className="border border-white p-6 rounded-lg bg-white shadow-2xl animate-slideRight">
      <h1 className="stack p-6 border text-2xl border-white shadow-sm">BACKEND DEVELOPMENT</h1>
        <div className="lg:flex item-center justify-around">
          <div>
            <FontAwesomeIcon
              className="h-8 w-8"
              icon={faCircleCheck}
            ></FontAwesomeIcon>
            <span className="ml-2 text-2xl">Node.js</span>
            <br />
            <span className="ml-10">Experienced</span>
          </div>
          <div className="ml-10">
            <FontAwesomeIcon
              className="h-8 w-8"
              icon={faCircleCheck}
            ></FontAwesomeIcon>
            <span className="ml-2 text-2xl">Express</span>
            <br />
            <span className="ml-10">Experienced</span>
          </div>
        </div>
        {/* this */}
        <div className="lg:flex item-center justify-around">
          <div>
            <FontAwesomeIcon
              className="h-8 w-8"
              icon={faCircleCheck}
            ></FontAwesomeIcon>
            <span className="ml-2 text-2xl">Firebase</span>
            <br />
            <span className="ml-10">Experienced</span>
          </div>
          <div className="ml-10">
            <FontAwesomeIcon
              className="h-8 w-8"
              icon={faCircleCheck}
            ></FontAwesomeIcon>
            <span className="ml-2 text-2xl">MongoDB</span>
            <br />
            <span className="ml-10">Experienced</span>
          </div>
        </div>

        {/* this */}
        <div className="lg:flex item-center justify-around">
          <div>
            <FontAwesomeIcon
              className="h-8 w-8"
              icon={faCircleCheck}
            ></FontAwesomeIcon>
            <span className="ml-2 text-2xl">NPM</span>
            <br />
            <span className="ml-10">Experienced</span>
          </div>
          <div className="ml-10">
            <FontAwesomeIcon
              className="h-8 w-8"
              icon={faCircleCheck}
            ></FontAwesomeIcon>
            <span className="ml-2 text-2xl">Express</span>
            <br />
            <span className="ml-10">Experienced</span>
          </div>
        </div>

        {/* this */}
        <div className="lg:flex item-center justify-around">
          <div>
            <FontAwesomeIcon
              className="h-8 w-8"
              icon={faCircleCheck}
            ></FontAwesomeIcon>
            <span className="ml-2 text-2xl">Firebase</span>
            <br />
            <span className="ml-10">Experienced</span>
          </div>
          <div className="ml-10">
            <FontAwesomeIcon
              className="h-8 w-8"
              icon={faCircleCheck}
            ></FontAwesomeIcon>
            <span className="ml-2 text-2xl">MongoDB</span>
            <br />
            <span className="ml-10">Experienced</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stack;
