import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const steps = [
  'Der Ferienwunsch entsteht in der Familie.',
  'Die Eltern prüfen, welche Ferienzeit möglich wäre.',
  'Die Eltern fragen die Kinder (Mitreisenden) nach ihrer Verfügbarkeit.',
  'Die Kinder prüfen ihre Termine und geben eine Rückmeldung.',
  'Wenn nicht alle verfügbar sind, wird ein neuer Zeitraum gesucht.',
  'Wenn alle verfügbar sind, fragen die Eltern bei der Firma Ferien an.',
  'Die Firma bearbeitet die Anfrage und sendet eine Antwort zurück.',
  'Wenn die Ferien nicht bewilligt werden, beginnt die Terminplanung erneut.',
  'Wenn die Ferien bewilligt werden, legen die Eltern das Reisebudget fest.',
  'Die Eltern vergleichen Reiseziele.',
  'Transport und Unterkunft werden ausgewählt.',
  'Die Eltern senden eine Reiseanfrage an die Reisefirma.',
  'Die Reisefirma prüft die Verfügbarkeit.',
  'Wenn die Reise verfügbar ist, wird sie gebucht.',
  'Wenn die Reise nicht verfügbar ist, muss eine neue Anfrage gestellt werden.',
  'Am Ende sind die Ferien gebucht.',
];

const flowText = [
  `Der Prozess beginnt damit, dass in der Familie der Wunsch entsteht, gemeinsam Ferien zu machen. Die Eltern übernehmen zuerst die Planung und überlegen, welcher Zeitraum grundsätzlich möglich wäre. Dabei müssen sie berücksichtigen, wann Schulferien sind, wann die Familie frei hat und welcher Zeitraum für alle Beteiligten sinnvoll wäre.`,

  `Nachdem ein möglicher Zeitraum gefunden wurde, fragen die Eltern die Kinder (Mitreisenden) nach ihrer Verfügbarkeit. Die Kinder prüfen ihre eigenen Termine, zum Beispiel Schule, Prüfungen, Hobbies oder andere Verpflichtungen. Danach geben sie den Eltern eine Rückmeldung, ob sie in diesem Zeitraum mitreisen können.`,

  `Falls nicht alle Personen verfügbar sind, kann die Ferienplanung nicht direkt weitergeführt werden. In diesem Fall suchen die Eltern einen neuen Zeitraum und fragen die Kinder erneut an. Dadurch entsteht eine Wiederholung im Prozess, weil die Terminabstimmung so lange angepasst wird, bis ein passender Zeitraum gefunden wurde.`,

  `Wenn alle Beteiligten verfügbar sind, stellen die Eltern bei der Firma einen Ferienantrag. Die Firma prüft, ob die Ferien in diesem Zeitraum bewilligt werden können. Dabei kann zum Beispiel eine Rolle spielen, ob genügend Personal vorhanden ist oder ob bereits andere Mitarbeitende Ferien eingetragen haben.`,

  `Lehnt die Firma den Ferienantrag ab, muss die Familie wieder zurück zur Terminplanung. Die Eltern suchen dann einen neuen Zeitraum und stimmen diesen erneut mit den Kindern ab. Wird der Antrag jedoch bewilligt, kann die Familie mit der konkreten Reiseplanung beginnen.`,

  `Nach der Bewilligung legen die Eltern ein Budget fest. Anschliessend vergleichen sie verschiedene Reiseziele und überlegen, welche Art von Ferien zur Familie passt. Danach wählen sie Transport und Unterkunft aus, zum Beispiel Zug, Flug, Auto, Hotel, Ferienwohnung oder Campingplatz.`,

  `Sobald eine passende Reise gefunden wurde, senden die Eltern eine Reiseanfrage an die Reisefirma. Die Reisefirma prüft, ob die gewünschte Reise noch verfügbar ist. Wenn die Reise nicht verfügbar ist, muss eine neue Anfrage gestellt werden.`,

  `Wenn die Reise verfügbar ist, wird sie gebucht. Danach erhält die Familie eine Buchungsbestätigung. Der Prozess endet, sobald die Ferien bewilligt und die Reise erfolgreich gebucht wurden.`,
];

