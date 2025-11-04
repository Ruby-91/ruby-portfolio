import Header from "./components/Header";
import About from "./components/About";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="bg-white text-primary min-h-screen">
      {/* Navigation */}
      <Header />

      {/* Page Sections */}
      <main className="pt-20">
        <About />
        <Education />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="text-center text-gray-400 text-sm py-8">
        © {new Date().getFullYear()} Ruby Gupta
      </footer>
    </div>
  );
}

export default App;
