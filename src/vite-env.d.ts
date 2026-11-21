/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_URL?: string;
  readonly VITE_RESUME_BACKEND_DRIVE_URL?: string;
  readonly VITE_RESUME_GENERAL_DRIVE_URL?: string;
  readonly VITE_RESUME_QA_DRIVE_URL?: string;
  readonly VITE_RESUME_FULLSTACK_DRIVE_URL?: string;
  readonly VITE_RESUME_UPDATED_DRIVE_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
