import './App.css'
import infretWeek1 from './assets/infret_week1.pdf'
import infretWeek2 from './assets/infret_week2.pdf'
import infretWeek3 from './assets/infret_week3.pdf'
import infretWeek4 from './assets/infret_week4.pdf'
import infretWeek5 from './assets/infret_week5-1.pdf'
import infretWeek6 from './assets/infret_week6.pdf'
import infretWeek7 from './assets/infret_week7.pdf'
import infretWeek8 from './assets/infret_week8.pdf'

// ── Data ────────────────────────────────────────────────
// To add a new week: just add an entry here.

const exercises = [
  { week: '01', title: 'Introduction',      slides: infretWeek1, kahoot: 'https://create.kahoot.it/share/information-retrieval-introduction/4e5bc650-e58a-402b-9a63-55bd99ed6496' },
  { week: '02', title: 'Boolean Retrieval',  slides: infretWeek2, kahoot: 'https://create.kahoot.it/share/ir-week-ii-boolean-retrieval/b04521d6-eedd-46c2-8e91-959ee741809f' },
  { week: '03', title: 'Term Vocabulary',    slides: infretWeek3, kahoot: 'https://create.kahoot.it/details/f6631349-f63b-4c88-9cc2-c1bf9d140451' },
  { week: '04', title: 'Tolerant Retrieval', slides: infretWeek4, kahoot: 'https://create.kahoot.it/details/87bc0fc2-c901-4fcf-8d6f-9bbae17da58e', note: '(prev. year)' },
  { week: '05', title: 'Index Construction', slides: infretWeek5, kahoot: 'https://create.kahoot.it/share/ex-04-index-construction/89fc6ef7-2262-4924-888d-9549940c0e74' },
  { week: '06', title: 'Index Compression', slides: infretWeek6, kahoot: 'https://create.kahoot.it/share/information-retrieval-index-compression/eab34273-e603-4ba3-a617-2a2130efabdb' },
  { week: '07', title: 'Ranked Retrieval', slides: infretWeek7, kahoot: 'https://create.kahoot.it/share/information-retrieval-ranked-retrieval/4ce4ee62-9d8b-478c-b73f- 8876e8ec77ef' },
  { week: '08', title: 'Vector Space Model', slides: infretWeek8, kahoot: 'https://create.kahoot.it/details/duplicate-of-information-retrieval-ex-07-vector-space-models-mschoeb/d790da6e-9dd4-4191-bdd5-e71a97d32ca3?drawer=' },
  { week: '09', title: 'Champion Lists', slidesText: 'See week 8', kahootText: 'See week 8' }
]

const resources = [
  { label: 'Element Chat',   href: 'http://chat.ethz.ch/' },
  { label: 'Jupyter Server',  href: 'https://student-jupyter.inf.ethz.ch/hub/login' },
  { label: 'Book: "Introduction to Information Retrieval"', href: 'https://nlp.stanford.edu/IR-book/information-retrieval-book.html' },
  { label: 'Past Exams',      href: 'https://exams.vis.ethz.ch/category/InformationRetrieval' },
]

// ── Helpers ─────────────────────────────────────────────

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="section">
      <h2 className="section-title">{title}</h2>
      {children}
    </section>
  )
}

function Code({ children }: { children: React.ReactNode }) {
  return <code className="code-inline">{children}</code>
}

function CodeBlock({ children }: { children: React.ReactNode }) {
  return <code className="code-block">{children}</code>
}

// ── App ─────────────────────────────────────────────────

