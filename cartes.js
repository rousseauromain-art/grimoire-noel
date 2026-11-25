// ============================================================
//  CONTENU DES CARTES — c'est le seul fichier à modifier.
// ============================================================
//  Champs d'une carte :
//   n         numéro dans le grimoire (1 à TOTAL_CARTES)
//   code      code secret du QR code (6 lettres/chiffres, unique)
//   nom       nom affiché
//   element   "givre" | "etoile" | "braise" | "sapin"  (couleur de la carte)
//   rarete    "rare" | "holo" | "legende"              (type de reflet)
//   pv        nombre affiché en haut à droite
//   type      petite ligne sous l'image
//   attaques  liste de [nom, description, valeur]
//   resume    une phrase sur la carte
//   histoire  texte long de la fiche (dos de la carte)
//   indice    l'indice révélé
//   photo     chemin d'une image, ex. "images/renne.jpg" (facultatif)
//   dessin    dessin SVG utilisé si pas de photo (facultatif)
//
//  Photos : format 1100 × 700 px (gabarit fourni), JPG < 300 Ko,
//  à déposer dans le dossier images/ du dépôt. Garder le sujet
//  dans la bande centrale : la fiche recadre le haut et le bas.
//  Attention : chaque texte entre guillemets "..." ; une virgule après
//  chaque carte.
// ============================================================

const TOTAL_CARTES = 30;

// Cartes déjà trouvées au lancement de la démo (numéros)
const DEMO_DEJA_TROUVEES = [1, 2];

const ETOILES = '<g fill="#fff"><circle cx="12" cy="10" r="1.2"/><circle cx="85" cy="14" r="1"/><circle cx="72" cy="6" r=".8"/><circle cx="24" cy="22" r=".7"/><circle cx="90" cy="30" r=".9"/><circle cx="8" cy="34" r=".8"/></g>';

