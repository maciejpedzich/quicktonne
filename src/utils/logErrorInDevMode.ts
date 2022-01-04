export const logErrorInDevMode = (error: unknown) =>
  import.meta.env.MODE === 'development' && console.error(error);
