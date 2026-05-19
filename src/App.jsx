export default function KavyaPortfolio() {
  const skills = [
    'Python',
    'Django',
    'FastAPI',
    'Flask',
    'AI/ML',
    'LLMs',
    'LangChain',
    'AWS',
    'Docker',
    'RabbitMQ',
    'Pandas',
    'NumPy',
    'Salesforce',
    'Data Engineering'
  ];

  const projects = [
    {
      title: 'AI Data Quality Explainer',
      description:
        'Built an AI-powered data quality analysis system using FastAPI, Python, LLM workflows and intelligent summarization.',
    },
    {
      title: 'Enterprise Multi-Cloud Automation',
      description:
        'Worked on enterprise cloud and automation projects for global clients across IBM and Kyndryl ecosystems.',
    },
    {
      title: 'LLM Knowledge Assistant',
      description:
        'Created LangChain-based intelligent assistants for document analysis, semantic search and workflow automation.',
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-violet-900/30 via-cyan-900/20 to-fuchsia-900/30 blur-3xl"></div>

      <div className="relative z-10">
        <nav className="flex items-center justify-between px-8 py-6 backdrop-blur-md border-b border-white/10 sticky top-0 bg-black/30">
          <h1 className="text-2xl font-bold tracking-wide">Kavya Singh</h1>

          <div className="flex gap-4 text-sm">
            <a href="#about" className="hover:text-cyan-300 transition">About</a>
            <a href="#skills" className="hover:text-cyan-300 transition">Skills</a>
            <a href="#projects" className="hover:text-cyan-300 transition">Projects</a>
            <a href="#contact" className="hover:text-cyan-300 transition">Contact</a>
          </div>
        </nav>

        <section className="px-8 md:px-20 py-24 flex flex-col items-center text-center">
          <div className="bg-white/10 border border-white/20 px-4 py-2 rounded-full text-sm backdrop-blur-md mb-6 shadow-2xl">
            AI Engineer • Python Developer • LLM Enthusiast
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight max-w-5xl bg-gradient-to-r from-cyan-300 via-violet-300 to-pink-300 text-transparent bg-clip-text">
            Building Intelligent AI Solutions That Scale
          </h1>

          <p className="mt-8 text-lg text-gray-300 max-w-3xl leading-8">
            5+ years of experience across IBM, Kyndryl and Xoriant building enterprise-grade backend systems,
            AI-powered workflows, automation solutions and scalable cloud-native applications.
          </p>

          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <a
              href="https://calendar.google.com/"
              target="_blank"
              className="px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-400 to-violet-500 font-semibold shadow-2xl hover:scale-105 transition duration-300"
            >
              Schedule a Meeting
            </a>

            <a
              href="mailto:yourmail@gmail.com"
              className="px-8 py-4 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md hover:bg-white/20 transition duration-300"
            >
              Contact Me
            </a>
          </div>
        </section>

        <section id="about" className="px-8 md:px-20 py-20">
          <div className="max-w-5xl mx-auto rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl p-10 shadow-2xl">
            <h2 className="text-4xl font-bold mb-6">About Me</h2>

            <p className="text-gray-300 leading-8 text-lg">
              I specialize in Python development, AI integrations, backend systems, cloud automation and LLM-powered
              applications. My experience spans enterprise-scale systems, intelligent automation, data processing,
              REST APIs and AI workflow orchestration.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
              <div className="p-6 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/10 border border-white/10">
                <h3 className="text-2xl font-bold">5+</h3>
                <p className="text-gray-300 mt-2">Years Experience</p>
              </div>

              <div className="p-6 rounded-2xl bg-gradient-to-br from-violet-500/20 to-pink-500/10 border border-white/10">
                <h3 className="text-2xl font-bold">AI + Cloud</h3>
                <p className="text-gray-300 mt-2">Enterprise Solutions</p>
              </div>

              <div className="p-6 rounded-2xl bg-gradient-to-br from-fuchsia-500/20 to-rose-500/10 border border-white/10">
                <h3 className="text-2xl font-bold">Global</h3>
                <p className="text-gray-300 mt-2">Client Experience</p>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="px-8 md:px-20 py-20">
          <h2 className="text-4xl font-bold text-center mb-12">Skills & Technologies</h2>

          <div className="flex flex-wrap justify-center gap-5 max-w-6xl mx-auto">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="px-6 py-4 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-md hover:scale-110 transition duration-300 shadow-xl"
              >
                {skill}
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="px-8 md:px-20 py-20">
          <h2 className="text-4xl font-bold text-center mb-12">Featured Projects</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <div
                key={index}
                className="rounded-3xl bg-white/5 border border-white/10 p-8 backdrop-blur-xl hover:-translate-y-2 transition duration-300 shadow-2xl"
              >
                <div className="h-2 w-20 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 mb-6"></div>

                <h3 className="text-2xl font-bold mb-4">{project.title}</h3>

                <p className="text-gray-300 leading-7">{project.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="px-8 md:px-20 py-24">
          <div className="max-w-4xl mx-auto rounded-3xl bg-gradient-to-r from-cyan-500/10 via-violet-500/10 to-fuchsia-500/10 border border-white/10 p-12 backdrop-blur-xl text-center shadow-2xl">
            <h2 className="text-5xl font-bold mb-6">Let’s Build Something Amazing</h2>

            <p className="text-gray-300 text-lg leading-8 mb-10">
              Open to AI Engineering, Python Backend, LLM, LangChain, Cloud and Automation opportunities.
            </p>

            <div className="flex flex-wrap justify-center gap-5">
              <a
                href="https://calendar.google.com/"
                target="_blank"
                className="px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-400 to-violet-500 font-semibold hover:scale-105 transition duration-300"
              >
                Book a Meeting
              </a>

              <a
                href="https://www.linkedin.com"
                target="_blank"
                className="px-8 py-4 rounded-2xl border border-white/20 bg-white/10 hover:bg-white/20 transition duration-300"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </section>

        <footer className="text-center py-10 text-gray-500 border-t border-white/10">
          © 2026 Kavya Singh • AI Engineer • Python Developer
        </footer>
      </div>
    </div>
  );
}

/*
========================================
FREE PUBLIC HOSTING (NO LOCAL MACHINE)
========================================

BEST FREE OPTIONS:
1. Vercel
2. Netlify
3. GitHub Pages

RECOMMENDED:
Deploy on Vercel.

Steps:
1. Push code to GitHub.
2. Login to Vercel using GitHub.
3. Import repository.
4. Click Deploy.
5. Your site becomes public globally.

It stays online 24x7 even if your laptop is OFF.

========================================
GOOGLE MEET SCHEDULING
========================================

Use Google Calendar Appointment Scheduling.

Steps:
1. Open Google Calendar.
2. Create Appointment Schedule.
3. Copy public booking URL.
4. Replace:
   https://calendar.google.com/

with your actual booking link.

Visitors will directly schedule meetings with you.

========================================
OPTIONAL FUTURE AI FEATURES
========================================

You can later add:
- AI chatbot using OpenAI APIs
- Resume analyzer
- LangChain document assistant
- Voice AI assistant
- Blog with AI summaries
- GitHub live project fetcher
- Real-time visitor analytics
- RAG-based portfolio chatbot
- AI interview assistant demo

========================================
TECH STACK
========================================

Frontend: React + Tailwind
Deployment: Vercel
AI Features: OpenAI + LangChain
Backend (optional): FastAPI / Django
Database (optional): Supabase / Firebase

*/
