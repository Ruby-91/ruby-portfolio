export default function Skills() {
  return (
    <section id="skills" className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-semibold mb-6">Skills</h2>
      <div className="grid md:grid-cols-3 gap-6">
        <div>
          <h3 className="text-sm font-semibold mb-2 text-gray-700">Product & PM</h3>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>Roadmapping & prioritization</li>
            <li>Data analysis & visualization</li>
            <li>Decision Making</li>
            <li>Problem Solving</li>
            <li>Stakeholder communication</li>
            <li>Agile / SDLC</li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold mb-2 text-gray-700">Technical</h3>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>Java, Python, SQL, REST APIs</li>
            <li>Google Apps Script, n8n, Notion</li>
            <li>Google Colab, Airtable, Github</li>
            <li>MS Office (Project, Excel, PowerPoint)</li>
           </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold mb-2 text-gray-700">Certifications & Tools</h3>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>Six Sigma Green Belt</li>
            <li>Career Essentials in Generative AI by Microsoft and LinkedIn</li>
            <li>Becoming a Product Manager: A Complete Guide</li>
            <li>Agile foundations</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
