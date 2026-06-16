// ─────────────────────────────────────────────────────────────────────────────
// festivalData.js
// Contenido derivado de festival-programme.md
// ← Para actualizar el programa, edita los arrays de cada día aquí.
// ─────────────────────────────────────────────────────────────────────────────

/**
 * @typedef {Object} Moderator
 * @property {string} label  - Etiqueta visible (p.ej. "Animation", "Présentation")
 * @property {string} text   - Texto enriquecido, puede contener **Nombre** para negrita
 */

/**
 * @typedef {Object} FestivalEvent
 * @property {string}         time          - Hora del evento, p.ej. "16h00"
 * @property {string}         title         - Título principal del evento
 * @property {string|null}    subtitle      - Subtítulo temático (opcional)
 * @property {Moderator|null} moderator     - Animador / presentador del evento
 * @property {string|null}    sectionLabel  - Encabezado de la lista de participantes
 * @property {string[]}       participants  - Items de la lista como texto enriquecido (**bold**)
 * @property {string|null}    note          - Nota libre al pie del evento
 */

/**
 * @typedef {Object} FestivalDay
 * @property {string}          id        - Anchor HTML para scroll interno
 * @property {string}          label     - Título completo de la sección del día
 * @property {string}          shortDate - Fecha corta para el botón de navegación
 * @property {FestivalEvent[]} events    - Lista de eventos ordenados por hora
 */

// ─── PROGRAMME ───────────────────────────────────────────────────────────────
// ← Fuente: festival-programme.md

/** @type {FestivalDay[]} */
export const festivalDays = [
  // ── PREMIER JOUR : 26 JUIN ──────────────────────────────────────────────
  {
    id: "jour-1",
    label: "Premier jour : 26 juin",
    shortDate: "26 juin",
    events: [
      {
        time: "16h00",
        title: "Vernissage de l'exposition d'arts plastiques",
        subtitle: null,
        moderator: {
          label: "Présentation",
          text: "**Fatima Zahra Sghier** et **Dalida BenSafaj**",
        },
        sectionLabel: "Artistes exposantes :",
        participants: [
          "Amina Rizki / Rim Laâbi",
          "Narjis Jabbari / Khadija Tnana",
          "Hajar Moussa / Chadine Hayoun",
        ],
        note: null,
      },
      {
        time: "17h30",
        title: "Cérémonie d'ouverture",
        subtitle: null,
        moderator: {
          label: "Animation",
          text: "**Fatima Zahra Sghier**",
        },
        sectionLabel: null,
        participants: [
          "Mot d'ouverture de la présidente de la Fondation",
          "Hommage à la réalisatrice **Farida Belyazid**",
          "Témoignage par le poète/journaliste **Abdellatif Ben Yahya**",
        ],
        note: null,
      },
      {
        time: "18h30",
        title: "Rencontre",
        subtitle:
          "Les univers créatifs de femmes artistes issues de différents domaines",
        moderator: {
          label: "Animation",
          text: "**Fatima Zahra Sghier**",
        },
        sectionLabel: "Intervenantes :",
        participants: [
          "**Rabia Rihane** : l'écriture",
          "**Mariam Tamsamani** : la poésie haïku",
          "**Naïma Zitan** : la mise en scène théâtrale",
          "**Touriya Al-Hadraoui** : le chant du Malhoun",
          "**Dania Achour** : la réalisation cinématographique",
        ],
        note: null,
      },
      {
        time: "19h30",
        title: "Lectures poétiques",
        subtitle: null,
        moderator: {
          label: "Animation",
          text: "**Halima El Mourabit**",
        },
        sectionLabel: "Avec :",
        participants: [
          "Aïcha Basri",
          "Fatima Zahra Bennis",
          "Mariam Tamsamani",
          "Mariam Kroudi",
        ],
        note: null,
      },
      {
        time: "20h30",
        title: "Soirée artistique",
        subtitle: "Soirée artistique consacrée aux poèmes du Malhoun",
        moderator: null,
        sectionLabel: null,
        participants: [],
        note: "Avec **Touraya Al-Hadraoui**",
      },
    ],
  },

  // ── DEUXIÈME JOUR : 27 JUIN ─────────────────────────────────────────────
  {
    id: "jour-2",
    label: "Deuxième jour : 27 juin",
    shortDate: "27 juin",
    events: [
      {
        time: "11h00",
        title: "Conférence culturelle",
        subtitle: "Vivons-nous la fin du livre ou ses transformations ?",
        moderator: {
          label: "Animation",
          text: "**Youssef Saâdoun**",
        },
        sectionLabel: "Avec la participation de :",
        participants: [
          "Souad Meskine",
          "Soumaya Ahmed El Mouden",
          "Imad Bellatar",
          "Abdelkrim Lachkar",
        ],
        note: null,
      },
      {
        time: "16h00",
        title: "« Elles écrivent... Écoutons-les »",
        subtitle: null,
        moderator: {
          label: "Animation",
          text: "**Mustapha Stitou**",
        },
        sectionLabel: null,
        participants: [
          "**Aïcha Basri** : lecture et présentation par **Mohamed Al-Annaz**",
          "**Rabia Rihane** : lecture et présentation par **Hassan El Yamlahi**",
          "Séance de dédicace des ouvrages des écrivaines",
        ],
        note: null,
      },
      {
        time: "18h00",
        title: "L'écriture comme moteur d'accès au monde de la création",
        subtitle: null,
        moderator: {
          label: "Animation",
          text: "**Youssef Saâdoun**",
        },
        sectionLabel: "Intervenantes :",
        participants: [
          "**Nadia Sabri** (chercheuse)",
          "**Dounia Belkacem**",
          "**Maria Khoussi Benito**",
          "**Rouyi** – présentation par **Fatima Zahra Sghir**",
          "**Dalida BenSafaj** (réalisatrice)",
          "**Dania Achour** (réalisatrice)",
        ],
        note: null,
      },
      {
        time: "21h00",
        title: "Cérémonie de clôture",
        subtitle: null,
        moderator: null,
        sectionLabel: null,
        participants: [],
        note: "Animée par l'artiste **Imane Nouba**",
      },
    ],
  },
];

// ─── INFORMATIONS PRATIQUES ───────────────────────────────────────────────────
// ← Edita aquí los datos del lugar y organización

export const festivalMeta = {
  title: "Programme : Festival culturel et artistique",
  subtitle: "1ère édition : femmes et les mondes de la création",
  dates: "26 et 27 juin 2026",
  // ← Actualiza la dirección y el nombre del lugar aquí:
  venue: "Jbel Zemzem, face a Marina Smir",
  city: "Tétouan, Maroc",
  organizer: "Fondation Khadija Tnana pour la culture et les arts",
  website: "f-tnana.ma",
};
