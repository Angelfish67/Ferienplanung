import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const steps: string[] = [
  'Ferienwunsch entsteht',
  'Eltern prüfen mögliche Ferienzeiten',
  'Kinder werden nach ihrer Verfügbarkeit gefragt',
  'Kinder prüfen ihre Verfügbarkeit',
  'Kinder geben Rückmeldung',
  'Entscheidung: Sind alle verfügbar?',
  'Eltern reichen Ferienantrag bei der Firma ein',
  'Firma bearbeitet den Ferienantrag',
  'Entscheidung: Ferien bewilligt?',
  'Reisebudget festlegen',
  'Reiseziele vergleichen',
  'Transport auswählen',
  'Unterkunft auswählen',
  'Reiseanfrage an Reisefirma senden',
  'Reisefirma prüft Verfügbarkeit',
  'Entscheidung: Reise verfügbar?',
  'Reise buchen',
  'Buchungsbestätigung erhalten',
  'Prozess endet',
];

const groups = [
  {
    title: 'Führungsprozesse',
    color: 'emerald',
    items: ['Ferienbudget festlegen', 'Ferienzeit bestimmen', 'Reiseziele bewerten', 'Familienplanung koordinieren'],
  },
  {
    title: 'Kernprozesse',
    color: 'blue',
    items: ['Ferienwunsch erfassen', 'Verfügbarkeit abstimmen', 'Ferien beantragen', 'Reise planen', 'Reise anfragen', 'Reise buchen'],
  },
  {
    title: 'Unterstützungsprozesse',
    color: 'orange',
    items: ['Kalenderverwaltung', 'Kommunikation mit Mitreisenden', 'Personalverwaltung der Firma', 'Bearbeitung von Ferienanträgen', 'Buchungssystem der Reisefirma', 'Versand von Buchungsbestätigungen'],
  },
];

const questions = [
  'Wie früh sollte ein Ferienantrag eingereicht werden?',
  'Nach welchen Kriterien bewilligt die Firma Ferien?',
  'Was passiert bei Überschneidungen mit anderen Mitarbeitenden?',
  'Welche Alternativen gibt es bei ausgebuchten Reisen?',
  'Wie stark beeinflusst das Budget die Reiseplanung?',
];

const discussion = [
  'Sollten Ferien nach dem Prinzip «wer zuerst kommt, mahlt zuerst» bewilligt werden?',
  'Ist das Wunschziel wichtiger als der Preis?',
  'Sollte man zuerst Ferien bewilligen lassen oder zuerst eine Reise suchen?',
  'Wie flexibel sollte eine Familie bei der Ferienplanung sein?',
];

const aiUsage = [
  'Formulierung der Prozessbeschreibung',
  'Strukturierung der Inhalte',
  'Erstellung der Prozesslandkarte',
  'Formulierung von Fragen und Diskussionspunkten',
  'Sprachliche Überarbeitung',
];

