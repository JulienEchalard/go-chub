# Correctif V7.3

Le fichier des coefficients OMS est désormais intégré directement dans `calculateurs.html`.
Cela évite l'échec silencieux de chargement de `assets/who-coefficients.json` observé sur certaines installations/PWA, qui laissait PC, PA et EPF à « — » alors que la LF pouvait rester disponible via une version mise en cache.

Le calcul utilise les clés suivantes :
- PC : `HC`
- PA : `AC`
- LF : `FL`
- EPF : `EFW`

Le cache PWA est renommé `go-chub-v7-3`.