function App() {
  return (
    <div className="page">
      <div className="content">

        {/* Hero */}
        <div className="hero">
          <p className="hero-pre">Teaching Assistant</p>
          <h1>Severin Mills</h1>
          <p className="subtitle">
            <a href="https://www.vvz.ethz.ch/Vorlesungsverzeichnis/lerneinheit.view?lerneinheitId=198419&semkez=2026S&ansicht=ALLE&lang=de">
              Information Retrieval
            </a>
          </p>
          <p className="meta">Spring 2026 &middot; ETH Z&uuml;rich</p>
        </div>

        {/* Disclaimer */}
        <div className="disclaimer">
          <span className="disclaimer-icon">&#9888;</span>
          <p>
            This is an <strong>unofficial</strong> resource and not affiliated with or endorsed by ETH
            Z&uuml;rich. Slides and other materials may contain mistakes. Always refer to the official
            course materials and lecture slides for authoritative content.
          </p>
        </div>

        {/* Lecture Information */}
        <Section title="Lecture Information">
          <p>
            There are weekly quizzes and Jupyter Notebooks that you may solve as an exercise. I
            would recommend to do the weekly quizzes at least, since they will give you the most
            benefit for the exam.
          </p>
          <p>
            There is an opportunity to receive bonus points, up to 0.25, which will count towards
            your final grade. The bonus consists of three of the weekly quizzes, from which you
            will need to get the required points from two of them, on the dates specified below:
          </p>
          <ul className="info-list">
            <li><span className="bullet">&bull;</span> 13.03 Tolerant Retrieval (Done!)</li>
            <li><span className="bullet">&bull;</span> 27.03 Index Compression</li>
            <li><span className="bullet">&bull;</span> 24.04 Vector Space Model</li>
          </ul>
          <p>
            It is possible to pass the quizzes without solving the Jupyter-Notebook, but I would
            recommend to solve it in the week with the bonuses. The time limit for each quiz is one
            week, you have two attempts.
          </p>
        </Section>

        {/* Schedule */}
        <Section title="Schedule">
          <table className="data-table">
            <tbody>
              <tr className="bordered">
                <td className="bold">Friday</td>
                <td className="mono">10:15 &ndash; 12:00</td>
                <td className="right small">CAB G 11</td>
              </tr>
              <tr>
                <td className="bold">Friday</td>
                <td className="mono">16:15 &ndash; 17:00</td>
                <td className="right small">CAB G 51</td>
              </tr>
            </tbody>
          </table>
          <p className="comment">
            No lectures on 03.04 (Good Friday), 10.04 (Easter), 01.05 (Labour Day)
          </p>
        </Section>

        {/* Contact */}
        <Section title="Contact">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <div className="contact-row">
              <span className="contact-label">Email</span>
              <a href="mailto:smills@ethz.ch">smills@ethz.ch</a>
            </div>
            <div className="contact-row">
              <span className="contact-label">Moodle</span>
              <a href="https://moodle-app2.let.ethz.ch/course/view.php?id=26803">Information Retrieval FS26</a>
            </div>
          </div>
        </Section>

        {/* Exercises */}
        <Section title="Exercises">
          <table className="data-table">
            <thead>
              <tr className="bordered">
                <th style={{ width: '3rem' }}>#</th>
                <th>Topic</th>
                <th className="right">Slides</th>
                <th className="right">Extra</th>
              </tr>
            </thead>
            <tbody>
              {exercises.map((ex, i) => (
                <tr key={ex.week} className={i < exercises.length - 1 ? 'bordered' : ''}>
                  <td className="dim mono">{ex.week}</td>
                  <td>
                    {ex.title}
                    {ex.note && <span className="small"> {ex.note}</span>}
                  </td>
                  <td className="right">{ex.slides ? <a href={ex.slides}>[pdf]</a> : <span className="dim">{ex.slidesText}</span>}</td>
                  <td className="right">{ex.kahoot ? <a href={ex.kahoot}>[kahoot]</a> : <span className="dim">{ex.kahootText}</span>}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Section>

        {/* Questions */}
        <Section title="Questions">
          <details className="question">
            <summary>
              Week 3: Tolerant Retrieval &mdash; Skip List Comparisons
            </summary>
          <p>
            There was a question about calculating the number of comparisons in the intersection
            algorithm with skip lists.
          </p>
          <p className="text-muted">The proposed shortcut was:</p>
          <CodeBlock>(size_of_list) - skipped_elements + all_skip_nodes</CodeBlock>
          <p>
            I don't think this is fully correct since it would fail where the number of failed skip
            checks is not equal to the number of skip pointers - 1.
          </p>
          <p className="text-muted">I propose an alternative, non-verified formula:</p>
          <CodeBlock>
            (baseline comparisons without skips) &minus; (elements skipped by taken skips) + (failed skip checks)
          </CodeBlock>
          <p>I believe this could technically hold, given these assumptions:</p>
          <ol className="num-list">
            <li><span className="num">1.</span> A skip check counts as a comparison.</li>
            <li><span className="num">2.</span> A failed skip check still leads to a direct comparison.</li>
            <li><span className="num">3.</span> Skip pointers exist on only one list.</li>
          </ol>

          <p className="heading-accent" style={{ marginTop: '1.25rem' }}>
            Counterexample to the shortcut formula
          </p>
          <p>
            Consider list 1: <Code>1 &rarr; 2 &rarr; 3 &rarr; 10</Code> with
            skip pointer <Code>1&rarr;10</Code>, and list 2: <Code>0 &rarr; 11</Code>.
          </p>
          <p>The baseline (no skips) is 5 comparisons, with p2 advancing once. With skips:</p>
          <table className="data-table" style={{ marginTop: '0.5rem' }}>
            <thead>
              <tr className="bordered">
                <th>p1</th>
                <th>p2</th>
                <th>Action</th>
                <th className="right">#</th>
              </tr>
            </thead>
            <tbody className="mono">
              <tr className="bordered">
                <td>1</td><td>0</td>
                <td>skip pointer check, fails since 1 &lt; 10. compare p1, p2, increment p2 </td>
                <td className="right">2</td>
              </tr>
              <tr className="bordered">
                <td>1</td><td>11</td>
                <td>skip pointer check, succeeds since 10&lt;11,  jump to 10, skips 2 and 3</td>
                <td className="right">1</td>
              </tr>
              <tr>
                <td>10</td><td>11</td>
                <td>compare 10&lt;11, p1 exhausted</td>
                <td className="right">1</td>
              </tr>
            </tbody>
          </table>
          <p>Total: <strong>4 comparisons</strong>.</p>
          <p className="mono">Correct formula: <Code>5 &minus; 2 + 1 = 4</Code></p>
          <p className="mono">Student formula: <Code>4 &minus; 2 + 1 = 3</Code></p>
          <p className="text-muted" style={{ marginTop: '0.5rem' }}>
            The student formula undercounts the baseline by 1 (p2 advanced once), but the
            skip penalty gap is 0 (1 node, 1 failed check) &mdash; the errors don't cancel.
          </p>
          </details>
        </Section>

        {/* Resources */}
        <Section title="Resources">
          <ul className="resource-list">
            {resources.map((r) => (
              <li key={r.href}>
                <span className="arrow">&rarr;</span>
                <a href={r.href}>{r.label}</a>
              </li>
            ))}
          </ul>
        </Section>

        <div className="footer">Information Retrieval &middot; ETH Z&uuml;rich &middot; 2026</div>
      </div>
    </div>
  )
}

export default App
