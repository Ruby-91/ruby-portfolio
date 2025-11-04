export default function Skills() {
  return (
    <section id="skills" className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-semibold mb-6">Skills</h2>
      <div className="grid md:grid-cols-3 gap-6">
        <div>
          <h3 className="text-sm font-semibold mb-2 text-gray-700">Product & PM</h3>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>Roadmapping & prioritization</li>
            <li>Journey mapping</li>
            <li>North Star metrics</li>
            <li>Stakeholder communication</li>
            <li>Agile / SDLC</li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold mb-2 text-gray-700">Technical</h3>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>Python, SQL, REST APIs</li>
            <li>Google Apps Script, n8n, Zapier</li>
            <li>React (MVPs), Airtable, Notion API</li>
            <li>Data analysis & visualization</li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold mb-2 text-gray-700">Certifications & Tools</h3>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>Six Sigma Green Belt</li>
            <li>PMP (in progress)</li>
            <li>MS Project, Excel, PowerPoint</li>
            <li>Google AI Studio</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
