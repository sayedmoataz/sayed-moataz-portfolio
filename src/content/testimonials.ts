/**
 * Recommendations from colleagues and clients. The home page section stays
 * hidden while this list is empty. Only add quotes you have permission to
 * publish, e.g. LinkedIn recommendations you've asked to reuse.
 *
 * Example:
 * {
 *   quote: "Sayed cut our app's launch time from 30 seconds to under one...",
 *   name: "Jane Doe",
 *   role: "Engineering Manager",
 *   company: "PLANET LAND LLC",
 *   url: "https://www.linkedin.com/in/...",
 * }
 */
export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company?: string;
  url?: string;
};

export const testimonials: Testimonial[] = [];
