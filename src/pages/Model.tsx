import { Link } from 'react-router-dom'
import { PlaceholderImage } from '../components/PlaceholderImage'

type ModelStep = {
  title: string
  description: string
  imageLabel: string
  imageSublabel: string
}

const steps: ModelStep[] = [
  {
    title: 'Step 1 — The day has a rhythm',
    description:
      'GrandGuardian begins by learning the gentle shape of a day—habits, timing, and what “normal” feels like for one person.',
    imageLabel: 'Step 1 placeholder',
    imageSublabel: 'Daily rhythm · routines as a soft baseline',
  },
  {
    title: 'Step 2 — Notice the quiet drift',
    description:
      'Instead of hunting for “events,” it notices subtle drift: hesitation, confusion, or a routine that doesn’t quite complete.',
    imageLabel: 'Step 2 placeholder',
    imageSublabel: 'Drift detection · uncertainty before panic',
  },
  {
    title: 'Step 3 — Choose a human voice',
    description:
      'The model selects the right kind of comfort: a family voice, a familiar phrase, and a tone that doesn’t startle.',
    imageLabel: 'Step 3 placeholder',
    imageSublabel: 'Family voice · emotional care, not alarms',
  },
  {
    title: 'Step 4 — Offer gentle guidance',
    description:
      'A calm prompt arrives like a hand on the shoulder—clear, short, respectful—so the person can decide what to do next.',
    imageLabel: 'Step 4 placeholder',
    imageSublabel: 'Guidance · autonomy preserved',
  },
  {
    title: 'Step 5 — Wait with restraint',
    description:
      'Silence is part of care. GrandGuardian waits, listens, and avoids turning life into constant interruptions.',
    imageLabel: 'Step 5 placeholder',
    imageSublabel: 'Restraint · fewer, better moments',
  },
  {
    title: 'Step 6 — Escalate with context',
    description:
      'If help is needed, it escalates with context: what changed, what was tried, and what would be most respectful now.',
    imageLabel: 'Step 6 placeholder',
    imageSublabel: 'Escalation · context-rich, dignified',
  },
  {
    title: 'Step 7 — Strengthen memory over time',
    description:
      'Each moment becomes a gentle reinforcement—“waking up memories” through repetition, familiarity, and loved voices.',
    imageLabel: 'Step 7 placeholder',
    imageSublabel: 'Memory support · comfort that endures',
  },
]

export function ModelPage() {
  return (
    <>
      <section className="pageIntro">
        <div className="container introGrid">
          <div>
            <div className="eyebrow">Page 2 · The Model</div>
            <h1 className="h1">What the innovation is (as a model)</h1>
            <p className="lead">
              Think of GrandGuardian like a museum exhibit: a concept you can understand at a glance—built from warmth,
              restraint, and the emotional truth of a familiar voice.
            </p>
            <div className="introLinks">
              <Link className="textLink" to="/feasibility">
                Next: Feasibility →
              </Link>
            </div>
          </div>
          <PlaceholderImage
            label="Concept diagram hero placeholder"
            sublabel="A seven-step care model (concept, not a feature list)"
            aspect="21/9"
          />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="sectionHeader">
            <h2 className="h2">Seven steps: how GrandGuardian “wakes up memories”</h2>
            <p className="muted">Each step includes a placeholder image you can replace later.</p>
          </div>

          <div className="grid2">
            {steps.map((step) => (
              <div className="card" key={step.title}>
                <h3 className="h3">{step.title}</h3>
                <p className="p">{step.description}</p>
                <PlaceholderImage label={step.imageLabel} sublabel={step.imageSublabel} aspect="16/9" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section sectionTint">
        <div className="container">
          <div className="sectionHeader">
            <h2 className="h2">Three pillars (artistic, human-first)</h2>
          </div>
          <div className="grid3">
            <div className="card">
              <h3 className="h3">Familiarity</h3>
              <p className="p">
                The comfort of a loved voice: memory, warmth, and “I’m here” — delivered in a way that feels personal.
              </p>
            </div>
            <div className="card">
              <h3 className="h3">Restraint</h3>
              <p className="p">
                Care is often what you don’t do: fewer interruptions, softer moments, and silence that respects daily
                life.
              </p>
            </div>
            <div className="card">
              <h3 className="h3">Dignity</h3>
              <p className="p">
                Support that asks, not takes. Consent, clarity, and control—so help never feels like being watched.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="card">
            <h2 className="h2">System Diagram</h2>
            <p className="p">
              Replace this with a clean visual that shows the app ecosystem at a glance (senior app, family app, voice
              library, and care logic).
            </p>
            <PlaceholderImage
              label="System Diagram placeholder"
              sublabel="GrandGuardian app ecosystem"
              aspect="21/9"
            />
          </div>
        </div>
      </section>
    </>
  )
}


