// config.ts
const config = {
  appEnv: import.meta.env.VITE_REACT_ENV,
  welcomeSiteUrl: import.meta.env.VITE_REACT_WELCOME_SITE_URL,
  membersSiteUrl: import.meta.env.VITE_REACT_MEMBERS_SITE_URL,
  statusSiteUrl: import.meta.env.VITE_REACT_STATUS_SITE_URL,
};

export const getConfig = () => {
  return config;
};

export const validateEnv = () => {
  const requiredVars = [
    'appEnv',
    'welcomeSiteUrl',
    'membersSiteUrl',
    'statusSiteUrl',
  ];
  for (const key of requiredVars) {
    if (!config[key]) {
      throw new Error(`Missing required environment variable: ${key}`);
    }
  }
};