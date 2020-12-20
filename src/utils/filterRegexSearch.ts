export const filterRegexSearchTerm = (
  dataToFilter: any,
  searchTerm: string
) => {
  const regexTerm = new RegExp(searchTerm, 'i');
  const results = dataToFilter.filter((i: any) => regexTerm.test(i.name));
  return results;
};

export const filterRegexRegion = (dataToFilter: any, searchTerm: string) => {
  const regexTerm = new RegExp(searchTerm, 'i');
  const results = dataToFilter.filter((i: any) => regexTerm.test(i.region));

  return results;
};
