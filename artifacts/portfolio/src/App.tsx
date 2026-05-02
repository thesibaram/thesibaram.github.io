import { ThemeProvider } from "next-themes";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Experience } from "./components/Experience";
import { Certifications } from "./components/Certifications";
import { Blog } from "./components/Blog";
import { Resume } from "./components/Resume";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Toaster } from "./components/ui/toaster";

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="min-h-[100dvh] w-full text-[var(--px-text)] bg-[var(--px-bg)] flex flex-col font-sans">
        <Navbar />
        <main className="flex-1 flex flex-col">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Certifications />
          <Blog />
          <Resume />
          <Contact />
        </main>
        <Footer />
      </div>
      <Toaster />
    </ThemeProvider>
  );
}

export default App;
