import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowDown, ArrowRight, ArrowUpRight, Github, Linkedin, Mail,
  Menu, X, Code2, Database, Server, Terminal, Braces, Layers3, GraduationCap,
} from 'lucide-react'
import {
  profile,
  skills,
  projects,
  journey,
  education,
} from './data'

const reveal = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' as const } },
}

function SectionTitle({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return (
    <motion.div className="section-heading" variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }}>
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </motion.div>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const nav = [
    ['About', '#about'],
    ['Skills', '#skills'],
    ['Projects', '#projects'],
    ['Education', '#education'],
    ['Journey', '#journey'],
    ['Contact', '#contact']
  ]

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site-shell">
      <div className="ambient ambient-one" /><div className="ambient ambient-two" />
      <header className="topbar">
        <a className="brand" href="#home" aria-label="Rathana home"><span className="brand-mark">R</span><span>rathana<span className="brand-dot">.</span></span></a>
        <button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <X /> : <Menu />}</button>
        <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
          {nav.map(([label, href]) => <a key={label} href={href} onClick={closeMenu}>{label}</a>)}
          <a className="nav-cta" href={profile.email.startsWith('your.') ? '#contact' : `mailto:${profile.email}`} onClick={closeMenu}>Let's talk <ArrowUpRight size={15} /></a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <motion.div initial="hidden" animate="visible" variants={reveal}>
              {/* <div className="availability"><span className="pulse" /> OPEN TO INTERNSHIP OPPORTUNITIES</div> */}
              {/* 👇 PROFILE PICTURE */}
              <img src="/profile.jpg" alt="Rathana" className="hero-avatar" />
              <p className="hero-kicker">HELLO, WORLD. I'M</p>
              <h1>Rathana<span className="accent">.</span></h1>
              <h2 className="hero-role">Backend <span>Developer</span></h2>
              <p className="hero-description">{profile.intro}</p>
              <div className="hero-actions">
                <a className="button button-primary" href="#projects">Explore my work <ArrowDown size={16} /></a>
                <a className="button button-ghost" href="#contact">Get in touch <ArrowUpRight size={16} /></a>
                {profile.resume && profile.resume !== '#' && (
                  <a
                    className="button button-ghost"
                    href={profile.resume}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Resume <ArrowUpRight size={16} />
                  </a>
                )}
              </div>
              <div className="hero-socials">
                <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18} /></a>
                <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a>
                <a href={`mailto:${profile.email}`} aria-label="Email"><Mail size={18} /></a>
                <span className="social-line" /><span className="location-label">{profile.location}</span>
              </div>
            </motion.div>
          </div>
          <motion.div className="hero-visual" initial={{ opacity: 0, scale: .88 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: .15 }}>
            <div className="visual-grid" />
            <div className="orbit orbit-a" /><div className="orbit orbit-b" /><div className="orbit orbit-c" />
            <div className="core-glow" />
            <div className="code-window">
              <div className="window-top"><span /><span /><span /><small>backend.dev</small></div>
              <div className="code-content">
                <p><i>01</i><b>const</b> developer = {'{'}</p>
                <p><i>02</i>&nbsp;&nbsp;name: <em>'Rathana'</em>,</p>
                <p><i>03</i>&nbsp;&nbsp;role: <em>'Backend Developer'</em>,</p>
                <p><i>04</i>&nbsp;&nbsp;focus: [</p>
                <p><i>05</i>&nbsp;&nbsp;&nbsp;&nbsp;<strong>'APIs'</strong>, <strong>'Databases'</strong>,</p>
                <p><i>06</i>&nbsp;&nbsp;&nbsp;&nbsp;<strong>'Problem Solving'</strong></p>
                <p><i>07</i>&nbsp;&nbsp;],</p>
                <p><i>08</i>&nbsp;&nbsp;building: <em>true</em></p>
                <p><i>09</i>{'}'}<span className="cursor">_</span></p>
              </div>
            </div>
            <div className="float-chip chip-api"><Braces size={15} /> REST APIs</div>
            <div className="float-chip chip-db"><Database size={15} /> Database</div>
            <div className="float-chip chip-server"><Server size={15} /> Backend</div>
          </motion.div>
          <a className="scroll-hint" href="#about"><span /> SCROLL TO EXPLORE <ArrowDown size={13} /></a>
        </section>

        <section className="section-wrap about-section" id="about">
          <SectionTitle eyebrow="01 / ABOUT ME" title="Behind the code." description="A little about the developer behind the projects." />
          <div className="about-grid">
            <motion.div className="about-main" variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <div className="about-icon"><Code2 size={26} /></div>
              <h3>Building the logic<br /><span>behind the experience.</span></h3>
              <p>{profile.about}</p>
              <p className="muted">My current focus is writing clean, maintainable code and understanding how production backend systems work.</p>
            </motion.div>
            <div className="about-facts">
              <div className="fact-card"><span className="fact-number">01</span><h4>API Development</h4><p>Designing endpoints and connecting applications through clear API contracts.</p></div>
              <div className="fact-card"><span className="fact-number">02</span><h4>Database Design</h4><p>Working with relational data, queries, and structured database relationships.</p></div>
              <div className="fact-card"><span className="fact-number">03</span><h4>Continuous Learning</h4><p>Learning through hands-on projects, feedback, and consistent practice.</p></div>
            </div>
          </div>
        </section>

        <section className="section-wrap skills-section" id="skills">
          <SectionTitle eyebrow="02 / TOOLKIT" title="Tools I work with." description="Technologies I have studied or used in projects. I keep expanding this toolkit as I learn." />
          <div className="skills-grid">
            {skills.map((group, index) => {
              const icons = [<Terminal />, <Layers3 />, <Database />, <Code2 />]
              return <motion.div className="skill-card" key={group.group} variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <div className="skill-card-top"><span className="skill-icon">{icons[index]}</span><span className="skill-index">0{index + 1}</span></div>
                <h3>{group.group}</h3>
                <div className="skill-tags">{group.items.map(item => <span key={item}>{item}</span>)}</div>
              </motion.div>
            })}
          </div>
        </section>

        <section className="section-wrap projects-section" id="projects">
          <SectionTitle eyebrow="03 / SELECTED WORK" title="Projects in progress." description="A selection of academic and personal work. Open each repository to explore the code and implementation." />
          <div className="projects-list">
            {projects.map(project => <motion.article className="project-card" key={project.number} variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <div className="project-number">{project.number}</div>
              <div className="project-info">
                <div className="project-meta"><span>{project.category}</span><span className="project-status">{project.status}</span></div>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <div className="project-tags">{project.stack.map(tag => <span key={tag}>{tag}</span>)}</div>
              </div>
              <a className="project-link" href={project.github} target="_blank" rel="noreferrer" aria-label={`Open ${project.name} GitHub`}><ArrowUpRight /></a>
            </motion.article>)}
          </div>
          
        </section>

        <section className="section-wrap education-section" id="education">
          <SectionTitle
            eyebrow="04 / EDUCATION"
            title="Education & Learning."
            description="My academic background and continuous learning journey."
          />

          <div className="education-list">
            {education.map((item, index) => (
              <motion.div
                className="education-card"
                key={item.institution}
                variants={reveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <div className="education-icon">
                  <GraduationCap size={25} />
                </div>

                <div className="education-info">
                  <span className="timeline-date">
                    {item.period}
                  </span>

                  <h3>{item.institution}</h3>

                  <h4>{item.degree}</h4>

                  <p>{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="section-wrap journey-section" id="journey">
          <SectionTitle eyebrow="05 / MY JOURNEY" title="Always moving forward." description="The path I'm taking to grow as a backend engineer." />
          <div className="timeline">
            {journey.map((item, index) => <motion.div className="timeline-item" key={item.title} variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <div className="timeline-marker">{String(index + 1).padStart(2, '0')}</div>
              <div><span className="timeline-date">{item.date}</span><h3>{item.title}</h3><p>{item.detail}</p></div>
            </motion.div>)}
          </div>
        </section>

        <section className="section-wrap contact-section" id="contact">
          <div className="contact-panel">
            <div className="contact-orb" />
            <span className="eyebrow">06 / CONTACT</span>
            <h2>Have a project<br />or opportunity<span className="accent">?</span></h2>
            <p>I'm open to learning opportunities, collaboration, and backend developer internships. Let's connect.</p>
            <a className="button button-primary" href={`mailto:${profile.email}`}>Say hello <ArrowUpRight size={16} /></a>
            <div className="contact-details">
              <a href={`mailto:${profile.email}`}><Mail size={16} /> {profile.email}</a>
              <span>{profile.location}</span>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer section-wrap">
        <a className="brand" href="#home"><span className="brand-mark">R</span><span>rathana<span className="brand-dot">.</span></span></a>
        <p>Designed & built with care by Rathana.</p>
        <a href="#home" className="back-top">BACK TO TOP ↑</a>
      </footer>
    </div>
  )
}

export default App