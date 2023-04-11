import DOMPurify from 'dompurify';

export const sanitizer = (html: string) => {
  const doc = DOMPurify.sanitize(html);
  return doc;
};
