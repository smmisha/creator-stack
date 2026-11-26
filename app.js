(function () {
  "use strict";

  const DATA = window.TOOLKIT_DATA;
  if (!DATA) return;

  const STORAGE_LANG = "socialmediamisha_stack_lang_v1";
  const STORAGE_SAVED = "socialmediamisha_stack_saved_v1";

  const urlParams = new URLSearchParams(window.location.search);
  const urlLang = urlParams.get("lang");
  const initialLang =
    urlLang === "en" || urlLang === "ru"
      ? urlLang
      : localStorage.getItem(STORAGE_LANG) === "en"
      ? "en"
      : "ru";

  let savedIds;
  try {
    const rawSaved = JSON.parse(localStorage.getItem(STORAGE_SAVED) || "[]");
    savedIds = new Set(Array.isArray(rawSaved) ? rawSaved : []);
  } catch (_) {
    savedIds = new Set();
  }

  const state = {
    lang: initialLang,
    category: "all",
    purpose: "all",
    pricing: "all",
    savedOnly: false,
    query: "",
    stagePaused: false
  };

  const els = {
    brandTitle: document.getElementById("brand-title"),
    heroTitle: document.getElementById("hero-title"),
    heroSubtitle: document.getElementById("hero-subtitle"),
    heroJumpBtn: document.getElementById("hero-jump-btn"),
    heroCtaMain: document.getElementById("hero-cta-main"),
    heroCtaSub: document.getElementById("hero-cta-sub"),
    stackStage: document.getElementById("stack-stage"),
    stageLabel: document.getElementById("stage-label"),
    stageMeta: document.getElementById("stage-meta"),
    stageLanesList: document.getElementById("stage-lanes-list"),
    stageToggleBtn: document.getElementById("stage-toggle-btn"),
    stageToggleLabel: document.getElementById("stage-toggle-label"),
    catalogStart: document.getElementById("catalog-start"),
    searchInput: document.getElementById("search-input"),
    searchLabel: document.getElementById("search-label"),
    breakdownLabel: document.getElementById("breakdown-label"),
    shownCounter: document.getElementById("shown-counter"),
    breakdownTrack: document.getElementById("breakdown-track"),
    breakdownLegend: document.getElementById("breakdown-legend"),
    categoryPills: document.getElementById("category-pills"),
    purposeGroup: document.getElementById("purpose-group"),
    pricingGroup: document.getElementById("pricing-group"),
    savedFilterBtn: document.getElementById("saved-filter-btn"),
    savedBtnLabel: document.getElementById("saved-btn-label"),
    savedCount: document.getElementById("saved-count"),
    toolsGrid: document.getElementById("tools-grid"),
    emptyBox: document.getElementById("empty-box"),
    emptyTitle: document.getElementById("empty-title"),
    resetFiltersBtn: document.getElementById("reset-filters-btn"),
    footerLeft: document.getElementById("footer-left"),
    toast: document.getElementById("toast")
  };

  const LANE_SAMPLES = {
    video: "Remotion, Rough.js, Three.js",
    media: "Real-ESRGAN, Openverse, Drama 3",
    design: "shadcn/ui, React Bits, tweakcn",
    fonts: "Google Fonts, Iconify, Fontshare",
    skills: "Impeccable, Hallmark, UI/UX Pro Max",
    utils: "Cloudflare Tunnel, PhoText, Tost UI"
  };

  let toastTimer = null;
  function showToast(message) {
    els.toast.textContent = message;
    els.toast.classList.add("is-visible");
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(function () {
      els.toast.classList.remove("is-visible");
    }, 1800);
  }

  function svgEl(paths, fillMode) {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("viewBox", "0 0 24 24");
    svg.setAttribute("fill", fillMode || "none");
    svg.setAttribute("stroke", "currentColor");
    svg.setAttribute("stroke-width", "1.6");
    svg.setAttribute("stroke-linecap", "round");
    svg.setAttribute("stroke-linejoin", "round");
    svg.setAttribute("aria-hidden", "true");
    paths.forEach(function (spec) {
      const node = document.createElementNS("http://www.w3.org/2000/svg", spec.tag);
      Object.keys(spec.attrs).forEach(function (k) {
        node.setAttribute(k, spec.attrs[k]);
      });
      svg.appendChild(node);
    });
    return svg;
  }

  function copyIconSvg() {
    return svgEl([
      { tag: "rect", attrs: { x: "9", y: "9", width: "13", height: "13", rx: "2", ry: "2" } },
      { tag: "path", attrs: { d: "M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" } }
    ]);
  }

  function bookmarkIconSvg(active) {
    return svgEl(
      [{ tag: "path", attrs: { d: "M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" } }],
      active ? "currentColor" : "none"
    );
  }

  function externalIconSvg() {
    return svgEl([
      { tag: "path", attrs: { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" } },
      { tag: "polyline", attrs: { points: "15 3 21 3 21 9" } },
      { tag: "line", attrs: { x1: "10", y1: "14", x2: "21", y2: "3" } }
    ]);
  }

  function categoryCounts() {
    const counts = {};
    DATA.categories.forEach(function (c) {
      counts[c.id] = 0;
    });
    DATA.tools.forEach(function (t) {
      counts[t.category] = (counts[t.category] || 0) + 1;
    });
    return counts;
  }

  function filteredTools() {
    const q = state.query.trim().toLowerCase();
    return DATA.tools.filter(function (tool) {
      if (state.category !== "all" && tool.category !== state.category) return false;
      if (state.purpose !== "all" && !tool.targets.includes(state.purpose)) return false;
      if (state.pricing === "free_oss" && tool.pricing === "freemium") return false;
      if (state.pricing === "freemium" && tool.pricing !== "freemium") return false;
      if (state.savedOnly && !savedIds.has(tool.id)) return false;
      if (q) {
        const cat = DATA.categories.find(function (c) {
          return c.id === tool.category;
        });
        const hay = [
          tool.name,
          tool.domain,
          tool.desc[state.lang],
          tool.caveat[state.lang],
          cat ? cat.label[state.lang] : ""
        ]
          .join(" ")
          .toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    });
  }

  function renderHeroLanes() {
    if (!els.stageLanesList) return;
    const counts = categoryCounts();
    els.stageLanesList.textContent = "";

    DATA.categories.forEach(function (cat) {
      const cnt = counts[cat.id] || 0;
      const active = state.category === cat.id;

      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "lane-row";
      btn.style.setProperty("--lane-color", cat.color);
      btn.setAttribute("aria-pressed", String(active));

      const name = document.createElement("span");
      name.className = "lane-name";
      name.textContent = cat.label[state.lang];

      const clip = document.createElement("span");
      clip.className = "lane-clip";
      clip.textContent = LANE_SAMPLES[cat.id] || cat.label[state.lang];

      const countEl = document.createElement("span");
      countEl.className = "lane-count";
      countEl.textContent = String(cnt);

      btn.appendChild(name);
      btn.appendChild(clip);
      btn.appendChild(countEl);

      btn.addEventListener("click", function () {
        state.category = state.category === cat.id ? "all" : cat.id;
        state.savedOnly = false;
        renderAll();
        els.catalogStart.scrollIntoView({ behavior: "smooth", block: "start" });
      });

      els.stageLanesList.appendChild(btn);
    });
  }

  function renderBreakdown() {
    const counts = categoryCounts();
    const total = DATA.tools.length;
    els.breakdownTrack.textContent = "";
    els.breakdownLegend.textContent = "";

    DATA.categories.forEach(function (cat) {
      const cnt = counts[cat.id] || 0;
      const pct = ((cnt / total) * 100).toFixed(2) + "%";
      const active = state.category === cat.id;

      const seg = document.createElement("button");
      seg.type = "button";
      seg.className = "breakdown-segment";
      seg.style.width = pct;
      seg.style.backgroundColor = cat.color;
      seg.setAttribute("aria-pressed", String(active));
      seg.setAttribute("aria-label", cat.label[state.lang] + ": " + cnt);
      seg.title = cat.label[state.lang] + " (" + cnt + ")";
      seg.addEventListener("click", function () {
        state.category = state.category === cat.id ? "all" : cat.id;
        renderAll();
      });
      els.breakdownTrack.appendChild(seg);

      const leg = document.createElement("button");
      leg.type = "button";
      leg.className = "legend-item";
      leg.setAttribute("aria-pressed", String(active));
      const swatch = document.createElement("span");
      swatch.className = "legend-swatch";
      swatch.style.backgroundColor = cat.color;
      const txt = document.createElement("span");
      txt.textContent = cat.label[state.lang];
      const num = document.createElement("span");
      num.className = "legend-num";
      num.textContent = String(cnt);
      leg.appendChild(swatch);
      leg.appendChild(txt);
      leg.appendChild(num);
      leg.addEventListener("click", function () {
        state.category = state.category === cat.id ? "all" : cat.id;
        renderAll();
      });
      els.breakdownLegend.appendChild(leg);
    });
  }

  function renderCategoryPills() {
    const T = DATA.ui[state.lang];
    const counts = categoryCounts();
    els.categoryPills.textContent = "";

    function makePill(id, label, count) {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "pill";
      btn.setAttribute("aria-pressed", String(state.category === id));
      const lSpan = document.createElement("span");
      lSpan.textContent = label;
      const cSpan = document.createElement("span");
      cSpan.className = "pill-count";
      cSpan.textContent = String(count);
      btn.appendChild(lSpan);
      btn.appendChild(cSpan);
      btn.addEventListener("click", function () {
        state.category = id;
        renderAll();
      });
      els.categoryPills.appendChild(btn);
    }

    makePill("all", T.catAll, DATA.tools.length);
    DATA.categories.forEach(function (cat) {
      makePill(cat.id, cat.label[state.lang], counts[cat.id] || 0);
    });
  }

  function renderGrid() {
    const T = DATA.ui[state.lang];
    const items = filteredTools();
    els.shownCounter.textContent = items.length + " / " + DATA.tools.length + " " + T.statShown;
    els.savedCount.textContent = String(savedIds.size);
    els.savedFilterBtn.setAttribute("aria-pressed", String(state.savedOnly));
    els.toolsGrid.textContent = "";

    if (items.length === 0) {
      els.emptyBox.hidden = false;
      return;
    }
    els.emptyBox.hidden = true;

    const catById = {};
    DATA.categories.forEach(function (c) {
      catById[c.id] = c;
    });

    items.forEach(function (tool) {
      const cat = catById[tool.category];
      const isSaved = savedIds.has(tool.id);

      const card = document.createElement("article");
      card.className = "tool-card";

      const top = document.createElement("div");
      top.className = "tool-card-top";

      const heading = document.createElement("div");
      heading.className = "tool-heading";

      const nameEl = document.createElement("h3");
      nameEl.className = "tool-name";
      nameEl.textContent = tool.name;

      const domEl = document.createElement("span");
      domEl.className = "tool-domain";
      domEl.textContent = tool.domain;

      heading.appendChild(nameEl);
      heading.appendChild(domEl);

      const badge = document.createElement("span");
      badge.className = "status-badge" + (tool.pricing === "freemium" ? " is-freemium" : "");
      badge.textContent = T.pricingLabels[tool.pricing] || tool.pricing;

      top.appendChild(heading);
      top.appendChild(badge);

      const body = document.createElement("div");
      const descEl = document.createElement("p");
      descEl.className = "tool-desc";
      descEl.textContent = tool.desc[state.lang];
      const caveatEl = document.createElement("p");
      caveatEl.className = "tool-caveat";
      caveatEl.textContent = tool.caveat[state.lang];
      body.appendChild(descEl);
      body.appendChild(caveatEl);

      const footer = document.createElement("div");
      footer.className = "tool-footer";

      const tags = document.createElement("div");
      tags.className = "tag-row";

      const catTag = document.createElement("span");
      catTag.className = "meta-tag";
      const catSwatch = document.createElement("span");
      catSwatch.className = "legend-swatch";
      catSwatch.style.backgroundColor = cat ? cat.color : "#6F5A46";
      const catName = document.createElement("span");
      catName.textContent = cat ? cat.label[state.lang] : tool.category;
      catTag.appendChild(catSwatch);
      catTag.appendChild(catName);
      tags.appendChild(catTag);

      tool.targets.forEach(function (tg) {
        const tTag = document.createElement("span");
        tTag.className = "meta-tag";
        tTag.textContent = tg === "video" ? T.targetVideo : T.targetWeb;
        tags.appendChild(tTag);
      });

      if (tool.featured) {
        const fTag = document.createElement("span");
        fTag.className = "meta-tag is-featured";
        fTag.textContent = T.featuredTag;
        tags.appendChild(fTag);
      }

      const actions = document.createElement("div");
      actions.className = "card-actions";

      const copyBtn = document.createElement("button");
      copyBtn.type = "button";
      copyBtn.className = "icon-btn";
      copyBtn.title = T.copyBtn;
      copyBtn.setAttribute("aria-label", T.copyBtn + ": " + tool.name);
      copyBtn.appendChild(copyIconSvg());
      copyBtn.addEventListener("click", function () {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(tool.url).catch(function () {});
        }
        showToast(T.copiedBtn + ": " + tool.domain);
      });

      const bmBtn = document.createElement("button");
      bmBtn.type = "button";
      bmBtn.className = "icon-btn";
      bmBtn.setAttribute("aria-pressed", String(isSaved));
      bmBtn.title = isSaved ? T.bookmarkRemove : T.bookmarkAdd;
      bmBtn.setAttribute("aria-label", (isSaved ? T.bookmarkRemove : T.bookmarkAdd) + ": " + tool.name);
      bmBtn.appendChild(bookmarkIconSvg(isSaved));
      bmBtn.addEventListener("click", function () {
        if (savedIds.has(tool.id)) {
          savedIds.delete(tool.id);
        } else {
          savedIds.add(tool.id);
        }
        try {
          localStorage.setItem(STORAGE_SAVED, JSON.stringify(Array.from(savedIds)));
        } catch (_) {}
        renderGrid();
      });

      const openLink = document.createElement("a");
      openLink.className = "action-link";
      openLink.href = tool.url;
      openLink.target = "_blank";
      openLink.rel = "noopener noreferrer";
      const openTxt = document.createElement("span");
      openTxt.textContent = T.openBtn;
      openLink.appendChild(openTxt);
      openLink.appendChild(externalIconSvg());

      actions.appendChild(copyBtn);
      actions.appendChild(bmBtn);
      actions.appendChild(openLink);

      footer.appendChild(tags);
      footer.appendChild(actions);

      card.appendChild(top);
      card.appendChild(body);
      card.appendChild(footer);
      els.toolsGrid.appendChild(card);
    });
  }

  function applyStaticCopy() {
    const T = DATA.ui[state.lang];
    document.documentElement.lang = state.lang;
    els.brandTitle.textContent = T.brandTitle;
    els.heroTitle.textContent = T.heroTitle;
    els.heroSubtitle.textContent = T.heroSubtitle;
    els.heroCtaMain.textContent = T.heroCta;
    els.heroCtaSub.textContent = T.heroCtaSub;
    els.stageLabel.textContent = T.stageLabel;
    els.stageMeta.textContent = T.stageMeta;
    els.stageToggleLabel.textContent = state.stagePaused ? T.playLabel : T.pauseLabel;
    els.searchInput.placeholder = T.searchPlaceholder;
    els.searchLabel.textContent = T.searchPlaceholder;
    els.breakdownLabel.textContent = T.distributionLabel;
    els.savedBtnLabel.textContent = T.savedBtn;
    els.emptyTitle.textContent = T.emptyTitle;
    els.resetFiltersBtn.textContent = T.emptyAction;
    els.footerLeft.textContent = T.footerLeft;

    document.querySelectorAll(".lang-btn").forEach(function (btn) {
      btn.setAttribute("aria-pressed", String(btn.dataset.lang === state.lang));
    });

    const pLabels = { all: T.purposeAll, video: T.purposeVideo, web: T.purposeWeb };
    els.purposeGroup.querySelectorAll(".seg-btn").forEach(function (btn) {
      btn.textContent = pLabels[btn.dataset.purpose];
      btn.setAttribute("aria-pressed", String(btn.dataset.purpose === state.purpose));
    });

    const rLabels = { all: T.priceAll, free_oss: T.priceFree, freemium: T.priceFreemium };
    els.pricingGroup.querySelectorAll(".seg-btn").forEach(function (btn) {
      btn.textContent = rLabels[btn.dataset.pricing];
      btn.setAttribute("aria-pressed", String(btn.dataset.pricing === state.pricing));
    });
  }

  function renderAll() {
    applyStaticCopy();
    renderHeroLanes();
    renderBreakdown();
    renderCategoryPills();
    renderGrid();
  }

  // Hero actions
  els.heroJumpBtn.addEventListener("click", function () {
    els.catalogStart.scrollIntoView({ behavior: "smooth", block: "start" });
  });

  els.stageToggleBtn.addEventListener("click", function () {
    state.stagePaused = !state.stagePaused;
    els.stackStage.classList.toggle("is-paused", state.stagePaused);
    els.stageToggleBtn.setAttribute("aria-pressed", String(state.stagePaused));
    const T = DATA.ui[state.lang];
    els.stageToggleLabel.textContent = state.stagePaused ? T.playLabel : T.pauseLabel;
  });

  // Controls
  document.querySelectorAll(".lang-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      state.lang = btn.dataset.lang === "en" ? "en" : "ru";
      try {
        localStorage.setItem(STORAGE_LANG, state.lang);
      } catch (_) {}
      renderAll();
    });
  });

  els.purposeGroup.querySelectorAll(".seg-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      state.purpose = btn.dataset.purpose;
      renderAll();
    });
  });

  els.pricingGroup.querySelectorAll(".seg-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      state.pricing = btn.dataset.pricing;
      renderAll();
    });
  });

  els.savedFilterBtn.addEventListener("click", function () {
    state.savedOnly = !state.savedOnly;
    renderAll();
  });

  els.searchInput.addEventListener("input", function () {
    state.query = els.searchInput.value;
    renderGrid();
  });

  els.resetFiltersBtn.addEventListener("click", function () {
    state.category = "all";
    state.purpose = "all";
    state.pricing = "all";
    state.savedOnly = false;
    state.query = "";
    els.searchInput.value = "";
    renderAll();
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "/" && document.activeElement !== els.searchInput && !e.metaKey && !e.ctrlKey && !e.altKey) {
      const tag = (document.activeElement && document.activeElement.tagName) || "";
      if (tag !== "INPUT" && tag !== "TEXTAREA") {
        e.preventDefault();
        els.searchInput.focus();
      }
    } else if (e.key === "Escape" && document.activeElement === els.searchInput) {
      if (els.searchInput.value) {
        state.query = "";
        els.searchInput.value = "";
        renderGrid();
      } else {
        els.searchInput.blur();
      }
    }
  });

  renderAll();
})();
