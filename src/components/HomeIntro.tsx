/**
 * Educational intro block: explains state, Context API, hooks, and that tasks persist in localStorage.
 * Presentational only; no state or context consumed.
 */
import { BookOpen, Lightbulb } from 'lucide-react'

export function HomeIntro() {
  return (
    <section className="homeIntro">
      <div className="homeIntroCard">
        <div className="homeIntroHeader">
          <BookOpen size={24} strokeWidth={2} className="homeIntroIcon" />
          <h2 className="homeIntroTitle">Learn by doing</h2>
        </div>
        <p className="homeIntroText">
          This is a beginner-friendly React project. You’ll practice <strong>state</strong>,{' '}
          <strong>Context API</strong>, <strong>custom hooks</strong>, and <strong>reusable components</strong>.
          Add tasks below, edit or delete them, and try the theme switcher in the header.
        </p>
        <div className="homeIntroTip">
          <Lightbulb size={18} strokeWidth={2} />
          <span>Tip: Tasks are saved in your browser (localStorage) so they persist after refresh.</span>
        </div>
      </div>
    </section>
  )
}
