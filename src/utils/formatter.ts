export function formatDate(date: number) {
  const publishDate: string = new Date(date).toLocaleDateString("en-GB");
  return publishDate;
}