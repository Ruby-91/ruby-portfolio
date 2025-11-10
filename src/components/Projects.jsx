import { useState } from "react";

const projects = [
  {
    id: "forecasting",
    title: "Demand Forecasting & Inventory Optimization",
    year: "2025",
    description:
      "Built an AI-driven forecasting prototype to optimize inventory costs and service levels using Kaggle retail sales data.",
    details: {
      role: "Lead Analyst & Prototype Developer",
      timeframe: "Feb 2025 – Apr 2025",
      problem:
        "Retailers face high carrying costs and lost sales due to inaccurate demand forecasts. Existing models fail to factor anomalies and cost impact of stockouts.",
      approach:
        "Performed time-series forecasting using 3-Month Moving Average (3MA) and ARIMA on Kaggle retail sales data. Aggregated data monthly by product category, cleaned outliers, and evaluated model performance using MAD, RMSE, and SMAPE. Calculated cost implications assuming a $50/unit stockout cost to quantify impact.",
      impact:
        "Achieved ~15–20% accuracy improvement with 3MA (Excl. Last Month) vs ARIMA. Presented findings via report and table.",
      tech: "Python, Pandas, Matplotlib, ARIMA, 3MA, Google Colab",
      images: [
        { src: "/assets/forecasting-chart.png", alt: "Monthly Sales Trends by Product Type" },
      ],
      links: [],
      table: {
        title: "Forecasting Accuracy by Model and Category",
        headers: ["Model", "Category", "MAD", "RMSE", "SMAPE"],
        rows: [
          ["3MA (Full)", "Beauty", "2323.33", "3068.60", "27.97%"],
          ["3MA (Excl. Last)", "Beauty", "1919.00", "2510.87", "17.17%"],
          ["ARIMA", "Beauty", "4328.02", "5575.02", "51.44%"],
          ["3MA (Full)", "Clothing", "1840.17", "2159.97", "14.99%"],
          ["ARIMA", "Clothing", "3741.27", "4870.31", "37.94%"],
          ["3MA (Full)", "Electronics", "4509.24", "5752.04", "48.01%"],
          ["3MA (Excl. Last)", "Electronics", "3954.17", "5125.84", "32.93%"],
          ["ARIMA", "Electronics", "4167.41", "5156.95", "46.00%"]
        ]
      }
    }
  },
  {
    id: "chocolate-ai",
    title: "AI-Powered Chocolate Sales Analysis",
    year: "2025",
    description:
      "Automated weekly sales insights using Gemini AI, Google Sheets, and Gmail APIs to generate executive summaries and recommendations.",
    details: {
      role: "Automation Engineer & Insights Lead",
      timeframe: "Jan 2025",
      problem:
        "Manual weekly reports took 3 hours to prepare and delayed decision-making for sales and marketing teams.",
      approach:
        "Used Google Apps Script to fetch weekly sales data from Sheets, analyzed it via Gemini AI for trends and recommendations, and automatically sent formatted summary emails. The script runs on a weekly trigger and highlights best-performing products, top regions, and seasonal trends.",
      impact:
        "Reduced reporting time by ~90%. Enabled earlier strategic responses, improving campaign timing and stock allocation.",
      tech: "Google Apps Script, Google Sheets, Gmail API, Gemini API",
      images: [
        { src: "/assets/chocolate-summary.png", alt: "AI-Generated Weekly Chocolate Sales Summary" }
      ]
    }
  },
  {
    id: "canvas-agent",
    title: "Canvas Deadline Nudge Agent",
    year: "2024",
    description:
      "Developed a Google Apps Script agent integrated with Canvas LMS to automate personalized assignment reminders.",
    details: {
      role: "Full-stack Script Developer",
      timeframe: "Oct 2024 – Dec 2024",
      problem:
        "Students often missed assignment deadlines due to lack of timely notifications, impacting course completion rates.",
      approach:
        "Built a Google Apps Script that fetches upcoming assignments from Canvas API, converts UTC timestamps to Pacific Time, categorizes assignments due within 48 hours, and sends Gmail reminders. Each reminder is formatted with course and due-date details for personalized communication.",
      impact:
        "Improved assignment submission rate by ~20% and reduced last-minute student queries by 15%.",
      tech: "Google Apps Script, Canvas REST API, Gmail API",
      images: [{ src: "/assets/canvas-email.png", alt: "Canvas Assignment Reminder Email Example" }] 
    }
  },
  {
    id: "trendlens",
    title: "AI Weekly Update Agent (TrendLens)",
    year: "2024",
    description:
      "Designed an n8n workflow that summarizes top AI news articles weekly using Gemini and posts digests to Notion and email.",
    details: {
      role: "Product Automation Designer",
      timeframe: "Aug 2024 – Sep 2024",
      problem:
        "AI professionals lacked an automated system for receiving weekly summaries of emerging trends.",
      approach:
        "Created an n8n automation that fetches RSS feeds, filters top 10 recent articles, summarizes them via Gemini, updates Notion database entries, and sends a weekly digest email. Each article is tagged 'New' or 'Summarized' automatically.",
      impact:
        "Reduced manual curation time by ~70%. Consistent AI trend summaries delivered weekly to the given email.",
      tech: "n8n, Gemini API, RSS, Notion API, Gmail",
      images: [
        { src: "/assets/trendlens-workflow.png", alt: "n8n Workflow for TrendLens Automation" },
        { src: "/assets/trendlens-email.png", alt: "AI Weekly Update Email Output" }
      ]
    }
  },
  {
    id: "feedback-dashboard",
    title: "Product Feedback Dashboard",
    year: "2024",
    description:
      "Built an AI-powered dashboard to analyze sentiment and themes from customer feedback, visualized via React + Airtable.",
    details: {
      role: "Dashboard Designer & Implementation Lead",
      timeframe: "Jul 2024",
      problem:
        "Product feedback was scattered across multiple platforms, delaying prioritization and product decisions.",
      approach:
        "Implemented a feedback pipeline that performs sentiment and theme analysis using RoBERTa Transformer model with pattern overrides. Data is cleaned and pushed to Airtable, where a React-based dashboard visualizes sentiment, key themes, and actionable recommendations.",
      impact:
        "Delivered real-time sentiment and theme insights, potentially accelerating product decision-making by 40%.",
      tech: "RoBERTa, Python, Pandas, Airtable, React JS, Chart.js, Tailwind CSS, AI-assisted development",
      images: [
        { src: "/assets/feedback-dashboard.png", alt: "Product Feedback Dashboard Visualization" }
      ]
    }
  }
];

