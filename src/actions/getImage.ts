export async function getImage(): Promise<string | null> {
  try {
    const apiResponse = await fetch(
      `https://api.unsplash.com/photos/random?client_id=${process.env.NEXT_PUBLIC_UNSPLASH_API_KEY}`
    );

    const responseInJson = await apiResponse.json();
    return responseInJson.urls.full;
  } catch {
    return null;
  }
}
