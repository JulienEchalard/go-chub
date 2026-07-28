# GO-CHUB

Site statique gratuit pour les protocoles et outils de gynécologie-obstétrique.

## Mise en ligne sur GitHub Pages

1. Dans le dépôt GitHub, clique sur **Ajouter un fichier** puis **Téléverser des fichiers**.
2. Décompresse l’archive et dépose **le contenu du dossier**, pas le dossier lui-même.
3. Valide avec **Commit changes**.
4. Ouvre **Settings > Pages**.
5. Dans **Build and deployment**, choisis **Deploy from a branch**.
6. Sélectionne la branche **main** et le dossier **/(root)** puis **Save**.

Le site sera ensuite disponible à une adresse du type :
`https://julienechalard.github.io/go-chub/`

## Ajouter un protocole PDF

- Obstétrique : déposer le PDF dans `protocoles/obstetrique/`
- Gynécologie : déposer le PDF dans `protocoles/gynecologie/`

Puis modifier le fichier `index.html` du dossier concerné et ajouter un lien :

```html
<a class="result" href="preeclampsie.pdf">
  <strong>Prééclampsie</strong>
  <small>Version juin 2026</small>
</a>
```

Éviter les espaces et accents dans les noms des fichiers.

## Sécurité

Ne jamais publier de données patientes, de coordonnées privées ou de documents non destinés à être publics.
