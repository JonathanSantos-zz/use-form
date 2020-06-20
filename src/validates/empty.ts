export const empty = (value: string) => {
  return typeof value === "string" && value.trim().length > 0;
};
