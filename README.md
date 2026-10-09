# Portfolio Sid'Taher Oumar

Portfolio bilingue FR/EN construit avec Next.js App Router, TypeScript, Tailwind CSS, Motion for React et Lucide React.

## Lancer le projet

```bash
npm install
npm run dev
```

Le site démarre par défaut sur `http://localhost:3000`.

## Personnalisation

- Contenus, traductions, projets, coordonnées et liens : `lib/content.ts`
- Composants principaux : `components/portfolio.tsx`
- Images projets : `public/images/`
- CV PDF consultable et téléchargeable : `public/cv/siditaher-oumar-cv.pdf`
- Portrait : `public/images/siditaher-oumar-portrait.png`
- Niveaux de langues et échelle CECRL : `lib/languages.json` (français B2, anglais B1)
- Styles globaux et tokens visuels : `app/globals.css` et `tailwind.config.ts`

Le parcours, les six projets, les compétences, les certifications et le lien LinkedIn sont renseignés à partir du CV fourni. Les liens publics des projets restent à compléter.

Le CV publié présente la progression en langues sur l'échelle A1 à C2 en noir et blanc, sans photo. Le script `scripts/update-cv.py` ajoute les langues au PDF original avec ReportLab et pypdf, sans modifier son contenu existant.

## Vérification

```bash
npm run build
```

Le formulaire de contact ouvre le client e-mail avec le message prérempli. Pour un envoi serveur, connecter une API Route Next.js ou un service comme Resend/Formspree.
