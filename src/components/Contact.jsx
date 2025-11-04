export default function Contact() {
  return (
    <section id="contact" className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-semibold mb-4">Contact</h2>
      <p className="text-gray-600 mb-6 max-w-2xl">
        I’m open to Product, Project, or Program Management opportunities where I can combine technical experience with execution, analytics, and stakeholder management.
      </p>
      <div className="flex flex-wrap gap-4">
        <a
          href="mailto:rgrubygupta91@gmail.com"
          className="bg-accent text-white px-5 py-2 rounded-md text-sm font-medium hover:opacity-90 transition"
        >
          Email Me
        </a>
        <a
          href="https://www.linkedin.com/in/rubyguptasjsu/"
          target="_blank"
          rel="noreferrer"
          className="text-sm text-accent font-medium"
        >
          View LinkedIn →
        </a>
      </div>
    </section>
  );
}
