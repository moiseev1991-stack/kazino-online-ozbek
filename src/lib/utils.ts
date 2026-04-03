export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ");
}

export function formatRating(rating: number): string {
  return rating.toFixed(1);
}

export function getRatingColor(rating: number): string {
  if (rating >= 9) return "text-green-600";
  if (rating >= 7) return "text-yellow-600";
  return "text-red-600";
}

export function getRatingLabel(rating: number): string {
  if (rating >= 9) return "A'lo";
  if (rating >= 8) return "Yaxshi";
  if (rating >= 7) return "O'rtacha";
  return "Past";
}
