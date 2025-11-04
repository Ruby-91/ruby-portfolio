export default function Education() {
  return (
    <section id="education" className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-semibold mb-6">Education</h2>
      <div className="space-y-5">
        <div className="border border-gray-100 rounded-lg p-5 bg-white">
          <h3 className="text-lg font-medium">
            San José State University, San Jose, CA
          </h3>
          <p className="text-sm text-gray-500 mb-2">
            MS, Engineering Management | Aug 2023 – Dec 2025 | GPA 3.9
          </p>
          <ul className="text-sm text-gray-600 list-disc ml-5 space-y-1">
            <li>Customer Experience Optimization – reduced restaurant wait times by 20%.</li>
            <li>Product Strategy & Roadmap – PMP-based project charter, KPIs, scope.</li>
            <li>Data-Driven Decision Making – EDA on sales data to derive insights.</li>
            <li>Operations Planning – forecast-based capacity planning.</li>
          </ul>
        </div>
        <div className="border border-gray-100 rounded-lg p-5 bg-white">
          <h3 className="text-lg font-medium">
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
