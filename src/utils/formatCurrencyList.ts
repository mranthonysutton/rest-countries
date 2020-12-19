export const formatCurrencyList = (list: any) => {
  if (list.length === 0) throw new Error('List can not be empty.');

  let formattedList: Array<string> = [];

  list.currencies.forEach((i: any) => formattedList.push(`${i.name}, `));

  const lastItem = formattedList.pop()?.replace(', ', '');

  if (lastItem === undefined) throw new Error('Unable to format the list.');

  formattedList.push(lastItem);

  return formattedList;
};
