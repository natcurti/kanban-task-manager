export const createSlug = (name: string) => {
  const slug = name
    .toLowerCase()
    .trim()
    .replace(/\[^a-z0-9 -]/g, "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, "-");

  return slug;
};