export default function Projects() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="projects" className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mb-8 text-gray-800">Projects</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((p) => (
          <div
            key={p.id}
            className="group bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl transition cursor-pointer overflow-hidden"
            onClick={() => setSelected(p)}
          >
            <div className="p-6 flex flex-col gap-3">
              <h3 className="text-xl font-semibold text-primary group-hover:text-accent transition">
                {p.title}
              </h3>
              <p className="text-sm text-gray-500">{p.description}</p>
              <div className="text-xs text-gray-400">{p.year}</div>
            </div>
          </div>
        ))}
      </div>

      {selected && (
        <div className="fixed inset-0 z-50 bg-black/40 flex items-start justify-center overflow-y-auto py-10 px-4">
          <div className="bg-white max-w-4xl w-full rounded-2xl shadow-2xl p-8 relative">
            <button
              onClick={() => setSelected(null)}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
            >
              ✕
            </button>

            <h3 className="text-2xl font-semibold mb-2">{selected.title}</h3>
            <p className="text-gray-500 text-sm mb-2">{selected.details.timeframe}</p>
            <p className="text-gray-700 mb-4">{selected.details.problem}</p>

            {selected.details.images && (
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                {selected.details.images.map((img) => (
                  <figure key={img.src}>
                    <img src={img.src} alt={img.alt} className="rounded-lg border" />
                    <figcaption className="text-xs text-gray-500 mt-1">{img.alt}</figcaption>
                  </figure>
                ))}
              </div>
            )}

            <h4 className="text-sm font-semibold mb-1">Approach</h4>
            <p className="text-sm text-gray-700 mb-4">{selected.details.approach}</p>

            <h4 className="text-sm font-semibold mb-1">Impact</h4>
            <p className="text-sm text-gray-700 mb-4">{selected.details.impact}</p>

            <h4 className="text-sm font-semibold mb-1">Technologies Used</h4>
            <p className="text-sm text-gray-700 mb-4">{selected.details.tech}</p>

            {selected.details.table && (
              <div className="overflow-x-auto mb-6">
                <h5 className="font-medium text-sm mb-2">{selected.details.table.title}</h5>
                <table className="min-w-full text-xs border">
                  <thead className="bg-gray-50">
                    <tr>
                      {selected.details.table.headers.map((h) => (
                        <th key={h} className="px-3 py-2 text-left text-gray-500 border-b">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {selected.details.table.rows.map((row, i) => (
                      <tr key={i} className="border-b">
                        {row.map((cell, j) => (
                          <td key={j} className="px-3 py-2 text-gray-600">
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {selected.details.links && (
              <div className="flex flex-wrap gap-3">
                {selected.details.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm bg-accent text-white px-4 py-2 rounded-md hover:opacity-90 transition"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
