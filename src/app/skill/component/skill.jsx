import {
  
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Stack = () => {
  return (
    <div className=" pt-40 lg:flex item-center justify-around">
      <div className="border border-white p-6 rounded-lg bg-white shadow-xl lg:animate-slideLeft">
        <h1 className="stack text-xl p-6 border border-white shadow-sm">FRONTEND DEVELOPMENT</h1>

        <div className="lg:flex text-center item-center justify-around mt-5">
          <div >
            <FontAwesomeIcon
              className="h-8 w-8"
              icon={faCircleCheck}
            ></FontAwesomeIcon>
            <span className="lg:ml-2 text-xl ">HTML 5</span>
            <br />
            <span className="ml-10">Experienced</span>
          </div>
          <div className="lg:ml-10">
            <FontAwesomeIcon
              className="h-8 w-8"
              icon={faCircleCheck}
            ></FontAwesomeIcon>
            <span className="ml-2 text-xl">CSS 3</span>
            <br />
            <span className="ml-10">Experienced</span>
          </div>
        </div>
        {/* this */}
        <div className="lg:flex text-center item-center justify-around mt-5">
          <div>
            <FontAwesomeIcon
              className="h-8 w-8 ml-5"
              icon={faCircleCheck}
            ></FontAwesomeIcon>
            <span className="ml-2 text-xl">React js</span>
            <br />
            <span className="ml-10">Experienced</span>
          </div>
          <div className="lg:ml-10">
            <FontAwesomeIcon
              className="h-8 w-8"
              icon={faCircleCheck}
            ></FontAwesomeIcon>
            <span className="ml-2 text-xl">Next js</span>
            <br />
            <span className="ml-10">Experienced</span>
          </div>
        </div>

        {/* this */}
        <div className="lg:flex text-center item-center justify-around mt-5">
          <div>
            <FontAwesomeIcon
              className="ml-4 h-8 w-8"
              icon={faCircleCheck}
            ></FontAwesomeIcon>
            <span className="ml-2 text-xl">Tailwind</span>
            <br />
            <span className="ml-10">Experienced</span>
          </div>
          <div className="ml-10">
            <FontAwesomeIcon
              className="h-8 w-8"
              icon={faCircleCheck}
            ></FontAwesomeIcon>
            <span className="ml-2 text-xl">Boostrap</span>
            <br />
            <span className="ml-10">Experienced</span>
          </div>
        </div>

        {/* this */}
        <div className="lg:flex text-center item-center justify-around text-center mt-5">
          <div>
            <FontAwesomeIcon
              className="ml-10 h-8 w-8"
              icon={faCircleCheck}
            ></FontAwesomeIcon>
            <span className="ml-2 text-xl">JavaScript</span>
            <br />
            <span className="ml-10">Experienced</span>
          </div>
          <div className="ml-10">
            <FontAwesomeIcon
              className="h-8 w-8"
              icon={faCircleCheck}
            ></FontAwesomeIcon>
            <span className="ml-2 text-xl">TypeScript</span>
            <br />
            <span className="ml-10">Experienced</span>
          </div>
        </div>
      </div>
      {/* side  */}
      <div className="border border-white p-6 rounded-lg bg-white shadow-xl lg:animate-slideRight">
      <h1 className="stack p-6 border text-xl border-white shadow-sm">BACKEND DEVELOPMENT</h1>
        <div className="lg:flex item-center text-center justify-around">
          <div>
            <FontAwesomeIcon
              className="h-8 w-8"
              icon={faCircleCheck}
            ></FontAwesomeIcon>
            <span className="ml-2 text-xl">Node.js</span>
            <br />
            <span className="ml-10">Experienced</span>
          </div>
          <div className="ml-10">
            <FontAwesomeIcon
              className="h-8 w-8"
              icon={faCircleCheck}
            ></FontAwesomeIcon>
            <span className="ml-2 text-xl">Express</span>
            <br />
            <span className="ml-10">Experienced</span>
          </div>
        </div>
        {/* this */}
        <div className="lg:flex text-center item-center justify-around">
          <div>
            <FontAwesomeIcon
              className="h-8 w-8"
              icon={faCircleCheck}
            ></FontAwesomeIcon>
            <span className="ml-2 text-xl">Firebase</span>
            <br />
            <span className="ml-10">Experienced</span>
          </div>
          <div className="ml-10">
            <FontAwesomeIcon
              className="h-8 w-8"
              icon={faCircleCheck}
            ></FontAwesomeIcon>
            <span className="ml-2 text-xl">MongoDB</span>
            <br />
            <span className="ml-10">Experienced</span>
          </div>
        </div>

        {/* this */}
        <div className="lg:flex text-center item-center justify-around">
          <div>
            <FontAwesomeIcon
              className="h-8 w-8"
              icon={faCircleCheck}
            ></FontAwesomeIcon>
            <span className="ml-2 text-xl">NPM</span>
            <br />
            <span className="ml-10">Experienced</span>
          </div>
          <div className="ml-10">
            <FontAwesomeIcon
              className="h-8 w-8"
              icon={faCircleCheck}
            ></FontAwesomeIcon>
            <span className="ml-2 text-xl">Express</span>
            <br />
            <span className="ml-10">Experienced</span>
          </div>
        </div>

        {/* this */}
        <div className="lg:flex text-center item-center justify-around">
          <div>
            <FontAwesomeIcon
              className="h-8 w-8"
              icon={faCircleCheck}
            ></FontAwesomeIcon>
            <span className="ml-2 text-xl">Firebase</span>
            <br />
            <span className="ml-10">Experienced</span>
          </div>
          <div className="ml-10">
            <FontAwesomeIcon
              className="h-8 w-8"
              icon={faCircleCheck}
            ></FontAwesomeIcon>
            <span className="ml-2 text-xl">MongoDB</span>
            <br />
            <span className="ml-10">Experienced</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stack;