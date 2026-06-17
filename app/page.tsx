import Image from "next/image"
import Link from "next/link"

const publications = [
  {
    title: "The Revaluation of Bitcoin Miners: Right Time, Right Place",
    category: "Research Paper",
    date: "2026",
    preview:
      "Analysis of valuation dynamics in publicly traded Bitcoin miners and their relationship to energy markets, capital cycles, and digital infrastructure.",
    href: "https://zenodo.org/records/20475180",
  },
  {
    title: "Is Russia Still an Energy Superpower?",
    category: "Geopolitics",
    date: "2026",
    preview:
      "As Russia pivots from Europe to Asia, can it preserve its energy influence? A deep dive into sanctions, gas exports, LNG development, and strategic realignment.",
    href: "https://medium.com/@marcaliagaborras/the-role-of-russia-and-cis-countries-on-the-global-energy-chessboard-fc09f49926ed",
  },
  {
    title: "Is Russia really sovereign over the price of its own oil?",
    category: "Geopolitics |Oil and gas",
    date: "2026",
    preview:
      "how the shift from state-controlled production to globalized financial derivatives has left Urals crude bound to international benchmarks and vulnerable to external macroeconomic cycles.",
    href: "https://medium.com/@marcaliagaborras/is-russia-really-sovereign-over-the-price-of-its-own-oil-5a5f5353eac4",
  },
]

const externalLinks = [
  { title: "Medium", href: "https://medium.com/@marcaliagaborras" },
  { title: "Quantitative Models", href: "https://drive.google.com/drive/folders/1TmvOOlJIKsT7H5DHjyTpBrYPP0uY4S4L?usp=sharing" },
  { title: "LinkedIn", href: "https://www.linkedin.com/in/marc-aliaga/" },
]

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-black font-sans selection:bg-neutral-200">
      <div className="max-w-4xl mx-auto px-6 py-12 flex flex-col items-center">
        
        {/* HEADER LOGO - Styled like chomsky.info */}
        <header className="w-full text-center border-b-2 border-black pb-4 mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-wider uppercase font-sans">
            Marc Aliaga
          </h1>
          <p className="text-xs tracking-[0.2em] uppercase font-medium mt-1 text-neutral-600">
            International Affairs • Geopolitics • Energy Markets
          </p>
        </header>

        {/* THREE-COLUMN HERO SECTION (Inspired by image_54c206.jpg) */}
        <section className="w-full grid grid-cols-1 md:grid-cols-[1fr_320px_1fr] gap-8 items-center text-center my-6">
          
          {/* Left Navigation Column */}
          <div className="flex flex-col space-y-4 text-base font-bold uppercase tracking-wide md:text-right">
            <a href="#about" className="hover:underline">About</a>
            <a href="#research" className="hover:underline">Articles</a>
            {externalLinks.slice(0, 1).map((link) => (
              <Link key={link.title} href={link.href} target="_blank" className="hover:underline">
                {link.title}
              </Link>
            ))}
          </div>

          {/* Central Framed Profile Image */}
          <div className="flex flex-col items-center">
            <p className="text-sm font-bold tracking-widest uppercase mb-3 text-neutral-800">
              RECENT UPDATES
            </p>
            <div className="relative w-64 h-80 border-4 border-black bg-neutral-100 p-1 shadow-sm">
              <div className="relative w-full h-full bg-neutral-200">
                <Image
                  src="/profile.jpg"
                  alt="Marc Aliaga"
                  fill
                  priority
                  className="object-cover filter grayscale contrast-115"
                />
              </div>
            </div>
            <span className="text-[10px] text-neutral-500 italic mt-2 block text-center">
              photo credit: Portrait Archive
            </span>
          </div>

          {/* Right Navigation Column */}
          <div className="flex flex-col space-y-4 text-base font-bold uppercase tracking-wide md:text-left">
            {externalLinks.slice(1).map((link) => (
              <Link key={link.title} href={link.href} target="_blank" className="hover:underline">
                {link.title}
              </Link>
            ))}
            <a href="mailto:#" className="hover:underline">Contact</a>
          </div>
        </section>

        <hr className="w-full border-t border-neutral-300 my-10" />

        {/* ABOUT / BIOGRAPHY SECTION */}
        <section id="about" className="w-full max-w-2xl mx-auto text-center md:text-justify space-y-6 text-sm leading-7 text-neutral-800">
          <h2 className="text-xl font-bold uppercase tracking-wider text-center border-b border-black pb-1 mb-4">
            Biography Framework
          </h2>
          <p>
            I'm Marc, a Spanish student focused on international finance, geopolitical risk, energy markets, and global trade. 
            Currently specializing in International Finance at MGIMO University, my work explores the 
            intersection of economics, statecraft, and strategic competition across Eurasia.
          </p>
          <p>
            By merging my foundational education under the European academic framework with my current specialization in 
            Russia, I have developed a unique, 360 perspective on the global economy. This dual-lens approach allows 
            me to analyze energy security, physical commodity markets, international sanctions, industrial policy, and 
            transport corridors with a grounded understanding of both European and Eurasian strategic realities.
          </p>
          <p>
            I actively author and publish detailed macro-geopolitical essays and market reports. 
            These analytical frameworks dissect underlying structural dependencies, state-driven economic re-alignments, 
            and systemic risks within volatile global markets—providing executives and decision-makers with the objective, 
            tridimensional oversight required to anticipate shifts in the international landscape.
          </p>
        </section>

        <hr className="w-full border-t border-neutral-300 my-10" />

        {/* SELECTED RESEARCH SECTION */}
        <section id="research" className="w-full max-w-2xl">
          <h2 className="text-2xl font-bold uppercase tracking-wider text-center mb-8 border-b border-black pb-2">
            Selected Research
          </h2>
          
          <div className="space-y-10">
            {publications.map((article) => (
              <article key={article.title} className="border-b border-neutral-200 pb-8 last:border-0">
                <Link href={article.href} className="group block text-center md:text-left">
                  <h3 className="text-xl font-bold text-neutral-900 group-hover:underline leading-tight">
                    {article.title}
                  </h3>
                </Link>
                
                <p className="mt-2 text-[11px] uppercase tracking-wider text-neutral-500 text-center md:text-left font-semibold">
                  {article.category} • {article.date}
                </p>
                
                <p className="mt-3 text-sm leading-6 text-neutral-700 text-justify">
                  {article.preview}
                </p>
                
                <div className="mt-4 text-center md:text-left">
                  <Link href={article.href} className="text-xs font-bold uppercase tracking-wider border border-black px-3 py-1 hover:bg-black hover:text-white transition-colors">
                    Read Research →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* FOOTER */}
        <footer className="w-full text-center border-t-2 border-black pt-6 mt-16">
          <p className="text-xl font-black tracking-wider uppercase">
            MARCALIAGA.com
          </p>
          <div className="mt-2 h-0.5 w-16 bg-black mx-auto" />
        </footer>

      </div>
    </main>
  )
}