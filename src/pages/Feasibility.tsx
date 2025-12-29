import { Link } from 'react-router-dom'
import { PlaceholderImage } from '../components/PlaceholderImage'

export function FeasibilityPage() {
  return (
    <>
      <section className="pageIntro">
        <div className="container introGrid">
          <div>
            <div className="eyebrow">Page 3 · Feasibility</div>
            <h1 className="h1">Can this actually work?</h1>
            <p className="lead">
              The point isn’t to promise magic—it’s to show a buildable path: what already exists, what we’d build
              first, how we’d validate, and what we’d mitigate.
            </p>
            <div className="introLinks">
              <Link className="textLink" to="/impact-team">
                Next: Impact + Team →
              </Link>
            </div>
          </div>
          <PlaceholderImage
            label="Feasibility stack placeholder"
            sublabel="High-level: sensing → voice → inference → safety ops"
            aspect="21/9"
          />
        </div>
      </section>

      <section className="section">
        <div className="container grid2">
          <div className="card">
            <h2 className="h2">What exists today</h2>
            <p className="p">The building blocks are real, mature, and getting cheaper.</p>
            <ul className="list">
              <li>
                <strong>Everyday sensing:</strong> basic motion / presence signals, device state, time context
              </li>
              <li>
                <strong>Voice tech:</strong> high-quality speech recognition + natural voice generation
              </li>
              <li>
                <strong>Basic inference:</strong> pattern detection, anomaly signals, simple reasoning scaffolds
              </li>
              <li>
                <strong>Care workflows:</strong> escalation trees, call centers, community response networks
              </li>
            </ul>
          </div>

          <div className="card">
            <h2 className="h2">What we build first (MVP concept)</h2>
            <p className="p">
              Not “everything.” A focused model that proves the hard part: dignified, context-aware reasoning that feels
              calm.
            </p>
            <div className="callout">
              <div className="calloutTitle">MVP goal</div>
              <div className="calloutBody">
                Demonstrate a small set of everyday moments where gentle guidance measurably reduces uncertainty for
                seniors and stress for families.
              </div>
            </div>
            <ul className="list">
              <li>
                <strong>Limited contexts:</strong> a few routines (morning, evening, leaving/arriving)
              </li>
              <li>
                <strong>Care preferences:</strong> “what help feels like” settings (tone, frequency, escalation)
              </li>
              <li>
                <strong>Reasoning layer:</strong> explainable choices (why it spoke, why it stayed quiet)
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section sectionTint">
        <div className="container grid2">
          <div className="card">
            <h2 className="h2">How we validate it</h2>
            <p className="p">
              Validation is about trust and outcomes—measured in the smallest moments that change how a day feels.
            </p>
            <ul className="list">
              <li>
                <strong>Pilot plan:</strong> small cohort with opt-in consent, clear boundaries, and easy off-switch
              </li>
              <li>
                <strong>Evaluation:</strong> perceived dignity + confidence + caregiver reassurance
              </li>
              <li>
                <strong>Operational metrics:</strong> fewer unnecessary check-ins, time-to-help in true need
              </li>
              <li>
                <strong>Qualitative:</strong> “Did it feel supportive or intrusive?” after real scenarios
              </li>
            </ul>
          </div>

          <div className="card">
            <h2 className="h2">Constraints + mitigations</h2>
            <div className="stackList">
              <div className="stackItem">
                <div className="stackTitle">Privacy</div>
                <div className="stackBody">Consent-forward defaults, minimal retention, transparent explanations.</div>
              </div>
              <div className="stackItem">
                <div className="stackTitle">False alarms</div>
                <div className="stackBody">Bias toward reassurance and confirmation before escalation.</div>
              </div>
              <div className="stackItem">
                <div className="stackTitle">Adoption</div>
                <div className="stackBody">Predictable behavior, calm tone, and easy “pause / stop” control.</div>
              </div>
              <div className="stackItem">
                <div className="stackTitle">Cost</div>
                <div className="stackBody">Start narrow; leverage existing devices and community partnerships.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="sectionHeader">
            <h2 className="h2">Roadmap</h2>
            <p className="muted">Four phases to keep it grounded and judge-friendly.</p>
          </div>

          <div className="timeline" aria-label="Roadmap timeline">
            <div className="timelineStep">
              <div className="timelineDot" />
              <div className="timelineCard">
                <div className="timelineTitle">Phase 1 · Concept validation</div>
                <div className="timelineBody">Interviews, language tests, consent and tone exploration.</div>
              </div>
            </div>
            <div className="timelineStep">
              <div className="timelineDot" />
              <div className="timelineCard">
                <div className="timelineTitle">Phase 2 · MVP reasoning layer</div>
                <div className="timelineBody">A narrow set of contexts with explainable choices and calm responses.</div>
              </div>
            </div>
            <div className="timelineStep">
              <div className="timelineDot" />
              <div className="timelineCard">
                <div className="timelineTitle">Phase 3 · Pilot + evaluation</div>
                <div className="timelineBody">Small cohort, opt-in, refine interventions, measure trust outcomes.</div>
              </div>
            </div>
            <div className="timelineStep">
              <div className="timelineDot" />
              <div className="timelineCard">
                <div className="timelineTitle">Phase 4 · Partnerships + scaling</div>
                <div className="timelineBody">Senior centers and community orgs; expand contexts responsibly.</div>
              </div>
            </div>
          </div>

          <div className="ctaRow">
            <Link to="/impact-team" className="button buttonPrimary">
              Impact + Team
            </Link>
            <Link to="/model" className="button buttonGhost">
              Back to the Model
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}


