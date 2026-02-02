import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-dvh text-white">
      <section className="min-h-dvh bg-[url('/bg.jpg')] bg-no-repeat bg-center bg-cover">
        <div className="min-h-dvh bg-black/40 flex items-center justify-center">
          <div className="space-y-10 md:max-w-4xl p-3 text-center">
            <h1 className="md:text-5xl text-3xl font-bold">
              ScholarNote - A Research Hub
            </h1>
            <p className="md:text-2xl text-lg font-light">
              <span className="text-orange-300 font-semibold">ScholarNote</span> is a modern research hub designed for organizing, sharing, and discovering knowledge in one place. It allows researchers and students to create structured notes, connect ideas, collaborate with others, and turn scattered research into clear, usable insights.
            </p>
            <div className="flex items-center gap-10 max-md:flex-col">
              <Link
                href={"#catalogue"}
                className="bg-orange-600 px-6 py-3 uppercase font-semibold max-md:w-full text-center"
              >
                View Our Catalogue
              </Link>
              <Link
                href={"#about"}
                className="border px-6 py-3 font-semibold max-md:w-full text-center"
              >
                Find Out More
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="bg-black py-24 px-6 md:px-20 text-center">
        <div className="max-w-5xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            Why ScholarNote Exists
          </h2>
          <p className="md:text-xl text-lg font-light text-white/90">
            Research today is scattered across notebooks, PDFs, folders, bookmarks,
            and disconnected tools. ScholarNote was built to bring everything into
            one intelligent, searchable workspace — so you spend less time managing
            information and more time thinking, writing, and discovering.
          </p>
          <p className="md:text-lg text-base text-white/80">
            Whether you're a student working on assignments, a researcher building
            long-term projects, or a team collaborating on knowledge, ScholarNote
            becomes your second brain — organized, connected, and always accessible.
          </p>
        </div>
      </section>

      <section id="features" className="bg-black/95 py-24 px-6 md:px-20">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">
              Everything You Need to Research Smarter
            </h2>
            <p className="md:text-xl text-lg font-light text-white/90">
              ScholarNote combines powerful organization tools with intelligent
              linking and collaboration features.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-black/80 p-6 space-y-4 border border-white/10">
              <h3 className="text-xl font-semibold text-orange-300">
                Structured Notes
              </h3>
              <p className="text-white/80">
                Create clean, organized notes with headings, tags, references, and
                metadata that make retrieval effortless and writing faster.
              </p>
            </div>

            <div className="bg-black/80 p-6 space-y-4 border border-white/10">
              <h3 className="text-xl font-semibold text-orange-300">
                Connected Ideas
              </h3>
              <p className="text-white/80">
                Link concepts, papers, and thoughts together to build a living
                knowledge graph that mirrors how you actually think.
              </p>
            </div>

            <div className="bg-black/80 p-6 space-y-4 border border-white/10">
              <h3 className="text-xl font-semibold text-orange-300">
                Seamless Collaboration
              </h3>
              <p className="text-white/80">
                Work with classmates, research partners, and teams in real-time —
                share notes, leave feedback, and co-create knowledge effortlessly.
              </p>
            </div>

            <div className="bg-black/80 p-6 space-y-4 border border-white/10">
              <h3 className="text-xl font-semibold text-orange-300">
                Smart Search
              </h3>
              <p className="text-white/80">
                Instantly find any note, reference, or idea using full-text search,
                filters, and tags — even across large research collections.
              </p>
            </div>

            <div className="bg-black/80 p-6 space-y-4 border border-white/10">
              <h3 className="text-xl font-semibold text-orange-300">
                Research Collections
              </h3>
              <p className="text-white/80">
                Organize projects into structured collections — perfect for theses,
                dissertations, long-term studies, and knowledge libraries.
              </p>
            </div>

            <div className="bg-black/80 p-6 space-y-4 border border-white/10">
              <h3 className="text-xl font-semibold text-orange-300">
                Knowledge Sharing
              </h3>
              <p className="text-white/80">
                Publish selected notes, insights, or collections for others to learn
                from — turning private research into shared knowledge.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="how" className="bg-black py-24 px-6 md:px-20">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">
              How ScholarNote Works
            </h2>
            <p className="md:text-xl text-lg font-light text-white/90">
              A simple workflow designed around how real research happens.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-10">
            <div className="space-y-3">
              <span className="text-orange-300 font-bold text-2xl">01</span>
              <h4 className="text-xl font-semibold">Capture</h4>
              <p className="text-white/80">
                Save ideas, quotes, papers, and thoughts as structured notes.
              </p>
            </div>

            <div className="space-y-3">
              <span className="text-orange-300 font-bold text-2xl">02</span>
              <h4 className="text-xl font-semibold">Organize</h4>
              <p className="text-white/80">
                Group notes into projects, tag them, and apply consistent structure.
              </p>
            </div>

            <div className="space-y-3">
              <span className="text-orange-300 font-bold text-2xl">03</span>
              <h4 className="text-xl font-semibold">Connect</h4>
              <p className="text-white/80">
                Link related ideas together to reveal insights and patterns.
              </p>
            </div>

            <div className="space-y-3">
              <span className="text-orange-300 font-bold text-2xl">04</span>
              <h4 className="text-xl font-semibold">Collaborate</h4>
              <p className="text-white/80">
                Share knowledge, invite collaborators, and co-create research.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black/95 py-24 px-6 md:px-20">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">
              Designed for Deep Thinking
            </h2>
            <p className="md:text-xl text-lg font-light text-white/90">
              ScholarNote doesn't just store information — it improves how you think.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-orange-300">
                Write Faster, Think Clearer
              </h3>
              <p className="text-white/80">
                By structuring your knowledge and linking ideas, ScholarNote helps
                you write papers, essays, and reports with clarity and confidence.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-orange-300">
                Reduce Cognitive Load
              </h3>
              <p className="text-white/80">
                Stop relying on memory alone. Your research lives in a system that
                remembers, organizes, and retrieves information for you.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-orange-300">
                Build Long-Term Knowledge
              </h3>
              <p className="text-white/80">
                Unlike scattered documents, ScholarNote grows with you — becoming a
                permanent knowledge base across years of learning and research.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-orange-300">
                Collaborate Without Friction
              </h3>
              <p className="text-white/80">
                Share ideas early, receive feedback continuously, and co-develop
                research without the usual tool chaos.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black py-24 px-6 md:px-20">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">
              What Users Are Saying
            </h2>
            <p className="md:text-xl text-lg font-light text-white/90">
              Trusted by students, researchers, and knowledge workers.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-black/80 p-6 space-y-4 border border-white/10">
              <p className="text-white/80">
                “ScholarNote completely changed how I manage my thesis. Everything
                is structured, searchable, and connected — I finally feel in control
                of my research.”
              </p>
              <span className="text-sm text-orange-300 font-semibold">
                — Final Year Student
              </span>
            </div>

            <div className="bg-black/80 p-6 space-y-4 border border-white/10">
              <p className="text-white/80">
                “This feels like a second brain built specifically for research. The
                ability to link ideas has improved the quality of my writing.”
              </p>
              <span className="text-sm text-orange-300 font-semibold">
                — Academic Researcher
              </span>
            </div>

            <div className="bg-black/80 p-6 space-y-4 border border-white/10">
              <p className="text-white/80">
                “Collaborating with my team has never been easier. We share notes,
                build knowledge together, and stay aligned throughout our projects.”
              </p>
              <span className="text-sm text-orange-300 font-semibold">
                — Project Team Lead
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black/95 py-24 px-6 md:px-20 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold">
            Start Building Your Knowledge System Today
          </h2>
          <p className="md:text-xl text-lg font-light text-white/90">
            Join students, researchers, and professionals who are transforming how
            they capture, connect, and collaborate on knowledge.
          </p>
          <div className="flex items-center justify-center gap-10 max-md:flex-col">
            <Link
              href={"/auth/signin"}
              className="bg-orange-600 px-8 py-4 uppercase font-semibold max-md:w-full text-center"
            >
              Get Started Free
            </Link>
            <Link
              href={"/about"}
              className="border px-8 py-4 font-semibold max-md:w-full text-center"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
