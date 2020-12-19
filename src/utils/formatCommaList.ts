export const formatCommaList = (list: any) => {
  if (list.length === 0) throw new Error(`${list} is empty.`);

  let formattedList: Array<string> = [];

  list.forEach((i: any) => formattedList.push(`${i.name}, `));

  const lastItem = formattedList.pop()?.replace(', ', '');

  if (lastItem === undefined) throw new Error('Unable to format the list.');

  formattedList.push(lastItem);

  return formattedList;
};
