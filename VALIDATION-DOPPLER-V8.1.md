# GO-CHUB V8.1 — Doppler FMF

## Affichage final
- Percentile entier uniquement (P0 à P100), sans z-score.
- Vert par défaut.
- Rouge si UA-PI > P95.
- Rouge si CPR < P5.
- MCA-PI reste affiché sans alerte colorée spécifique.

## Correction MCA tardive
Les équations publiées de Ciobanu et al. reproduisent les exemples FMF publiés et les comparaisons utilisateur à 32–33 SA.
Le calculateur FMF archivé observé par comparaison directe montre cependant une dispersion MCA plus étroite à 38 SA.

Ancrages utilisés :
- 35+0 SA : SD MCA publiée, facteur 1.000.
- 38+0 SA : facteur 0.8126 appliqué à la SD(log10 MCA), dérivé des deux contrôles officiels :
  - MCA-PI 1.80 → z ≈ 0.909 / percentile ≈ 82.
  - MCA-PI 2.00 → z ≈ 1.629 / percentile ≈ 95.

Entre 35 et 38 SA : interpolation linéaire du facteur.
À partir de 38 SA : facteur 0.8126 maintenu.

Cette correction est destinée à reproduire l’outil FMF archivé observé. Elle doit encore être testée sur plusieurs valeurs à 36–42 SA avant validation institutionnelle définitive.
