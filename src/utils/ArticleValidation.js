const getErrorMessages = (title, body, description, errors) => {
  let error;
  if (title) {
    error = `Title :${title}`;
  } else if (description) {
    error = `description :${description}`;
  } else if (body) {
    error = `body :${body}`;
  } else if (errors) {
    error = errors;
  }
  return error;
};
export default getErrorMessages;
