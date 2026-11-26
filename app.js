(function () {
  "use strict";

  const DATA = window.TOOLKIT_DATA;
  if (!DATA) return;

  const STORAGE_LANG = "creator_stack_lang_v1";
  const STORAGE_SAVED = "creator_stack_saved_v1";

  // Showcase runs smooth, gentle non-vestibular motion by default; pause only if explicit pause flag set
  const motionPaused = false;

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
    query: ""
  };

  const els = {
    scrollProgress: document.getElementById("scroll-progress"),
    brandTitle: document.getElementById("brand-title"),
    authorLink: document.getElementById("author-link"),
    heroBand: document.querySelector(".hero-band"),
    heroBadge: document.getElementById("hero-badge"),
    heroTitle: document.getElementById("hero-title"),
    heroSubtitle: document.getElementById("hero-subtitle"),
    kpiToolsLbl: document.getElementById("kpi-tools-lbl"),
    kpiCatsLbl: document.getElementById("kpi-cats-lbl"),
    kpiFilteredLbl: document.getElementById("kpi-filtered-lbl"),
    heroStage: document.getElementById("hero-stage"),
    stageVideoBtn: document.getElementById("stage-video-btn"),
    stageWebBtn: document.getElementById("stage-web-btn"),
    stageAuditBtn: document.getElementById("stage-audit-btn"),
    stageVideoTag: document.getElementById("stage-video-tag"),
    stageVideoTitle: document.getElementById("stage-video-title"),
    stageVideoSub: document.getElementById("stage-video-sub"),
    stageTimecode: document.getElementById("stage-timecode"),
    stageWebTag: document.getElementById("stage-web-tag"),
    stageWebTitle: document.getElementById("stage-web-title"),
    stageWebSub: document.getElementById("stage-web-sub"),
    stageAuditTag: document.getElementById("stage-audit-tag"),
    stageAuditTitle: document.getElementById("stage-audit-title"),
    stageAuditSub: document.getElementById("stage-audit-sub"),
    bezierPath: document.getElementById("bezier-path"),
    bezierDot: document.getElementById("bezier-dot"),
    marqueeTrack: document.getElementById("marquee-track"),
    catalogStart: document.getElementById("catalog-start"),
    searchInput: document.getElementById("search-input"),
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
    auditBox: document.getElementById("audit-box"),
    rejectedSummary: document.getElementById("rejected-summary"),
    rejectedIntro: document.getElementById("rejected-intro"),
    rejectedColTool: document.getElementById("rejected-col-tool"),
    rejectedColReason: document.getElementById("rejected-col-reason"),
    rejectedTbody: document.getElementById("rejected-tbody"),
    footerLeft: document.getElementById("footer-left"),
    footerRight: document.getElementById("footer-right"),
    toast: document.getElementById("toast")
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
    svg.setAttribute("stroke-width", "1.5");
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

  function renderMarquee() {
    if (!els.marqueeTrack) return;
    const catById = {};
    DATA.categories.forEach(function (c) {
      catById[c.id] = c;
    });
    const featured = DATA.tools.filter(function (t) {
      return t.featured;
    });
    const items = featured.concat(featured);
    els.marqueeTrack.textContent = "";
    items.forEach(function (t) {
      const span = document.createElement("span");
      span.className = "marquee-item";
      const dot = document.createElement("span");
      dot.className = "marquee-dot";
      dot.style.backgroundColor = (catById[t.category] && catById[t.category].color) || "#22C55E";
      const name = document.createElement("span");
      name.textContent = t.name;
      span.appendChild(dot);
      span.appendChild(name);
      els.marqueeTrack.appendChild(span);
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
        renderAll(true);
      });
      els.breakdownTrack.appendChild(seg);

      const leg = document.createElement("button");
      leg.type = "button";
      leg.className = "legend-item";
      leg.setAttribute("aria-pressed", String(active));
      const dot = document.createElement("span");
      dot.className = "legend-dot";
      dot.style.backgroundColor = cat.color;
      const txt = document.createElement("span");
      txt.textContent = cat.label[state.lang];
      const num = document.createElement("span");
      num.className = "legend-num";
      num.textContent = String(cnt);
      leg.appendChild(dot);
      leg.appendChild(txt);
      leg.appendChild(num);
      leg.addEventListener("click", function () {
        state.category = state.category === cat.id ? "all" : cat.id;
        renderAll(true);
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
        renderAll(true);
      });
      els.categoryPills.appendChild(btn);
    }

    makePill("all", T.catAll, DATA.tools.length);
    DATA.categories.forEach(function (cat) {
      makePill(cat.id, cat.label[state.lang], counts[cat.id] || 0);
    });
  }

  function animateGridCards() {
    if (motionPaused || (typeof window.gsap !== "object" && typeof window.gsap !== "function")) return;
    const cards = els.toolsGrid.querySelectorAll(".tool-card");
    if (!cards.length) return;
    window.gsap.killTweensOf(cards);
    window.gsap.fromTo(
      cards,
      { opacity: 0, y: 14 },
      {
        opacity: 1,
        y: 0,
        duration: 0.34,
        stagger: { each: 0.018, from: "start" },
        ease: "power2.out",
        clearProps: "transform,opacity"
      }
    );
  }

  function renderGrid(shouldAnimate) {
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

    items.forEach(function (tool, idx) {
      const cat = catById[tool.category];
      const isSaved = savedIds.has(tool.id);

      const card = document.createElement("article");
      card.className = "tool-card";
      if (cat) {
        card.style.setProperty("--cat-color", cat.color);
      }

      const top = document.createElement("div");
      top.className = "tool-card-top";

      const idRow = document.createElement("div");
      idRow.className = "tool-id-row";

      const numSpan = document.createElement("span");
      numSpan.className = "tool-index";
      numSpan.textContent = String(idx + 1).padStart(2, "0");

      const heading = document.createElement("div");
      heading.className = "tool-heading";

      const nameEl = document.createElement("h2");
      nameEl.className = "tool-name";
      nameEl.textContent = tool.name;

      const domEl = document.createElement("span");
      domEl.className = "tool-domain";
      domEl.textContent = tool.domain;

      heading.appendChild(nameEl);
      heading.appendChild(domEl);
      idRow.appendChild(numSpan);
      idRow.appendChild(heading);

      const badge = document.createElement("span");
      badge.className = "status-badge";
      const sDot = document.createElement("span");
      sDot.className = "status-dot" + (tool.pricing === "freemium" ? " is-freemium" : "");
      const sTxt = document.createElement("span");
      sTxt.textContent = T.pricingLabels[tool.pricing] || tool.pricing;
      badge.appendChild(sDot);
      badge.appendChild(sTxt);

      top.appendChild(idRow);
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
      const catDot = document.createElement("span");
      catDot.className = "legend-dot";
      catDot.style.backgroundColor = cat ? cat.color : "#94A3B8";
      const catName = document.createElement("span");
      catName.textContent = cat ? cat.label[state.lang] : tool.category;
      catTag.appendChild(catDot);
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
        renderGrid(false);
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

    if (shouldAnimate) {
      animateGridCards();
    }
  }

  function renderRejected() {
    const T = DATA.ui[state.lang];
    els.rejectedSummary.textContent = T.rejectedSummary;
    els.rejectedIntro.textContent = T.rejectedIntro;
    els.rejectedColTool.textContent = T.rejectedColTool;
    els.rejectedColReason.textContent = T.rejectedColReason;
    els.rejectedTbody.textContent = "";

    DATA.rejected.forEach(function (item) {
      const tr = document.createElement("tr");
      const tdName = document.createElement("td");
      tdName.className = "rejected-name";
      tdName.textContent = item.name;
      const dom = document.createElement("span");
      dom.className = "rejected-domain";
      dom.textContent = item.domain;
      tdName.appendChild(dom);

      const tdReason = document.createElement("td");
      tdReason.textContent = item.reason[state.lang];

      tr.appendChild(tdName);
      tr.appendChild(tdReason);
      els.rejectedTbody.appendChild(tr);
    });
  }

  function setHeroTitleWords(text, animateWords) {
    els.heroTitle.textContent = "";
    const words = String(text || "").trim().split(/\s+/);
    const wordSpans = [];
    words.forEach(function (word, idx) {
      const clip = document.createElement("span");
      clip.className = "hero-word-clip";
      const span = document.createElement("span");
      span.className = "hero-word";
      span.textContent = word;
      clip.appendChild(span);
      els.heroTitle.appendChild(clip);
      if (idx < words.length - 1) {
        els.heroTitle.appendChild(document.createTextNode(" "));
      }
      wordSpans.push(span);
    });
    if (animateWords && !motionPaused && window.gsap) {
      window.gsap.fromTo(
        wordSpans,
        { yPercent: 115, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          duration: 0.65,
          stagger: 0.045,
          ease: "expo.out",
          clearProps: "transform,opacity"
        }
      );
    }
  }

  function applyStaticCopy(animateTitle) {
    const T = DATA.ui[state.lang];
    document.documentElement.lang = state.lang;
    els.brandTitle.textContent = T.brandTitle;
    els.authorLink.textContent = T.authorLabel;
    els.heroBadge.textContent = T.heroBadge;
    setHeroTitleWords(T.heroTitle, Boolean(animateTitle));
    els.heroSubtitle.textContent = T.heroSubtitle;
    els.kpiToolsLbl.textContent = T.kpiTools;
    els.kpiCatsLbl.textContent = T.kpiCats;
    els.kpiFilteredLbl.textContent = T.kpiFiltered;
    els.stageVideoTag.textContent = T.stageVideoTag;
    els.stageVideoTitle.textContent = T.stageVideoTitle;
    els.stageVideoSub.textContent = T.stageVideoSub;
    els.stageWebTag.textContent = T.stageWebTag;
    els.stageWebTitle.textContent = T.stageWebTitle;
    els.stageWebSub.textContent = T.stageWebSub;
    els.stageAuditTag.textContent = T.stageAuditTag;
    els.stageAuditTitle.textContent = T.stageAuditTitle;
    els.stageAuditSub.textContent = T.stageAuditSub;
    els.searchInput.placeholder = T.searchPlaceholder;
    els.breakdownLabel.textContent = T.distributionLabel;
    els.savedBtnLabel.textContent = T.savedBtn;
    els.emptyTitle.textContent = T.emptyTitle;
    els.resetFiltersBtn.textContent = T.emptyAction;
    els.footerLeft.textContent = T.footerLeft;
    els.footerRight.textContent = T.footerRight;

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

  function renderAll(shouldAnimateGrid, animateTitle) {
    applyStaticCopy(animateTitle);
    renderBreakdown();
    renderCategoryPills();
    renderGrid(Boolean(shouldAnimateGrid));
    renderRejected();
  }

  // Interactive cursor spotlight on tool cards + Liquid Glass glint on Hero Stage tiles
  function initSpotlightGrid() {
    els.toolsGrid.addEventListener("pointermove", function (e) {
      const card = e.target.closest(".tool-card");
      if (!card) return;
      const rect = card.getBoundingClientRect();
      card.style.setProperty("--mx", (e.clientX - rect.left).toFixed(1) + "px");
      card.style.setProperty("--my", (e.clientY - rect.top).toFixed(1) + "px");
    });

    if (els.heroStage) {
      els.heroStage.addEventListener("pointermove", function (e) {
        const tile = e.target.closest(".stage-tile");
        if (!tile) return;
        const rect = tile.getBoundingClientRect();
        tile.style.setProperty("--gx", (e.clientX - rect.left).toFixed(1) + "px");
        tile.style.setProperty("--gy", (e.clientY - rect.top).toFixed(1) + "px");
      });
    }
  }

  // Live SVG bezier curve traveler + Remotion timeline timecode in hero stage
  function initStageMicroLoops() {
    if (motionPaused) return;
    const path = els.bezierPath;
    const dot = els.bezierDot;
    const pathLen = path && typeof path.getTotalLength === "function" ? path.getTotalLength() : 0;

    function tick(nowMs) {
      if (!document.hidden) {
        // Bezier dot ping-pong
        if (path && dot && pathLen > 0) {
          const cycle = (nowMs % 3200) / 3200;
          const p = cycle < 0.5 ? cycle * 2 : 2 - cycle * 2;
          const eased = p < 0.5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2;
          const pt = path.getPointAtLength(eased * pathLen);
          dot.setAttribute("cx", pt.x.toFixed(2));
          dot.setAttribute("cy", pt.y.toFixed(2));
        }

        // Remotion live timeline readout synced with 5.2s CSS sweep
        if (els.stageTimecode) {
          const tc = (nowMs % 5200) / 5200;
          const sweep = tc < 0.5 ? tc * 2 : 2 - tc * 2;
          const curSec = Math.round(sweep * 524);
          const mm = String(Math.floor(curSec / 60)).padStart(2, "0");
          const ss = String(curSec % 60).padStart(2, "0");
          els.stageTimecode.textContent = mm + ":" + ss + " → 08:44 · 60fps";
        }
      }
      window.requestAnimationFrame(tick);
    }
    window.requestAnimationFrame(tick);
  }

  // GSAP 3 Choreography, KPI count-up, parallax stage & scroll progress
  function initGsapMotion() {
    // Scroll progress bar (works natively cleanly even without ScrollTrigger)
    function updateScrollBar() {
      const doc = document.documentElement;
      const maxScroll = Math.max(1, doc.scrollHeight - window.innerHeight);
      const ratio = Math.min(1, Math.max(0, window.scrollY / maxScroll));
      els.scrollProgress.style.transform = "scaleX(" + ratio.toFixed(4) + ")";
    }
    window.addEventListener("scroll", updateScrollBar, { passive: true });
    updateScrollBar();

    if (motionPaused || !window.gsap) return;
    const gsap = window.gsap;
    if (window.ScrollTrigger) {
      gsap.registerPlugin(window.ScrollTrigger);
    }

    // Hero entrance choreography
    gsap.fromTo(
      ".hero-badge, .hero-subtitle, .hero-kpis, .search-wrap",
      { opacity: 0, y: 14 },
      {
        opacity: 1,
        y: 0,
        duration: 0.55,
        stagger: 0.06,
        ease: "power2.out",
        clearProps: "transform,opacity"
      }
    );

    gsap.fromTo(
      "#hero-stage .stage-tile",
      { opacity: 0, y: 18 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.08,
        delay: 0.08,
        ease: "expo.out",
        clearProps: "transform,opacity"
      }
    );

    // Count-up hero metrics (38 / 6 / 13)
    document.querySelectorAll(".kpi-val[data-count-target]").forEach(function (el) {
      const target = Number(el.dataset.countTarget || 0);
      const obj = { v: 0 };
      gsap.to(obj, {
        v: target,
        duration: 0.9,
        ease: "power2.out",
        onUpdate: function () {
          el.textContent = String(Math.round(obj.v));
        }
      });
    });

    // Subtle pointer parallax on hero preview stage (desktop only)
    if (window.matchMedia("(pointer: fine)").matches && els.heroStage) {
      const rx = gsap.quickTo(els.heroStage, "rotationX", { duration: 0.45, ease: "power2.out" });
      const ry = gsap.quickTo(els.heroStage, "rotationY", { duration: 0.45, ease: "power2.out" });
      gsap.set(els.heroStage, { transformPerspective: 900 });
      els.heroBand.addEventListener("pointermove", function (e) {
        if (window.innerWidth <= 920) return;
        const rect = els.heroBand.getBoundingClientRect();
        const nx = (e.clientX - rect.left) / rect.width - 0.5;
        const ny = (e.clientY - rect.top) / rect.height - 0.5;
        ry(nx * 5);
        rx(-ny * 4);
      });
      els.heroBand.addEventListener("pointerleave", function () {
        rx(0);
        ry(0);
      });
    }
  }

  // Interactive Hero Stage shortcuts -> filter & smooth scroll
  els.stageVideoBtn.addEventListener("click", function () {
    state.category = "all";
    state.savedOnly = false;
    state.purpose = "video";
    renderAll(true, false);
    els.catalogStart.scrollIntoView({ behavior: motionPaused ? "auto" : "smooth", block: "start" });
  });

  els.stageWebBtn.addEventListener("click", function () {
    state.category = "all";
    state.savedOnly = false;
    state.purpose = "web";
    renderAll(true, false);
    els.catalogStart.scrollIntoView({ behavior: motionPaused ? "auto" : "smooth", block: "start" });
  });

  els.stageAuditBtn.addEventListener("click", function () {
    els.auditBox.open = true;
    els.auditBox.scrollIntoView({ behavior: motionPaused ? "auto" : "smooth", block: "start" });
  });

  // Event wiring
  document.querySelectorAll(".lang-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      state.lang = btn.dataset.lang === "en" ? "en" : "ru";
      try {
        localStorage.setItem(STORAGE_LANG, state.lang);
      } catch (_) {}
      renderAll(true, true);
    });
  });

  els.purposeGroup.querySelectorAll(".seg-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      state.purpose = btn.dataset.purpose;
      renderAll(true, false);
    });
  });

  els.pricingGroup.querySelectorAll(".seg-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      state.pricing = btn.dataset.pricing;
      renderAll(true, false);
    });
  });

  els.savedFilterBtn.addEventListener("click", function () {
    state.savedOnly = !state.savedOnly;
    renderAll(true, false);
  });

  els.searchInput.addEventListener("input", function () {
    state.query = els.searchInput.value;
    renderGrid(true);
  });

  els.resetFiltersBtn.addEventListener("click", function () {
    state.category = "all";
    state.purpose = "all";
    state.pricing = "all";
    state.savedOnly = false;
    state.query = "";
    els.searchInput.value = "";
    renderAll(true, false);
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
        renderGrid(true);
      } else {
        els.searchInput.blur();
      }
    }
  });

  renderMarquee();
  renderAll(true, true);
  initSpotlightGrid();
  initStageMicroLoops();
  initGsapMotion();
})();
