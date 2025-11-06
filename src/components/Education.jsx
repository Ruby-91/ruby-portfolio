import { useState } from "react";

export default function Education() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="education" className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">Education</h2>

      <div className="space-y-5">
        {/* SJSU (Expandable) */}
        <div
          className="border border-gray-100 rounded-lg bg-white hover:shadow-md transition-all duration-300 cursor-pointer"
          onClick={() => setExpanded(!expanded)}
        >
          <div className="p-5 flex justify-between items-center">
            <div>
              <h3 className="text-lg font-medium text-gray-900">
                San José State University, San Jose, CA
              </h3>
              <p className="text-sm text-gray-500">
                MS, Engineering Management | Aug 2023 – Dec 2025 | GPA 3.9
              </p>
            </div>
            <span
              className={`text-xl text-black transform transition-transform duration-300 ${
                expanded ? "rotate-90" : ""
              }`}
            >
              ▶
            </span>
          </div>

          {/* Dropdown content */}
          {expanded && (
            <div className="px-6 pb-4 text-gray-700 text-sm animate-fadeIn">
              <h4 className="font-semibold text-accent mb-1">MS Projects</h4>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  <strong>Customer Experience Optimization</strong> – Applied Six Sigma methodologies to reduce restaurant wait times by 20%, improving operational efficiency.  
                </li>
                <li>
                  <strong>Product Strategy &amp; Roadmap</strong> – Created a detailed project charter based on PMP principles, outlining product scope, objectives, and KPIs. 
                </li>
                <li>
                  <strong>Data-Driven Decision Making</strong> – Conducted exploratory data analysis on sales data, identifying key business insights
                </li>
                <li>
                  <strong>Operations Planning</strong> – Designed a forecast-based resource and capacity utilization plan.
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* RTU (Static) */}
        <div className="border border-gray-100 rounded-lg bg-white p-5">
          <h3 className="text-lg font-medium text-gray-900">
            Rajasthan Technical University, India
          </h3>
          <p className="text-sm text-gray-500">
            Bachelor of Technology, Information Technology | 2009 – 2013
          </p>
        </div>
      </div>
    </section>
  );
}
