import { Link } from 'react-router-dom'
import { PlaceholderImage } from '../components/PlaceholderImage'

export function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="container heroGrid">
          <div className="heroCopy">
            <div className="eyebrow">Innovation concept</div>
            <h1 className="heroTitle">
              Help that feels like <span className="heroEm">care</span>—not surveillance.
            </h1>
            <p className="heroLead">
              GrandGuardian is a calm “care reasoning” model that turns daily context into gentle guidance—so seniors
              keep independence, and families gain peace.
            </p>
            <div className="heroActions">
              <Link to="/model" className="button buttonPrimary">
                See the Model
              </Link>
              <Link to="/impact-team" className="button buttonGhost">
                Why it matters
              </Link>
            </div>

            <div className="brandPills" aria-label="Brand strip">
              <span className="pill">Warm</span>
              <span className="pill">Respectful</span>
              <span className="pill">Calm-by-design</span>
            </div>
          </div>

          <div className="heroVisual">
            <PlaceholderImage
              label="Warm photo placeholder"
              sublabel="Senior + family (real-life, not tech)"
              aspect="3/2"
            />
            <div className="caption">
              Our visual language is human-first: warm light, real moments, and quiet confidence.
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid2">
          <div className="card">
            <h2 className="h2">The problem</h2>
            <p className="p">
              Families want to help without hovering. Seniors want support without losing agency. In between those
              needs sits uncertainty: “Is everything okay?” That uncertainty becomes stress, conflict, and late help.
            </p>
            <ul className="list">
              <li>
                <strong>For seniors:</strong> small moments of doubt can quietly shrink independence.
              </li>
              <li>
                <strong>For families:</strong> constant checking feels like love—but lands like pressure.
              </li>
            </ul>
          </div>

          <div className="card">
            <h2 className="h2">The insight</h2>
            <p className="p">
              What everyone misses is that <strong>support is emotional</strong>. It’s not just “detecting events”—it’s
              knowing when to be quiet, when to reassure, and when to escalate. The model must reason about dignity and
              context, not just signals.
            </p>
            <div className="quote">
              “The best help feels invisible—until you need it.”
              <div className="quoteBy">GrandGuardian design principle</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section sectionTint">
        <div className="container">
          <div className="sectionHeader">
            <h2 className="h2">Mission · Vision · Values</h2>
            <p className="muted">
              Brand is more than features: it’s tone, restraint, and how we treat people at their most vulnerable.
            </p>
          </div>

          <div className="grid3">
            <div className="card">
              <h3 className="h3">Mission</h3>
              <p className="p">Make everyday support feel calm, respectful, and human—so independence lasts longer.</p>
            </div>
            <div className="card">
              <h3 className="h3">Vision</h3>
              <p className="p">
                A world where aging at home is guided by dignity—where help arrives softly, before fear grows.
              </p>
            </div>
            <div className="card">
              <h3 className="h3">Values</h3>
              <ul className="list">
                <li>
                  <strong>Dignity first</strong> (consent, control, clarity)
                </li>
                <li>
                  <strong>Calm over alerts</strong> (fewer, better interventions)
                </li>
                <li>
                  <strong>Trust is earned</strong> (explainable, predictable behavior)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="narrative">
            <h2 className="h2">Why we built this</h2>
            <p className="p">
              We built GrandGuardian for the quiet, ordinary moments that decide whether a day feels confident or
              fragile: a forgotten routine, a confusing instruction, a “maybe I shouldn’t bother anyone” hesitation.
              The goal isn’t to watch—it’s to <strong>restore steadiness</strong>. When support respects autonomy, it
              becomes something seniors accept and families trust: a gentle partner that helps life stay life.
            </p>
            <div className="ctaRow">
              <Link to="/model" className="button buttonPrimary">
                See the Model
              </Link>
              <Link to="/feasibility" className="button buttonSecondary">
                Can this work?
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}


