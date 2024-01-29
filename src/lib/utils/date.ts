export const dateUtils = {
  format: (date: Date) =>
    new Intl.DateTimeFormat('en-US', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    }).format(date)
}
