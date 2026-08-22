"use client";

import { useEffect, useState } from "react";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Git",
  "GitHub",
  "Java",
  "C",
  "Foundational Networking"
];

const projects = [
 {
  number: "01",
  title: "Password Breach Checker",
  description:
    "A password security tool that evaluates password strength, estimates crack time, and checks whether a password has appeared in known data breaches.",
  technologies: ["Next.js", "React", "JavaScript", "zxcvbn", "Have I Been Pwned API"],
  github: "https://github.com/bibashthapa143/password-breach-checker-",
  demo: "https://password-breach-checker-three.vercel.app/",
},

  {
    number: "02",
    title: "Your Second Project",
    description:
      "Add another project here. This section will showcase your practical development experience.",
    technologies: ["React", "JavaScript", "CSS"],
    github: "https://github.com/bibashthapa143",
    demo: "#",
  },
  {
    number: "03",
    title: "Your Third Project",
    description:
      "Add another project to make your portfolio stronger and demonstrate your skills.",
    technologies: ["Node.js", "MongoDB", "API"],
    github: "https://github.com/bibashthapa143",
    demo: "#",
  },
];

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-screen overflow-hidden bg-[#030308] text-white">
      {/* Animated Background */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-[10%] top-[15%] h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="absolute right-[5%] top-[30%] h-96 w-96 rounded-full bg-purple-600/10 blur-[140px]" />
        <div className="absolute bottom-[10%] left-[40%] h-80 w-80 rounded-full bg-blue-600/10 blur-[130px]" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.035)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      {/* Navbar */}
      <nav
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-cyan-400/10 bg-black/70 backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="#" className="group text-xl font-bold tracking-wider">
            B<span className="text-cyan-400">.</span>T
          </a>

          <div className="hidden items-center gap-8 text-sm text-gray-400 md:flex">
            <a href="#about" className="transition hover:text-cyan-400">
              About
            </a>
            <a href="#skills" className="transition hover:text-cyan-400">
              Skills
            </a>
            <a href="#projects" className="transition hover:text-cyan-400">
              Projects
            </a>
            <a href="#contact" className="transition hover:text-cyan-400">
              Contact
            </a>
          </div>

          <a
            href="#contact"
            className="rounded-full border border-cyan-400/30 px-5 py-2 text-sm text-cyan-300 transition hover:bg-cyan-400 hover:text-black"
          >
            Connect
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative flex min-h-screen items-center px-6">
        <div className="mx-auto grid w-full max-w-7xl items-center gap-16 pt-20 lg:grid-cols-2">
          {/* Left */}
          <div>
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-sm text-cyan-300">
              <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
              Available for opportunities
            </div>

            <p className="mb-4 font-mono text-sm tracking-[0.3em] text-cyan-400">
              HELLO, I'M
            </p>

            <h1 className="text-6xl font-black leading-none tracking-tight sm:text-7xl lg:text-8xl">
              Bibash
              <br />
              <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                Thapa
              </span>
              <span className="text-cyan-400">.</span>
            </h1>

            <h2 className="mt-7 text-xl font-medium text-gray-300 md:text-2xl">
              BCA Student{" "}
              <span className="text-gray-600">/</span>{" "}
              <span className="text-cyan-400">Future Developer</span>
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-gray-500 md:text-lg">
              I'm a Bachelor of Computer Application student at Tribhuvan
              University, passionate about technology, software development,
              and creating modern digital experiences.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="group rounded-lg bg-cyan-400 px-7 py-3 font-semibold text-black transition hover:scale-105 hover:bg-cyan-300"
              >
                Explore My Work
                <span className="ml-2 transition group-hover:ml-3">→</span>
              </a>

              <a
                href="mailto:bibashthapa1432@gmail.com"
                className="rounded-lg border border-white/10 bg-white/5 px-7 py-3 font-semibold text-white transition hover:border-cyan-400/40 hover:bg-cyan-400/10"
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* 3D Visual */}
          <div className="relative hidden h-[500px] items-center justify-center lg:flex">
            <div className="absolute h-80 w-80 animate-[spin_20s_linear_infinite] rounded-full border border-cyan-400/20" />

            <div className="absolute h-64 w-64 animate-[spin_15s_linear_infinite_reverse] rounded-full border border-purple-500/20" />

            <div className="absolute h-48 w-48 rounded-full border border-blue-400/30 shadow-[0_0_100px_rgba(34,211,238,0.15)]" />

            <div className="relative flex h-40 w-40 rotate-45 items-center justify-center border border-cyan-400/40 bg-cyan-400/5 shadow-[0_0_80px_rgba(34,211,238,0.2)] backdrop-blur-xl">
              <div className="-rotate-45 text-center">
                <div className="font-mono text-4xl font-bold text-cyan-300">
                  &lt;/&gt;
                </div>
                <div className="mt-2 text-xs tracking-[0.3em] text-gray-500">
                  CODE
                </div>
              </div>
            </div>

            <div className="absolute left-10 top-20 h-3 w-3 animate-pulse rounded-full bg-cyan-400 shadow-[0_0_20px_cyan]" />
            <div className="absolute bottom-20 right-10 h-2 w-2 animate-pulse rounded-full bg-purple-400 shadow-[0_0_20px_purple]" />
            <div className="absolute right-16 top-10 h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_20px_blue]" />
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 text-xs tracking-widest text-gray-600 md:flex">
          <span>SCROLL TO EXPLORE</span>
          <div className="h-12 w-px bg-gradient-to-b from-cyan-400 to-transparent" />
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="border-t border-white/5 py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-16 lg:grid-cols-[1fr_2fr]">
            <div>
              <p className="font-mono text-sm tracking-[0.3em] text-cyan-400">
                01 / ABOUT
              </p>

              <h2 className="mt-4 text-4xl font-bold md:text-5xl">
                Who I am.
              </h2>
            </div>

            <div>
              <p className="text-xl leading-9 text-gray-400">
                I'm <span className="text-white">Bibash Thapa</span>, currently
                pursuing my Bachelor of Computer Application (BCA) at
                Tribhuvan University.
              </p>

              <p className="mt-6 leading-8 text-gray-500">
                I'm interested in building software, exploring new
                technologies, and continuously improving my development
                skills. My goal is to turn ideas into useful, elegant, and
                reliable digital products.
              </p>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
                  <p className="text-3xl font-bold text-cyan-400">BCA</p>
                  <p className="mt-2 text-sm text-gray-500">
                    Current Degree
                  </p>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
                  <p className="text-3xl font-bold text-purple-400">TU</p>
                  <p className="mt-2 text-sm text-gray-500">
                    University
                  </p>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
                  <p className="text-3xl font-bold text-blue-400">∞</p>
                  <p className="mt-2 text-sm text-gray-500">
                    Learning Mode
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section
        id="skills"
        className="border-y border-white/5 bg-white/[0.015] py-32"
      >
        <div className="mx-auto max-w-7xl px-6">
          <p className="font-mono text-sm tracking-[0.3em] text-cyan-400">
            02 / SKILLS
          </p>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            My tech stack.
          </h2>

          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
            {skills.map((skill, index) => (
              <div
                key={skill}
                className="group relative overflow-hidden rounded-xl border border-white/10 bg-black/40 p-6 text-center transition duration-300 hover:-translate-y-2 hover:border-cyan-400/40"
              >
                <div className="absolute inset-0 bg-cyan-400/5 opacity-0 transition group-hover:opacity-100" />

                <span className="relative text-sm font-medium text-gray-300 group-hover:text-cyan-300">
                  {skill}
                </span>

                <span className="mt-2 block font-mono text-[10px] text-gray-700">
                  0{index + 1}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-32">
        <div className="mx-auto max-w-7xl px-6">
          <p className="font-mono text-sm tracking-[0.3em] text-cyan-400">
            03 / PROJECTS
          </p>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Things I've built.
          </h2>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.number}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] transition duration-500 hover:-translate-y-3 hover:border-cyan-400/30"
              >
                {/* Project Visual */}
                <div className="relative flex h-56 items-center justify-center overflow-hidden bg-gradient-to-br from-cyan-950/40 via-blue-950/30 to-purple-950/40">
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.05)_1px,transparent_1px)] bg-[size:30px_30px]" />

                  <div className="relative text-6xl font-black text-white/10 transition duration-500 group-hover:scale-125 group-hover:text-cyan-400/20">
                    {project.number}
                  </div>

                  <div className="absolute right-5 top-5 font-mono text-xs text-cyan-400">
                    PROJECT_{project.number}
                  </div>
                </div>

                <div className="p-7">
                  <h3 className="text-xl font-bold">{project.title}</h3>

                  <p className="mt-4 text-sm leading-7 text-gray-500">
                    {project.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-cyan-400/10 bg-cyan-400/5 px-3 py-1 text-xs text-cyan-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-7 flex gap-5">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm text-gray-400 transition hover:text-cyan-400"
                    >
                      GitHub ↗
                    </a>

                    <a
                      href={project.demo}
                      target="blank"
                      rel="noreferrer"
                      className="text-sm text-gray-400 transition hover:text-cyan-400"
                    >
                      Live Demo ↗
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="border-t border-white/5 py-32">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="font-mono text-sm tracking-[0.3em] text-cyan-400">
            04 / CONTACT
          </p>

          <h2 className="mt-5 text-5xl font-black md:text-7xl">
            Let's create
            <br />
            <span className="text-cyan-400">something.</span>
          </h2>

          <p className="mx-auto mt-7 max-w-xl leading-8 text-gray-500">
            I'm always interested in learning, collaborating, and working on
            interesting projects.
          </p>

          <a
            href="mailto:bibashthapa1432@gmail.com"
            className="mt-10 inline-flex items-center rounded-full border border-cyan-400/40 bg-cyan-400/10 px-8 py-4 font-medium text-cyan-300 transition hover:scale-105 hover:bg-cyan-400 hover:text-black"
          >
            bibashthapa1432@gmail.com
          </a>

          <div className="mt-10 flex justify-center gap-8 text-sm text-gray-500">
            <a
              href="https://github.com/bibashthapa143"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-white
              
              "
            >
              GitHub
            </a>

            <span>•</span>

            <a
              href="mailto:bibashthapa1432@gmail.com"
              className="transition hover:text-white"
            >
              Email
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/5 py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-sm text-gray-600 md:flex-row">
          <p>
            © {new Date().getFullYear()} Bibash Thapa
          </p>

          <p className="font-mono">
            Built with <span className="text-cyan-400">Next.js</span>
          </p>
        </div>
      </footer>
    </main>
  );
}
