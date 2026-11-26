window.TOOLKIT_DATA = {
  ui: {
    ru: {
      brandTitle: "Creator Stack",
      authorLabel: "Собрано @mihail_radzik",
      heroBadge: "Кураторский архив · 2026",
      heroTitle: "Бесплатный стек для видео и веб-дизайна",
      heroSubtitle:
        "38 бесплатных, open-source и честных freemium-инструментов из закладок. 13 платных сервисов и генераторов с вотермарками отсеяны вручную.",
      kpiTools: "инструментов",
      kpiCats: "категорий",
      kpiFiltered: "платных отсеяно",
      stageVideoTag: "Для видео",
      stageVideoTitle: "Таймлайн Remotion",
      stageVideoSub: "Код-в-видео, титры и стоки без подписок",
      stageWebTag: "Для сайтов",
      stageWebTitle: "Хореография UI",
      stageWebSub: "GSAP-кривые, React Bits и токены Tailwind",
      stageAuditTag: "Аудит тарифов",
      stageAuditTitle: "Фильтр без вотермарков",
      stageAuditSub: "13 платных обёрток исключены из списка",
      searchPlaceholder: "Поиск инструментов",
      distributionLabel: "Состав каталога по категориям",
      catAll: "Все",
      purposeAll: "Все задачи",
      purposeVideo: "Для видео",
      purposeWeb: "Для сайтов",
      priceAll: "Все модели",
      priceFree: "Free & OSS",
      priceFreemium: "Freemium",
      savedBtn: "Избранное",
      statShown: "показано",
      copyBtn: "Копировать",
      copiedBtn: "Скопировано",
      openBtn: "Открыть",
      bookmarkAdd: "Сохранить в избранное",
      bookmarkRemove: "Убрать из избранного",
      targetVideo: "Видео",
      targetWeb: "Сайты",
      featuredTag: "База",
      pricingLabels: {
        free: "Бесплатно",
        oss: "Open Source",
        freemium: "Freemium"
      },
      emptyTitle: "По этим фильтрам совпадений нет",
      emptyAction: "Сбросить фильтры",
      rejectedSummary: "Отсеяно вручную: 13 платных сервисов и инструментов с вотермарками",
      rejectedIntro:
        "Эти ссылки встречались в подборках X, но были исключены из основного каталога после проверки тарифов и экспортов.",
      rejectedColTool: "Сервис",
      rejectedColReason: "Причина исключения",
      footerLeft: "Статический каталог для GitHub Pages без трекеров и сборки",
      footerRight: "Оформление по принципам unslop (CC BY 4.0 @heydamir)"
    },
    en: {
      brandTitle: "Creator Stack",
      authorLabel: "Curated by @mihail_radzik",
      heroBadge: "Curated archive · 2026",
      heroTitle: "Free stack for video and web design",
      heroSubtitle:
        "38 free, open-source, and honest freemium tools vetted from bookmarks. 13 paywalled or watermarked services were filtered out.",
      kpiTools: "vetted tools",
      kpiCats: "categories",
      kpiFiltered: "paid filtered out",
      stageVideoTag: "For video",
      stageVideoTitle: "Remotion timeline",
      stageVideoSub: "Code-to-video, captions, and clean stock media",
      stageWebTag: "For web",
      stageWebTitle: "UI motion curve",
      stageWebSub: "GSAP easings, React Bits, and Tailwind tokens",
      stageAuditTag: "Pricing audit",
      stageAuditTitle: "Zero-watermark filter",
      stageAuditSub: "13 paywalled traps listed openly below",
      searchPlaceholder: "Search tools",
      distributionLabel: "Catalog breakdown by category",
      catAll: "All",
      purposeAll: "All tasks",
      purposeVideo: "For video",
      purposeWeb: "For web",
      priceAll: "All tiers",
      priceFree: "Free & OSS",
      priceFreemium: "Freemium",
      savedBtn: "Saved",
      statShown: "shown",
      copyBtn: "Copy link",
      copiedBtn: "Copied",
      openBtn: "Open",
      bookmarkAdd: "Save to bookmarks",
      bookmarkRemove: "Remove bookmark",
      targetVideo: "Video",
      targetWeb: "Web",
      featuredTag: "Core pick",
      pricingLabels: {
        free: "Free",
        oss: "Open Source",
        freemium: "Freemium"
      },
      emptyTitle: "No tools match these filters",
      emptyAction: "Reset filters",
      rejectedSummary: "Filtered out: 13 paywalled and watermarked tools",
      rejectedIntro:
        "These sites showed up in X threads, but failed the no-paywall and clean-export audit.",
      rejectedColTool: "Service",
      rejectedColReason: "Why it was filtered out",
      footerLeft: "Static GitHub Pages directory with zero build step and zero trackers",
      footerRight: "Craft discipline informed by unslop (CC BY 4.0 @heydamir)"
    }
  },

  categories: [
    {
      id: "video",
      color: "#22C55E",
      label: { ru: "Видео и моушн", en: "Video & motion" }
    },
    {
      id: "media",
      color: "#38BDF8",
      label: { ru: "Медиа, стоки и голос", en: "Media, stock & voice" }
    },
    {
      id: "design",
      color: "#A78BFA",
      label: { ru: "UI и веб-дизайн", en: "UI & web design" }
    },
    {
      id: "fonts",
      color: "#F59E0B",
      label: { ru: "Шрифты и иконки", en: "Fonts & icons" }
    },
    {
      id: "skills",
      color: "#F472B6",
      label: { ru: "Скиллы для ИИ", en: "AI agent skills" }
    },
    {
      id: "utils",
      color: "#94A3B8",
      label: { ru: "Dev-утилиты", en: "Dev utilities" }
    }
  ],

  tools: [
    // 1. Video & motion (7)
    {
      id: "remotion",
      name: "Remotion",
      url: "https://www.remotion.dev/",
      domain: "remotion.dev",
      category: "video",
      pricing: "oss",
      targets: ["video"],
      featured: true,
      desc: {
        ru: "Программный рендер видео на React с покадровым контролем, Three.js, переходами и субтитрами.",
        en: "Programmatic React video engine with frame-exact timelines, Three.js support, transitions, and captions."
      },
      caveat: {
        ru: "Бесплатно для соло-авторов и команд до 3 человек; компаниям нужна лицензия.",
        en: "Free for individuals and teams up to 3 people; larger companies require a commercial license."
      }
    },
    {
      id: "remotion-skills",
      name: "Remotion Agent Skills",
      url: "https://github.com/remotion-dev/skills",
      domain: "github.com/remotion-dev/skills",
      category: "video",
      pricing: "oss",
      targets: ["video"],
      featured: true,
      desc: {
        ru: "14 официальных скиллов для ИИ-агентов: карты, титры, мультимедиа, композиции и чистый рендер в Remotion.",
        en: "14 official agent skill modules covering maps, captions, multimedia, elements, and clean Remotion rendering."
      },
      caveat: {
        ru: "Открытый репозиторий без подписок — подключается напрямую к кодирующим агентам.",
        en: "Open GitHub repository with zero paywalls; drops straight into AI coding agents."
      }
    },
    {
      id: "hyperframes",
      name: "HyperFrames",
      url: "https://hyperframes.studio/",
      domain: "hyperframes.studio",
      category: "video",
      pricing: "oss",
      targets: ["video"],
      featured: false,
      desc: {
        ru: "Альтернативный движок код-в-видео от HeyGen на чистом HTML, CSS и GSAP без привязки к React.",
        en: "Open-source HTML/CSS/GSAP video rendering framework built for agentic workflows without React."
      },
      caveat: {
        ru: "Лицензия Apache 2.0 для любого масштаба команд; альтернатива, если не используете React.",
        en: "Apache 2.0 for any team size; best picked if your stack avoids React."
      }
    },
    {
      id: "gsap",
      name: "GSAP",
      url: "https://gsap.com/",
      domain: "gsap.com",
      category: "video",
      pricing: "free",
      targets: ["video", "web"],
      featured: true,
      desc: {
        ru: "Промышленная библиотека таймлайнов, ScrollTrigger и плавной хореографии для веба и моушн-сцен.",
        en: "Industry-standard animation engine for timelines, ScrollTrigger choreography, and smooth DOM/SVG motion."
      },
      caveat: {
        ru: "Базовые плагины и коммерческое использование без перепродажи конструкторов бесплатны.",
        en: "Free for websites and video pipelines under Webflow ownership; check terms only for SaaS builders."
      }
    },
    {
      id: "skillry-opus",
      name: "Skillry — Opus Videos",
      url: "https://skillry.dev/ai-videos/opus-5-5",
      domain: "skillry.dev",
      category: "video",
      pricing: "free",
      targets: ["video"],
      featured: false,
      desc: {
        ru: "Открытая витрина клипов, собранных кодом через ИИ-агентов, с готовыми промптами и ремейками.",
        en: "Free showcase of code-generated motion videos alongside live agent remakes and copyable prompts."
      },
      caveat: {
        ru: "Каталог референсов и промптов без регистрации и подписок.",
        en: "Reference prompt gallery without paywalls or mandatory signup."
      }
    },
    {
      id: "mirage-tesseract",
      name: "Mirage Tesseract",
      url: "https://github.com/mirage-hq/Tesseract",
      domain: "github.com/mirage-hq/Tesseract",
      category: "video",
      pricing: "oss",
      targets: ["video"],
      featured: false,
      desc: {
        ru: "Локальный 3D-движок с трассировкой лучей, управляемый через JSON-команды от ИИ-агента.",
        en: "Local GPU path-traced 3D scene engine driven by AI agent JSON batches without traditional 3D suites."
      },
      caveat: {
        ru: "Требует локальную видеокарту для GPU path tracing.",
        en: "Requires local GPU capacity for hardware path tracing."
      }
    },
    {
      id: "editbanana",
      name: "EditBanana Core",
      url: "https://github.com/BIT-DataLab/Edit-Banana",
      domain: "github.com/BIT-DataLab/Edit-Banana",
      category: "video",
      pricing: "oss",
      targets: ["video", "web"],
      featured: false,
      desc: {
        ru: "Open-source пайплайн на базе SAM и OCR: превращает плоские картинки схем в редактируемые SVG и XML.",
        en: "Open-source SAM + OCR pipeline turning static diagram screenshots into editable SVG and DrawIO XML."
      },
      caveat: {
        ru: "Веб-версия работает на кредитах, но исходный код на GitHub открыт под Apache 2.0.",
        en: "Hosted web service uses credits, while the GitHub core runs freely under Apache 2.0."
      }
    },

    // 2. Media, stock & voice (7)
    {
      id: "wikimedia",
      name: "Wikimedia Commons",
      url: "https://commons.wikimedia.org/",
      domain: "commons.wikimedia.org",
      category: "media",
      pricing: "free",
      targets: ["video", "web"],
      featured: true,
      desc: {
        ru: "Крупнейший архив подлинных исторических фото, карт и документов в Public Domain и Creative Commons.",
        en: "Massive archive of real historical photographs, archival plates, and public domain media."
      },
      caveat: {
        ru: "Всегда проверяйте карточку лицензии конкретного файла (CC0/PD против CC-BY).",
        en: "Verify each file's license badge (CC0/Public Domain vs CC-BY attribution)."
      }
    },
    {
      id: "openverse",
      name: "Openverse",
      url: "https://openverse.org/",
      domain: "openverse.org",
      category: "media",
      pricing: "oss",
      targets: ["video", "web"],
      featured: true,
      desc: {
        ru: "Открытый поисковик Creative Commons и Public Domain изображений и аудиодорожек с API.",
        en: "Open-source search engine and API indexing Creative Commons and Public Domain images and audio."
      },
      caveat: {
        ru: "Выдаёт готовую строку атрибуции; следите за правами CC-BY при коммерческом рендере.",
        en: "Provides instant attribution strings; double-check CC-BY requirements when required."
      }
    },
    {
      id: "fish-drama-3",
      name: "Fish Audio Drama 3",
      url: "https://huggingface.co/fishaudio/drama-3",
      domain: "huggingface.co/fishaudio/drama-3",
      category: "media",
      pricing: "oss",
      targets: ["video"],
      featured: false,
      desc: {
        ru: "35B MoE модель TTS и zero-shot клонирования голоса с контролем эмоций на словах и поддержкой RU/UA/EN.",
        en: "35B MoE open-weights TTS with word-level tone steering, multi-speaker tags, and RU/UA/EN cloning."
      },
      caveat: {
        ru: "Веса тяжёлые (FP8 ~37 ГБ, Int4 ~20.8 ГБ VRAM) и распространяются по Fish Audio Community License.",
        en: "Heavy weights (FP8 ~37 GB, Int4 ~20.8 GB VRAM) under Fish Audio Community License."
      }
    },
    {
      id: "noto-animated",
      name: "Noto Animated Emoji",
      url: "https://googlefonts.github.io/noto-emoji-animation/",
      domain: "googlefonts.github.io",
      category: "media",
      pricing: "oss",
      targets: ["video", "web"],
      featured: true,
      desc: {
        ru: "Официальные анимированные эмодзи Google в формате Lottie и WebP для акцентов в роликах.",
        en: "Google's official animated Noto Emoji set exported in Lottie JSON and WebP for video overlays."
      },
      caveat: {
        ru: "Полностью бесплатно (Apache 2.0 / CC-BY 4.0) без лимитов скачивания.",
        en: "Completely free to download and bundle without workspace limits."
      }
    },
    {
      id: "fluent-emoji",
      name: "Fluent Emoji",
      url: "https://fluentemoji.com/",
      domain: "fluentemoji.com",
      category: "media",
      pricing: "oss",
      targets: ["video", "web"],
      featured: false,
      desc: {
        ru: "Каталог 3D- и векторных эмодзи Microsoft под лицензией MIT для Shorts и реакций.",
        en: "Searchable catalog of Microsoft's MIT-licensed 3D, flat, and color emoji illustrations."
      },
      caveat: {
        ru: "Свободная коммерческая лицензия MIT без обязательной атрибуции.",
        en: "Permissive MIT license suitable for commercial videos and web apps."
      }
    },
    {
      id: "klipy",
      name: "KLIPY Media API",
      url: "https://klipy.com/",
      domain: "klipy.com",
      category: "media",
      pricing: "free",
      targets: ["video", "web"],
      featured: false,
      desc: {
        ru: "Бесплатный API и каталог GIF, стикеров и клипов без жёстких ограничений уровня GIPHY.",
        en: "Free-forever GIF, clip, meme, and sticker discovery API built as an accessible alternative to GIPHY."
      },
      caveat: {
        ru: "Сторонние гифки из кино и шоу всё ещё несут авторские риски на монетизируемом YouTube.",
        en: "User-uploaded TV/film GIFs still carry third-party copyright risks on monetized YouTube."
      }
    },
    {
      id: "piclumen",
      name: "PicLumen",
      url: "https://www.piclumen.com/",
      domain: "piclumen.com",
      category: "media",
      pricing: "freemium",
      targets: ["video"],
      featured: false,
      desc: {
        ru: "Бесплатная генерация картинок по тексту на базе ежедневных кредитов (Lumens) без грубого вотермарка.",
        en: "Free-tier image generator backed by daily Lumens credits and clean exports."
      },
      caveat: {
        ru: "Дневные лимиты бесплатных генераций; приоритетный просчёт от $5/мес.",
        en: "Daily free credit cap; priority queues and heavier batches require paid plans (~$5/mo)."
      }
    },

    // 3. UI & web design (11)
    {
      id: "shadcn",
      name: "shadcn/ui",
      url: "https://ui.shadcn.com/",
      domain: "ui.shadcn.com",
      category: "design",
      pricing: "oss",
      targets: ["web"],
      featured: true,
      desc: {
        ru: "Доступные React-компоненты с копированием прямо в ваш код на Tailwind вместо чёрного ящика npm.",
        en: "Accessible React and Tailwind component primitives you copy directly into your own codebase."
      },
      caveat: {
        ru: "100% открытый исходный код (MIT).",
        en: "100% free MIT-licensed source code."
      }
    },
    {
      id: "tweakcn",
      name: "tweakcn",
      url: "https://tweakcn.com/",
      domain: "tweakcn.com",
      category: "design",
      pricing: "oss",
      targets: ["web"],
      featured: true,
      desc: {
        ru: "Интерактивный редактор палитр, радиусов и тем с экспортом CSS-переменных под Tailwind v4 и shadcn.",
        en: "Visual theme editor for shadcn/ui and Tailwind CSS v4 exporting clean design tokens."
      },
      caveat: {
        ru: "Весь генератор и экспорт тем доступны бесплатно и с открытым кодом.",
        en: "Core editor and CSS variable exports are completely free and open source."
      }
    },
    {
      id: "reactbits",
      name: "React Bits",
      url: "https://reactbits.dev/",
      domain: "reactbits.dev",
      category: "design",
      pricing: "oss",
      targets: ["web"],
      featured: true,
      desc: {
        ru: "Коллекция живых анимированных React-компонентов (тексты, карточки, фоны) на копипасте.",
        en: "Open-source collection of copy-paste animated React UI components, text effects, and cards."
      },
      caveat: {
        ru: "Бесплатно и без аккаунта; дозируйте эффекты, чтобы интерфейс не превратился в «ёлку».",
        en: "Free without login; apply selectively so animations clarify rather than clutter UX."
      }
    },
    {
      id: "magicui",
      name: "Magic UI",
      url: "https://magicui.design/",
      domain: "magicui.design",
      category: "design",
      pricing: "freemium",
      targets: ["web"],
      featured: false,
      desc: {
        ru: "50+ бесплатных open-source блоков анимации для лендингов на React, TypeScript и Tailwind.",
        en: "Open-source library of landing page motion blocks built with React, TypeScript, and Tailwind."
      },
      caveat: {
        ru: "Базовые компоненты под MIT бесплатны; готовые Pro-шаблоны страниц продаются отдельно.",
        en: "Core component primitives are free (MIT); full multi-page Pro templates are paid."
      }
    },
    {
      id: "uiverse",
      name: "Uiverse",
      url: "https://uiverse.io/",
      domain: "uiverse.io",
      category: "design",
      pricing: "oss",
      targets: ["web"],
      featured: false,
      desc: {
        ru: "Крупнейшая библиотека бесплатных CSS и Tailwind элементов от сообщества (кнопки, свитчеры, карточки).",
        en: "Community repository of thousands of open-source CSS and Tailwind buttons, inputs, and cards."
      },
      caveat: {
        ru: "MIT-лицензия; проверяйте контраст и не берите избыточный неон.",
        en: "Free MIT snippets; review contrast ratios and skip overly decorative neon elements."
      }
    },
    {
      id: "21st-dev",
      name: "21st.dev",
      url: "https://21st.dev/",
      domain: "21st.dev",
      category: "design",
      pricing: "freemium",
      targets: ["web"],
      featured: false,
      desc: {
        ru: "Рынок качественных UI-блоков и тем от дизайн-инженеров с предпросмотром и установкой одной командой.",
        en: "Curated React and Tailwind UI marketplace with live previews and one-command CLI installs."
      },
      caveat: {
        ru: "Бесплатный план позволяет свободно смотреть всё и копировать до 2 компонентов в день (дальше $6–$8/мес).",
        en: "Free browsing plus 2 component copies per day via web/CLI/MCP (unlimited starts ~$6–$8/mo)."
      }
    },
    {
      id: "storybook",
      name: "Storybook",
      url: "https://storybook.js.org/",
      domain: "storybook.js.org",
      category: "design",
      pricing: "oss",
      targets: ["web"],
      featured: false,
      desc: {
        ru: "Открытая мастерская для изолированной разработки, визуального тестирования и документации UI-китов.",
        en: "Open-source frontend workshop for building, inspecting, and documenting UI components in isolation."
      },
      caveat: {
        ru: "Имеет смысл для средних и крупных проектов; простым лендингам обычно избыточен.",
        en: "Great for multi-page apps and component systems; overkill for simple one-page landings."
      }
    },
    {
      id: "land-book",
      name: "Land-book",
      url: "https://land-book.com/",
      domain: "land-book.com",
      category: "design",
      pricing: "free",
      targets: ["web"],
      featured: false,
      desc: {
        ru: "Курируемая галерея реальных лендингов и сайтов-портфолио для насмотренности без ИИ-шаблонности.",
        en: "Curated gallery of crisp real-world landing pages, portfolios, and product sites for layout study."
      },
      caveat: {
        ru: "Основная галерея открыта бесплатно.",
        en: "Main inspiration archive is browsable for free."
      }
    },
    {
      id: "60fps",
      name: "60fps.design",
      url: "https://60fps.design/",
      domain: "60fps.design",
      category: "design",
      pricing: "free",
      targets: ["web", "video"],
      featured: false,
      desc: {
        ru: "Живые видео-референсы реальных микровзаимодействий, переходов и скролл-анимаций интерфейсов.",
        en: "Showcase of smooth real-world UI micro-interactions, motion transitions, and mobile choreography."
      },
      caveat: {
        ru: "Референс для вдохновения (без готового исходного кода).",
        en: "Motion reference archive (inspiration clips rather than downloadable code)."
      }
    },
    {
      id: "minimal-gallery",
      name: "Minimal Gallery",
      url: "https://minimal.gallery/",
      domain: "minimal.gallery",
      category: "design",
      pricing: "free",
      targets: ["web"],
      featured: false,
      desc: {
        ru: "Строго отобранная витрина минималистичных, функциональных сайтов со всего мира.",
        en: "Hand-picked showcase of restrained, well-crafted, functional websites."
      },
      caveat: {
        ru: "Бесплатный каталог для поиска композиции и типографики.",
        en: "Free editorial curation for layout and typographic restraint."
      }
    },
    {
      id: "cosmos",
      name: "Cosmos",
      url: "https://cosmos.so/",
      domain: "cosmos.so",
      category: "design",
      pricing: "freemium",
      targets: ["web", "video"],
      featured: false,
      desc: {
        ru: "Визуальный мудборд и поисковик эстетических референсов без рекламного шума и мусора Pinterest.",
        en: "Distraction-free visual moodboarding and design curation platform without algorithmic clutter."
      },
      caveat: {
        ru: "Бесплатный тариф с лимитом сохранённых элементов (хватает для сборки нескольких проектов).",
        en: "Free tier includes an element cap that easily covers several project moodboards."
      }
    },

    // 4. Fonts & icons (5)
    {
      id: "google-fonts",
      name: "Google Fonts",
      url: "https://fonts.google.com/",
      domain: "fonts.google.com",
      category: "fonts",
      pricing: "free",
      targets: ["video", "web"],
      featured: true,
      desc: {
        ru: "Открытая база гарнитур (IBM Plex, Inter, JetBrains Mono, Manrope) с полной кириллицей RU и UA.",
        en: "Open-source font catalog with dependable Latin + Cyrillic support and direct Remotion integration."
      },
      caveat: {
        ru: "Полностью бесплатно (OFL / Apache) — в Vectarium уже подключено через @remotion/google-fonts.",
        en: "100% free commercial fonts; already integrated in Vectarium via @remotion/google-fonts."
      }
    },
    {
      id: "fontshare",
      name: "Fontshare",
      url: "https://fontshare.com/",
      domain: "fontshare.com",
      category: "fonts",
      pricing: "free",
      targets: ["video", "web"],
      featured: false,
      desc: {
        ru: "100+ бесплатных акцидентных и текстовых шрифтов студийного качества от Indian Type Foundry.",
        en: "100+ studio-grade free commercial display and body fonts curated by Indian Type Foundry."
      },
      caveat: {
        ru: "Топ для сайтов и EN-обложек; у части шрифтов нет украинской/русской кириллицы — проверяйте превью.",
        en: "Great for web & English thumbnails; check glyph tables when Cyrillic (RU/UA) is required."
      }
    },
    {
      id: "fonts-in-use",
      name: "Fonts In Use",
      url: "https://fontsinuse.com/",
      domain: "fontsinuse.com",
      category: "fonts",
      pricing: "free",
      targets: ["video", "web"],
      featured: false,
      desc: {
        ru: "Независимый архив реального применения шрифтов на постерах, обложках книг, сайтах и титрах.",
        en: "Independent visual archive showing real-world typeface pairings on posters, sites, and titles."
      },
      caveat: {
        ru: "Архив открыт бесплатно — помогает подобрать характерную пару для обложек каналов.",
        en: "Free research archive for pairing expressive title typography."
      }
    },
    {
      id: "iconify",
      name: "Iconify",
      url: "https://iconify.design/",
      domain: "iconify.design",
      category: "fonts",
      pricing: "oss",
      targets: ["video", "web"],
      featured: true,
      desc: {
        ru: "Единый open-source фреймворк на 200 000+ векторных SVG-иконок (Lucide, Phosphor, Tabler и др.).",
        en: "Unified open-source SVG framework spanning 200,000+ crisp icons including Lucide and Phosphor."
      },
      caveat: {
        ru: "100% бесплатно и открыто — чисто ложится и в SVG-титры Remotion, и в UI сайтов.",
        en: "100% free and open source; exports clean SVG usable in both Remotion and web apps."
      }
    },
    {
      id: "3dicons",
      name: "3dicons",
      url: "https://3dicons.co/",
      domain: "3dicons.co",
      category: "fonts",
      pricing: "oss",
      targets: ["video", "web"],
      featured: false,
      desc: {
        ru: "1 440+ объёмных 3D-иконок в PNG и исходниках под свободной лицензией CC0 без атрибуции.",
        en: "1,440+ rendered CC0 3D icons available free for personal or commercial use without attribution."
      },
      caveat: {
        ru: "Лицензия CC0; удобно для обложек SMMisha и акцентных карточек сайтов.",
        en: "CC0 public domain; fits tech channels and feature cards."
      }
    },

    // 5. AI agent skills (4)
    {
      id: "ui-ux-pro-max",
      name: "UI/UX Pro Max Skill",
      url: "https://github.com/nextlevelbuilder/ui-ux-pro-max-skill",
      domain: "github.com/nextlevelbuilder",
      category: "skills",
      pricing: "oss",
      targets: ["web"],
      featured: true,
      desc: {
        ru: "База из 79 стилей, 192 палитр и UX-правил для агента: подбирает дизайн-систему под тип продукта.",
        en: "Local searchable design intelligence spanning 79 styles, 192 palettes, and UX guidelines."
      },
      caveat: {
        ru: "Полностью открытый скилл; уже подключён в этом рабочем пространстве.",
        en: "Open source agent skill; already active in this workspace."
      }
    },
    {
      id: "unslop",
      name: "Unslop",
      url: "https://heydamir.design/unslop",
      domain: "heydamir.design/unslop",
      category: "skills",
      pricing: "oss",
      targets: ["web"],
      featured: true,
      desc: {
        ru: "9-шаговый чеклист-методология Дамира Соколовского для очистки интерфейса от шаблонного ИИ-вида.",
        en: "Nine-pass redline methodology by Damir Sokolovsky removing generic AI gradients and filler slop."
      },
      caveat: {
        ru: "Лицензия CC BY 4.0 (требует сохранения атрибуции @heydamir).",
        en: "CC BY 4.0 license (keep attribution to @heydamir in adaptations)."
      }
    },
    {
      id: "emil-skills",
      name: "Emil Design Engineering",
      url: "https://github.com/emilkowalski/skills",
      domain: "github.com/emilkowalski/skills",
      category: "skills",
      pricing: "oss",
      targets: ["web"],
      featured: false,
      desc: {
        ru: "Набор правил микро-анимаций и тактильных переходов от автора Sonner и Vaul для AI-агентов.",
        en: "Design engineering interaction and animation standards authored by Emil Kowalski."
      },
      caveat: {
        ru: "Бесплатный открытый GitHub-репозиторий.",
        en: "Free open-source repository on GitHub."
      }
    },
    {
      id: "vercel-skills",
      name: "Vercel Agent Skills",
      url: "https://github.com/vercel-labs/agent-skills",
      domain: "github.com/vercel-labs/agent-skills",
      category: "skills",
      pricing: "oss",
      targets: ["web"],
      featured: false,
      desc: {
        ru: "Официальные инструкции Vercel Labs по доступности, вёрстке, React и производительности веба.",
        en: "Vercel Labs guidelines for web accessibility, layout polish, and React performance."
      },
      caveat: {
        ru: "Открытые инструкции (MIT / Apache 2.0).",
        en: "Free open-source guidelines repository."
      }
    },

    // 6. Dev utilities (4)
    {
      id: "cloudflare-tunnel",
      name: "Cloudflare Quick Tunnel",
      url: "https://developers.cloudflare.com/cloudflare-one/connections/connect-networks/do-more-with-tunnels/trycloudflare/",
      domain: "developers.cloudflare.com",
      category: "utils",
      pricing: "free",
      targets: ["web", "video"],
      featured: true,
      desc: {
        ru: "Открывает ваш локальный localhost или Vectarium Studio по HTTPS в одну команду без регистрации.",
        en: "One-command free HTTPS tunnel (`cloudflared tunnel --url`) exposing localhost without an account."
      },
      caveat: {
        ru: "Быстрый временный URL без SLA — идеально показать локальный проект клиенту или открыть с телефона.",
        en: "Ephemeral TryCloudflare URL without uptime SLA; great for quick previews from a phone."
      }
    },
    {
      id: "photext",
      name: "PhoText",
      url: "https://photext.ai/",
      domain: "photext.ai",
      category: "utils",
      pricing: "free",
      targets: ["video", "web"],
      featured: false,
      desc: {
        ru: "Онлайн-редактор текста внутри готовых скриншотов и картинок с автоматическим подбором шрифта.",
        en: "Browser-based editor replacing text inside existing screenshots while matching font and background."
      },
      caveat: {
        ru: "Базовая правка в браузере бесплатна без входа; удобно переводить надписи на архивах.",
        en: "Core web editing works free without login; handy for translating labels inside screenshots."
      }
    },
    {
      id: "tost-ui",
      name: "Tost UI",
      url: "https://ui.tost.ai/",
      domain: "ui.tost.ai",
      category: "utils",
      pricing: "oss",
      targets: ["video"],
      featured: false,
      desc: {
        ru: "Открытый Docker-интерфейс (camenduru/TostUI) для локального запуска Flux, апскейла и 3D-моделей.",
        en: "Open Docker interface (camenduru/TostUI) wrapping local Flux, image/video models, and TRELLIS 3D."
      },
      caveat: {
        ru: "Полностью бесплатно только на собственном железе; облачные ноды платные.",
        en: "Free on your own GPU via Docker; cloud pod runs are paid."
      }
    },
    {
      id: "convoshelf",
      name: "ConvoShelf",
      url: "https://chromewebstore.google.com/search/ConvoShelf",
      domain: "chromewebstore.google.com",
      category: "utils",
      pricing: "free",
      targets: ["web", "video"],
      featured: false,
      desc: {
        ru: "Расширение Chrome с папками, поиском и локальным экспортом диалогов ChatGPT, Claude, Gemini и Grok.",
        en: "Chrome extension adding folders, full search, and local Markdown/PDF export across major AI chats."
      },
      caveat: {
        ru: "Бесплатное браузерное расширение — удобно собирать сценарии и промпты в локальную базу.",
        en: "Free browser extension; great for archiving scripts and prompt threads locally."
      }
    }
  ],

  rejected: [
    {
      name: "Vibiz AI",
      domain: "vibiz.ai",
      reason: {
        ru: "Строго платный (от $63–$79/мес), нет даже бесплатного триала; заточен под рекламные кабинеты.",
        en: "Strictly paid (~$63–$79/mo) with no free plan or trial."
      }
    },
    {
      name: "Pamba",
      domain: "pamba.app",
      reason: {
        ru: "B2B-конвейер UGC-ботов под стартапы с платными тарифами от $100+/мес.",
        en: "Startup UGC automation platform with paid plans starting at $100+/mo."
      }
    },
    {
      name: "Topaz Labs",
      domain: "topazlabs.com",
      reason: {
        ru: "Тяжёлый платный десктоп (~$299+/год), демо с жёстким вотермарком.",
        en: "Expensive yearly suite (~$299+/yr) with watermarked trials."
      }
    },
    {
      name: "Topview AI",
      domain: "topview.ai",
      reason: {
        ru: "Только 10 одноразовых кредитов, вотермарк на free; дальше $16–$29+/мес.",
        en: "Tiny 10-credit trial with watermarks; $16–$29+/mo afterwards."
      }
    },
    {
      name: "Viggle AI",
      domain: "viggle.ai",
      reason: {
        ru: "Бесплатные ролики выходят с логотипом Viggle; снятие вотермарка от $8–$10/мес.",
        en: "Free exports carry a watermark; paid Pro tier required to remove it."
      }
    },
    {
      name: "AutoAE",
      domain: "autoae.online",
      reason: {
        ru: "В free лишь 720p с вотермарком и запретом на коммерцию — всё это уже делает наш Remotion бесплатно.",
        en: "Free tier limits to 720p non-commercial with watermark; replaced by local Remotion."
      }
    },
    {
      name: "PaperAnimator",
      domain: "paperanimator.com",
      reason: {
        ru: "На бесплатном экспорте ставит вотермарк (720p), снятие стоит кредитов.",
        en: "Free 720p exports include watermarks unless credits are purchased."
      }
    },
    {
      name: "Scrolltide",
      domain: "scrolltide.co",
      reason: {
        ru: "Несмотря на слухи в X, библиотека шаблонов платная ($29–$39/мес или $144/год).",
        en: "Marketed as free in X hype posts, actually gated behind $29–$39/mo or $144/yr pricing."
      }
    },
    {
      name: "Mobbin",
      domain: "mobbin.com",
      reason: {
        ru: "Бесплатно урезан до 3 коллекций без потоков и фильтров; рабочий доступ $10–$15/мес.",
        en: "Heavily capped free preview; real library workflow requires $10–$15/mo Pro."
      }
    },
    {
      name: "Refero",
      domain: "refero.design",
      reason: {
        ru: "Поиск, user flows и интеграции закрыты за подпиской $10–$20/мес.",
        en: "Core search, user flows, and Figma/MCP integrations require paid subscription."
      }
    },
    {
      name: "LottieFiles",
      domain: "lottiefiles.com",
      reason: {
        ru: "Жёсткий пожизненный лимит на бесплатные загрузки/скачивания в воркспейсе.",
        en: "Strict lifetime upload/download cap on free Starter workspaces."
      }
    },
    {
      name: "Krea AI",
      domain: "krea.ai",
      reason: {
        ru: "На бесплатном плане нет коммерческих прав и закрыт качественный апскейл.",
        en: "Commercial license rights and flagship upscaling require paid plans."
      }
    },
    {
      name: "Stickers.wiki",
      domain: "stickers.wiki",
      reason: {
        ru: "Каталог стикеров для мессенджеров без очищенных прав для коммерческого YouTube.",
        en: "Messaging sticker dump lacking commercial licensing for monetized video."
      }
    }
  ]
};
