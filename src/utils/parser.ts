export const getText = (html: string) => {
  if (html === undefined) {
    return null;
  }
  const doc = new DOMParser().parseFromString(html, 'text/html');
  return doc.body.textContent;
};
