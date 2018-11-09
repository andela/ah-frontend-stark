const ConvertDate = (date) => {
  const data = new Date(date);
  const date1 = data.getDate();
  const month = data.getMonth();
  const year = data.getFullYear();
  const actualDate = `${date1}/${month}/${year}`;
  return actualDate;
};
export default ConvertDate;
