import React, { useEffect } from 'react';
import { getConfig, validateEnv } from '../config';

const Navbar: React.FC = () => {
  const { welcomeSiteUrl, membersSiteUrl, statusSiteUrl } = getConfig();

  useEffect(() => {
    try {
      validateEnv();
    } catch (error) {
      console.error('Environment validation error:', error);
    }
  }, []);

  return (
    <nav
      className="fixed left-0 top-0 w-full border-b border-gray-100 bg-primary p-2"
      aria-label="Main Navigation"
    >
      <div className="mx-auto flex h-14 w-full max-w-screen-2xl items-center gap-6 px-6">
        <a href="/" className="flex items-center" aria-label="Home">
          <img
            src="/assets/rds-logo.svg"
            alt="RDS Logo"
            className="h-12 w-12"
          />
        </a>

        <div className="flex items-center space-x-6">
          <a
            href={welcomeSiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-accent"
            aria-label="Go to Welcome site"
          >
            Welcome
          </a>
          <a
            href={membersSiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-accent"
            aria-label="Go to Members site"
          >
            Members
          </a>
          <a
            href={statusSiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-accent"
            aria-label="Go to Status site"
          >
            Status
          </a>
        </div>

        <div className="ml-auto">
          <button
            className="px-4 py-2 text-white bg-secondary hover:bg-accent rounded"
            aria-label="Sign In"
          >
            Sign In
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
