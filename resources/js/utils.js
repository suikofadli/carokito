export const generateSlug = (text) => {
    return text
        .toLowerCase()
        .trim()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '') // Remove diacritics
        .replace(/[^\w\s-]/g, '') // Remove special characters
        .replace(/\s+/g, '-') // Replace spaces with hyphens
        .replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
        .replace(/^-+|-+$/g, ''); // Remove leading/trailing hyphens
};

export const getAppName = () => {
    const appName = import.meta.env.VITE_APP_NAME || "wartabengkulu.co";
    return appName;
}

export const getSeoTitle = (title) => {
    return title
            ? `${title} | ${getAppName()}`
            : `${getAppName()} | Berita Bengkulu Hari Ini`
}

export const getSeoDescription = (title) => {
    return title
            ? `${title} | ${getAppName()}`
            : `${getAppName()} | Berita Bengkulu Hari Ini`
}

export const getAppUrl = () => {
    return import.meta.env.VITE_APP_URL || "";
}