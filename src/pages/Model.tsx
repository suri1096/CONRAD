import { Link } from 'react-router-dom'
import { PlaceholderImage } from '../components/PlaceholderImage'

function MiniIcon({ d }: { d: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" className="miniIcon">
      <path d={d} fill="currentColor" />
    </svg>
  )
}

export function ModelPage() {
  return (
    <>
      <section className="pageIntro">
        <div className="container introGrid">
          <div>
            <div className="eyebrow">Page 2 · The Model</div>
            <h1 className="h1">What the innovation is (as a model)</h1>
            <p className="lead">
              Think of GrandGuardian like a museum exhibit: a clear, simple model of how calm support emerges from
              everyday context—without turning life into “events.”
            </p>
            <div className="introLinks">
              <Link className="textLink" to="/feasibility">
                Next: Feasibility →
              </Link>
            </div>
          </div>
          <PlaceholderImage
            label="Concept diagram hero placeholder"
            sublabel="Inputs → Care reasoning → Outcomes"
            aspect="21/9"
          />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="sectionHeader">
            <h2 className="h2">The core flow</h2>
            <p className="muted">A model, not a feature list.</p>
          </div>

          <div className="diagram" aria-label="Inputs to outcomes diagram">
            <div className="diagramCol">
              <div className="diagramTitle">Inputs</div>
              <div className="diagramCard">
                <div className="diagramRow">
                  <MiniIcon d="M12 2a7 7 0 0 1 7 7c0 2.7-1.6 4.8-3.2 6.2-.7.6-.8 1.6-.8 2.4V20a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-2.4c0-.8-.1-1.8-.8-2.4C4.6 13.8 3 11.7 3 9a7 7 0 0 1 7-7h2Z" />
                  <div>
                    <div className="diagramLabel">Context</div>
                    <div className="diagramHint">home rhythms, time of day, environment</div>
                  </div>
                </div>
                <div className="diagramRow">
                  <MiniIcon d="M7 3h2v2H7V3Zm8 0h2v2h-2V3ZM5 7h14v2H5V7Zm0 4h14v2H5v-2Zm0 4h10v2H5v-2Z" />
                  <div>
                    <div className="diagramLabel">Routine signals</div>
                    <div className="diagramHint">patterns, deviations, gentle consistency</div>
                  </div>
                </div>
                <div className="diagramRow">
                  <MiniIcon d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4Zm0 2c-4 0-7 2-7 4.5V21h14v-2.5C19 16 16 14 12 14Z" />
                  <div>
                    <div className="diagramLabel">Caregiver preferences</div>
                    <div className="diagramHint">how to help, when to escalate, consent rules</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="diagramArrow" aria-hidden="true">
              <div className="arrowLine" />
              <div className="arrowHead" />
            </div>

            <div className="diagramCol">
              <div className="diagramTitle">Intelligence</div>
              <div className="diagramCard diagramCenter">
                <div className="diagramCenterTitle">Care reasoning layer</div>
                <div className="diagramCenterText">
                  A context-aware reasoning model that chooses the most respectful response: quiet reassurance, gentle
                  guidance, or faster help when needed.
                </div>
                <div className="diagramPills">
                  <span className="pill pillSoft">dignity</span>
                  <span className="pill pillSoft">predictability</span>
                  <span className="pill pillSoft">explainability</span>
                </div>
              </div>
            </div>

            <div className="diagramArrow" aria-hidden="true">
              <div className="arrowLine" />
              <div className="arrowHead" />
            </div>

            <div className="diagramCol">
              <div className="diagramTitle">Outcomes</div>
              <div className="diagramCard">
                <div className="outcome">
                  <div className="outcomeDot" />
                  <div>
                    <div className="diagramLabel">Dignity</div>
                    <div className="diagramHint">support that feels respectful</div>
                  </div>
                </div>
                <div className="outcome">
                  <div className="outcomeDot" />
                  <div>
                    <div className="diagramLabel">Independence</div>
                    <div className="diagramHint">confidence to keep routines</div>
                  </div>
                </div>
                <div className="outcome">
                  <div className="outcomeDot" />
                  <div>
                    <div className="diagramLabel">Faster help</div>
                    <div className="diagramHint">escalation when it truly matters</div>
                  </div>
                </div>
                <div className="outcome">
                  <div className="outcomeDot" />
                  <div>
                    <div className="diagramLabel">Reduced caregiver stress</div>
                    <div className="diagramHint">fewer check-ins, more trust</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section sectionTint">
        <div className="container">
          <div className="sectionHeader">
            <h2 className="h2">Three pillars (benefits, not functions)</h2>
          </div>
          <div className="grid3">
            <div className="card">
              <h3 className="h3">Emotional trust</h3>
              <p className="p">The model chooses restraint first—intervening only when it genuinely helps.</p>
            </div>
            <div className="card">
              <h3 className="h3">Proactive safety</h3>
              <p className="p">Not “more alerts,” but earlier clarity: reduce uncertainty before it becomes panic.</p>
            </div>
            <div className="card">
              <h3 className="h3">Simple adoption</h3>
              <p className="p">Consent-forward, explainable, and predictable—so it’s easy to accept and sustain.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid2">
          <div className="card">
            <h2 className="h2">Before vs After</h2>
            <div className="beforeAfter">
              <div className="beforeAfterCol">
                <div className="beforeAfterTitle">Without GrandGuardian</div>
                <ul className="list">
                  <li>Uncertainty leads to repeated check-ins</li>
                  <li>Small confusion becomes isolation</li>
                  <li>Help arrives late, after stress spikes</li>
                </ul>
              </div>
              <div className="beforeAfterCol">
                <div className="beforeAfterTitle">With the model</div>
                <ul className="list">
                  <li>Calm reassurance when routines drift</li>
                  <li>Guidance that preserves autonomy</li>
                  <li>Escalation only when it truly matters</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="card">
            <h2 className="h2">Scenario storyboard</h2>
            <div className="storyboard">
              <PlaceholderImage label="Panel 1" sublabel="A moment of uncertainty" aspect="16/9" />
              <PlaceholderImage label="Panel 2" sublabel="Calm guidance" aspect="16/9" />
              <PlaceholderImage label="Panel 3" sublabel="Confidence restored" aspect="16/9" />
            </div>
            <div className="muted small">
              These are placeholders—swap with simple illustrations or warm photos as you gather assets.
            </div>
          </div>
        </div>
      </section>
    </>
  )
}


