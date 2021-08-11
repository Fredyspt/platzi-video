import md5 from 'md5';

const gravatar = (email) => {
  const base = 'https://gravatar.com/avatar/'
  // trim removes spaces
  const formatedEmail = (email).trim().toLowerCase();
  // md5 needs a binary encoding to encode '@' symbols
  const hash = md5(formatedEmail, { encoding: 'binary'});
  return `${base}${hash}`
}