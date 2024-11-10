// config.ts
const config = {
    appEnv: import.meta.env.VITE_REACT_APP_ENV,
    welcomeSiteUrl: import.meta.env.VITE_REACT_APP_WELCOME_SITE_URL,
    membersSiteUrl: import.meta.env.VITE_REACT_APP_MEMBERS_SITE_URL,
    statusSiteUrl: import.meta.env.VITE_REACT_APP_STATUS_SITE_URL,
};

export const getConfig = () => {
    return config;
};

export const validateEnv = () => {
    const requiredVars = ['appEnv', 'welcomeSiteUrl', 'membersSiteUrl', 'statusSiteUrl'];
    for (const key of requiredVars) {
        if (!config[key]) {
            throw new Error(`Missing required environment variable: ${key}`);
        }
    }
};