function App() {
  return (
    <main className="min-h-screen w-full bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.35),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(251,146,60,0.30),transparent_34%),linear-gradient(135deg,#dbeafe_0%,#ffffff_45%,#ffedd5_100%)] p-3 text-slate-900 sm:p-5 lg:p-8">
      <section className="mx-auto w-full max-w-[1500px] overflow-hidden rounded-[2rem] border border-white/70 bg-white/90 p-4 shadow-2xl shadow-blue-950/20 backdrop-blur sm:p-6 lg:p-8">
        <header className="grid gap-6 rounded-[2rem] bg-gradient-to-br from-blue-950 via-blue-700 to-sky-400 p-6 text-white shadow-xl shadow-blue-900/30 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="mb-4 w-fit rounded-full bg-white/90 px-4 py-2 text-[11px] font-black uppercase tracking-[0.18em] text-blue-900 sm:text-xs">
              LB2 – Einen bestehenden Geschäftsprozess beschreiben
            </p>

            <h1 className="max-w-5xl text-4xl font-black leading-[0.95] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
              Geschäftsprozess: Ferienplanung
            </h1>

            <p className="mt-5 max-w-3xl text-base leading-relaxed text-white/90 sm:text-lg">
              Eltern und Kinder planen Ferien mit Firma und Reisefirma als externe Beteiligte.
            </p>
          </div>

          <div className="grid size-28 place-items-center rounded-full bg-white text-center text-sm font-black text-blue-900 shadow-inner shadow-blue-200 sm:size-36">
            <div>
              <div className="text-4xl sm:text-5xl">✈️</div>
              <div>BPMN-Poster</div>
            </div>
          </div>
        </header>

        <section className="mt-6 grid gap-6 xl:grid-cols-[1.35fr_0.65fr]">
          <article className="overflow-hidden rounded-[2rem] bg-gradient-to-br from-slate-950 to-blue-900 text-white shadow-xl shadow-slate-900/20">
            <div className="flex items-center gap-3 border-b border-white/10 bg-white/10 px-5 py-4">
              <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-white text-xl text-blue-900">🖼️</span>
              <h2 className="text-xl font-black">BPMN-Diagramm</h2>
            </div>

            <div className="p-5">
              <div className="grid min-h-[260px] place-items-center rounded-[1.5rem] border-2 border-dashed border-white/30 bg-white/10 p-6 text-center sm:min-h-[360px]">
                <div>
                  <div className="mx-auto mb-4 grid size-20 place-items-center rounded-full bg-white text-4xl text-blue-900 shadow-xl sm:size-24">
                    🖼️
                  </div>
                  <h3 className="text-xl font-black sm:text-2xl">Platzhalter für dein BPMN-Bild</h3>
                  <p className="mx-auto mt-3 max-w-xl leading-relaxed text-white/75">
                    Lege dein Bild später in den Ordner <code className="rounded bg-white/90 px-1.5 py-0.5 text-blue-900">public</code> und ersetze den Platzhalter im Code durch ein <code className="rounded bg-white/90 px-1.5 py-0.5 text-blue-900">&lt;img&gt;</code>.
                  </p>
                </div>
              </div>
            </div>
          </article>

          <article className="overflow-hidden rounded-[2rem] border border-blue-100 bg-white shadow-xl shadow-blue-900/10">
            <div className="flex items-center gap-3 border-b border-slate-100 bg-blue-50 px-5 py-4">
              <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-blue-700 to-sky-400 text-xl text-white">🎯</span>
              <h2 className="text-xl font-black">Ziel</h2>
            </div>

            <div className="flex h-full items-center p-5 text-base leading-relaxed sm:text-lg">
              <p>
                Ich beschreibe den Geschäftsprozess <strong>«Ferienplanung»</strong> aus Sicht einer Familie. Der Prozess zeigt,
                wie Eltern und Kinder gemeinsam Ferien planen, Termine abstimmen, Ferien bewilligen lassen und schliesslich
                eine Reise buchen. Ziel ist es, die wichtigsten Aktivitäten, Entscheidungen und Beteiligten verständlich
                darzustellen.
              </p>
            </div>
          </article>
        </section>

        <section className="mt-6 grid gap-6 xl:grid-cols-[1.05fr_0.85fr_0.9fr]">
          <div className="grid gap-6">
            <article className="overflow-hidden rounded-[2rem] border border-blue-100 bg-white shadow-xl shadow-blue-900/10">
              <div className="flex items-center gap-3 border-b border-slate-100 bg-slate-50 px-5 py-4">
                <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-blue-700 to-sky-400 text-xl text-white">📋</span>
                <h2 className="text-xl font-black">Beschreibung</h2>
              </div>

              <div className="space-y-3 border-l-8 border-blue-600 p-5 leading-relaxed">
                <p>Der Prozess beginnt mit dem Wunsch nach Ferien. Die Eltern prüfen mögliche Ferienzeiten und fragen die Kinder beziehungsweise Mitreisenden nach ihrer Verfügbarkeit.</p>
                <p>Anschliessend prüfen die Kinder ihre Verfügbarkeit und geben eine Rückmeldung. Falls nicht alle Personen verfügbar sind, werden neue Termine gesucht und der Abstimmungsprozess beginnt erneut.</p>
                <p>Sind alle Beteiligten verfügbar, reichen die Eltern bei ihrer Firma einen Ferienantrag ein. Die Firma bearbeitet den Antrag und entscheidet über die Bewilligung der gewünschten Ferien.</p>
                <p>Wird der Antrag abgelehnt, müssen die Eltern neue Termine suchen und den Prozess erneut starten. Wird der Antrag bewilligt, beginnt die eigentliche Reiseplanung.</p>
                <p>Die Eltern legen ein Reisebudget fest, vergleichen verschiedene Reiseziele und wählen ein geeignetes Transportmittel sowie eine passende Unterkunft aus.</p>
                <p>Danach wird eine Reiseanfrage an eine Reisefirma gesendet. Die Reisefirma prüft die Verfügbarkeit der gewünschten Reise. Falls die Reise verfügbar ist, erfolgt die Buchung und eine Bestätigung wird versendet. Ist die Reise nicht verfügbar, wird die Anfrage abgelehnt und die Familie muss ihre Planung anpassen oder eine Alternative suchen.</p>
                <p>Nach erfolgreicher Buchung endet der Prozess.</p>
              </div>
            </article>

            <article className="overflow-hidden rounded-[2rem] border border-emerald-100 bg-white shadow-xl shadow-emerald-900/10">
              <div className="flex items-center gap-3 border-b border-emerald-100 bg-emerald-50 px-5 py-4">
                <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-emerald-700 to-green-400 text-xl text-white">🗺️</span>
                <h2 className="text-xl font-black">Prozesslandkarte</h2>
              </div>

              <div className="grid gap-4 p-5">
                {groups.map((group) => (
                  <section key={group.title} className="rounded-3xl border border-emerald-100 bg-emerald-50/70 p-4">
                    <h3 className="mb-3 text-lg font-black text-emerald-800">{group.title}</h3>
                    <ul className="grid gap-2">
                      {group.items.map((item) => (
                        <li key={item} className="rounded-2xl bg-white px-4 py-2 leading-snug shadow-sm">
                          • {item}
                        </li>
                      ))}
                    </ul>
                  </section>
                ))}
              </div>
            </article>
          </div>

          <article className="overflow-hidden rounded-[2rem] border border-blue-100 bg-white shadow-xl shadow-blue-900/10">
            <div className="flex items-center gap-3 border-b border-slate-100 bg-blue-50 px-5 py-4">
              <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-blue-700 to-sky-400 text-xl text-white">📅</span>
              <h2 className="text-xl font-black">Ablauf</h2>
            </div>

            <ol className="relative grid gap-3 p-5 before:absolute before:bottom-7 before:left-[2.15rem] before:top-7 before:w-1 before:rounded-full before:bg-gradient-to-b before:from-blue-700 before:to-sky-400">
              {steps.map((step, index) => (
                <li key={step} className="relative grid grid-cols-[3rem_1fr] items-center gap-3">
                  <span className="z-10 grid size-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-blue-700 to-sky-400 text-sm font-black text-white shadow-lg shadow-blue-700/20">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <p className="rounded-2xl bg-blue-50 px-4 py-3 leading-snug shadow-sm">{step}</p>
                </li>
              ))}
            </ol>
          </article>

          <div className="grid gap-6">
            <article className="overflow-hidden rounded-[2rem] border border-orange-100 bg-white shadow-xl shadow-orange-900/10">
              <div className="flex items-center gap-3 border-b border-orange-100 bg-orange-50 px-5 py-4">
                <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-orange-600 to-amber-400 text-xl text-white">🧭</span>
                <h2 className="text-xl font-black">Rollen im BPMN</h2>
              </div>

              <div className="grid gap-3 p-5">
                {[
                  ['Eltern', 'planen, fragen an, beantragen Ferien und senden die Reiseanfrage.'],
                  ['Kinder', 'prüfen ihre Verfügbarkeit und geben Rückmeldung.'],
                  ['Firma', 'bearbeitet den Ferienantrag und bewilligt oder lehnt ab.'],
                  ['Reisefirma', 'prüft die Reiseverfügbarkeit, bucht oder lehnt die Reise ab.'],
                ].map(([title, text]) => (
                  <div key={title} className="rounded-3xl border border-orange-100 bg-orange-50/70 p-4">
                    <strong className="block text-orange-800">{title}</strong>
                    <span className="mt-1 block leading-relaxed">{text}</span>
                  </div>
                ))}
              </div>
            </article>

            <article className="overflow-hidden rounded-[2rem] border border-slate-100 bg-white shadow-xl shadow-slate-900/10">
              <div className="flex items-center gap-3 border-b border-slate-100 bg-slate-50 px-5 py-4">
                <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-blue-700 to-sky-400 text-xl text-white">❓</span>
                <h2 className="text-xl font-black">Fragen / offene Punkte</h2>
              </div>

              <ul className="grid gap-2 p-5">
                {questions.map((item) => (
                  <li key={item} className="rounded-2xl bg-slate-50 px-4 py-3 leading-snug">• {item}</li>
                ))}
              </ul>
            </article>

            <article className="overflow-hidden rounded-[2rem] border border-orange-100 bg-white shadow-xl shadow-orange-900/10">
              <div className="flex items-center gap-3 border-b border-orange-100 bg-orange-50 px-5 py-4">
                <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-orange-600 to-amber-400 text-xl text-white">💬</span>
                <h2 className="text-xl font-black">Diskussion</h2>
              </div>

              <ul className="grid gap-2 p-5">
                {discussion.map((item) => (
                  <li key={item} className="rounded-2xl bg-orange-50 px-4 py-3 leading-snug">• {item}</li>
                ))}
              </ul>
            </article>

            <article className="overflow-hidden rounded-[2rem] border border-purple-100 bg-white shadow-xl shadow-purple-900/10">
              <div className="flex items-center gap-3 border-b border-purple-100 bg-purple-50 px-5 py-4">
                <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-purple-700 to-fuchsia-400 text-xl text-white">🤖</span>
                <h2 className="text-xl font-black">KI-Deklaration</h2>
              </div>

              <div className="space-y-3 p-5 leading-relaxed">
                <p>Für die Erstellung dieses Posters wurde ChatGPT als Unterstützung verwendet.</p>
                <p>Die KI wurde eingesetzt für:</p>

                <ul className="grid gap-2">
                  {aiUsage.map((item) => (
                    <li key={item} className="rounded-2xl bg-purple-50 px-4 py-3 leading-snug">• {item}</li>
                  ))}
                </ul>

                <p>Die fachliche Kontrolle, Anpassung und endgültige Gestaltung wurden selbst durchgeführt.</p>
              </div>
            </article>

            <article className="overflow-hidden rounded-[2rem] border border-slate-100 bg-white shadow-xl shadow-slate-900/10">
              <div className="flex items-center gap-3 border-b border-slate-100 bg-slate-50 px-5 py-4">
                <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-blue-700 to-sky-400 text-xl text-white">👤</span>
                <h2 className="text-xl font-black">Angaben</h2>
              </div>

              <div className="grid gap-2 p-5">
                <p className="border-b border-slate-200 pb-2"><strong>Name:</strong> __________________</p>
                <p className="border-b border-slate-200 pb-2"><strong>Klasse:</strong> __________________</p>
                <p className="border-b border-slate-200 pb-2"><strong>Datum:</strong> __________________</p>
                <p className="border-b border-slate-200 pb-2"><strong>Modul:</strong> __________________</p>
              </div>
            </article>
          </div>
        </section>

        <footer className="mt-6 flex flex-wrap justify-center gap-3">
          <span className="rounded-full bg-white px-5 py-3 font-black text-blue-900 shadow-lg shadow-blue-900/10">✨ übersichtlich gestaltet</span>
          <span className="rounded-full bg-white px-5 py-3 font-black text-blue-900 shadow-lg shadow-blue-900/10">✅ passend zum BPMN-Diagramm</span>
        </footer>
      </section>
    </main>
  );
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);