declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT: number;
      DB_NAME: string;
      DB_USER: string;
      DB_PASSWORD: string;
      SECRET_KEY: string;
    }
  }
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {};
