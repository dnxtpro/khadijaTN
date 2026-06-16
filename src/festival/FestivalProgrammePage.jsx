/* eslint-disable react/prop-types */
// ─────────────────────────────────────────────────────────────────────────────
// FestivalProgrammePage.jsx
// Página de programa del festival · f-tnana.ma
// Ruta sugerida: /festival-2026
// ─────────────────────────────────────────────────────────────────────────────

import styles from "./FestivalProgrammePage.module.css";
// ← El contenido del programa viene de festivalData.js (derivado de festival-programme.md)
import { festivalDays, festivalMeta } from "./festivalData";

// ─── Helper: renderiza texto con **negrita** inline ──────────────────────────
// Convierte "Texto **Nombre** más texto" en spans con <strong> donde corresponda
function RichText({ text }) {
  if (!text) return null;
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return (
    <>
      {parts.map((part, i) =>
        part.startsWith("**") && part.endsWith("**") ? (
          <strong key={i}>{part.slice(2, -2)}</strong>
        ) : (
          <span key={i}>{part}</span>
        ),
      )}
    </>
  );
}

// ─── Tarjeta de evento ───────────────────────────────────────────────────────
function EventCard({ event }) {
  return (
    <article className={styles.eventCard}>
      {/* Cabecera: badge de hora + título */}
      <div className={styles.eventHeader}>
        <span className={styles.timeBadge} aria-label={`Heure : ${event.time}`}>
          {event.time}
        </span>
        <h3 className={styles.eventTitle}>{event.title}</h3>
      </div>

      {/* Subtítulo temático */}
      {event.subtitle && (
        <p className={styles.eventSubtitle}>{event.subtitle}</p>
      )}

      {/* Animador / presentador */}
      {event.moderator && (
        <p className={styles.moderator}>
          <span className={styles.moderatorLabel}>
            {event.moderator.label} :{" "}
          </span>
          <RichText text={event.moderator.text} />
        </p>
      )}

      {/* Encabezado de lista */}
      {event.sectionLabel && (
        <p className={styles.sectionLabel}>{event.sectionLabel}</p>
      )}

      {/* Lista de participantes */}
      {event.participants.length > 0 && (
        <ul className={styles.participantList} aria-label="Participants">
          {event.participants.map((p, i) => (
            <li key={i} className={styles.participantItem}>
              <RichText text={p} />
            </li>
          ))}
        </ul>
      )}

      {/* Nota libre al pie */}
      {event.note && (
        <p className={styles.note}>
          <RichText text={event.note} />
        </p>
      )}
    </article>
  );
}

// ─── Sección de un día ───────────────────────────────────────────────────────
function DaySection({ day }) {
  return (
    <section
      id={day.id}
      className={styles.daySection}
      aria-labelledby={`title-${day.id}`}
    >
      <div className={styles.daySectionInner}>
        <h2 id={`title-${day.id}`} className={styles.dayTitle}>
          {day.label}
        </h2>
        <div className={styles.eventList}>
          {day.events.map((event) => (
            <EventCard key={`${day.id}-${event.time}`} event={event} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Componente principal ────────────────────────────────────────────────────
export default function FestivalProgrammePage() {
  const scrollToDay = (id) => {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className={styles.page}>
      {/* ── HERO ── */}
      <header className={styles.hero}>
        <div className={styles.heroContent}>
          <p className={styles.heroEdition}>1ère édition</p>
          <h1 className={styles.heroTitle}>
            Programme
            <span className={styles.heroTitleAccent}>
              {" "}
              · Festival culturel et artistique
            </span>
          </h1>
          <p className={styles.heroSubtitle}>
            Femmes et les mondes de la création
          </p>
          <p className={styles.heroDates}>
            <span aria-hidden="true">📅</span> {festivalMeta.dates}
          </p>
        </div>
      </header>

      {/* ── NAVIGATION PAR JOUR (sticky) ── */}
      <nav className={styles.dayNav} aria-label="Aller à un jour du festival">
        {festivalDays.map((day) => (
          <button
            key={day.id}
            className={styles.dayNavBtn}
            onClick={() => scrollToDay(day.id)}
          >
            Aller au {day.shortDate}
          </button>
        ))}
      </nav>

      {/* ── PROGRAMME ── */}
      <main className={styles.main}>
        {/* ← Bloques generados automáticamente desde festivalData.js */}
        {festivalDays.map((day) => (
          <DaySection key={day.id} day={day} />
        ))}

        {/* ── INFORMATIONS PRATIQUES ──
            ← Edita el contenido directamente en festivalData.js → festivalMeta
            o modifica el JSX de abajo si prefieres texto libre */}
        <section className={styles.infoSection} aria-labelledby="info-title">
          <div className={styles.infoInner}>
            <h2 id="info-title" className={styles.infoTitle}>
              Informations pratiques
            </h2>
            <div className={styles.infoGrid}>
              {/* Lieu — ← edita festivalMeta.venue y festivalMeta.city */}
              <div className={styles.infoBlock}>
                <span className={styles.infoIcon} aria-hidden="true">
                  📍
                </span>
                <div>
                  <p className={styles.infoLabel}>Lieu</p>
                  <p className={styles.infoValue}>{festivalMeta.venue}</p>
                  <p className={styles.infoValue}>{festivalMeta.city}</p>
                </div>
              </div>

              {/* Dates */}
              <div className={styles.infoBlock}>
                <span className={styles.infoIcon} aria-hidden="true">
                  📅
                </span>
                <div>
                  <p className={styles.infoLabel}>Dates</p>
                  <p className={styles.infoValue}>{festivalMeta.dates}</p>
                </div>
              </div>

              {/* Organisateur — ← edita festivalMeta.organizer */}
              <div className={styles.infoBlock}>
                <span className={styles.infoIcon} aria-hidden="true">
                  🎨
                </span>
                <div>
                  <p className={styles.infoLabel}>Organisé par</p>
                  <p className={styles.infoValue}>{festivalMeta.organizer}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ── FOOTER ── */}
      <footer className={styles.footer}>
        <p>
          © 2026 {festivalMeta.organizer} · {festivalMeta.website}
        </p>
      </footer>
    </div>
  );
}
