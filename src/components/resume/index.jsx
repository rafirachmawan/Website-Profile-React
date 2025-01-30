import React from "react";
import "./style.css";

const index = () => {
  return (
    <section id="resume" className="py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Resume</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Software Skills */}
          <div>
            <h3 className="text-xl font-bold mb-4">Software Skills</h3>
            <div className="mb-4">
              <p className="text-gray-400">Photoshop</p>
              <div className="bg-gray-700 w-full h-2 rounded-full">
                <div className="bg-blue-500 h-2 rounded-full w-4/5"></div>
              </div>
            </div>
            <div className="mb-4">
              <p className="text-gray-400">Illustrator</p>
              <div className="bg-gray-700 w-full h-2 rounded-full">
                <div className="bg-blue-500 h-2 rounded-full w-3/4"></div>
              </div>
            </div>
            <div className="mb-4">
              <p className="text-gray-400">After Effects</p>
              <div className="bg-gray-700 w-full h-2 rounded-full">
                <div className="bg-blue-500 h-2 rounded-full w-2/3"></div>
              </div>
            </div>
          </div>
          {/* Experience */}
          <div>
            <h3 className="text-xl font-bold mb-4">Experience</h3>
            <ul className="text-gray-400 space-y-4">
              <li>Art Director - White Fish Advertising Co. (2023)</li>
              <li>
                Senior Graphic Designer - Pyramids Sun Advertising Co. (2021)
              </li>
              <li>Graphic Designer - Play Graphic Advertising Agency (2019)</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
