export const processImage = (url: string) => {
    return `/api/imageproxy?url=${encodeURIComponent(url)}`;
};
