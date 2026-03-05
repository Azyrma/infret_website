import './App.css'
import infretWeek1 from './assets/infret_week1.pdf'
import infretWeek2 from './assets/infret_week2.pdf'

function App() {
  return (
    <main>
      {/* Hero */}
      <section className="hero">
        <div className="avatar-placeholder">SM</div>
        <h1>Severin Mills</h1>
        <p className="role"><a href="https://www.vvz.ethz.ch/Vorlesungsverzeichnis/lerneinheit.view?lerneinheitId=198419&semkez=2026S&ansicht=ALLE&lang=de">Information Retrieval</a></p>
        <p className="semester">Spring 2026 · ETH Zürich</p>
      </section>

      {/* About
      <section className="card">
        <h2>About Me</h2>
        <p>
          Hi! I'm a third-year Bachelor's student in Computer Science. Currently working as a TA in Information Retrieval
        </p>
      </section> */}

      {/* Lecture */}
      <section className="card">
        <h2>Lecture Information</h2>
        <p>
          There are weekly quizzes and Jupyter Notebooks that you may solve as an exercise. I would recommend to do the weekly quizzes at least, since they will give you the most benefit for the exam. 
        </p>
        <br></br>
        <p>
          There is an opportunity to receive bonus points, up to 0.25, which will count towards your final grade. The bonus consists of three of the weekly quizzes, from which you will need to get the required points from two of them, on the dates specified below:
          <ul>
            <li> 13.03 Tolerant Retrieval </li>
            <li> 27.03 Index Compression </li>
            <li> 24.04 Vector Space Model </li>
          </ul>
          

          It is possible to pass the quizzes without solving the Jupyter-Notebook, but I would recommend to solve it in the week with the bonuses. The time limit for each quiz is one week, you have two attempts.
        </p>
      </section>

      {/* Office Hours */}
      <section className="card">
        <h2>Lecture & Exercises</h2>
        <table>
          <tbody>
            <tr>
              <td className="day">Friday</td>
              <td>10:15 – 12:00</td>
              <td className="location">CAB G 11</td>
            </tr>
            <tr>
              <td className="day">Friday</td>
              <td>16:15 – 17:00</td>
              <td className="location">CAB G 51</td>
            </tr>
          </tbody>
        </table>
        <p className="note">No lectures or exercises on 03. April (Good Friday), 10. April (Easter Holiday) and 01. May (Labour Day).</p>
      </section>

      {/* Contact */}
      <section className="card">
        <h2>Contact</h2>
        <ul className="contact-list">
          <li>
            <span className="label">Email</span>
            <a href="mailto:smills@ethz.ch">smills@ethz.ch</a>
          </li>
          <li>
            <span className="label">Moodle</span>
            <a href="https://moodle-app2.let.ethz.ch/course/view.php?id=26803">Information Retrieval FS26</a>
          </li>
        </ul>
      </section>

      {/* Exercises */}
      <section className="card">
        <h2>Exercises</h2>
        <table className="exercises-table">
          <thead>
            <tr>
              <th>Week</th>
              <th>Title</th>
              <th>Slides</th>
              <th>Extra</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Introduction</td>
              <td><a href={infretWeek1}>Slides</a></td>
              <td><a href={"https://create.kahoot.it/share/information-retrieval-introduction/4e5bc650-e58a-402b-9a63-55bd99ed6496"}>Kahoot</a></td>
            </tr>
            <tr>
              <td>2</td>
              <td>Boolean Retrieval</td>
              <td><a href={infretWeek2}>Slides</a></td>
              <td><a href={"https://create.kahoot.it/share/ir-week-ii-boolean-retrieval/b04521d6-eedd-46c2-8e91-959ee741809f"}>Kahoot</a></td>
            </tr>
            <tr>
              <td>3</td>
              <td>Term Vocabulary</td>
              <td>—</td>
              <td>—</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Resources */}
      <section className="card">
        <h2>Resources</h2>
        <ul className="resource-list">
          <li><a href="http://chat.ethz.ch/">Element Chat</a></li>
          <li><a href="https://student-jupyter.inf.ethz.ch/hub/login">Jupyter Server</a></li>
          <li><a href="https://nlp.stanford.edu/IR-book/information-retrieval-book.html">Book: "Introduction to Information Retrieval"</a></li>
          <li><a href="https://exams.vis.ethz.ch/category/InformationRetrieval">Past Exams</a></li>
        </ul>
      </section>
    </main>
  )
}

export default App
