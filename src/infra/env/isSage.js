const isServer = typeof window === 'undefined';

// eslint-disable-next-line import/prefer-default-export
export const isStagingEnv = isServer
  ? process.env.NODE_ENV === 'development'
  : globalThis.location.href.includes('localhost');
