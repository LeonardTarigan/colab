export const processImage = (url: string) => {
    return `/api/imageProxy?url=${encodeURIComponent(url)}`;
};
