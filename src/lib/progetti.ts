export const categorie = {
  'stampa-3d': 'Stampa 3D',
  elettronica: 'Elettronica',
  app: 'App',
  diy: 'DIY',
} as const;

export type Categoria = keyof typeof categorie;