const roles = [
  {
    title: 'Eltern',
    text: 'Die Eltern übernehmen die Hauptplanung. Sie prüfen mögliche Ferienzeiten, fragen die Kinder nach ihrer Verfügbarkeit, stellen den Ferienantrag bei der Firma und schicken später die Reiseanfrage an die Reisefirma.',
  },
  {
    title: 'Kinder',
    text: 'Die Kinder prüfen, ob sie in der gewünschten Zeit verfügbar sind. Danach geben sie den Eltern eine Rückmeldung, damit die Planung weitergeführt oder angepasst werden kann.',
  },
  {
    title: 'Firma',
    text: 'Die Firma erhält den Ferienantrag, prüft ihn und sendet eine Antwort zurück. Dadurch entscheidet sich, ob die Familie mit der Reiseplanung weitermachen kann.',
  },
  {
    title: 'Reisefirma',
    text: 'Die Reisefirma erhält die Reiseanfrage, prüft die Verfügbarkeit und sendet entweder eine Bestätigung oder eine Ablehnung zurück.',
  },
];

const processMap = [
  {
    title: 'Führungsprozesse',
    items: [
      'Ferienzeit bestimmen',
      'Reisebudget festlegen',
      'Reiseziele bewerten',
      'Familienplanung koordinieren',
    ],
  },
  {
    title: 'Kernprozesse',
    items: [
      'Ferienwunsch erfassen',
      'Verfügbarkeit der Mitreisenden prüfen',
      'Ferien bei der Firma beantragen',
      'Reise planen',
      'Reiseanfrage senden/buchen',
    ],
  },
  {
    title: 'Unterstützungsprozesse',
    items: [
      'Kalender prüfen',
      'Mitreisende kontaktieren',
      'Ferienantrag bearbeiten (Firma)',
      'Reiseverfügbarkeit prüfen (Reisefirma)',
      'Buchungsbestätigung versenden (Reisefirma)',
    ],
  },
];

const questions = [
  'Wie früh sollte man Ferien bei der Firma anfragen?',
  'Was passiert, wenn nicht alle Mitreisenden verfügbar sind, zum Beispiel wegen verschiedenen Schulferien?',
  'Sollte man zuerst Ferien bewilligen lassen oder zuerst eine Reise suchen?',
  'Was macht die Familie, wenn die gewünschte Reise nicht verfügbar ist?',
];

const journal = [
  {
    date: '13. Mai 2026',
    text: 'Ich habe das Thema Ferienplanung ausgewählt und erste Informationen gesammelt. Danach habe ich überlegt, welche Personen am Prozess beteiligt sind und welche Schritte ungefähr vorkommen.',
  },
  {
    date: '20. Mai 2026',
    text: 'Ich habe das BPMN-Diagramm erstellt. Dabei habe ich Pools, Lanes, Aktivitäten, Gateways und Nachrichtenflüsse eingebaut. Anschliessend habe ich den Ablauf mehrmals überprüft und verbessert.',
  },
  {
    date: '02. Juni 2026',
    text: 'Ich habe das Diagramm finalisiert, die Webseite gestaltet und die Texte überarbeitet. Zusätzlich habe ich die Prozesslandkarte, die Reflexion, das Arbeitsjournal und die KI-Deklaration ergänzt.',
  },
];

