/* eslint-disable react/prop-types */
// ─────────────────────────────────────────────────────────────────────────────
// FestivalProgrammePage.jsx  ·  Bilingual FR / AR  ·  f-tnana.ma
// Ruta: /festival-2026
// ─────────────────────────────────────────────────────────────────────────────

import { motion, AnimatePresence } from "framer-motion";
import styles from "./FestivalProgrammePage.module.css";
import { festivalDays, festivalMeta } from "./festivalData";
import Logo from "../logo";

// ─── Framer Motion variants ───────────────────────────────────────────────────

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
};

const slideFromLeft = {
  hidden: { opacity: 0, x: -36 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

const slideFromRight = {
  hidden: { opacity: 0, x: 36 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

const rowStagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const listItem = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

// ─── Helper: text with **bold** markers ──────────────────────────────────────
function RichText({ text }) {
  if (!text) return null;
  return (
    <>
      {text
        .split(/(\*\*[^*]+\*\*)/g)
        .map((chunk, i) =>
          chunk.startsWith("**") && chunk.endsWith("**") ? (
            <strong key={i}>{chunk.slice(2, -2)}</strong>
          ) : (
            <span key={i}>{chunk}</span>
          ),
        )}
    </>
  );
}

// ─── Single-language event content ───────────────────────────────────────────
function EventContent({ event, isAr }) {
  return (
    <div className={isAr ? styles.arContent : styles.frContent}>
      {/* Time + Title */}
      <div className={styles.eventHeader}>
        <span className={styles.eventTime}>{event.time}</span>
        <h3 className={styles.eventTitle}>{event.title}</h3>
      </div>

      {/* Thematic subtitle */}
      {event.subtitle && (
        <p className={styles.eventSubtitle}>
          <RichText text={event.subtitle} />
        </p>
      )}

      {/* Section heading for participant list */}
      {event.sectionLabel && (
        <p className={styles.sectionLabel}>{event.sectionLabel}</p>
      )}

      {/* Participant list */}
      {event.participants.length > 0 && (
        <motion.ul
          className={styles.participantList}
          variants={rowStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-20px" }}
        >
          {event.participants.map((p, i) => (
            <motion.li
              key={i}
              variants={listItem}
              className={styles.participantItem}
            >
              <RichText text={p} />
            </motion.li>
          ))}
        </motion.ul>
      )}

      {/* Moderator / animator */}
      {event.moderator && (
        <p className={styles.moderator}>
          <span className={styles.moderatorLabel}>
            {event.moderator.label} :{" "}
          </span>
          <RichText text={event.moderator.text} />
        </p>
      )}

      {/* Free-form closing note */}
      {event.note && (
        <p className={styles.note}>
          <RichText text={event.note} />
        </p>
      )}
    </div>
  );
}

// ─── Bilingual event row ──────────────────────────────────────────────────────
function EventRow({ event, idx }) {
  const { fr, ar } = event;
  const arOnly = !fr && !!ar;

  return (
    <motion.div
      className={`${styles.eventRow} ${arOnly ? styles.arOnlyRow : ""}`}
      variants={rowStagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: idx * 0.03 }}
    >
      {/* ── French column ── */}
      <motion.div className={styles.colFr} variants={slideFromLeft}>
        {fr ? (
          <EventContent event={fr} isAr={false} />
        ) : (
          <div className={styles.colEmpty} aria-hidden="true" />
        )}
      </motion.div>

      {/* ── Center divider ── */}
      <div className={styles.colDivider} aria-hidden="true" />

      {/* ── Arabic column ── */}
      <motion.div className={styles.colAr} variants={slideFromRight}>
        {ar ? (
          <EventContent event={ar} isAr={true} />
        ) : (
          <div className={styles.colEmpty} aria-hidden="true" />
        )}
      </motion.div>
    </motion.div>
  );
}

// ─── Day section ─────────────────────────────────────────────────────────────
function DaySection({ day }) {
  return (
    <section
      id={day.id}
      className={styles.daySection}
      aria-labelledby={`lbl-${day.id}`}
    >
      {/* Day header: bilingual full-width band */}
      <motion.div
        className={styles.dayHeader}
        initial={{ opacity: 0, scaleX: 0.96 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <span id={`lbl-${day.id}`} className={styles.dayLabelFr}>
          {day.label}
        </span>
        <span className={styles.dayLabelAr} lang="ar">
          {day.labelAr}
        </span>
      </motion.div>

      {/* Events */}
      <div className={styles.eventList}>
        {day.events.map((event, i) => (
          <EventRow key={i} event={event} idx={i} />
        ))}
      </div>
    </section>
  );
}

// ─── Practical info section ───────────────────────────────────────────────────
function InfoSection() {
  return (
    <motion.section
      className={styles.infoSection}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className={styles.infoGrid}>
        {/* Lieu — ← edit festivalMeta.venue / city */}
        <div className={styles.infoBlock}>
          <span className={styles.infoIcon}>📍</span>
          <div>
            <p className={styles.infoLabel}>Lieu · المكان</p>
            <p className={styles.infoValue}>{festivalMeta.venueFr}</p>
            <p className={styles.infoValue}>{festivalMeta.cityFr}</p>
            <p className={`${styles.infoValue} ${styles.infoValueAr}`} lang="ar">
              {festivalMeta.venue}
            </p>
            <p className={`${styles.infoValue} ${styles.infoValueAr}`} lang="ar">
              {festivalMeta.city}
            </p>

          </div>
        </div>
        {/* Dates */}
        <div className={styles.infoBlock}>
          <span className={styles.infoIcon}>📅</span>
          <div>
            <p className={styles.infoLabel}>Dates · التواريخ</p>
            <p className={styles.infoValue}>{festivalMeta.dates}</p>
            <p
              className={`${styles.infoValue} ${styles.infoValueAr}`}
              lang="ar"
            >
              {festivalMeta.datesAr}
            </p>
          </div>
        </div>
        {/* Organiser — ← edit festivalMeta.organizer / organizerAr */}
        <div className={styles.infoBlock}>
          <span className={styles.infoIcon}>🎨</span>
          <div>
            <p className={styles.infoLabel}>Organisé par</p>
            <p className={styles.infoValue}>{festivalMeta.organizer}</p>
            <p
              className={`${styles.infoValue} ${styles.infoValueAr}`}
              lang="ar"
            >
              {festivalMeta.organizerAr}
            </p>
          </div>
        </div>
      </div>
      <div className={styles.mapWrapper}>
        <iframe
          src="https://maps.google.com/maps?q=35.755872,-5.362629&z=16&output=embed"
          className={styles.mapIframe}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Emplacement du festival · موقع المهرجان"
        />
      </div>
    </motion.section>
  );
}

// ─── Main page ────────────────────────────────────────────────────────────────
export default function FestivalProgrammePage() {
  const scrollToDay = (id) => {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className={styles.page}>
      {/* ── Compact header ── */}
      <motion.header
        className={styles.header}
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Logo — esquina derecha */}
        <motion.div
          className={styles.headerLogo}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          aria-hidden="true"
        >
          <Logo color="#b3e0f5" height={52} width="auto" />
        </motion.div>

        <div className={styles.headerInner}>
          <h1 className={styles.headerTitle}>
            <span className={styles.titleAr} lang="ar">
              برنامج
            </span>
            <span className={styles.titleDot} aria-hidden="true">
              ·
            </span>
            <span className={styles.titleFr}>Programme</span>
          </h1>
          <p className={styles.headerSub}>
            <span className={styles.headerSubFr}>
              {festivalMeta.themeFr}
            </span>
            <span className={styles.headerSubSep} aria-hidden="true">
              {" "}
              ·{" "}
            </span>
            <span className={styles.headerSubAr} lang="ar">
              {festivalMeta.themeAr}
            </span>
          </p>
          <p className={styles.headerEdition}>
            <span lang="ar">الدورة {festivalMeta.edition}</span>
            <span aria-hidden="true"> · </span>
            <span>Édition n°{festivalMeta.edition}</span>
          </p>
          <p className={styles.headerField}>
            <span lang="ar">حقل: {festivalMeta.fieldAr}</span>
            <span aria-hidden="true"> · </span>
            <span>Champ : {festivalMeta.fieldFr}</span>
          </p>
          <p className={styles.headerDates}>
            <span lang="ar">{festivalMeta.datesAr}</span>
            <span aria-hidden="true"> · </span>
            <span>{festivalMeta.dates}</span>
          </p>
        </div>
      </motion.header>

      {/* ── Day navigation ── */}
      <motion.nav
        className={styles.dayNav}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.25 }}
        aria-label="Aller à un jour"
      >
        {festivalDays.map((day) => (
          <button
            key={day.id}
            className={styles.dayNavBtn}
            onClick={() => scrollToDay(day.id)}
          >
            <span>{day.shortDate}</span>
            <span className={styles.navSep} aria-hidden="true">
              {" "}
              ·{" "}
            </span>
            <span className={styles.navAr} lang="ar">
              {day.shortDateAr}
            </span>
          </button>
        ))}
      </motion.nav>

      {/* ── Column labels ── */}
      <motion.div
        className={styles.colLabels}
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.4 }}
      >
        <span className={styles.colLabelFr}>Français</span>
        <span className={styles.colLabelAr} lang="ar">
          عربي
        </span>
      </motion.div>

      {/* ── Programme ── */}
      <main className={styles.main}>
        <AnimatePresence>
          {festivalDays.map((day) => (
            <DaySection key={day.id} day={day} />
          ))}
        </AnimatePresence>

        <InfoSection />
      </main>

      {/* ── Footer ── */}
      <footer className={styles.footer}>
        <p>{festivalMeta.website} · © 2026</p>
      </footer>
    </div>
  );
}
