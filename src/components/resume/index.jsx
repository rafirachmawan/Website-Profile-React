import React from "react";
import "./style.css";

const index = () => {
  return (
    <section id="resume" className="py-16 px-6 bg-black text-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Resume</h2>
        <div className="grid md:grid-cols-3 gap-16 text-center">
          {/* Language Programming */}
          <div>
            <h3 className="text-xl font-bold mb-4">Language Programming</h3>
            <div className="mb-4">
              <p className="text-gray-400">Javascript</p>
              <div className="bg-gray-700 w-full h-2 rounded-full">
                <div className="bg-blue-500 h-2 rounded-full w-4/5"></div>
              </div>
            </div>
            <div className="mb-4">
              <p className="text-gray-400">PHP</p>
              <div className="bg-gray-700 w-full h-2 rounded-full">
                <div className="bg-blue-500 h-2 rounded-full w-3/4"></div>
              </div>
            </div>
            <div className="mb-4">
              <p className="text-gray-400">Next Js</p>
              <div className="bg-gray-700 w-full h-2 rounded-full">
                <div className="bg-blue-500 h-2 rounded-full w-2/3"></div>
              </div>
            </div>
          </div>
          {/* Experience */}
          <div>
            <h3 className="text-xl font-bold mb-4">Experience</h3>
            <ul className="text-gray-400 space-y-4">
              <li>Staff IT In Rumah Sakit Era Medika</li>
              <li>Freelance Web Development</li>
              <li>Freelance Full Stack Development</li>
            </ul>
          </div>
          {/* Soft Skills */}
          <div>
            <h3 className="text-xl font-bold mb-4">Soft Skills</h3>
            <div className="mb-4">
              <p className="text-gray-400">Communication</p>
              <div className="bg-gray-700 w-full h-2 rounded-full">
                <div className="bg-blue-500 h-2 rounded-full w-4/5"></div>
              </div>
            </div>
            <div className="mb-4">
              <p className="text-gray-400">Teamwork</p>
              <div className="bg-gray-700 w-full h-2 rounded-full">
                <div className="bg-blue-500 h-2 rounded-full w-3/4"></div>
              </div>
            </div>
            <div className="mb-4">
              <p className="text-gray-400">Problem-Solving</p>
              <div className="bg-gray-700 w-full h-2 rounded-full">
                <div className="bg-blue-500 h-2 rounded-full w-5/6"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
