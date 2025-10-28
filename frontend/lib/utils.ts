export function formatDate(isoDate: string): string {
  const date = new Date(isoDate);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
}

export function truncate(text: string, maxLength = 100): string {
  return text.length > maxLength ? text.slice(0, maxLength) + '…' : text;
}
