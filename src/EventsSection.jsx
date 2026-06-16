import { useEffect, useMemo, useState } from "react";

const STATUS_FILTERS = ["Todos", "Pasado", "Actual", "Próximo"];
const TYPE_FILTERS = ["Todos", "Exposición", "Taller", "Conferencia"];

const events = [
  {
    id: "evt-001",
    title: "Luz de Tetouan",
    type: "Exposición",
    startDate: "2026-03-10T10:00:00+01:00",
    endDate: "2026-04-28T19:00:00+01:00",
    shortDescription:
      "Recorrido visual por obras contemporáneas inspiradas en la memoria cultural del norte de Marruecos.",
    image: "/hero.webp",
    status: "Actual",
    location: "Fundación Khadija Tnana, Tetuán",
  },
  {
    id: "evt-002",
    title: "Técnicas Mixtas para Jóvenes",
    type: "Taller",
    startDate: "2026-05-12T15:00:00+01:00",
    endDate: "2026-05-12T18:00:00+01:00",
    shortDescription:
      "Sesión práctica para experimentar collage, acrílico y texturas con mentoría de artistas invitados.",
    image: "/mujertumbada.webp",
    status: "Próximo",
    location: "Sala de Talleres, Fundación Khadija Tnana",
  },
  {
    id: "evt-003",
    title: "Arte, Patrimonio y Comunidad",
    type: "Conferencia",
    startDate: "2025-11-08T17:30:00+01:00",
    endDate: "2025-11-08T20:00:00+01:00",
    shortDescription:
      "Diálogo abierto sobre el papel de las fundaciones culturales en la preservación del patrimonio vivo.",
    image: "/mujer.webp",
    status: "Pasado",
    location: "Auditorio Cultural de Tetuán",
  },
  {
    id: "evt-004",
    title: "Residencias y Nuevas Voces",
    type: "Exposición",
    startDate: "2026-06-20T11:00:00+01:00",
    endDate: "2026-07-30T19:00:00+01:00",
    shortDescription:
      "Muestra colectiva de artistas emergentes acompañados por el programa de residencias de la fundación.",
    image: "/khadija.webp",
    status: "Próximo",
    location: "Galería Principal, Fundación Khadija Tnana",
  },
];

function toGoogleDate(dateISO) {
  return new Date(dateISO).toISOString().replace(/[-:]/g, "").replace(/\.\d{3}Z$/, "Z");
}

function buildGoogleCalendarUrl(event) {
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: event.title,
    dates: `${toGoogleDate(event.startDate)}/${toGoogleDate(event.endDate)}`,
    details: event.shortDescription,
    location: event.location,
  });

  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

function buildIcsDataUrl(event) {
  const uid = `${event.id}@khadijatnana.ma`;
  const dtstamp = new Date().toISOString().replace(/[-:]/g, "").replace(/\.\d{3}Z$/, "Z");
  const dtstart = toGoogleDate(event.startDate);
  const dtend = toGoogleDate(event.endDate);
  const content = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Fondation Khadija Tnana//Events//ES",
    "BEGIN:VEVENT",
    `UID:${uid}`,
    `DTSTAMP:${dtstamp}`,
    `DTSTART:${dtstart}`,
    `DTEND:${dtend}`,
    `SUMMARY:${event.title}`,
    `DESCRIPTION:${event.shortDescription}`,
    `LOCATION:${event.location}`,
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");

  return `data:text/calendar;charset=utf-8,${encodeURIComponent(content)}`;
}

function formatDate(dateISO) {
  return new Intl.DateTimeFormat("fr-FR", {
    dateStyle: "long",
    timeStyle: "short",
  }).format(new Date(dateISO));
}

