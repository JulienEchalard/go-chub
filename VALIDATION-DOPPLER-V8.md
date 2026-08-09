# Validation Doppler FMF – GO-CHUB V8

## Référence

Ciobanu A, Wright A, Syngelaki A, Wright D, Akolekar R, Nicolaides KH.
Fetal Medicine Foundation reference ranges for umbilical artery and middle cerebral artery pulsatility index and cerebroplacental ratio.
Ultrasound Obstet Gynecol. 2019;53:465–472. DOI: 10.1002/uog.20157.

Clarification méthodologique :
Wright et al. Reply. Ultrasound Obstet Gynecol. 2021;57:350–351. DOI: 10.1002/uog.23579.

## Équations

GA = âge gestationnel en jours.

### Artère ombilicale (UA-PI)

Median(UA-PI) = 1.6473 − 0.003005 × GA

SD(log10(UA-PI)) =
0.08713 − 0.0002936 × GA + 0.0000009355 × GA²

Z =
[log10(UA-PI mesuré) − log10(Median UA-PI)] / SD(log10 UA-PI)

### Artère cérébrale moyenne (MCA-PI)

Median(log10(MCA-PI)) =
0.3117 − 0.007100 × GA + 0.00006345 × GA² − 0.0000001443 × GA³

SD(log10(MCA-PI)) =
0.1708 − 0.001199 × GA + 0.000003211 × GA²

Z =
[log10(MCA-PI mesuré) − Median(log10 MCA-PI)] / SD(log10 MCA-PI)

### CPR

CPR = MCA-PI / UA-PI

Median(log10(CPR)) =
−0.3564 + 0.0003969 × GA + 0.00003199 × GA² − 0.00000009266 × GA³

SD(log10(CPR)) =
0.1948 − 0.001220 × GA + 0.000003262 × GA²

Z =
[log10(CPR mesuré) − Median(log10 CPR)] / SD(log10 CPR)

Le percentile est obtenu par la fonction de répartition de la loi normale standard Φ(Z).

## Contrôles publiés

- À 21+0 SA, UA-PI au P10 calculé par la publication : 0.997546.
- À 35+0 SA, MCA-PI au P75 calculé par la publication : 2.021910.

Ces deux valeurs sont reproduites par les équations intégrées dans GO-CHUB V8.
