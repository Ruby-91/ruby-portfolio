import { useState } from "react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" }
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur z-50 border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#top" className="text-lg font-semibold tracking-tight">
          Ruby Gupta
        </a>
        <nav className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-gray-700 hover:text-accent transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="hidden md:flex gap-3">
          <a
            href="#contact"
            className="text-sm border border-accent text-accent px-4 py-2 rounded-md hover:bg-accent hover:text-white transition"
          >
            Contact Me
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="text-sm bg-accent text-white px-4 py-2 rounded-md hover:opacity-90 transition"
          >
            Download Resume
          </a>
        </div>
        <button
          className="md:hidden p-2"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle Menu"
        >
          <span className="block w-6 h-0.5 bg-primary mb-1" />
          <span className="block w-6 h-0.5 bg-primary mb-1" />
          <span className="block w-6 h-0.5 bg-primary" />
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="block px-4 py-3 text-sm text-accent font-medium"
          >
            Contact Me
          </a>
         <a
           href={`${import.meta.env.BASE_URL}resume.pdf`}
           download="Ruby_Gupta_Resume.pdf"
           className="text-sm bg-accent text-white px-4 py-2 rounded-md hover:opacity-90 transition"
>
            Download Resume
          </a>
        </div>
      )}
    </header>
  );
}
