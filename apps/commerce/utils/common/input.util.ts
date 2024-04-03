export function numerizeInput(value: string) {
  const strOnlyNumberRemained = value.replace(/\D/g, "");
  if (strOnlyNumberRemained === "") return undefined;
  return Number(strOnlyNumberRemained);
}
