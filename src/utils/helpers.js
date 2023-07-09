const formatDate = (date, lang) => {
  const dateObj = new Date(date);

  // return dateObj.toLocaleDateString('id-ID', {
  //   weekday: "long",
  //   year: "numeric",
  //   month: "long",
  //   day: "numeric",
  // });

  return dateObj.toLocaleDateString(lang === 'en' ? 'en-US' : 'id-ID', {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};


export { formatDate }