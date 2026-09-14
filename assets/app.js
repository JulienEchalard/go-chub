(() => {
  const items = [
    {
      title: "Reaching caesarean section rates below 15%: experience of a French tertiary maternity using the Robson classification system",
      subtitle: "Obstétrique · Echalard et al. · Reproductive Health 2025 · PDF",
      href: "protocoles/obstetrique/Publication.pdf",,
      keywords: "cesarean caesarean césarienne cesarienne robson classification accouchement voie basse taux césarienne echalard publication thèse these obstétrique"
    },
    {
      title: "Protocoles d’obstétrique",
      subtitle: "Documents PDF obstétricaux",
      href: "protocoles/obstétrique/index.html",
      keywords: "protocole obstétrique obstetrique pdf"
    },
    {
      title: "Protocoles de gynécologie",
      subtitle: "Documents PDF gynécologiques",
      href: "protocoles/gynécologie/index.html",
      keywords: "protocole gynécologie gynecologie pdf"
    },
    {
      title: "EPF et biométries OMS",
      subtitle: "PC, PA, LF et EPF",
      href: "calculateurs.html#oms",
      keywords: "epf biometrie oms poids fetal pc pa lf"
    },
    {
      title: "EPF et biométries OMS — SRHR",
      subtitle: "Calculateur WHO / SRHR",
      href: "calculateurs.html#srhr",
      keywords: "epf biometrie oms srhr who bip humerus"
    },
    {
      title: "Dopplers fœtaux",
      subtitle: "IP ombilicale, ACM et CPR",
      href: "calculateurs.html#doppler",
      keywords: "doppler fœtal fetal ombilicale acm cpr ip"
    },
    {
      title: "PSV ACM",
      subtitle: "MoM de la PSV de l’artère cérébrale moyenne",
      href: "calculateurs.html#psv",
      keywords: "psv acm mom anemie foetale cérébrale moyenne"
    },
    {
      title: "Clarté nucale",
      subtitle: "Percentile selon la LCC",
      href: "calculateurs.html#cn",
      keywords: "clarté nucale clarte nucale lcc cn"
    },
    {
      title: "Discordance gémellaire",
      subtitle: "Calcul de discordance d’EPF",
      href: "calculateurs.html#discordance",
      keywords: "jumeaux gemellaire discordance epf"
    },
    {
      title: "Calcul du terme",
      subtitle: "Terme actuel et date de 41 SA",
      href: "calculateurs.html#terme",
      keywords: "terme grossesse ddg 41 sa date"
    },
    {
      title: "CRAT",
      subtitle: "Médicaments, grossesse et allaitement",
      href: "https://www.lecrat.fr/",
      keywords: "crat médicament grossesse allaitement",
      external: true
    },
    {
      title: "Fetal Medicine Foundation",
      subtitle: "FMF",
      href: "https://fetalmedicine.org/",
      keywords: "fmf fetal medicine foundation",
      external: true
    }
  ];

  const normalize = (s) => (s || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

  function initSearch() {
    const input = document.getElementById("search");
    const section = document.getElementById("search-results");
    const list = document.getElementById("result-list");

    if (!input || !section || !list) return;

    const render = () => {
      const query = normalize(input.value.trim());

      if (!query) {
        section.classList.add("hidden");
        list.innerHTML = "";
        return;
      }

      const words = query.split(/\s+/).filter(Boolean);

      const results = items.filter((item) => {
        const haystack = normalize(
          `${item.title} ${item.subtitle} ${item.keywords || ""}`
        );
        return words.every((word) => haystack.includes(word));
      });

      section.classList.remove("hidden");

      if (!results.length) {
        list.innerHTML = '<div class="notice">Aucun résultat.</div>';
        return;
      }

      list.innerHTML = results.map((item) => {
        const attrs = item.external
          ? ' target="_blank" rel="noopener"'
          : '';

        return `
          <a class="toolcard" href="${item.href}"${attrs}>
            <strong>${item.title}</strong>
            <span>${item.subtitle}</span>
          </a>
        `;
      }).join("");
    };

    input.addEventListener("input", render);
    input.addEventListener("search", render);
  }

  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("sw.js").catch(() => {});
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initSearch);
  } else {
    initSearch();
  }
})();