export default function EventsSection() {
  const [statusFilter, setStatusFilter] = useState("Todos");
  const [typeFilter, setTypeFilter] = useState("Todos");
  const [openMenuId, setOpenMenuId] = useState(null);

  const filteredEvents = useMemo(() => {
    return events.filter((event) => {
      const statusMatches = statusFilter === "Todos" || event.status === statusFilter;
      const typeMatches = typeFilter === "Todos" || event.type === typeFilter;
      return statusMatches && typeMatches;
    });
  }, [statusFilter, typeFilter]);

  useEffect(() => {
    const onDocumentClick = (event) => {
      if (!event.target.closest("[data-calendar-root='true']")) {
        setOpenMenuId(null);
      }
    };

    const onEscape = (event) => {
      if (event.key === "Escape") {
        setOpenMenuId(null);
      }
    };

    document.addEventListener("click", onDocumentClick);
    window.addEventListener("keydown", onEscape);

    return () => {
      document.removeEventListener("click", onDocumentClick);
      window.removeEventListener("keydown", onEscape);
    };
  }, []);

  return (
    <section className="px-4 py-20 md:py-28" aria-labelledby="events-heading">
      <div className="mx-auto max-w-7xl">
        <header className="mb-10 flex flex-col gap-4 text-center">
          <p className="font-inter text-sm uppercase tracking-[0.25em] text-dorado/80">Agenda cultural</p>
          <h2 id="events-heading" className="text-4xl text-white md:text-5xl">
            Eventos de la Fundación
          </h2>
          <p className="mx-auto max-w-2xl font-inter text-white/75">
            Consulta exposiciones, talleres y conferencias. Filtra por estado para ver actividades actuales, pasadas o próximas.
          </p>
        </header>

        <div className="mb-8 flex flex-col gap-3">
          <div className="flex flex-wrap items-center justify-center gap-2" role="tablist" aria-label="Filtrar por estado">
            {STATUS_FILTERS.map((filter) => {
              const isActive = filter === statusFilter;
              return (
                <button
                  key={filter}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  className={`rounded-full border px-4 py-2 text-sm transition ${
                    isActive
                      ? "border-dorado bg-dorado text-black"
                      : "border-white/20 bg-white/5 text-white/85 hover:border-dorado/60 hover:text-dorado"
                  }`}
                  onClick={() => setStatusFilter(filter)}
                >
                  {filter}
                </button>
              );
            })}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2" aria-label="Filtrar por tipo de evento">
            {TYPE_FILTERS.map((filter) => {
              const isActive = filter === typeFilter;
              return (
                <button
                  key={filter}
                  type="button"
                  className={`rounded-full border px-4 py-2 text-sm transition ${
                    isActive
                      ? "border-dorado/70 bg-dorado/20 text-dorado"
                      : "border-white/15 bg-transparent text-white/70 hover:border-white/40 hover:text-white"
                  }`}
                  onClick={() => setTypeFilter(filter)}
                >
                  {filter}
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {filteredEvents.length === 0 ? (
            <p className="col-span-full rounded-2xl border border-dorado/20 bg-black/40 px-6 py-10 text-center font-inter text-white/80">
              No hay eventos para esta combinación de filtros.
            </p>
          ) : (
            filteredEvents.map((event) => {
              const isNow = event.status === "Actual";
              const menuId = `calendar-menu-${event.id}`;

              return (
                <article
                  key={event.id}
                  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-black/40 shadow-[0_20px_45px_rgba(0,0,0,0.35)]"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-dorado/10 via-transparent to-transparent opacity-60" />
                  <img
                    src={event.image}
                    alt={`Imagen del evento ${event.title}`}
                    loading="lazy"
                    decoding="async"
                    className="h-52 w-full object-cover grayscale-[20%] transition duration-500 group-hover:grayscale-0"
                  />

                  <div className="relative space-y-4 p-6">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded-full border border-dorado/60 bg-dorado/15 px-3 py-1 text-xs uppercase tracking-wider text-dorado">
                        {event.type}
                      </span>
                      <span className="rounded-full border border-white/20 px-3 py-1 text-xs text-white/85">{event.status}</span>
                      {isNow && (
                        <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/70 bg-emerald-400/20 px-3 py-1 text-xs font-semibold text-emerald-200">
                          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-300" aria-hidden="true" />
                          Ahora
                        </span>
                      )}
                    </div>

                    <h3 className="text-3xl leading-tight text-white">{event.title}</h3>

                    <p className="font-inter text-sm leading-7 text-white/80">{event.shortDescription}</p>

                    <div className="rounded-2xl border border-white/10 bg-black/35 p-4">
                      <p className="font-inter text-xs uppercase tracking-widest text-white/60">Fechas</p>
                      <p className="mt-2 font-inter text-sm text-white">
                        <time dateTime={event.startDate}>{formatDate(event.startDate)}</time>
                        <span aria-hidden="true"> - </span>
                        <span className="sr-only">hasta</span>
                        <time dateTime={event.endDate}>{formatDate(event.endDate)}</time>
                      </p>
                    </div>

                    <div className="relative" data-calendar-root="true">
                      <button
                        type="button"
                        aria-haspopup="menu"
                        aria-expanded={openMenuId === event.id}
                        aria-controls={menuId}
                        className="rounded-full border border-dorado/70 bg-dorado/15 px-4 py-2 text-sm font-medium text-dorado transition hover:bg-dorado hover:text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-dorado focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                        onClick={() => setOpenMenuId((current) => (current === event.id ? null : event.id))}
                      >
                        Añadir a Calendario
                      </button>

                      {openMenuId === event.id && (
                        <div
                          id={menuId}
                          role="menu"
                          aria-label={`Opciones de calendario para ${event.title}`}
                          className="absolute left-0 top-12 z-20 w-48 rounded-xl border border-white/15 bg-black/95 p-2 shadow-2xl"
                        >
                          <a
                            role="menuitem"
                            href={buildGoogleCalendarUrl(event)}
                            target="_blank"
                            rel="noreferrer"
                            className="block rounded-lg px-3 py-2 font-inter text-sm text-white/90 transition hover:bg-dorado/20 hover:text-dorado"
                          >
                            Google Calendar
                          </a>
                          <a
                            role="menuitem"
                            href={buildIcsDataUrl(event)}
                            download={`${event.id}.ics`}
                            className="block rounded-lg px-3 py-2 font-inter text-sm text-white/90 transition hover:bg-dorado/20 hover:text-dorado"
                          >
                            iCal (.ics)
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </article>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
}