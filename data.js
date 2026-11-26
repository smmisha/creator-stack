window.TOOLKIT_DATA = {
  ui: {
    ru: {
      brandTitle: "socialmediamisha",
      heroTitle: "Бесплатный стек для видео и сайтов",
      heroSubtitle:
        "51 рабочий инструмент без подписок и вотермарков: 47 полностью бесплатных или open-source и 4 честных freemium.",
      heroCta: "Открыть каталог",
      heroCtaSub: "51 инструмент в 6 разделах",
      stageLabel: "Карта стека",
      stageMeta: "Нажмите на дорожку для фильтра",
      pauseLabel: "Пауза",
      playLabel: "Пуск",
      searchPlaceholder: "Поиск по стеку",
      distributionLabel: "Инструменты по категориям",
      catAll: "Все",
      purposeAll: "Все задачи",
      purposeVideo: "Для видео",
      purposeWeb: "Для сайтов",
      priceAll: "Все модели",
      priceFree: "Free и OSS",
      priceFreemium: "Freemium",
      savedBtn: "Избранное",
      statShown: "показано",
      copyBtn: "Копировать ссылку",
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
      footerLeft: "Открытый каталог socialmediamisha без трекеров и сборки"
    },
    en: {
      brandTitle: "socialmediamisha",
      heroTitle: "Free stack for video and web design",
      heroSubtitle:
        "51 working tools without paywalls or watermarks: 47 completely free or open-source and 4 fair freemium picks.",
      heroCta: "Browse catalog",
      heroCtaSub: "51 tools across 6 groups",
      stageLabel: "Stack lanes",
      stageMeta: "Select a lane to filter",
      pauseLabel: "Pause",
      playLabel: "Play",
      searchPlaceholder: "Search tools",
      distributionLabel: "Tools by category",
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
      featuredTag: "Core",
      pricingLabels: {
        free: "Free",
        oss: "Open Source",
        freemium: "Freemium"
      },
      emptyTitle: "No tools match these filters",
      emptyAction: "Reset filters",
      footerLeft: "Open directory by socialmediamisha with zero trackers"
    }
  },

  categories: [
    {
      id: "video",
      color: "#B94A2C",
      label: { ru: "Видео и моушн", en: "Video & motion" }
    },
    {
      id: "media",
      color: "#4C647E",
      label: { ru: "Медиа, стоки и голос", en: "Media, stock & voice" }
    },
    {
      id: "design",
      color: "#6F5A46",
      label: { ru: "UI и веб-дизайн", en: "UI & web design" }
    },
    {
      id: "fonts",
      color: "#9A6E3A",
      label: { ru: "Шрифты и иконки", en: "Fonts & icons" }
    },
    {
      id: "skills",
      color: "#4E6E58",
      label: { ru: "Скиллы для ИИ", en: "AI agent skills" }
    },
    {
      id: "utils",
      color: "#7D5B69",
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
    {
      id: "video-use",
      name: "video-use",
      url: "https://github.com/browser-use/video-use",
      domain: "github.com/browser-use/video-use",
      category: "video",
      pricing: "oss",
      targets: ["video"],
      featured: true,
      desc: {
        ru: "Open-source агентский монтаж из сырых футажей: вырезка пауз, цветокор, титры и оверлеи в Remotion/HyperFrames.",
        en: "Open-source agentic video editor: trims dead air and fillers, color grades, burns captions, and renders final.mp4."
      },
      caveat: {
        ru: "Лицензия MIT; в базовой сборке просит ElevenLabs API key для транскрибации (есть бесплатный лимит или замена на локальный Whisper).",
        en: "MIT open source; default setup asks for an ElevenLabs API key for transcription (free tier available or swap local Whisper)."
      }
    },
    {
      id: "line-art-animation",
      name: "line-art-animation",
      url: "https://github.com/JDhruv14/line-art-animation",
      domain: "github.com/JDhruv14/line-art-animation",
      category: "video",
      pricing: "oss",
      targets: ["video", "web"],
      featured: true,
      desc: {
        ru: "TypeScript-библиотека и скилл для нарисованных чернилами SVG-персонажей, походки, сцен день/ночь и покадрового экспорта.",
        en: "Claude skill and dependency-free TypeScript library for animated hand-drawn ink SVG figures, gaits, and day/night scenes."
      },
      caveat: {
        ru: "MIT-лицензия; отлично ложится в Remotion-пайплайн для анимированных скетчей и историй.",
        en: "MIT license; exports crisp SVG frames ideal for Remotion and interactive storytelling."
      }
    },
    {
      id: "roughjs",
      name: "Rough.js",
      url: "https://github.com/rough-stuff/rough",
      domain: "github.com/rough-stuff/rough",
      category: "video",
      pricing: "oss",
      targets: ["video", "web"],
      featured: true,
      desc: {
        ru: "Лёгкая графика в стиле рисунка от руки для Canvas и SVG — живые схемы, рамки, диаграммы и скетч-титры.",
        en: "Lightweight graphics library rendering SVG and Canvas primitives with a natural hand-drawn sketchy aesthetic."
      },
      caveat: {
        ru: "100% бесплатно (MIT); работает прямо в браузере и внутри композиций Remotion.",
        en: "100% free (MIT); integrates directly into React/Remotion compositions and web canvases."
      }
    },
    {
      id: "motion-canvas",
      name: "Motion Canvas",
      url: "https://github.com/motion-canvas/motion-canvas",
      domain: "github.com/motion-canvas/motion-canvas",
      category: "video",
      pricing: "oss",
      targets: ["video"],
      featured: false,
      desc: {
        ru: "Визуальный редактор + TypeScript-генератор процедурной 2D-анимации и технических объяснялок синхронно со звуком.",
        en: "Code-driven TypeScript 2D animation library paired with a real-time browser preview editor synced to audio."
      },
      caveat: {
        ru: "MIT-лицензия; мощная альтернатива для инфографики и схем без React.",
        en: "MIT open source; strong fit for diagrams, technical explainers, and synced motion."
      }
    },
    {
      id: "scarlet",
      name: "Scarlet",
      url: "https://github.com/Forward-Future/scarlet",
      domain: "github.com/Forward-Future/scarlet",
      category: "video",
      pricing: "oss",
      targets: ["video"],
      featured: false,
      desc: {
        ru: "Настольный open-source AI-видеоредактор под Windows и macOS: правки голосом/текстом, встроенный Whisper и версионные склейки.",
        en: "Open-source desktop AI video editor for Windows/macOS/Linux with bundled local Whisper and non-destructive agent cutlists."
      },
      caveat: {
        ru: "MIT; локальная транскрибация работает из коробки, а агент подключается по вашей подписке Claude Code или Codex.",
        en: "MIT; local Whisper transcription is built in, while coding agents connect via your existing Claude Code or Codex setup."
      }
    },
    {
      id: "threejs",
      name: "Three.js",
      url: "https://github.com/mrdoob/three.js",
      domain: "github.com/mrdoob/three.js",
      category: "video",
      pricing: "oss",
      targets: ["video", "web"],
      featured: true,
      desc: {
        ru: "Главная WebGL-библиотека для 3D-сцен, частиц, шейдеров и камер прямо в браузере, на лендингах и в Remotion.",
        en: "Standard WebGL/WebGPU JavaScript 3D engine for interactive web scenes, shaders, and @remotion/three compositions."
      },
      caveat: {
        ru: "100% бесплатно (MIT); используется в видеокомпозициях Vectarium и веб-сценах.",
        en: "100% free (MIT); used across Vectarium compositions and interactive web scenes."
      }
    },
    {
      id: "blender-mcp",
      name: "Blender MCP",
      url: "https://github.com/ahujasid/mcp-for-blender",
      domain: "github.com/ahujasid/mcp-for-blender",
      category: "video",
      pricing: "oss",
      targets: ["video"],
      featured: false,
      desc: {
        ru: "MCP-мост, через который ИИ-агент напрямую создаёт 3D-модели, материалы, свет и рендеры в локальном Blender.",
        en: "Open-source MCP bridge letting AI agents build 3D meshes, materials, lighting, and renders directly inside Blender."
      },
      caveat: {
        ru: "MIT; работает полностью локально в связке с бесплатным Blender 4.x/5.x.",
        en: "MIT; runs 100% locally alongside free open-source Blender."
      }
    },
    {
      id: "ffmpeg",
      name: "FFmpeg",
      url: "https://github.com/FFmpeg/FFmpeg",
      domain: "github.com/FFmpeg/FFmpeg",
      category: "video",
      pricing: "oss",
      targets: ["video"],
      featured: true,
      desc: {
        ru: "Незаменимый консольный движок для склейки, перекодирования, громкости (loudnorm), субтитров и нарезки 9:16 / 16:9.",
        en: "Essential open-source CLI engine for transcoding, loudnorm audio mastering, muxing, clipping, and final feed exports."
      },
      caveat: {
        ru: "Полностью бесплатный стандарт индустрии под капотом Remotion и видеопайплайнов.",
        en: "Completely free industry backbone powering Remotion and automated video pipelines."
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
    {
      id: "real-esrgan",
      name: "Real-ESRGAN",
      url: "https://github.com/xinntao/Real-ESRGAN",
      domain: "github.com/xinntao/Real-ESRGAN",
      category: "media",
      pricing: "oss",
      targets: ["video", "web"],
      featured: true,
      desc: {
        ru: "Бесплатный локальный AI-апскейлер старых архивных фото, 2D-иллюстраций и видеофрагментов без вотермарков.",
        en: "Open-source local AI upscaler restoring blurry archival photos, illustrations, and video clips without watermarks."
      },
      caveat: {
        ru: "Лицензия BSD-3; полноценная бесплатная альтернатива дорогому Topaz Labs на вашем ПК.",
        en: "BSD-3-Clause; free local replacement for paid desktop upscalers like Topaz Labs."
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
    {
      id: "sakuga-vfx",
      name: "Sakuga VFX",
      url: "https://github.com/finktheartist/sakuga-vfx",
      domain: "github.com/finktheartist/sakuga-vfx",
      category: "design",
      pricing: "oss",
      targets: ["web"],
      featured: false,
      desc: {
        ru: "12 однофайловых веб-компонентов (кнопки, свитчеры, тосты) с аниме-эффектами дыма, вспышек и физики нажатий.",
        en: "Twelve dependency-free single-file UI controls firing hand-drawn anime smoke puffs, bursts, and spring impacts."
      },
      caveat: {
        ru: "MIT-лицензия; без сборок и внешних запросов — для смелых промо-страниц.",
        en: "MIT license; zero dependencies and self-contained assets for expressive promo UIs."
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
    {
      id: "impeccable",
      name: "Impeccable",
      url: "https://github.com/pbakaus/impeccable",
      domain: "github.com/pbakaus/impeccable",
      category: "skills",
      pricing: "oss",
      targets: ["web"],
      featured: true,
      desc: {
        ru: "Дизайн-лексикон и аудит для агентов (`polish`, `bolder`, `critique`, `audit`) + детектор из 62 правил против ИИ-штампов.",
        en: "Agent design vocabulary (polish, bolder, critique, audit) plus a 62-rule deterministic anti-slop linter."
      },
      caveat: {
        ru: "Apache 2.0; официально поддерживает Antigravity, Claude Code и Codex.",
        en: "Apache 2.0; native install support for Antigravity, Claude Code, and Codex."
      }
    },
    {
      id: "hallmark",
      name: "Hallmark",
      url: "https://github.com/Nutlope/hallmark",
      domain: "github.com/Nutlope/hallmark",
      category: "skills",
      pricing: "oss",
      targets: ["web"],
      featured: true,
      desc: {
        ru: "Скилл против «машинного» дизайна от Together AI: 50 проработанных тем, гейты качества и 755 фото с Wikimedia Commons.",
        en: "Anti-AI-slop design skill by Together AI packing 50 themes, quality floor gates, and 755 open-licensed photos."
      },
      caveat: {
        ru: "MIT-лицензия; проверяет реальный рендер в браузере на контраст, типографику и поломки на телефоне.",
        en: "MIT license; enforces contrast, layout, and mobile checks directly in headless browser verification."
      }
    },
    {
      id: "mengto-skills",
      name: "Meng To Skills",
      url: "https://github.com/MengTo/Skills",
      domain: "github.com/MengTo/Skills",
      category: "skills",
      pricing: "oss",
      targets: ["web"],
      featured: false,
      desc: {
        ru: "Коллекция плейбуков по веб-дизайну, Three.js-шейдерам, оптимизации анимаций и 14 стилям SVG-иллюстраций.",
        en: "Portable UI, Three.js 3D, WebGL optimization, and 14-style SVG illustration playbooks for AI coding agents."
      },
      caveat: {
        ru: "MIT-лицензия; можно брать отдельные папки скиллов под конкретные сцены и эффекты.",
        en: "MIT license; modular SKILL.md folders tailored to individual visual techniques."
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
  ]
};
