# GO-CHUB V8

## Mise à jour sur GitHub

Décompressez l’archive, puis téléversez tout son contenu dans le dépôt GitHub. Acceptez le remplacement des fichiers existants et validez les modifications.

## Calculateur OMS

Le calculateur utilise les tables du fichier complémentaire de :

Kiserud T, et al. The World Health Organization Fetal Growth Charts. PLOS Medicine. 2017;14:e1002220.

Les percentiles de PC, PA, LF et EPF sont obtenus par interpolation :
- entre les semaines complètes pour les jours ;
- entre les percentiles publiés pour la mesure.

La table EPF utilisée dans cette version est la référence globale, indépendamment du sexe. Le sélecteur de sexe est présent mais ne modifie pas encore le résultat.

## Ajouter un PDF

Placez le PDF dans `protocoles/obstetrique/` ou `protocoles/gynecologie/`, puis ajoutez un lien dans le fichier `index.html` du dossier concerné.

Ne publiez aucune donnée de patiente.


## Nouveautés V3
- Calcul automatique de l’EPF à partir du PC, du PA et de la LF.
- Formule Hadlock HC–PA–LF.
- Percentiles calculés à partir des coefficients de régression quantile OMS.
- Nouveau cache PWA pour éviter l’affichage persistant de l’ancienne version.


## Nouveautés V4
- Affichage automatique des percentiles biométriques pendant la saisie.
- Calcul automatique et instantané de l’EPF dès que PC, PA et LF sont complets.
- Module Doppler avec saisie AO et ACM et calcul instantané du CPR.
- Intégration du calculateur officiel FMF pour les z-scores, centiles et courbes Doppler.


## Nouveautés V5
- Le module Doppler reste dans la rubrique Calculateurs et affiche directement le calculateur officiel FMF.
- Suppression du calcul parallèle AO/ACM/CPR devenu redondant.
- Ajout d’un bouton « Copier » pour générer une phrase prête à coller dans un compte rendu.
- Le rendu des cartes de biométrie et de l’EPF reste inchangé.


## Nouveautés V7
- Ajout du calculateur de clarté nucale selon la LCC via l’outil de référence Perinatology.
- Ajout du calculateur Fenton 2025 officiel PediTools, utilisable avec le sexe, l’âge gestationnel, le poids, la taille et le PC.
- Refonte du calculateur de terme : âge gestationnel à la date du jour et date de 41 SA à partir de la DDG.
- Correction obstétricale : une DDG correspond à 2 SA ; le terme de 41 SA est obtenu par DDG + 273 jours.


## Correction V7 – calcul OMS

La V7 reproduit l’algorithme observé dans le calculateur OMS de la Maternité Port-Royal :

- courbes quantiles P2,5, P5, P10, P25, P50, P75, P90, P95 et P97,5 ;
- valeur de chaque courbe : `exp(b0 + b1×AG + b2×AG² + b3×AG³ + b4×AG⁴)` ;
- interpolation linéaire du percentile entre les deux courbes encadrant la mesure ;
- affichage `< P2,5` ou `> P97,5` hors des bornes ;
- formule d’Hadlock 3 inchangée pour l’EPF.

Les coefficients PC, PA, LF et EPF ont été alignés sur ceux embarqués par Port-Royal.


## Correction V7 – calcul OMS

La V7 reproduit l’algorithme observé dans le calculateur OMS de la Maternité Port-Royal :

- courbes quantiles P2,5, P5, P10, P25, P50, P75, P90, P95 et P97,5 ;
- valeur de chaque courbe : `exp(b0 + b1×AG + b2×AG² + b3×AG³ + b4×AG⁴)` ;
- interpolation linéaire du percentile entre les deux courbes encadrant la mesure ;
- affichage `< P2,5` ou `> P97,5` hors des bornes ;
- formule d’Hadlock 3 inchangée pour l’EPF.

Les coefficients PC, PA, LF et EPF ont été alignés sur ceux embarqués par Port-Royal.


## Correctif V7.1
Correction de l’évaluation polynomiale : PC, PA et EPF utilisent quatre coefficients, tandis que la LF en utilise cinq. La V7 supposait à tort un cinquième coefficient pour toutes les biométries, produisant `NaN` pour PC, PA et EPF.


## Correctif V7.3
Les coefficients OMS sont désormais intégrés directement dans `calculateurs.html`. Cela supprime la dépendance au chargement asynchrone de `assets/who-coefficients.json`, qui pouvait laisser PC, PA et EPF sans résultat selon le cache/PWA. Cache renommé `go-chub-v7-2`.


## Nouveautés V8 – Doppler natif FMF
- Suppression de l’iframe comme interface principale.
- Saisie directe du terme, de l’IP ombilical et de l’IP ACM.
- CPR calculé automatiquement.
- Percentile et z-score instantanés pour AO, ACM et CPR.
- Équations et coefficients FMF publiés intégrés directement dans GO-CHUB.
- Bouton Copier.
- Le lien vers le calculateur FMF reste disponible uniquement pour comparaison/validation.


## V8.1
- Percentiles Doppler arrondis à l'entier.
- Z-scores masqués.
- Vert si normal.
- Rouge si UA-PI > P95.
- Rouge si CPR < P5.
- Correction spécifique de la dispersion MCA en fin de grossesse pour se rapprocher du calculateur FMF archivé.
