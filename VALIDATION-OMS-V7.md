# Validation V7 contre les cas Port-Royal fournis

| AG | Mesure | Port-Royal | V7 | Écart |
|---:|---|---:|---:|---:|
| 14+0 | PC 100 mm | 52.9 | 52.9 | +0.0 |
| 14+0 | PA 89 mm | 89.0 | 89.0 | +0.0 |
| 14+0 | LF 16 mm | 95.8 | 95.8 | +0.0 |
| 14+0 | EPF 107 g | 93.2 | 93.2 | +0.0 |
| 20+0 | PC 181 mm | 82.8 | 82.8 | +0.0 |
| 20+0 | PA 148 mm | 43.2 | 43.2 | +0.0 |
| 20+0 | LF 32 mm | 47.3 | 47.3 | +0.0 |
| 20+0 | EPF 330,5 g (entier utilisé : 330 g) | 49.8 | 49.8 | +0.0 |
| 26+0 | PC 234 mm | 15.2 | 15.2 | +0.0 |
| 26+0 | PA 206 mm | 12.3 | 12.3 | +0.0 |
| 26+0 | LF 47 mm | 34.7 | 34.7 | +0.0 |
| 26+0 | EPF 804,7 g (entier utilisé : 804 g) | 16.2 | 16.2 | +0.0 |
| 31+0 | PC 276 mm | 11.4 | 11.4 | +0.0 |
| 31+0 | PA 250 mm | 8.6 | 8.6 | +0.0 |
| 31+0 | LF 58 mm | 40.4 | 40.4 | +0.0 |
| 31+0 | EPF 1445,5 g (entier utilisé : 1445 g) | 8.3 | 8.3 | +0.0 |
| 32+0 | PC 290 mm | 29.1 | 29.1 | +0.0 |
| 32+0 | PA 260 mm | 9.9 | 9.9 | +0.0 |
| 32+0 | LF 62 mm | 66.5 | 66.5 | +0.0 |
| 32+0 | EPF 1695 g | 17.4 | 17.4 | +0.0 |
| 35+0 | PC 324 mm | 76.8 | 76.8 | +0.0 |
| 35+0 | PA 332 mm | 92.6 | 92.6 | +0.0 |
| 35+0 | LF 69 mm | 74.4 | 74.4 | +0.0 |
| 39+0 | PC 324 mm | 16.3 | 16.3 | +0.0 |
| 39+0 | PA 332 mm | 19.3 | 19.3 | +0.0 |
| 39+0 | LF 69 mm | 8.9 | 8.9 | +0.0 |
| 40+0 | PC 326 mm | 11.0 | 11.0 | +0.0 |
| 40+0 | PA 327 mm | 4.9 | 4.9 | +0.0 |
| 40+0 | LF 75 mm | 67.5 | 67.5 | +0.0 |
| 40+0 | EPF 3108.6 g | 11.4 | 11.4 | +0.0 |

Tous les cas de référence disponibles sont concordants à la décimale affichée. Comme Port-Royal, la valeur est tronquée à l’entier avec `parseInt` avant le calcul du percentile, y compris pour l’EPF affichée avec une décimale.

## Formule

`Q_p(AG) = exp(b0 + b1·AG + b2·AG² + b3·AG³ + b4·AG⁴)`

Entre deux quantiles encadrants `(p1,Q1)` et `(p2,Q2)` :

`p = p1 + (mesure − Q1)/(Q2 − Q1) × (p2 − p1)`