function App() {
  const [viewMode, setViewMode] = useState<'text' | 'steps'>('text');

  return (
    <main className="min-h-screen bg-[#f5f7fb] text-slate-900">
      <section className="w-full border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-[1800px] px-6 py-12 sm:px-10 lg:px-16">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-blue-700">
            BPMN Geschäftsprozess
          </p>

          <div className="grid gap-8 lg:grid-cols-[1fr_420px] lg:items-end">
            <div>
              <h1 className="text-5xl font-black tracking-[-0.05em] text-slate-950 sm:text-7xl">
                Ferienplanung
              </h1>

              <p className="mt-5 max-w-4xl text-xl leading-9 text-slate-600">
                Diese Webseite dokumentiert meinen BPMN-Prozess zur Ferienplanung. Der Ablauf zeigt, wie eine Familie
                gemeinsam Ferien plant, Verfügbarkeiten prüft, Ferien bei der Firma anfragt und am Ende eine Reise bucht.
              </p>
            </div>

            <div className="rounded-3xl bg-blue-700 p-6 text-white shadow-xl">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-100">Projekt</p>
              <p className="mt-2 text-2xl font-black">Modul 254</p>
              <p className="mt-2 text-blue-100">Geschäftsprozess mit BPMN darstellen</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1800px] px-6 py-10 sm:px-10 lg:px-16">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-4 shadow-xl shadow-slate-200/70">
          <div className="overflow-x-auto rounded-[1.5rem] bg-slate-50">
            <img
              src="./image.png"
              alt="BPMN Diagramm Ferienplanung"
              className="max-w-none rounded-[1.5rem]"
              style={{ minWidth: '2200px' }}
            />
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1800px] gap-8 px-6 pb-10 sm:px-10 lg:grid-cols-[0.85fr_1.15fr] lg:px-16">
        <article className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-lg">
          <h2 className="text-3xl font-black text-slate-950">Zielsetzung</h2>

          <p className="mt-5 text-lg leading-8 text-slate-700">
            Ich habe den Geschäftsprozess «Ferienplanung» gewählt, weil ich diesen Ablauf aus dem Alltag kenne und er
            mehrere beteiligte Personen, Entscheidungen und Wiederholungen enthält.
          </p>

          <p className="mt-4 text-lg leading-8 text-slate-700">
            Ziel dieser Arbeit ist es, den Ablauf der Ferienplanung verständlich zu dokumentieren und die wichtigsten
            Aktivitäten, Rollen, Entscheidungen und Nachrichtenflüsse mit BPMN darzustellen.
          </p>

          <p className="mt-4 text-lg leading-8 text-slate-700">
            Der Prozess eignet sich gut für BPMN, weil verschiedene Beteiligte zusammenarbeiten und mehrere Situationen
            auftreten können, in denen der Ablauf zurückspringen oder angepasst werden muss.
          </p>
        </article>

        <article className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-lg">
          <h2 className="text-3xl font-black text-slate-950">Beschreibung</h2>

          <div className="mt-5 space-y-4 text-lg leading-8 text-slate-700">
            <p>
              Am Anfang entsteht in der Familie der Wunsch, Ferien zu machen. Die Eltern überlegen zuerst, welche
              Ferienzeit passen könnte. Danach fragen sie die Kinder und andere Mitreisende, ob sie in dieser Zeit
              verfügbar sind.
            </p>

            <p>
              Die Kinder prüfen ihre Termine und geben den Eltern eine Rückmeldung. Wenn nicht alle Zeit haben, müssen
              die Eltern einen neuen Zeitraum suchen. Wenn alle verfügbar sind, wird bei der Firma ein Ferienantrag
              gestellt.
            </p>

            <p>
              Die Firma prüft diesen Antrag und sendet eine Antwort zurück. Wenn der Antrag abgelehnt wird, beginnt die
              Planung erneut. Wenn die Ferien bewilligt werden, kann die Familie mit der konkreten Reiseplanung starten.
            </p>

            <p>
              Danach legen die Eltern ein Budget fest, vergleichen Reiseziele, wählen Transport und Unterkunft aus und
              senden eine Anfrage an die Reisefirma. Die Reisefirma prüft die Verfügbarkeit. Wenn alles passt, wird die
              Reise gebucht und die Familie erhält eine Bestätigung. Wenn die Reise nicht verfügbar ist, muss eine neue
              Anfrage gestellt werden.
            </p>
          </div>
        </article>
      </section>

      <section className="mx-auto max-w-[1800px] px-6 pb-10 sm:px-10 lg:px-16">
        <article className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-lg">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-700">
                Ablauf
              </p>
              <h2 className="mt-2 text-4xl font-black text-slate-950">
                Ablauf der Ferienplanung
              </h2>
              <p className="mt-3 max-w-3xl text-lg leading-8 text-slate-600">
                Hier kann zwischen einer ausführlichen Beschreibung als Fliesstext und einer übersichtlichen Schrittfolge
                gewechselt werden.
              </p>
            </div>

            <div className="flex rounded-2xl bg-slate-100 p-1">
              <button
                type="button"
                onClick={() => setViewMode('text')}
                className={`rounded-xl px-5 py-3 text-sm font-black transition ${
                  viewMode === 'text'
                    ? 'bg-blue-700 text-white shadow-md'
                    : 'text-slate-600 hover:bg-white hover:text-slate-950'
                }`}
              >
                Fliesstext
              </button>

              <button
                type="button"
                onClick={() => setViewMode('steps')}
                className={`rounded-xl px-5 py-3 text-sm font-black transition ${
                  viewMode === 'steps'
                    ? 'bg-blue-700 text-white shadow-md'
                    : 'text-slate-600 hover:bg-white hover:text-slate-950'
                }`}
              >
                Steps
              </button>
            </div>
          </div>

          {viewMode === 'text' ? (
            <div className="mt-8 rounded-[1.5rem] border border-slate-200 bg-slate-50 p-7">
              <div className="space-y-5 text-lg leading-9 text-slate-700">
                {flowText.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          ) : (
            <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {steps.map((step, index) => (
                <div key={step} className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                  <div className="mb-4 grid size-11 place-items-center rounded-2xl bg-blue-700 font-black text-white">
                    {index + 1}
                  </div>
                  <p className="leading-7 text-slate-700">{step}</p>
                </div>
              ))}
            </div>
          )}
        </article>
      </section>

      <section className="mx-auto grid max-w-[1800px] gap-8 px-6 pb-10 sm:px-10 lg:grid-cols-2 lg:px-16">
        <article className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-lg">
          <h2 className="text-3xl font-black text-slate-950">Beteiligte Rollen</h2>

          <p className="mt-4 text-lg leading-8 text-slate-600">
            Im Diagramm sind die Aufgaben auf verschiedene Beteiligte verteilt. So sieht man klar, wer für welchen Teil
            des Prozesses verantwortlich ist.
          </p>

          <div className="mt-7 grid gap-4 sm:grid-cols-2">
            {roles.map((role) => (
              <div key={role.title} className="rounded-3xl bg-slate-50 p-5">
                <h3 className="text-xl font-black text-blue-800">{role.title}</h3>
                <p className="mt-3 leading-7 text-slate-700">{role.text}</p>
              </div>
            ))}
          </div>
        </article>

        <article className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-lg">
          <h2 className="text-3xl font-black text-slate-950">Offene Fragen</h2>

          <p className="mt-4 text-lg leading-8 text-slate-600">
            Bei der Modellierung sind ein paar Fragen entstanden, weil ein Prozess in der Realität nicht immer genau
            gleich abläuft.
          </p>

          <ul className="mt-7 grid gap-3">
            {questions.map((question) => (
              <li key={question} className="rounded-2xl bg-blue-50 px-5 py-4 leading-7 text-slate-800">
                {question}
              </li>
            ))}
          </ul>
        </article>
      </section>

      <section className="mx-auto max-w-[1800px] px-6 pb-10 sm:px-10 lg:px-16">
        <article className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-lg">
          <h2 className="text-3xl font-black text-slate-950">Prozesslandkarte</h2>

          <p className="mt-4 max-w-4xl text-lg leading-8 text-slate-600">
            Zur Ferienplanung gehören nicht nur einzelne Arbeitsschritte, sondern verschiedene Arten von Prozessen.
            Diese lassen sich in Führungsprozesse, Kernprozesse und Unterstützungsprozesse einteilen.
          </p>

          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {processMap.map((section) => (
              <div key={section.title} className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                <h3 className="text-2xl font-black text-slate-950">{section.title}</h3>

                <ul className="mt-5 grid gap-3">
                  {section.items.map((item) => (
                    <li key={item} className="rounded-2xl bg-white px-4 py-3 text-slate-700 shadow-sm">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </article>
      </section>

      <section className="mx-auto grid max-w-[1800px] gap-8 px-6 pb-10 sm:px-10 lg:grid-cols-[1.15fr_0.85fr] lg:px-16">
        <article className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-lg">
          <h2 className="text-3xl font-black text-slate-950">Lernschritte & Reflexion</h2>

          <div className="mt-5 space-y-4 text-lg leading-8 text-slate-700">
            <p>
              Für dieses Projekt habe ich zuerst ein geeignetes Thema gesucht. Ich habe mich für die Ferienplanung
              entschieden, weil dabei mehrere Personen beteiligt sind und verschiedene Entscheidungen getroffen werden
              müssen.
            </p>

            <p>
              Danach habe ich den gesamten Ablauf analysiert und die einzelnen Schritte notiert. Anschliessend habe ich
              die beteiligten Rollen bestimmt und entschieden, welche Aktivitäten in welche Lane gehören.
            </p>

            <p>
              Beim Erstellen des BPMN-Diagramms musste ich mich besonders mit Gateways, Nachrichtenflüssen und
              Wiederholungen beschäftigen. Mehrmals habe ich den Prozess angepasst und verbessert, bis die Abläufe logisch
              und fachlich korrekt waren.
            </p>

            <p>
              Während der Arbeit habe ich gelernt, wie Geschäftsprozesse strukturiert dargestellt werden und wie BPMN
              verwendet wird, um komplexe Abläufe übersichtlich darzustellen.
            </p>

            <p>
              Mit meinem Ergebnis bin ich zufrieden. Das BPMN-Diagramm bildet den Ablauf der Ferienplanung vollständig ab
              und enthält die geforderten Entscheidungen, Wiederholungen und Nachrichtenflüsse. Besonders gelungen finde
              ich die klare Trennung der Rollen durch Pools und Lanes.
            </p>

            <p>
              Rückblickend hätte ich im BPMN noch verschiedene Farben benutzen können, jedoch gab es dies im Camunda
              Modeler nicht.
            </p>
          </div>
        </article>

        <article className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-lg">
          <h2 className="text-3xl font-black text-slate-950">Arbeitsjournal</h2>

          <div className="mt-6 space-y-5">
            {journal.map((entry) => (
              <div key={entry.date} className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                <p className="font-black text-blue-700">{entry.date}</p>
                <p className="mt-2 leading-7 text-slate-700">{entry.text}</p>
              </div>
            ))}
          </div>
        </article>
      </section>

      <section className="mx-auto grid max-w-[1800px] gap-8 px-6 pb-14 sm:px-10 lg:grid-cols-2 lg:px-16">
        <article className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-lg">
          <h2 className="text-3xl font-black text-slate-950">Diskussionspunkte</h2>

          <div className="mt-5 space-y-4 text-lg leading-8 text-slate-700">
            <p>
              Ein wichtiger Diskussionspunkt ist, ob man zuerst die Ferien bei der Firma bewilligen lassen oder zuerst
              eine Reise suchen sollte. In meinem Prozess wird zuerst die Bewilligung eingeholt. Das ist sinnvoll, weil
              man so keine Reise plant, die später wegen der Arbeit gar nicht möglich wäre.
            </p>

            <p>
              Ein weiterer Punkt ist die Frage, wie flexibel eine Familie bei der Ferienplanung sein muss. Wenn die Reise
              nicht verfügbar ist, kann sie entweder eine neue Anfrage stellen oder ein anderes Reiseziel auswählen.
            </p>

            <p>
              Zusätzlich kann diskutiert werden, ob Ferien nach dem Prinzip «Wer zuerst kommt, mahlt zuerst» bewilligt
              werden sollten oder ob andere Kriterien wichtiger sind.
            </p>
          </div>
        </article>

        <article className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-lg">
          <h2 className="text-3xl font-black text-slate-950">KI-Deklaration & Angaben</h2>

          <p className="mt-5 text-lg leading-8 text-slate-700">
            Für die Gestaltung und sprachliche Verbesserung dieser Webseite wurde ChatGPT als Unterstützung verwendet.
            Die Inhalte wurden kontrolliert, angepasst und auf mein BPMN-Diagramm abgestimmt.
          </p>

          <p className="mt-4 text-lg leading-8 text-slate-700">
            Die fachliche Kontrolle, die endgültige Auswahl der Inhalte und die finale Abgabe wurden selbst durchgeführt.
          </p>

          <div className="mt-7 rounded-3xl bg-slate-50 p-5">
            <p>
              <strong>Name:</strong> Samira Tesan
            </p>
            <p className="mt-2">
              <strong>Klasse:</strong> INA24-28a
            </p>
            <p className="mt-2">
              <strong>Modul:</strong> BPMN Modellierung – 254
            </p>
            <p className="mt-2">
              <strong>Datum:</strong> 02.06.2026
            </p>
          </div>
        </article>
      </section>
    </main>
  );
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);