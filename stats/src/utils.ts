export const dateStringToDate = (dateString: string): Date => {
  const dateParse = dateString.split("/").map((value: string): number => {
    return parseInt(value);
  });

  return new Date(dateParse[2], dateParse[1] - 1, dateParse[0]);
};
