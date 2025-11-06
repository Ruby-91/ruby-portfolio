export default function Experience() {
  const roles = [
    {
      company: "Accenture",
      title: "Senior Analyst",
      location: "India",
      duration: "Jun 2019 – Dec 2021",
      points: [
        "Led end-to-end development of an automated chatbot, reducing onboarding time by 50% and saving 10+ man-hours per employee.",
        "Managed a 4-member team to integrate 5 airlines with Google Flights, achieving 95% on-time delivery.",
        "Partnered with cross-functional teams (engineering, UX, QA, business) to drive the requirements development based on prioritized backlog and ensured a 95% on-time delivery rate."
      ]
    },
    {
      company: "Infosys Ltd",
      title: "Technology Analyst | Senior Systems Engineer | Systems Engineer",
      location: "India",
      duration: "Feb 2014 – Jun 2019",
      points: [
        "Collaborated with stakeholders to align technical requirements, improving estimation accuracy and reducing rework by 10%.",
        "Established a change management process for documenting user requirement changes, resulting in a 10% reduction in development rework.",	
        "Implemented end-to-end requirements for AB InBev, resulting in a standardized technical infrastructure across 12 locations and 40 distribution centers.",
        "Leveraged leadership and communication skills to mentor new team members and deliver knowledge transfer sessions; led to quicker acclimatization for 9 engineers.",	
        "Supported the successful implementation of a migration project for Wells Fargo by actively participating in all phases of the SDLC (coding, testing, implementation, and support)."
     ]
    }
  ];

  return (
    <section id="experience" className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-semibold mb-6">Work Experience</h2>
      <div className="space-y-6">
        {roles.map((role) => (
          <div key={role.company} className="border border-gray-100 rounded-lg p-5 bg-white shadow-sm">
            <h3 className="text-lg font-medium">{role.company}</h3>
            <p className="text-sm text-gray-500 mb-1">
              {role.title} • {role.location}
            </p>
            <p className="text-xs text-gray-400 mb-3">{role.duration}</p>
            <ul className="list-disc ml-5 text-sm text-gray-600 space-y-1">
              {role.points.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
