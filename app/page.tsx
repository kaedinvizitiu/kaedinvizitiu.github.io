const linkedIn = "https://www.linkedin.com/in/kaedin-vizitiu-9aa9a6383/";
const instagram = "https://www.instagram.com/kaedin.vizitiu/";
const email = "mailto:kaedinvizitiu@icloud.com";

export default function Home() {
  return (
    <main id="top">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Kaedin Vizitiu, home">
          KV<span>.</span>
        </a>
        <nav className="site-nav" aria-label="Primary navigation">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#direction">Direction</a>
          <a className="nav-contact" href="#contact">
            Connect <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </header>

      <section
        className="hero"
        id="main-content"
        aria-labelledby="hero-title"
        tabIndex={-1}
      >
        <div className="hero-copy">
          <p className="eyebrow">Business student · Emerging leader · California</p>
          <h1 id="hero-title">
            Learning <em>boldly.</em>
            <br />
            Leading intentionally.
            <br />
            Serving faithfully.
          </h1>
          <p className="hero-intro">
            I&apos;m Kaedin Vizitiu, a Business Administration student at California
            Baptist University. I&apos;m exploring where leadership, entrepreneurship,
            finance, AI, and service can create lasting value.
          </p>
          <div className="hero-actions" aria-label="Introduction links">
            <a className="button button-primary" href="#experience">
              Explore my path <span aria-hidden="true">↓</span>
            </a>
            <a className="text-link" href={linkedIn} target="_blank" rel="noreferrer">
              LinkedIn <span aria-hidden="true">↗</span>
            </a>
          </div>
          <p className="hero-meta">California · Expected graduation 2028</p>
        </div>

        <figure className="hero-portrait">
          {/* These project-owned images are already sized and compressed for the web. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/kaedin-portrait.jpg"
            alt="Kaedin Vizitiu standing outdoors beside a lake"
            width="1200"
            height="1800"
          />
          <figcaption>
            <span>Kaedin Vizitiu</span>
            <em>Built for the next climb.</em>
          </figcaption>
        </figure>
      </section>

      <section className="values" aria-labelledby="values-title">
        <p id="values-title">The standards I carry</p>
        <ul>
          <li>Integrity</li>
          <li>Discipline</li>
          <li>Courage</li>
          <li>Excellence</li>
        </ul>
      </section>

      <section className="about section-shell" id="about" aria-labelledby="about-title">
        <div className="section-label">
          <span>01</span>
          <p>Who I am</p>
        </div>
        <div className="about-copy">
          <h2 id="about-title">Ambitious about growth. Grounded in how I treat people.</h2>
          <div className="about-columns">
            <p>
              I&apos;m a business student and leader who learns best by stepping into
              responsibility. Whether I&apos;m working through a fast-paced shift,
              building an idea from scratch, or studying a new corner of business,
              I bring curiosity, resilience, and the willingness to keep improving.
            </p>
            <p>
              My goal is simple: pursue excellence without losing sight of people.
              I want my work to be useful, my leadership to be intentional, and every
              team or community I join to be better because I was there.
            </p>
          </div>
        </div>
      </section>

      <section className="mountain-break" aria-label="Personal mission">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/kaedin-mountains.jpg"
          alt="Kaedin looking across a mountain range in Colorado"
          width="1535"
          height="2084"
          loading="lazy"
        />
        <div className="mountain-overlay">
          <p className="eyebrow">My measure of meaningful work</p>
          <blockquote>Leave people better than I found them.</blockquote>
          <p>Lead with conviction. Keep climbing. Bring others with me.</p>
        </div>
      </section>

      <section className="experience section-shell" id="experience" aria-labelledby="experience-title">
        <div className="section-label">
          <span>02</span>
          <p>Experience</p>
        </div>
        <div className="experience-content">
          <div className="section-heading-row">
            <h2 id="experience-title">Where I&apos;m building the foundation.</h2>
            <p>
              Real experience has taught me that leadership often looks like calm
              decisions, consistent effort, and solving the next problem well.
            </p>
          </div>

          <article className="experience-card featured-card">
            <div className="card-number">01</div>
            <div className="card-main">
              <p className="card-kicker">Chick-fil-A · 2019–Present</p>
              <h3>Team Member &amp; Emerging Leader</h3>
              <p>
                Growing through years of hands-on restaurant experience, increasing
                leadership responsibility, and the daily challenge of delivering
                excellent service at speed.
              </p>
            </div>
            <ul className="skill-list" aria-label="Skills developed at Chick-fil-A">
              <li>Leadership</li>
              <li>Problem-solving</li>
              <li>Speed &amp; execution</li>
              <li>Team service</li>
            </ul>
          </article>

          <div className="experience-grid">
            <article className="experience-card">
              <div className="card-number">02</div>
              <div className="card-main">
                <p className="card-kicker">Entrepreneurship project</p>
                <h3>Bracelet Resale Venture</h3>
                <p>
                  Started and operated a bracelet resale business for a school
                  project—testing pricing, sales, and execution in the real world.
                  The venture finished at the top of the class.
                </p>
              </div>
            </article>

            <article className="experience-card understated-card">
              <div className="card-number">03</div>
              <div className="card-main">
                <p className="card-kicker">Handshake AI · Apr–Sep 2026</p>
                <h3>AI Trainer</h3>
                <p>
                  Evaluated AI-generated responses for factual accuracy, clarity,
                  and alignment with user intent, then revised model inputs and
                  documented error patterns to support refinement.
                </p>
              </div>
            </article>

            <article className="experience-card project-card">
              <div className="card-number">04</div>
              <div className="card-main">
                <p className="card-kicker">Independent project · 2026–Present</p>
                <h3>Financial Tracker</h3>
                <p>
                  Building an AI-powered investment research platform that analyzes
                  individual equities, generates investment forecasts, and supports
                  data-driven portfolio decisions through dedicated research,
                  analysis, and portfolio-management agents.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="education-band" aria-labelledby="education-title">
        <div>
          <p className="eyebrow">Education</p>
          <h2 id="education-title">California Baptist University</h2>
        </div>
        <dl>
          <div>
            <dt>Degree</dt>
            <dd>B.S. Business Administration</dd>
          </div>
          <div>
            <dt>Concentration</dt>
            <dd>Entrepreneurship</dd>
          </div>
          <div>
            <dt>Minors</dt>
            <dd>Finance &amp; Christian Studies</dd>
          </div>
          <div>
            <dt>Expected</dt>
            <dd>December 2028</dd>
          </div>
        </dl>
      </section>

      <section className="direction section-shell" id="direction" aria-labelledby="direction-title">
        <div className="section-label light-label">
          <span>03</span>
          <p>What&apos;s ahead</p>
        </div>
        <div className="direction-content">
          <p className="eyebrow">Open to ideas, people, and the right challenge</p>
          <h2 id="direction-title">Exploring where business can make a real difference.</h2>
          <p className="direction-intro">
            Right now, I&apos;m investing in leadership at Chick-fil-A while connecting
            with people who are building meaningful work. I&apos;m especially curious
            about the intersections below.
          </p>
          <ul className="interest-list">
            <li><span>01</span> Leadership &amp; operations</li>
            <li><span>02</span> Finance &amp; value creation</li>
            <li><span>03</span> AI &amp; emerging business</li>
            <li><span>04</span> Entrepreneurship</li>
            <li><span>05</span> Nonprofit impact</li>
          </ul>
        </div>
      </section>

      <footer className="contact" id="contact">
        <p className="eyebrow">Let&apos;s connect</p>
        <h2>Good conversations can change your direction.</h2>
        <p className="contact-intro">
          If you&apos;re building, leading, learning, or see a path worth exploring,
          I&apos;d be glad to hear from you.
        </p>
        <div className="contact-links">
          <a href={email}>Email <span aria-hidden="true">↗</span></a>
          <a href={linkedIn} target="_blank" rel="noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>
          <a href={instagram} target="_blank" rel="noreferrer">Instagram <span aria-hidden="true">↗</span></a>
        </div>
        <div className="footer-bottom">
          <p>Kaedin Vizitiu</p>
          <p>California · 2026</p>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
    </main>
  );
}