const CARTES = [
  {
    n: 1,
    code: "x7k2q9",
    nom: "Renne des Glaces",
    element: "givre",
    rarete: "holo",
    pv: 120,
    type: "Créature de Givre · 1,40 m · 180 kg",
    attaques: [
      ["Galop boréal", "Traverse la toundra en un souffle.", 40],
      ["Souffle de givre", "Gèle l'adversaire un tour.", 70]
    ],
    resume: "Ses bois captent la lumière des aurores.",
    histoire: "Il ne vole que les nuits sans lune, guidé par l'étoile polaire. On dit que ses bois retiennent la lumière des aurores boréales.",
    indice: "Là où dort le traîneau, sous la troisième latte.",
    photo: "",
    dessin: '<svg viewBox="0 0 100 70" preserveAspectRatio="xMidYMid slice">' + ETOILES + '<path d="M0 60Q25 52 50 58T100 56V70H0Z" fill="#f4faff"/><g stroke="#6b3f1d" stroke-width="2.6" fill="none" stroke-linecap="round"><path d="M43 27C40 18 35 13 28 9M38 19 31 20M35 14 34 7"/><path d="M57 27C60 18 65 13 72 9M62 19 69 20M65 14 66 7"/></g><ellipse cx="38" cy="31" rx="6" ry="3" fill="#8a5428" transform="rotate(-25 38 31)"/><ellipse cx="62" cy="31" rx="6" ry="3" fill="#8a5428" transform="rotate(25 62 31)"/><path d="M50 22c9 0 13 8 12 17-1 8-5 14-12 14s-11-6-12-14c-1-9 3-17 12-17z" fill="#9b6235"/><ellipse cx="50" cy="47" rx="8" ry="6" fill="#c99566"/><circle cx="45" cy="35" r="1.8" fill="#1a0e05"/><circle cx="55" cy="35" r="1.8" fill="#1a0e05"/><circle cx="50" cy="44" r="3.6" fill="#e3262d"/><circle cx="49" cy="43" r="1" fill="#fffa"/><path d="M41 53c6 4 12 4 18 0l1 6H40z" fill="#2f6fae"/></svg>'
  },
  {
    n: 2,
    code: "m3p8vd",
    nom: "Lutin Farceur",
    element: "etoile",
    rarete: "rare",
    pv: 60,
    type: "Esprit de l'Atelier · 0,60 m · 9 kg",
    attaques: [
      ["Emballage éclair", "Emballe un cadeau en une seconde.", 20],
      ["Grelot moqueur", "Déconcentre toute la tablée.", 30]
    ],
    resume: "Personne ne l'a vu deux fois au même endroit.",
    histoire: "Il cache les rubans, échange les étiquettes et rit en grelots. Personne ne l'a jamais vu deux fois au même endroit.",
    indice: "Compte les boules rouges du sapin : leur nombre ouvre la boîte bleue.",
    photo: "",
    dessin: '<svg viewBox="0 0 100 70" preserveAspectRatio="xMidYMid slice">' + ETOILES + '<path d="M0 62Q50 54 100 62V70H0Z" fill="#fff3d0"/><polygon points="38,40 24,31 39,35" fill="#f0bf92"/><polygon points="62,40 76,31 61,35" fill="#f0bf92"/><circle cx="50" cy="41" r="13" fill="#f6cfa6"/><circle cx="43" cy="45" r="2.5" fill="#f29a8e"/><circle cx="57" cy="45" r="2.5" fill="#f29a8e"/><path d="M43 38q2-2 4 0M53 38q2-2 4 0M45 47q5 4 10 0" stroke="#3a2210" stroke-width="1.5" fill="none" stroke-linecap="round"/><path d="M36 33Q38 20 50 14Q60 8 72 5Q63 16 64 33Z" fill="#2f8a3a"/><rect x="35" y="29" width="30" height="6" rx="3" fill="#fff"/><circle cx="72" cy="5" r="4" fill="#fff"/><polygon points="36,54 41,58 46,54 50,58 54,54 59,58 64,54 64,64 36,64" fill="#c2262d"/><circle cx="50" cy="61" r="2.5" fill="#e8c26a"/></svg>'
  },
  {
    n: 3,
    code: "r9t4wh",
    nom: "Esprit de la Bûche",
    element: "braise",
    rarete: "legende",
    pv: 200,
    type: "Gardien du Foyer · légendaire",
    attaques: [
      ["Chaleur du foyer", "Réchauffe toute l'équipe.", 50],
      ["Flamme de minuit", "Ne brûle qu'au douzième coup.", 120]
    ],
    resume: "Sa flamme change de couleur à chaque vœu sincère.",
    histoire: "Né de la toute première bûche de Noël, il veille sur chaque cheminée. Sa flamme change de couleur quand un vœu sincère est prononcé.",
    indice: "Le dernier indice t'attend là où l'on suspend les chaussettes.",
    photo: "",
    dessin: '<svg viewBox="0 0 100 70" preserveAspectRatio="xMidYMid slice"><g fill="#ffd9a0"><circle cx="30" cy="14" r="1"/><circle cx="66" cy="10" r=".8"/><circle cx="58" cy="20" r=".7"/><circle cx="40" cy="6" r=".6"/></g><path d="M0 60H100V70H0Z" fill="#2a1206"/><g class="fl"><path d="M50 40C38 30 45 20 50 8C54 20 64 26 54 40Z" fill="#ff8a1f"/><path d="M50 40C44 34 47 27 50 20C53 27 57 33 52 40Z" fill="#ffe27a"/></g><rect x="18" y="38" width="60" height="20" rx="10" fill="#7a4422"/><path d="M24 44h30M30 51h36" stroke="#5a2f15" stroke-width="1.6" stroke-linecap="round"/><ellipse cx="76" cy="48" rx="6" ry="10" fill="#d9a566"/><ellipse cx="76" cy="48" rx="3.5" ry="6" fill="none" stroke="#a8743c"/><ellipse cx="76" cy="48" rx="1.4" ry="2.4" fill="#a8743c"/><path d="M30 38c-4-4-9-3-11 0 4 0 6 2 7 5z" fill="#2f7a34"/><path d="M30 38c2-5 7-6 10-4-3 1-5 3-5 7z" fill="#3f9a44"/><circle cx="31" cy="37" r="2.2" fill="#d4202a"/><circle cx="34" cy="39.5" r="2" fill="#d4202a"/></svg>'
  }

  // ---- Modèle à copier pour une nouvelle carte (retirer les // ) ----
  // ,{
  //   n: 4,
  //   code: "a1b2c3",
  //   nom: "Sapin Gardien",
  //   element: "sapin",
  //   rarete: "rare",
  //   pv: 90,
  //   type: "Arbre millénaire · 12 m",
  //   attaques: [["Pluie d'aiguilles", "Pique tout ce qui passe.", 30]],
  //   resume: "Il se souvient de chaque Noël.",
  //   histoire: "Texte long de la fiche.",
  //   indice: "Texte de l'indice.",
  //   photo: "images/sapin.jpg"
  // }
];
