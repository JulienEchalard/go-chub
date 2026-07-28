# GO-CHUB V3

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
