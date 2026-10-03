import type { Wish } from "./content";

export interface RsvpResponse {
  name: string;
  attending: boolean;
  message: string;
  at: string;
}

const KEY = "ak-rsvp-v1";
export const RSVP_EVENT = "ak:rsvp";

export function loadResponses(): RsvpResponse[] {
  try {
    const raw = window.localStorage.getItem(KEY);
    const parsed: unknown = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? (parsed as RsvpResponse[]) : [];
  } catch {
    return [];
  }
}

export function saveResponse(response: RsvpResponse) {
  try {
    window.localStorage.setItem(KEY, JSON.stringify([...loadResponses(), response]));
  } catch {
    // Private mode / storage disabled: the thank-you state still shows.
  }
  window.dispatchEvent(new CustomEvent(RSVP_EVENT));
}

export function responsesToWishes(responses: RsvpResponse[]): Wish[] {
  return responses
    .filter((r) => r.message.trim())
    .map((r) => ({ message: r.message.trim(), name: r.name.trim() }));
}
