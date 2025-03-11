export const existeImg = async (url) => {
  try {
    const response = await fetch(url, { method: "HEAD" });
    const blob = await response.blob();
    return blob.type === "image/jpeg";
  } catch (error) {
    return false;
  }
};
