---
titolo: "Deck Mk1"
categoria: elettronica
stato: in-corso
riassunto: "Uno Stream Deck fai-da-te con Arduino Micro, 5 tasti meccanici e 5 potenziometri come mixer del volume."
foto:
  - src: "../../assets/foto/deck-mk1-anteprima.png"
    alt: "Anteprima 3D del case del Deck Mk1: scocca blu con parte superiore arrotondata, fronte aperto e inclinato e la scritta TambuTech incisa"
copertina: contain
dettagli:
  - { etichetta: "Cervello", valore: "Arduino Micro" }
  - { etichetta: "Scorciatoie", valore: "5 switch meccanici" }
  - { etichetta: "Volume", valore: "5 potenziometri Bojack da 16,5 mm" }
  - { etichetta: "Software", valore: "DEEJ (mixer del volume)" }
  - { etichetta: "PCB", valore: "Gerber v0.1, da produrre con JLCPCB" }
avanzamento:
  - { voce: "Disegno del case", fatto: true }
  - { voce: "Stampa del case", fatto: true }
  - { voce: "Gerber v0.1 della PCB generati", fatto: true }
  - { voce: "Ordine della PCB su JLCPCB", fatto: false }
  - { voce: "Montaggio e test", fatto: false }
ordine: 20
---

Il Deck Mk1 è uno Stream Deck "premium" fatto da me, pensato per avere sotto mano le
scorciatoie e il volume di ogni programma.

**Cosa c'è dentro**

- Un **Arduino Micro**, fissato sul fondo del case e collegato alla scheda con un cavetto.
- **5 switch meccanici** per le scorciatoie.
- **5 potenziometri Bojack** (diametro 16,5 mm) che funzionano da mixer del volume, grazie
  all'integrazione con **DEEJ**.
- Una **PCB** su misura: i potenziometri si collegano con fili corti a gruppi di 3 pad.

**A che punto sono**

Il disegno del case è finito ed è già stato stampato. Per la PCB ho scelto JLCPCB e ho
generato i file Gerber in versione 0.1. La scheda non è ancora stata ordinata: quando arriverà
la monterò e passerò ai test.
