import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const progetti = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/progetti' }),
  schema: ({ image }) =>
    z.object({
      titolo: z.string(),
      categoria: z.enum(['stampa-3d', 'elettronica', 'app', 'diy']),
      stato: z.enum(['realizzato', 'in-corso']),
      /** Frase breve mostrata nelle schede e nei risultati di Google */
      riassunto: z.string().max(200),
      /** La prima foto è la copertina */
      foto: z.array(z.object({ src: image(), alt: z.string() })).min(1),
      /** Come ritagliare la copertina nelle schede (es. "50% 70%") */
      posizioneCopertina: z.string().default('50% 50%'),
      /** "contain" mostra l'immagine intera (utile per render e anteprime), "cover" la ritaglia */
      copertina: z.enum(['cover', 'contain']).default('cover'),
      /** Passi del progetto, per i lavori in corso */
      avanzamento: z.array(z.object({ voce: z.string(), fatto: z.boolean() })).default([]),
      dettagli: z.array(z.object({ etichetta: z.string(), valore: z.string() })).default([]),
      link: z.array(z.object({ etichetta: z.string(), url: z.string().url() })).default([]),
      ordine: z.number().default(100),
    }),
});

export const collections = { progetti };
