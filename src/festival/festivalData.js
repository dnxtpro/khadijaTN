// ─────────────────────────────────────────────────────────────────────────────
// festivalData.js  ·  Données bilingues du programme (FR + AR)
// ← Edita aquí para actualizar el programa. Texto enriquecido: **Nombre** = negrita.
// ─────────────────────────────────────────────────────────────────────────────

/**
 * @typedef {Object} Moderator
 * @property {string} label
 * @property {string} text  - Puede contener **negrita**
 */

/**
 * @typedef {Object} EventVersion
 * @property {string}          time
 * @property {string}          title
 * @property {string|null}     subtitle
 * @property {Moderator|null}  moderator
 * @property {string|null}     sectionLabel
 * @property {string[]}        participants
 * @property {string|null}     note
 */

/**
 * Evento bilingüe: fr y/o ar pueden ser null si el evento sólo existe en un idioma.
 * @typedef {Object} BilingualEvent
 * @property {EventVersion|null} fr
 * @property {EventVersion|null} ar
 */

/**
 * @typedef {Object} FestivalDay
 * @property {string}            id
 * @property {string}            label       - Francés
 * @property {string}            labelAr     - Árabe
 * @property {string}            shortDate
 * @property {string}            shortDateAr
 * @property {BilingualEvent[]}  events
 */

