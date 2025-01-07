export const serviceGetDetail = async (slug: string) => {
  const response = await fetch(
    `https://66938197c6be000fa07bcd99.mockapi.io/content/${slug}`
  );

  if (!response.ok) {
    throw new Error("cannot fetch content");
  }

  return response.json();
};
