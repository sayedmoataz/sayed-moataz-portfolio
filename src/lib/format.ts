const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

/** "2025-03" → "Mar 2025"; a year-only "2026" stays "2026". */
export function formatMonth(yearMonth: string) {
  const [y, m] = yearMonth.split("-").map(Number);
  return m ? `${MONTHS[m - 1]} ${y}` : String(y);
}

/**
 * Length of a finished period, e.g. "1 yr 2 mos". Ongoing roles get no
 * duration: computing one needs today's date, which would make the page
 * render per request instead of being static.
 */
export function formatDuration(start: string, end: string) {
  const [sy, sm] = start.split("-").map(Number);
  const [ey, em] = end.split("-").map(Number);
  // Year-only dates can't give an exact length.
  if (!sm || !em) return "";
  const months = (ey - sy) * 12 + (em - sm) + 1;
  const years = Math.floor(months / 12);
  const rest = months % 12;
  const parts = [];
  if (years) parts.push(`${years} yr${years > 1 ? "s" : ""}`);
  if (rest) parts.push(`${rest} mo${rest > 1 ? "s" : ""}`);
  return parts.join(" ");
}

/** "2024"–"2025" style project period. */
export function formatPeriod({ start, end }: { start: string; end: string | null }) {
  if (end === null) return `${start} – Present`;
  return start === end ? start : `${start} – ${end}`;
}

/** Formats a YYYY-MM-DD date the same way on every machine. */
export function formatDate(isoDate: string) {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${isoDate}T00:00:00Z`));
}