// ─── PROGRAMME ───────────────────────────────────────────────────────────────
/** @type {FestivalDay[]} */
export const festivalDays = [
  // ══════════════════════════════════════════════════════
  //  JOUR 1 · اليوم الأول
  // ══════════════════════════════════════════════════════
  {
    id: "jour-1",
    label: "Premier jour : 26 juin",
    labelAr: "اليوم الأول: 26 يونيو",
    shortDate: "26 juin",
    shortDateAr: "26 يونيو",
    events: [
      // 16h00 ─────────────────────────────────────────────
      {
        fr: {
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
        ar: {
          time: "16:00",
          title: "افتتاح معرض تشكيلي",
          subtitle: null,
          moderator: {
            label: "تقديم",
            text: "**فاطمة الزهراء الصغير** و **داليدا بنسفاج**",
          },
          sectionLabel: "بمشاركة الفنانات:",
          participants: [
            "أمينة رزقي / ريم اللعبي",
            "نرجس الجباري / خديجة طنان",
            "هجر موسى / شادين حيون",
          ],
          note: null,
        },
      },

      // 17h30 ─────────────────────────────────────────────
      {
        fr: {
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
        ar: {
          time: "17:30",
          title: "حفل الافتتاح",
          subtitle: null,
          moderator: {
            label: "تسيير",
            text: "**فاطمة الزهراء الصغير**",
          },
          sectionLabel: null,
          participants: [
            "الكلمة الافتتاحية لرئيسة المؤسسة: الفنانة **خديجة طنانة**",
            "تكريم الفنانة المخرجة **فريدة بليزيد**",
            "شهادة في حقها للشاعر والصحافي **عبد اللطيف بن يحيى**",
          ],
          note: null,
        },
      },

      // 18h30 ─────────────────────────────────────────────
      {
        fr: {
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
        ar: {
          time: "18:30",
          title: "جلسة البوح",
          subtitle: "عالم الإبداع لفنانات من حقول إبداعية متنوعة",
          moderator: {
            label: "تسيير",
            text: "**حفيظة هيدور**",
          },
          sectionLabel: "المتحدثات:",
          participants: [
            "**ربيعة ريحان** ─ الكتابة",
            "**مريم التمسماني** ─ الشعر الهايكو",
            "**نعيمة زيتان** ─ الإخراج المسرحي",
            "**ثريا الحضراوي** ─ طرب الملحون",
            "**دانية عاشور** ─ الإخراج السينمائي",
          ],
          note: null,
        },
      },

      // 19h30 ─────────────────────────────────────────────
      {
        fr: {
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
        ar: {
          time: "19:30",
          title: "قراءات شعرية",
          subtitle: null,
          moderator: {
            label: "تسيير",
            text: "**حليمة المرابط**",
          },
          sectionLabel: "للشاعرات:",
          participants: [
            "عائشة البصري",
            "فاطمة الزهراء بنيس",
            "مريم التمسماني",
            "مريم كرودي",
          ],
          note: null,
        },
      },

      // 20h30 / 20:30 ── عرض فيلم (árabe únicamente) ─────
      {
        fr: null,
        ar: {
          time: "20:30",
          title: "عرض فيلم",
          subtitle: "فيلم للمخرجة **فريدة بليزيد**",
          moderator: null,
          sectionLabel: null,
          participants: [],
          note: "Les femmes dans la musique Amazighe",
        },
      },

      // 20h30 / 22h00 ─────────────────────────────────────
      {
        fr: {
          time: "20h30",
          title: "Soirée artistique",
          subtitle: "Soirée artistique consacrée aux poèmes du Malhoun",
          moderator: null,
          sectionLabel: null,
          participants: [],
          note: "Avec **Touraya Al-Hadraoui**",
        },
        ar: {
          time: "22:00",
          title: "سهرة فنية",
          subtitle: "سهرة فنية لقصائد الملحون",
          moderator: null,
          sectionLabel: null,
          participants: [],
          note: "مع الفنانة **ثريا الحضراوي**",
        },
      },
    ],
  },

  // ══════════════════════════════════════════════════════
  //  JOUR 2 · اليوم الثاني
  // ══════════════════════════════════════════════════════
  {
    id: "jour-2",
    label: "Deuxième jour : 27 juin",
    labelAr: "اليوم الثاني: 27 يونيو",
    shortDate: "27 juin",
    shortDateAr: "27 يونيو",
    events: [
      // 11h00 ─────────────────────────────────────────────
      {
        fr: {
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
        ar: {
          time: "11:00",
          title: "ندوة ثقافية",
          subtitle: "هل نعيش نهاية الكتاب أم تحولاته؟",
          moderator: {
            label: "تسيير",
            text: "**يوسف سعدون**",
          },
          sectionLabel: "بمشاركة الأستاذات والأساتذة:",
          participants: [
            "سعاد مسكين",
            "سمية أحمد المودن",
            "عماد العطار",
            "عبد الكريم الشبكر",
          ],
          note: null,
        },
      },

      // 16h00 / 17h30 ─────────────────────────────────────
      {
        fr: {
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
        ar: {
          time: "17:30",
          title: "لقاء أدبي",
          subtitle: "هن يكتبن... فلنصت لهن",
          moderator: {
            label: "تسيير",
            text: "**مصطفى الستيتو**",
          },
          sectionLabel: null,
          participants: [
            "الكاتبة **عائشة البصري**: قراءة وتقديم الأستاذ **محمد العناز**",
            "الكاتبة **ربيعة ريحان**: قراءة وتقديم الأستاذ **حسن الملاحي**",
            "جلسة توقيع كتب الكاتبات",
          ],
          note: null,
        },
      },

      // 18h00 / 20h00 ─────────────────────────────────────
      {
        fr: {
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
        ar: {
          time: "20:00",
          title: "«الكتابة كفاعل للحاق بركب الإبداع»",
          subtitle: "للكاتبات والمخرجات",
          moderator: {
            label: "تسيير",
            text: "**يوسف سعدون**",
          },
          sectionLabel: "المتحدثات:",
          participants: [
            "**نادية صبري**",
            "**دنيا بلقاسم**",
            "**مريم خوصي بنيطو** / **خديجة طنانة**",
            "**رؤى المسري**",
            "**داليدا بنسفاج**",
            "**دانية عاشور**",
          ],
          note: null,
        },
      },

      // 21h00 / 22h00 ─────────────────────────────────────
      {
        fr: {
          time: "21h00",
          title: "Cérémonie de clôture",
          subtitle: null,
          moderator: null,
          sectionLabel: null,
          participants: [],
          note: "Animée par l'artiste **Imane Nouba**",
        },
        ar: {
          time: "22:00",
          title: "حفل اختتام",
          subtitle: null,
          moderator: null,
          sectionLabel: null,
          participants: [],
          note: "سهرة فنية تحييها الفنانة **إيمان نوبا**",
        },
      },
    ],
  },
];

// ─── INFOS PRATIQUES ─────────────────────────────────────────────────────────
// ← Edita venue, city, organizer aquí
export const festivalMeta = {
  dates: "26 et 27 juin 2026",
  datesAr: "26 و 27 يونيو 2026",
  // ← Actualiza el lugar aquí:
  venue: "À compléter",
  city: "Tétouan, Maroc",
  organizer: "Fondation Khadija Tnana pour la culture et les arts",
  organizerAr: "مؤسسة خديجة طنانة للثقافة والفنون",
  website: "f-tnana.ma",
};
