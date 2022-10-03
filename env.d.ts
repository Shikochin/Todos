/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_IS_TAURI: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
