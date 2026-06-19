import { motion } from "framer-motion";
import styles from "./FestivalProgrammePage.module.css";
import { festivalDays, festivalMeta } from "./festivalData";

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

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

function EventCard({ event, lang }) {
  const isAr = lang === "ar";
  return (
    <motion.article
      className={`${styles.eventCard} ${isAr ? styles.eventCardAr : ""}`}
      variants={cardVariants}
    >
      <div className={styles.eventHeader}>
        <span className={styles.timeBadge}>{event.time}</span>
        <h3 className={styles.eventTitle}>{event.title}</h3>
      </div>
      {event.subtitle && (
        <p className={styles.eventSubtitle}>{event.subtitle}</p>
      )}
      {event.moderator && (
        <p className={styles.moderator}>
          <span className={styles.moderatorLabel}>{event.moderator.label} : </span>
          <RichText text={event.moderator.text} />
        </p>
      )}
      {event.sectionLabel && (
        <p className={styles.sectionLabel}>{event.sectionLabel}</p>
      )}
      {event.participants.length > 0 && (
        <ul className={styles.participantList}>
          {event.participants.map((p, i) => (
            <li key={i} className={styles.participantItem}>
              <RichText text={p} />
            </li>
          ))}
        </ul>
      )}
      {event.note && (
        <p className={styles.note}><RichText text={event.note} /></p>
      )}
    </motion.article>
  );
}

function DaySection({ day }) {
  return (
    <motion.section
      id={day.id}
      className={styles.daySection}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      transition={{ staggerChildren: 0.1 }}
    >
      <h2 className={styles.dayTitle}>
        <span lang="fr">{day.label.fr}</span>
        <span className={styles.dayTitleSep} aria-hidden="true">·</span>
        <span lang="ar">{day.label.ar}</span>
      </h2>
      <div className={styles.columns}>
        <div className={styles.col} lang="fr" dir="ltr">
          {day.events.fr.map((event, i) => (
            <EventCard key={i} event={event} lang="fr" />
          ))}
        </div>
        <div className={styles.colDivider} aria-hidden="true" />
        <div className={styles.col} lang="ar" dir="rtl">
          {day.events.ar.map((event, i) => (
            <EventCard key={i} event={event} lang="ar" />
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default function FestivalProgrammePage() {
  return (
    <div className={styles.page}>
      <motion.header
        className={styles.header}
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className={styles.headerInner}>
          <h1 className={styles.headerTitle}>Programme</h1>
          <p className={styles.headerMeta}>{festivalMeta.dates}</p>
        </div>
      </motion.header>

      <main className={styles.main}>
        {festivalDays.map((day) => (
          <DaySection key={day.id} day={day} />
        ))}
      </main>

      <footer className={styles.footer}>
        <p>© 2026 {festivalMeta.organizer} · {festivalMeta.website}</p>
      </footer>
    </div>
  );
}
