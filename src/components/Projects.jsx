const projects = [
  {
    title: "Graduation Project – Demand Forecasting & Inventory Optimization",
    timeframe: "2025",
    tools: "Python, Google Colab, 3MA, ARIMA",
    description:
      "Built time-series models (3MA, ARIMA) on retail sales data to forecast demand and analyzed cost implications of stockouts, overstocking, and lead times using industry assumptions.",
    impact:
      "Enabled inventory decisions that reduce holding costs and improve service levels."
  },
  {
    title: "AI-Powered Chocolate Sales Analysis",
    tools: "Google Apps Script, Gemini AI, Gmail API",
    description:
      "Automated analysis of sales data and delivered AI-generated insight emails to stakeholders.",
    impact: "Reduced manual reporting time by ~90% and improved decision timeliness."
  },
  {
    title: "Canvas Deadline Nudge Agent",
    tools: "Google Apps Script, Canvas LMS API, Gmail",
    description:
      "Built an autonomous reminder agent that fetches upcoming assignments from Canvas and emails students automatically.",
    impact: "Improved assignment completion through timely nudges."
  },
  {
    title: "AI Weekly Update Agent (TrendLens)",
    tools: "n8n, RSS, Notion, Gemini AI",
    description:
      "Automated RSS intake, AI summarization, and delivery of weekly AI news to Notion/email.",
    impact: "Increased content delivery efficiency by 70%."
  },
  {
    title: "Product Feedback Dashboard",
    tools: "React, Airtable, Recharts, AI-assisted dev",
    description:
      "Designed a dashboard to categorize and visualize product feedback for faster feature prioritization.",
    impact: "Enabled rapid stakeholder iteration and insight sharing."
  }
];

export default function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-semibold mb-6">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div
            key={project.title}
            className="border border-gray-100 rounded-lg p-5 bg-white shadow-sm hover:shadow-md transition-shadow"
          >
            <h3 className="text-lg font-medium mb-2">{project.title}</h3>
            {project.timeframe && (
              <p className="text-xs text-gray-400 mb-2">{project.timeframe}</p>
            )}
            <p className="text-sm text-gray-500 mb-2">
              <span className="font-medium text-gray-600">Tools:</span> {project.tools}
            </p>
            <p className="text-sm text-gray-600 mb-2">{project.description}</p>
            <p className="text-sm text-gray-500">
              <span className="font-medium text-gray-600">Impact:</span> {project.impact}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
