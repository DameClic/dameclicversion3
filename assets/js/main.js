/* ==========================================================================
   DAME CLIC (https://dameclic.com) — Interactividad UI, Transición de Color
   entre Bloques al Hacer Scroll (Crafted NY), Carrusel Avalaunch, Traductor
   ES/EN, Buscador, Formulario Interactivo y Gestor de Cookies (Ley 8968 CR)
   ========================================================================== */

const COOKIE_STORAGE_KEY = 'dameclic_cookie_consent';
const LANG_STORAGE_KEY = 'dameclic_lang';

const I18N_DICTIONARY = {
  es: {
    skip_link: 'Saltar al contenido principal',
    nav_home: 'Inicio',
    nav_about: 'Nosotros',
    nav_services: 'Servicios',
    nav_blog: 'Blog',
    nav_portfolio: 'Portafolio',
    nav_faqs: 'Faqs',
    nav_contact: 'Contacto',
    nav_cta: 'Cotizar Ahora ↗',
    search_placeholder: 'Buscar servicio (Marketing Digital, Tienda en Línea, SEO, Google Ads...) o artículo...',
    search_close: 'Cerrar',
    hero_eyebrow: 'Agencia de Marketing Digital · Curridabat, San José, Costa Rica',
    hero_h1_part1: 'Agencia de Marketing Digital en Costa Rica:',
    hero_h1_part2: 'generamos clientes potenciales y tráfico para su negocio.',
    hero_desc: 'Aumente sus ventas con las mejores estrategias de marketing digital en internet. Hable hoy con un especialista en resultados para comenzar SEO, GEO, PPC, redes sociales, página web, tienda en línea y más.',
    hero_btn_primary: 'Cotizar Proyecto Ahora ↗',
    hero_btn_secondary: 'Explorar Servicios',
    hero_trust_1: '+20 años impulsando empresas',
    hero_trust_2: '+3,000 proyectos ejecutados',
    hero_trust_3: 'Atención en Curridabat, San José',
    slide1_badge: '01 / 03 · Servicio Destacado · Marketing Digital 360°',
    slide1_title_1: 'Marketing Digital que',
    slide1_title_2: 'Impulsa sus Resultados y Ventas.',
    slide1_desc: 'Agencia de Marketing Digital en Curridabat, San José, Costa Rica. Generamos clientes potenciales y tráfico calificado para su negocio integrando SEO, GEO, Google Ads (PPC), redes sociales y analítica de conversión.',
    slide1_btn_page: 'Ir a Marketing Digital ↗',
    slide1_btn_quote: 'Cotizar Marketing Digital',
    slide2_badge: '02 / 03 · Servicio Destacado · Comercio Electrónico 24/7',
    slide2_title_1: 'Tienda en Línea:',
    slide2_title_2: 'Listo para Venderle al Mundo.',
    slide2_desc: 'Comience a vender sus productos en internet de la manera más fácil, segura y eficaz. Desarrollamos tiendas virtuales autogestionables con carrito de compras, control de inventario y pasarelas bancarias en Costa Rica.',
    slide2_btn_page: 'Ir a Tienda en Línea ↗',
    slide2_btn_quote: 'Cotizar Tienda en Línea',
    slide3_badge: '03 / 03 · Servicio Destacado · Arquitectura de Conversión',
    slide3_title_1: 'Páginas Web Modernas',
    slide3_title_2: 'Diseñadas para Convertir.',
    slide3_desc: 'Multiplique sus opciones de negocio y muéstrese en internet con atractivos diseños responsive que se adaptan a celulares y tabletas, páginas 100% autogestionables y listas para campañas de marketing digital.',
    slide3_btn_page: 'Ir a Páginas Web ↗',
    slide3_btn_quote: 'Cotizar Página Web',
    tab1_title: 'Marketing Digital',
    tab1_sub: 'Estrategia, SEO/GEO & Ads',
    tab2_title: 'Tienda en Línea',
    tab2_sub: 'E-Commerce & Pasarelas 24/7',
    tab3_title: 'Páginas Web',
    tab3_sub: 'Arquitectura de Conversión',
    trust_eyebrow: 'Alianzas y Resultados Comprobados',
    trust_title: 'Ellos Confían en Nosotros',
    trust_subtitle: 'Pase el cursor sobre cada logotipo para activarlo a todo color. Marcas líderes que impulsan su crecimiento digital con Dame Clic.',
    services_eyebrow: 'Soluciones Digitales para cada Etapa de su Negocio',
    services_title: 'Servicios Destacados para Multiplicar sus Ventas',
    services_subtitle: 'Combinamos creatividad, ingeniería web, pauta en buscadores y analítica para posicionar su marca frente a clientes listos para comprar.',
    filter_all: 'Todos los Servicios (9)',
    filter_marketing: 'Marketing, SEO & Ads',
    filter_web: 'Páginas Web & Tiendas',
    filter_design: 'Diseño, Analítica & Hosting',
    btn_quote_now: 'Cotizar ahora',
    btn_learn_more: 'Ver más',
    srv1_meta: 'Estrategia 360° & Conversión',
    srv1_title: 'Marketing Digital',
    srv1_sub: 'Impulsa sus resultados',
    srv1_desc: 'Aumente sus ventas con las mejores estrategias de marketing digital en internet. Hable hoy con un especialista en resultados para comenzar SEO, PPC, redes sociales, página web y más.',
    srv2_meta: 'Comercio Electrónico 24/7',
    srv2_title: 'Tienda en Línea',
    srv2_sub: 'Listo para venderle al mundo',
    srv2_desc: 'Con una tienda en línea usted está listo para venderle al mundo. Contáctenos hoy y comience a vender sus productos de la manera más fácil, segura y eficaz con pasarelas bancarias.',
    srv3_meta: 'Arquitectura de Conversión',
    srv3_title: 'Páginas Web',
    srv3_sub: 'Sitios responsive 100% autogestionables',
    srv3_desc: 'Multiplique sus opciones de negocio, muéstrese en internet con atractivos y modernos diseños, sitios web responsive que se adaptan a tabletas y celulares, 100% autogestionables y listos para marketing digital.',
    srv4_meta: 'Publicidad Pagada (PPC / SEM)',
    srv4_title: 'Google Ads',
    srv4_sub: 'Primera página de Google al instante',
    srv4_desc: 'Miles de personas buscan empresas como la suya en internet. Con los anuncios en línea aparezca en la primera página de búsqueda de Google, logre más llamadas y visitas, obtenga resultados al instante y pague sólo por los clics.',
    srv5_meta: 'Visibilidad en Google e IA',
    srv5_title: 'SEO y GEO',
    srv5_sub: 'Posicionamiento en Buscadores y Motores IA',
    srv5_desc: 'Si su sitio web no aparece en los resultados de búsqueda de Google o plataformas de IA, debe incluir SEO y GEO. La optimización mejorará la calificación de su sitio web y más prospectos encontrarán su negocio.',
    srv6_meta: 'Contenido & Comunidad',
    srv6_title: 'Redes Sociales',
    srv6_sub: 'Conexión real con sus audiencias',
    srv6_desc: 'Somos especialistas en diseño de contenido, logrando alcanzar las audiencias correctas con el objetivo de crear conexión con sus clientes. Le ofrecemos el diseño y las estrategias que se requieren para el éxito de su negocio.',
    srv7_meta: 'Datos & Retorno de Inversión',
    srv7_title: 'Analítica',
    srv7_sub: 'Ventas incrementales, directas y medibles',
    srv7_desc: 'Las estrategias de marketing digital son medibles y cuantificables. En Dame Clic analizamos los resultados y le ayudamos a mejorar la experiencia de usuario y la estrategia con nuestros servicios de analítica web.',
    srv8_meta: 'Identidad Visual & Branding',
    srv8_title: 'Diseño Gráfico',
    srv8_sub: 'Su mejor asesoría en imagen corporativa',
    srv8_desc: 'Diseñamos propuestas creativas, actuales y asertivas, con un equipo capacitado para comunicar y lograr que su marca o producto se posicione de forma efectiva con su público meta.',
    srv9_meta: 'Infraestructura & Certificados SSL',
    srv9_title: 'Hospedaje Web',
    srv9_sub: 'Confiable, estable, seguro y escalable',
    srv9_desc: 'El hospedaje web es un servicio en línea que le permite publicar su sitio web en Internet. Si desea contar con un sitio web, tienda en línea o landing page, contamos con planes desde inicial hasta empresarial.',
    about_eyebrow: 'Nosotros · Estrategia Antes que Improvisación',
    about_title: 'De la idea a una estrategia digital accionable y rentable',
    about_desc: 'Desde nuestras oficinas en Plaza Trigueros, Pinares de Curridabat, San José, Costa Rica, integramos creatividad, estrategia, tecnología e inteligencia artificial para que su empresa lidere su sector.',
    step1_title: 'Conocemos su negocio',
    step1_desc: 'Analizamos su mercado, competidores y objetivos comerciales reales.',
    step2_title: 'Definimos la estrategia',
    step2_desc: 'Seleccionamos los canales óptimos: Web, E-Commerce, SEO/GEO o Google Ads.',
    step3_title: 'Arquitectura y diseño',
    step3_desc: 'Construimos activos digitales modernos pensados para convertir visitantes.',
    step4_title: 'Lanzamiento y tráfico',
    step4_desc: 'Activamos campañas segmentadas para atraer clientes potenciales listos para comprar.',
    step5_title: 'Analítica y optimización',
    step5_desc: 'Medimos cada clic, llamada y venta para escalar el retorno de inversión.',
    newsletter_eyebrow: 'Recursos Exclusivos para Empresas',
    newsletter_title: 'Reciba Contenido GRATUITO, Regístrese Ahora',
    newsletter_desc: 'Suscríbase y reciba en su bandeja de entrada guías prácticas de marketing digital, tendencias de inteligencia artificial, SEO/GEO y estrategias de ventas.',
    newsletter_placeholder: 'Agregue su correo electrónico...',
    newsletter_btn: 'Suscribirse',
    newsletter_consent: 'Acepto las Políticas de Privacidad para recibir contenido gratuito.',
    portfolio_eyebrow: 'Portafolio de Proyectos',
    portfolio_title: 'Proyectos Reales que Hablan por Nosotros',
    portfolio_desc: 'Conozca algunos de los ecosistemas web, tiendas y estrategias multicanal desarrollados por Dame Clic.',
    blog_eyebrow: 'Dale un Vistazo a Nuestro Blog',
    blog_title: 'Artículos Destacados sobre Marketing, Web e IA',
    blog_desc: 'Descubra nuestras últimas publicaciones estratégicas para dominar el entorno digital en Costa Rica.',
    blog_read_more: 'Leer artículo ↗',
    blog_btn_more: 'Ver Más',
    faqs_eyebrow: 'Preguntas Frecuentes (FAQs)',
    faqs_title: 'Resolvemos sus dudas antes de comenzar',
    contact_eyebrow: 'Contáctenos · Curridabat, San José, Costa Rica',
    contact_title: '¿Necesita información sobre nuestros servicios?',
    contact_desc: 'No dude en llamarnos o complete el siguiente formulario. Elija los servicios que desea cotizar, adjunte documentos de referencia y nuestro equipo le contactará de inmediato.',
    form_services_heading: '¿Qué servicio o servicios desea cotizar? (Seleccione uno o varios)',
    form_name_label: 'Nombre *',
    form_email_label: 'Correo Electrónico *',
    form_phone_label: 'Teléfono *',
    form_company_label: 'Empresa',
    form_message_label: 'Mensaje / Detalles de su proyecto *',
    form_upload_title: 'Adjunta los documentos pertinentes.',
    form_upload_subtitle: 'Arrastra y suelta archivos, o selecciona archivos para subirlos.',
    form_upload_btn: 'Seleccionar archivos',
    form_upload_hint: 'Acepta imágenes (PNG, JPG, WEBP) o documentos PDF de referencia (Máx. 10 MB)',
    form_submit_btn: 'Enviar Solicitud de Cotización',
    footer_services_heading: 'Servicios',
    footer_contact_heading: 'Contacto',
    footer_copyright: '© 2027 Dame Clic. Todos los derechos reservados.',
    footer_privacy: 'Políticas de privacidad',
    footer_cookies: 'Configuración de Cookies',
    cookie_title: 'Gestión de Cookies y Privacidad (Ley N.º 8968 CR / GDPR / CCPA)',
    cookie_desc: 'En Dame Clic utilizamos cookies propias y de terceros para garantizar la operación segura del sitio, analizar el tráfico y optimizar nuestras campañas digitales. Elija sus preferencias:',
    cookie_btn_config: 'Configurar',
    cookie_btn_essential: 'Solo esenciales',
    cookie_btn_accept_all: 'Aceptar todas',
    cookie_btn_save: 'Guardar mi selección',
    cookie_pill_label: 'Cookies'
  },
  en: {
    skip_link: 'Skip to main content',
    nav_home: 'Home',
    nav_about: 'About Us',
    nav_services: 'Services',
    nav_blog: 'Blog',
    nav_portfolio: 'Portfolio',
    nav_faqs: 'Faqs',
    nav_contact: 'Contact',
    nav_cta: 'Get a Quote ↗',
    search_placeholder: 'Search services (Digital Marketing, Online Store, SEO, Google Ads...) or blog posts...',
    search_close: 'Close',
    hero_eyebrow: 'Digital Marketing Agency · Curridabat, San José, Costa Rica',
    hero_h1_part1: 'Digital Marketing Agency in Costa Rica:',
    hero_h1_part2: 'we generate qualified leads and traffic for your business.',
    hero_desc: 'Boost your sales with the best internet marketing strategies. Speak today with a results specialist to launch SEO, GEO, PPC, social media, websites, online stores, and more.',
    hero_btn_primary: 'Quote Your Project Now ↗',
    hero_btn_secondary: 'Explore Services',
    hero_trust_1: '+20 years growing businesses',
    hero_trust_2: '+3,000 completed projects',
    hero_trust_3: 'Based in Curridabat, San José',
    slide1_badge: '01 / 03 · Featured Service · 360° Digital Marketing',
    slide1_title_1: 'Digital Marketing That',
    slide1_title_2: 'Boosts Your Results & Sales.',
    slide2_badge: '02 / 03 · Featured Service · 24/7 E-Commerce',
    slide1_desc: 'Digital Marketing Agency in Curridabat, San José, Costa Rica. We generate qualified leads and targeted traffic for your business by integrating SEO, GEO, Google Ads (PPC), social media, and conversion analytics.',
    slide1_btn_page: 'Go to Digital Marketing ↗',
    slide1_btn_quote: 'Quote Digital Marketing',
    slide2_title_1: 'Online Store:',
    slide2_title_2: 'Ready to Sell to the World.',
    slide2_desc: 'Start selling your products online in the easiest, safest, and most effective way. We build self-manageable e-commerce stores with shopping carts, inventory control, and bank payment gateways in Costa Rica.',
    slide2_btn_page: 'Go to Online Store ↗',
    slide2_btn_quote: 'Quote Online Store',
    slide3_badge: '03 / 03 · Featured Service · Conversion Architecture',
    slide3_title_1: 'Modern Websites',
    slide3_title_2: 'Engineered to Convert.',
    slide3_desc: 'Multiply your business options and stand out online with attractive responsive designs adapted to phones and tablets, 100% self-manageable pages ready for digital marketing campaigns.',
    slide3_btn_page: 'Go to Websites ↗',
    slide3_btn_quote: 'Quote Website',
    tab1_title: 'Digital Marketing',
    tab1_sub: 'Strategy, SEO/GEO & Ads',
    tab2_title: 'Online Store',
    tab2_sub: '24/7 E-Commerce & Gateways',
    tab3_title: 'Websites',
    tab3_sub: 'Conversion Architecture',
    trust_eyebrow: 'Proven Partnerships & Results',
    trust_title: 'They Trust Us',
    trust_subtitle: 'Hover over each brand logo to view it in full color. Leading companies growing their digital presence with Dame Clic.',
    services_eyebrow: 'Digital Solutions for Every Stage of Your Business',
    services_title: 'Featured Services to Multiply Your Sales',
    services_subtitle: 'We combine creativity, web engineering, paid search, and analytics to position your brand in front of ready-to-buy customers.',
    filter_all: 'All Services (9)',
    filter_marketing: 'Marketing, SEO & Ads',
    filter_web: 'Websites & Online Stores',
    filter_design: 'Design, Analytics & Hosting',
    btn_quote_now: 'Quote now',
    btn_learn_more: 'Learn more',
    srv1_meta: '360° Strategy & Conversion',
    srv1_title: 'Digital Marketing',
    srv1_sub: 'Boosts your business results',
    srv1_desc: 'Increase your sales with the best digital marketing strategies online. Talk today with a results specialist to start SEO, PPC, social media, websites, and more.',
    srv2_meta: '24/7 E-Commerce',
    srv2_title: 'Online Store',
    srv2_sub: 'Ready to sell to the world',
    srv2_desc: 'With an online store you are ready to sell worldwide. Contact us today and start selling your products easily, securely, and effectively with bank payment gateways.',
    srv3_meta: 'Conversion Architecture',
    srv3_title: 'Websites',
    srv3_sub: '100% self-manageable responsive sites',
    srv3_desc: 'Multiply your business opportunities and stand out online with modern, attractive designs, responsive websites for tablets and phones, 100% self-manageable and ready for digital marketing.',
    srv4_meta: 'Paid Search (PPC / SEM)',
    srv4_title: 'Google Ads',
    srv4_sub: 'First page of Google instantly',
    srv4_desc: 'Thousands of people search for companies like yours online. Appear on the first page of Google, get more phone calls and store visits, achieve instant results, and pay only per click.',
    srv5_meta: 'Google & AI Search Visibility',
    srv5_title: 'SEO and GEO',
    srv5_sub: 'Search Engine & Generative AI Optimization',
    srv5_desc: 'If your website does not appear on Google or AI platforms, you need SEO and GEO. Optimization improves your website ranking so more qualified prospects find your business.',
    srv6_meta: 'Content & Community',
    srv6_title: 'Social Media',
    srv6_sub: 'Genuine connection with your audience',
    srv6_desc: 'We specialize in content design that reaches the right audiences and builds real connections with your customers. We deliver the design and strategies required for commercial success.',
    srv7_meta: 'Data & Return on Investment',
    srv7_title: 'Analytics',
    srv7_sub: 'Incremental, direct, and measurable sales',
    srv7_desc: 'Digital marketing strategies are measurable and quantifiable. At Dame Clic we analyze results and help improve user experience and conversion funnels with our web analytics services.',
    srv8_meta: 'Visual Identity & Branding',
    srv8_title: 'Graphic Design',
    srv8_sub: 'Your best corporate image advisory',
    srv8_desc: 'We design creative, modern, and assertive proposals with a skilled team ready to communicate and position your brand or product effectively with your target audience.',
    srv9_meta: 'Cloud Infrastructure & SSL',
    srv9_title: 'Web Hosting',
    srv9_sub: 'Reliable, stable, secure, and scalable',
    srv9_desc: 'Web hosting is an online service that allows you to publish your website on the Internet. For websites, online stores, or landing pages, we offer starter to enterprise hosting plans.',
    about_eyebrow: 'About Us · Strategy Before Improvisation',
    about_title: 'From an idea to an actionable, profitable digital strategy',
    about_desc: 'From our offices in Plaza Trigueros, Pinares de Curridabat, San José, Costa Rica, we integrate creativity, strategy, technology, and artificial intelligence so your company leads its market.',
    step1_title: 'We learn your business',
    step1_desc: 'We analyze your market, competitors, and real commercial goals.',
    step2_title: 'We define the strategy',
    step2_desc: 'We select the optimal channels: Web, E-Commerce, SEO/GEO, or Google Ads.',
    step3_title: 'Architecture & design',
    step3_desc: 'We build modern digital assets engineered to convert visitors.',
    step4_title: 'Launch & qualified traffic',
    step4_desc: 'We activate targeted campaigns to attract ready-to-buy leads.',
    step5_title: 'Analytics & optimization',
    step5_desc: 'We measure every click, call, and sale to scale return on investment.',
    newsletter_eyebrow: 'Exclusive Business Resources',
    newsletter_title: 'Receive FREE Content, Register Now',
    newsletter_desc: 'Subscribe and receive practical digital marketing guides, AI trends, SEO/GEO checklists, and sales strategies straight to your inbox.',
    newsletter_placeholder: 'Enter your email address...',
    newsletter_btn: 'Subscribe',
    newsletter_consent: 'I accept the Privacy Policy to receive free educational content.',
    portfolio_eyebrow: 'Project Portfolio',
    portfolio_title: 'Real Projects That Speak for Us',
    portfolio_desc: 'Explore some of the web ecosystems, online stores, and multichannel campaigns developed by Dame Clic.',
    blog_eyebrow: 'Take a Look at Our Blog',
    blog_title: 'Featured Articles on Marketing, Web & AI',
    blog_desc: 'Discover our latest strategic publications to dominate the digital landscape in Costa Rica.',
    blog_read_more: 'Read article ↗',
    blog_btn_more: 'See More',
    faqs_eyebrow: 'Frequently Asked Questions (FAQs)',
    faqs_title: 'We answer your questions before getting started',
    contact_eyebrow: 'Contact Us · Curridabat, San José, Costa Rica',
    contact_title: 'Need information about our services?',
    contact_desc: 'Feel free to call us or complete the form below. Choose the services you want to quote, attach reference documents, and our team will contact you promptly.',
    form_services_heading: 'Which service(s) would you like to quote? (Select one or more)',
    form_name_label: 'Full Name *',
    form_email_label: 'Email Address *',
    form_phone_label: 'Phone Number *',
    form_company_label: 'Company',
    form_message_label: 'Message / Project Details *',
    form_upload_title: 'Attach relevant documents.',
    form_upload_subtitle: 'Drag and drop files, or select files to upload.',
    form_upload_btn: 'Select files',
    form_upload_hint: 'Accepts images (PNG, JPG, WEBP) or reference PDF documents (Max 10 MB)',
    form_submit_btn: 'Send Quote Request',
    footer_services_heading: 'Services',
    footer_contact_heading: 'Contact',
    footer_copyright: '© 2027 Dame Clic. All rights reserved.',
    footer_privacy: 'Privacy Policy',
    footer_cookies: 'Cookie Settings',
    cookie_title: 'Cookie & Privacy Management (Costa Rica Law 8968 / GDPR / CCPA)',
    cookie_desc: 'At Dame Clic we use first- and third-party cookies to ensure secure site operation, analyze web traffic, and optimize digital campaigns. Choose your preferences:',
    cookie_btn_config: 'Configure',
    cookie_btn_essential: 'Essential only',
    cookie_btn_accept_all: 'Accept all',
    cookie_btn_save: 'Save my selection',
    cookie_pill_label: 'Cookies'
  }
};

document.addEventListener('DOMContentLoaded', () => {
  document.documentElement.classList.remove('dark');
  document.documentElement.classList.add('light');

  initMobileMenu();
  initSearchDrawer();
  initLanguageSwitcher();
  initHeroDynamicSlider();
  initServiceCategoryFilter();
  initCraftedContactForm();
  initCraftedScrollTransitions();
  initFaqAccordion();
  initCookieConsent();
});

// ==========================================================================
// 0. Preloader Cortina Pantalla Completa (1920x1500px) + Hero Slider
//    Independiente (1920x800px) — Réplica de Studio Demo A (Webflow IX2)
// ==========================================================================
function initHeroDynamicSlider() {
  const preloader = document.getElementById('studio-preloader');
  const replayBtn = document.getElementById('replay-curtain-btn');
  const heroSection = document.querySelector('.section-hero-studio');
  const slides = document.querySelectorAll('.slide-vertical[data-studio-slide]');
  const dots = document.querySelectorAll('.studio-nav-dot[data-studio-dot]');
  const prevBtn = document.getElementById('hero-prev-btn');
  const nextBtn = document.getElementById('hero-next-btn');

  if (slides.length === 0) return;

  let currentIndex = 0;
  let autoTimer = null;
  let exitTimeout = null;
  let isPaused = false;
  const AUTO_DELAY_MS = 5500;

  function goToSlide(targetIdx, isInitial = false) {
    const nextIdx = (targetIdx + slides.length) % slides.length;
    if (!isInitial && nextIdx === currentIndex) return;

    const prevIdx = currentIndex;
    currentIndex = nextIdx;

    if (exitTimeout) clearTimeout(exitTimeout);

    slides.forEach((slide, idx) => {
      if (idx === currentIndex) {
        slide.classList.remove('is-exiting');
        // Si no es carga inicial, preparar estado entrante (+300px) antes de activar
        if (!isInitial) {
          slide.classList.remove('is-active');
          void slide.offsetWidth;
        }
        slide.classList.add('is-active');
        slide.setAttribute('aria-hidden', 'false');
      } else if (!isInitial && idx === prevIdx) {
        // IX2 a-87: Slide saliente sube a -300px y se desvanece
        slide.classList.remove('is-active');
        slide.classList.add('is-exiting');
        slide.setAttribute('aria-hidden', 'true');
      } else {
        slide.classList.remove('is-active', 'is-exiting');
        slide.setAttribute('aria-hidden', 'true');
      }
    });

    if (!isInitial) {
      exitTimeout = setTimeout(() => {
        slides[prevIdx]?.classList.remove('is-exiting');
      }, 1450);
    }

    dots.forEach((dot, idx) => {
      const fill = dot.querySelector('.studio-nav-dot-fill');
      if (idx === currentIndex) {
        dot.classList.add('is-active');
        dot.setAttribute('aria-selected', 'true');
        if (fill) {
          fill.style.animation = 'none';
          void fill.offsetWidth;
          fill.style.animation = '';
        }
      } else {
        dot.classList.remove('is-active');
        dot.setAttribute('aria-selected', 'false');
      }
    });
  }

  function startAutoPlay() {
    stopAutoPlay();
    autoTimer = setInterval(() => {
      if (!isPaused) {
        goToSlide(currentIndex + 1, false);
      }
    }, AUTO_DELAY_MS);
  }

  function stopAutoPlay() {
    if (autoTimer) {
      clearInterval(autoTimer);
      autoTimer = null;
    }
  }

  // Animación IX2 a-4 / a-5: Cortina azul de pantalla completa que sube junto al logo
  function runFullScreenCurtain() {
    stopAutoPlay();
    document.body.classList.add('curtain-active');

    // Reiniciar el slide 0 a posición +300px para que suba al abrirse la cortina
    slides.forEach(s => s.classList.remove('is-active', 'is-exiting'));

    if (preloader) {
      preloader.style.transition = 'none';
      preloader.classList.remove('is-lifted');
      const logoImg = preloader.querySelector('.brand-white-pre');
      if (logoImg) {
        logoImg.style.animation = 'none';
        void logoImg.offsetWidth;
        logoImg.style.animation = '';
      }
      void preloader.offsetWidth;
      preloader.style.transition = '';
    }

    setTimeout(() => {
      if (preloader) {
        preloader.classList.add('is-lifted');
      }
      document.body.classList.remove('curtain-active');
      goToSlide(0, true);
      startAutoPlay();
    }, 650);
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      goToSlide(currentIndex - 1, false);
      startAutoPlay();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      goToSlide(currentIndex + 1, false);
      startAutoPlay();
    });
  }

  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      const idx = parseInt(dot.getAttribute('data-studio-dot') || '0', 10);
      goToSlide(idx, false);
      startAutoPlay();
    });
  });

  if (replayBtn) {
    replayBtn.addEventListener('click', () => {
      runFullScreenCurtain();
    });
  }

  if (heroSection) {
    heroSection.addEventListener('mouseenter', () => { isPaused = true; });
    heroSection.addEventListener('mouseleave', () => { isPaused = false; });
  }

  runFullScreenCurtain();
}

// ==========================================================================
// 1. Menú Móvil
// ==========================================================================
function initMobileMenu() {
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  if (!menuToggle || !mobileMenu) return;

  menuToggle.addEventListener('click', () => {
    const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!isExpanded));
    mobileMenu.classList.toggle('hidden');
  });

  const servicesToggle = document.getElementById('mobile-services-toggle');
  const servicesList = document.getElementById('mobile-services-list');
  const servicesChevron = document.getElementById('mobile-services-chevron');

  if (servicesToggle && servicesList) {
    servicesToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const isHidden = servicesList.classList.toggle('hidden');
      if (servicesChevron) {
        servicesChevron.style.transform = isHidden ? 'rotate(0deg)' : 'rotate(180deg)';
      }
    });
  }

  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// ==========================================================================
// 2. Buscador Interactivo (Lupa en el Menú Principal #12162a)
// ==========================================================================
function initSearchDrawer() {
  const toggles = document.querySelectorAll('[data-search-toggle]');
  const drawer = document.getElementById('search-drawer');
  const input = document.getElementById('site-search-input');
  const results = document.getElementById('site-search-results');
  const closeBtn = document.getElementById('search-close-btn');

  if (!drawer) return;

  const catalog = [
    { title: 'Quiénes Somos — Trayectoria, Misión y Valores de Dame Clic', tag: 'Nosotros', href: 'nosotros.html' },
    { title: 'Marketing Digital — Estrategia 360°', tag: 'Servicio', href: 'index.html#servicio-marketing-digital' },
    { title: 'Tienda en Línea — E-Commerce y Pasarelas', tag: 'Servicio', href: 'index.html#servicio-tienda-en-linea' },
    { title: 'Páginas Web — Arquitectura de Conversión', tag: 'Servicio', href: 'index.html#servicio-paginas-web' },
    { title: 'Google Ads — Primera página de Google (PPC)', tag: 'Servicio', href: 'index.html#servicio-google-ads' },
    { title: 'SEO y GEO — Posicionamiento en Google e IA', tag: 'Servicio', href: 'index.html#servicio-seo-geo' },
    { title: 'Redes Sociales — Diseño y Gestión de Contenido', tag: 'Servicio', href: 'index.html#servicio-redes-sociales' },
    { title: 'Analítica Web — Medición de Ventas y ROI', tag: 'Servicio', href: 'index.html#servicio-analitica' },
    { title: 'Diseño Gráfico — Branding e Imagen Corporativa', tag: 'Servicio', href: 'index.html#servicio-diseno-grafico' },
    { title: 'Hospedaje Web — Dominio, Hosting y SSL', tag: 'Servicio', href: 'index.html#servicio-hospedaje-web' },
    { title: '¿Cansado de los “Me gusta” que no venden?', tag: 'Blog', href: 'index.html#blog' },
    { title: 'Deja de perder clientes por un sitio web obsoleto', tag: 'Blog', href: 'index.html#blog' },
    { title: 'Más allá de la IA: Power Pack en Google Ads', tag: 'Blog', href: 'index.html#blog' },
    { title: 'AEO, GEO y VSO: El siguiente paso más allá del SEO', tag: 'Blog', href: 'index.html#blog' },
    { title: 'Formulario de Cotización y Contacto', tag: 'Contacto', href: 'index.html#contacto' },
    { title: 'Políticas de Privacidad', tag: 'Legal', href: './privacidad.html' }
  ];

  function render(q) {
    if (!results) return;
    const query = q.trim().toLowerCase();
    const matches = query
      ? catalog.filter(i => i.title.toLowerCase().includes(query) || i.tag.toLowerCase().includes(query))
      : catalog.slice(0, 6);

    if (matches.length === 0) {
      results.innerHTML = `<p class="text-xs text-[#687287] py-2 col-span-full">No se encontraron resultados para "${q}".</p>`;
      return;
    }

    results.innerHTML = matches.map(item => `
      <a href="${item.href}" class="search-hit flex items-center justify-between px-4 py-2.5 rounded-xl bg-[#f0f0f0] hover:bg-[#ff4200] text-[#12162a] hover:text-white text-xs font-bold transition-colors">
        <span class="truncate pr-2">${item.title}</span>
        <span class="px-2 py-0.5 rounded bg-white text-[#12162a] text-[10px] uppercase font-extrabold shrink-0">${item.tag}</span>
      </a>
    `).join('');

    results.querySelectorAll('.search-hit').forEach(a => {
      a.addEventListener('click', () => drawer.classList.add('hidden'));
    });
  }

  toggles.forEach(btn => {
    btn.addEventListener('click', () => {
      drawer.classList.toggle('hidden');
      if (!drawer.classList.contains('hidden')) {
        render('');
        setTimeout(() => input && input.focus(), 50);
      }
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', () => drawer.classList.add('hidden'));
  }

  if (input) {
    input.addEventListener('input', (e) => render(e.target.value));
  }
}

// ==========================================================================
// 3. Traductor Español / Inglés (ES | EN) junto a la Lupa del Buscador
// ==========================================================================
window.setLanguage = function (lang) {
  const target = lang === 'en' ? 'en' : 'es';
  localStorage.setItem(LANG_STORAGE_KEY, target);
  document.documentElement.lang = target === 'en' ? 'en' : 'es-CR';

  const dict = I18N_DICTIONARY[target];
  if (!dict) return;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) el.textContent = dict[key];
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (dict[key]) el.setAttribute('placeholder', dict[key]);
  });

  document.querySelectorAll('[data-lang-btn]').forEach(btn => {
    const bLang = btn.getAttribute('data-lang-btn');
    if (bLang === target) {
      btn.classList.add('bg-[#ff4200]', 'text-white');
      btn.classList.remove('text-white/75');
    } else {
      btn.classList.remove('bg-[#ff4200]', 'text-white');
      btn.classList.add('text-white/75');
    }
  });
};

function initLanguageSwitcher() {
  const initial = document.documentElement.dataset.defaultLang || localStorage.getItem(LANG_STORAGE_KEY) || 'es';
  window.setLanguage(initial);

  document.querySelectorAll('[data-lang-btn]').forEach(btn => {
    btn.addEventListener('click', () => {
      const targetLang = btn.getAttribute('data-lang-btn');
      window.setLanguage(targetLang);
      const currentPath = window.location.pathname;
      if (currentPath.endsWith('nosotros.html') && targetLang === 'en') {
        window.location.href = 'about.html';
      } else if (currentPath.endsWith('about.html') && targetLang === 'es') {
        window.location.href = 'nosotros.html';
      } else if (currentPath.endsWith('en.html') && targetLang === 'es') {
        window.location.href = 'index.html';
      } else if (currentPath.endsWith('index.html') && targetLang === 'en') {
        window.location.href = 'en.html';
      }
    });
  });
}

// ==========================================================================
// 4. Filtro Rápido de los 9 Servicios Destacados (Estilo Markene)
// ==========================================================================
function initServiceCategoryFilter() {
  const filterBtns = document.querySelectorAll('[data-service-filter]');
  const cards = document.querySelectorAll('[data-service-category]');
  if (filterBtns.length === 0) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const cat = btn.getAttribute('data-service-filter');

      filterBtns.forEach(b => b.classList.remove('is-active'));
      btn.classList.add('is-active');

      cards.forEach(card => {
        const cardCats = card.getAttribute('data-service-category') || '';
        if (cat === 'all' || cardCats.includes(cat)) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });
}

// ==========================================================================
// 5. Formulario Interactivo Estilo Crafted NY (Cajitas de Servicios + Drag & Drop)
// ==========================================================================
const activeServices = new Set();

function syncServicesToForm() {
  const hidden = document.getElementById('selected-services-input');
  const badge = document.getElementById('selected-services-count');
  const list = Array.from(activeServices);

  if (hidden) hidden.value = list.join(', ');
  if (badge) {
    badge.textContent = list.length > 0
      ? `${list.length} servicio(s) seleccionado(s)`
      : 'Haga clic para elegir';
  }
}

window.selectService = function (serviceName) {
  const boxes = document.querySelectorAll('.crafted-service-box');
  boxes.forEach(box => {
    const val = box.getAttribute('data-service-value');
    if (val && (val.toLowerCase() === serviceName.toLowerCase() || serviceName.toLowerCase().includes(val.toLowerCase()))) {
      box.classList.add('active');
      box.setAttribute('aria-pressed', 'true');
      activeServices.add(val);
    }
  });

  if (activeServices.size === 0 && serviceName) {
    activeServices.add(serviceName);
  }
  syncServicesToForm();

  const msg = document.getElementById('message');
  if (msg) {
    msg.value = `Hola equipo de Dame Clic, deseo cotizar: ${Array.from(activeServices).join(', ')}.`;
    msg.focus();
  }
};

function initCraftedContactForm() {
  const boxes = document.querySelectorAll('.crafted-service-box');
  boxes.forEach(box => {
    box.addEventListener('click', () => {
      const val = box.getAttribute('data-service-value');
      if (!val) return;
      const isNowActive = box.classList.toggle('active');
      box.setAttribute('aria-pressed', String(isNowActive));

      if (isNowActive) {
        activeServices.add(val);
      } else {
        activeServices.delete(val);
      }
      syncServicesToForm();

      const msg = document.getElementById('message');
      if (msg && activeServices.size > 0 && (!msg.value || msg.value.startsWith('Hola equipo de Dame Clic'))) {
        msg.value = `Hola equipo de Dame Clic, deseo cotizar: ${Array.from(activeServices).join(', ')}.`;
      }
    });
  });

  // Zona Drag & Drop de Documentos / Imágenes
  const dropzone = document.getElementById('dropzone-area');
  const fileInput = document.getElementById('attachment');
  const filePreview = document.getElementById('file-list-preview');

  if (dropzone && fileInput) {
    ['dragenter', 'dragover'].forEach(evt => {
      dropzone.addEventListener(evt, (e) => {
        e.preventDefault();
        e.stopPropagation();
        dropzone.classList.add('drag-over');
      });
    });

    ['dragleave', 'drop'].forEach(evt => {
      dropzone.addEventListener(evt, (e) => {
        e.preventDefault();
        e.stopPropagation();
        dropzone.classList.remove('drag-over');
      });
    });

    dropzone.addEventListener('drop', (e) => {
      const files = e.dataTransfer?.files;
      if (files && files.length > 0) {
        fileInput.files = files;
        renderFiles(files, filePreview, fileInput);
      }
    });

    fileInput.addEventListener('change', () => {
      if (fileInput.files) {
        renderFiles(fileInput.files, filePreview, fileInput);
      }
    });
  }
}

function renderFiles(fileList, container, inputEl) {
  if (!container) return;
  if (!fileList || fileList.length === 0) {
    container.innerHTML = '';
    container.classList.add('hidden');
    return;
  }

  container.innerHTML = Array.from(fileList).map(file => {
    const kb = (file.size / 1024).toFixed(1);
    return `
      <div class="flex items-center justify-between gap-3 px-4 py-3 rounded-xl bg-[#f0f0f0] border border-[#dfe3ec] text-xs">
        <div class="flex items-center gap-2.5 truncate">
          <span class="w-2.5 h-2.5 rounded-full bg-[#35ca00] shrink-0"></span>
          <span class="font-bold text-[#12162a] truncate">${file.name}</span>
          <span class="text-[#687287]">(${kb} KB)</span>
        </div>
        <button type="button" id="remove-file-btn" class="text-[#ff4200] font-extrabold hover:underline shrink-0 cursor-pointer">
          Eliminar
        </button>
      </div>
    `;
  }).join('');

  container.classList.remove('hidden');

  const removeBtn = container.querySelector('#remove-file-btn');
  if (removeBtn && inputEl) {
    removeBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      inputEl.value = '';
      container.innerHTML = '';
      container.classList.add('hidden');
    });
  }
}

// ==========================================================================
// 6. Animación de Scroll de Fondo Continua y Sin Cortes (Blanco -> Azul -> Blanco):
//    1) Inicia en Blanco (#ffffff) donde están ubicados los servicios:
//       "Servicios Destacados para Multiplicar sus Ventas" (#servicios)
//    2) Transición suave sin cortes de Blanco (#ffffff) a Azul Oscuro (#12162a)
//       al entrar a Suscripción (#suscripcion) y Blog (#blog)
//    3) Mantiene Azul Oscuro (#12162a) en Suscripción y Blog
//    4) Transición suave sin cortes de Azul Oscuro (#12162a) de vuelta a
//       Blanco (#ffffff) al entrar al bloque de Contacto (#contacto)
// ==========================================================================
function initCraftedScrollTransitions() {
  const reveals = document.querySelectorAll('.reveal-block');

  if ('IntersectionObserver' in window) {
    const revealObs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, { threshold: 0.1 });

    reveals.forEach(el => revealObs.observe(el));
  } else {
    reveals.forEach(el => el.classList.add('is-visible'));
  }

  const scrollZone = document.getElementById('scroll-color-zone');
  const servicesBlock = document.getElementById('servicios');
  const newsletterBlock = document.getElementById('suscripcion');
  const blogBlock = document.getElementById('blog');
  const contactBlock = document.getElementById('contacto');

  if (!scrollZone || !servicesBlock || !newsletterBlock || !blogBlock || !contactBlock) return;

  // Paleta de paradas de color para la interpolación continua sin cortes:
  // Stop 0: Blanco (#ffffff)      -> rgb(255, 255, 255) en Servicios
  // Stop 1: Azul Oscuro (#12162a) -> rgb(18, 22, 42)    en Suscripción y Blog
  // Stop 2: Blanco (#ffffff)      -> rgb(255, 255, 255) en Contacto
  const WHITE_RGB = { r: 255, g: 255, b: 255 };
  const NAVY_RGB  = { r: 18,  g: 22,  b: 42  };

  function clamp01(val) {
    return Math.max(0, Math.min(1, val));
  }

  // Curva smoothstep Hermite C1 continua (sin esquinas ni cortes bruscos)
  function smoothstep(t) {
    const x = clamp01(t);
    return x * x * (3 - 2 * x);
  }

  function lerpChannel(a, b, t) {
    return Math.round(a + (b - a) * t);
  }

  function lerpColor(c1, c2, t) {
    const s = smoothstep(t);
    return {
      r: lerpChannel(c1.r, c2.r, s),
      g: lerpChannel(c1.g, c2.g, s),
      b: lerpChannel(c1.b, c2.b, s)
    };
  }

  function docTop(el) {
    return el.getBoundingClientRect().top + (window.scrollY || window.pageYOffset || 0);
  }

  function updateZoneColor() {
    const scrollY = window.scrollY || window.pageYOffset || 0;
    const vh = window.innerHeight || document.documentElement.clientHeight || 800;

    // Punto de lectura del usuario en coordenadas del documento (52% de la altura del viewport)
    const probeY = scrollY + vh * 0.52;

    const newsTop    = docTop(newsletterBlock);
    const newsH      = newsletterBlock.offsetHeight || 360;
    const blogTop    = docTop(blogBlock);
    const blogH      = blogBlock.offsetHeight || 700;
    const contactTop = docTop(contactBlock);
    const contactH   = contactBlock.offsetHeight || 700;

    // Puntos de control estrictamente crecientes en el documento:
    // [ <= yWhiteStart ]                 -> Blanco (#ffffff) en Servicios
    // [ yWhiteStart .. yNavyPeak ]       -> Transición suave Blanco (#ffffff) -> Azul (#12162a)
    // [ yNavyPeak   .. yNavyHold ]       -> Mantiene Azul (#12162a) en Suscripción y Blog
    // [ yNavyHold   .. yWhiteEnd ]       -> Transición suave Azul (#12162a) -> Blanco (#ffffff) hacia Contacto
    // [ >= yWhiteEnd ]                   -> Blanco (#ffffff) en Contacto
    const yWhiteStart = newsTop - vh * 0.45;
    const yNavyPeak   = newsTop + Math.min(newsH * 0.45, 180);
    const yNavyHold   = blogTop + blogH * 0.72;
    const yWhiteEnd   = contactTop + Math.min(contactH * 0.25, 220);

    let currentRGB = WHITE_RGB;
    let zoneState = 'white';
    // Factor de oscuridad del fondo: 0 = Blanco (#ffffff), 1 = Azul (#12162a)
    let darkness = 0;

    if (probeY <= yWhiteStart) {
      currentRGB = WHITE_RGB;
      zoneState = 'white';
      darkness = 0;
    } else if (probeY < yNavyPeak) {
      const t = (probeY - yWhiteStart) / Math.max(1, yNavyPeak - yWhiteStart);
      currentRGB = lerpColor(WHITE_RGB, NAVY_RGB, t);
      zoneState = t > 0.5 ? 'navy' : 'white';
      darkness = smoothstep(t);
    } else if (probeY <= yNavyHold) {
      currentRGB = NAVY_RGB;
      zoneState = 'navy';
      darkness = 1;
    } else if (probeY < yWhiteEnd) {
      const t = (probeY - yNavyHold) / Math.max(1, yWhiteEnd - yNavyHold);
      currentRGB = lerpColor(NAVY_RGB, WHITE_RGB, t);
      zoneState = t > 0.5 ? 'white' : 'navy';
      darkness = 1 - smoothstep(t);
    } else {
      currentRGB = WHITE_RGB;
      zoneState = 'white';
      darkness = 0;
    }

    const bgStr = `rgb(${currentRGB.r}, ${currentRGB.g}, ${currentRGB.b})`;
    scrollZone.style.setProperty('--zone-bg', bgStr);
    scrollZone.style.backgroundColor = bgStr;
    scrollZone.setAttribute('data-zone-color', zoneState);

    // Adaptación suave del título y subtítulo de #blog según oscuridad del fondo (Blanco <-> Azul #12162a)
    const blogHeadR = lerpChannel(18, 255, darkness);
    const blogHeadG = lerpChannel(22, 255, darkness);
    const blogHeadB = lerpChannel(42, 255, darkness);
    scrollZone.style.setProperty('--blog-heading-color', `rgb(${blogHeadR}, ${blogHeadG}, ${blogHeadB})`);

    const blogDescR = lerpChannel(70, 255, darkness);
    const blogDescG = lerpChannel(80, 255, darkness);
    const blogDescB = lerpChannel(104, 255, darkness);
    const blogDescA = (0.95 - 0.07 * darkness).toFixed(2);
    scrollZone.style.setProperty('--blog-desc-color', `rgba(${blogDescR}, ${blogDescG}, ${blogDescB}, ${blogDescA})`);
  }

  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        updateZoneColor();
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });

  window.addEventListener('resize', updateZoneColor, { passive: true });
  updateZoneColor();
}

// ==========================================================================
// 7. Acordeón de Preguntas Frecuentes (FAQs)
// ==========================================================================
function initFaqAccordion() {
  document.querySelectorAll('[data-faq-btn]').forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('aria-controls');
      const panel = document.getElementById(targetId);
      const icon = btn.querySelector('[data-faq-icon]');
      if (!panel) return;

      const expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!expanded));
      panel.classList.toggle('hidden');
      if (icon) {
        icon.style.transform = !expanded ? 'rotate(45deg)' : 'rotate(0deg)';
      }
    });
  });
}

// ==========================================================================
// 8. Gestor de Consentimiento de Cookies (GDPR / CCPA / Ley 8968 CR)
//    Fondo 100% Sólido Opaco (#ffffff), Persistencia en localStorage
//    (dameclic_cookie_consent) y disparo de CustomEvent('cookieConsentUpdated')
// ==========================================================================
const COOKIE_DESIGN_VERSION = 'dameclic3-v2';

function bindCookieBannerEvents(banner) {
  if (!banner || banner.dataset.bound === 'true') return;
  banner.dataset.bound = 'true';

  const btnConfig = banner.querySelector('#cookie-btn-config');
  const btnEssential = banner.querySelector('#cookie-btn-essential');
  const btnAcceptAll = banner.querySelector('#cookie-btn-accept-all');
  const btnSaveCustom = banner.querySelector('#cookie-btn-save-custom');
  const detailsPanel = banner.querySelector('#cookie-details-panel');

  if (btnConfig && detailsPanel) {
    btnConfig.addEventListener('click', () => {
      detailsPanel.classList.toggle('hidden');
    });
  }
  if (btnEssential) {
    btnEssential.addEventListener('click', () => {
      const chkA = banner.querySelector('#chk-cookie-analytics');
      const chkM = banner.querySelector('#chk-cookie-marketing');
      if (chkA) chkA.checked = false;
      if (chkM) chkM.checked = false;
      saveCookieConsent({ analytics: false, marketing: false });
    });
  }
  if (btnAcceptAll) {
    btnAcceptAll.addEventListener('click', () => {
      const chkA = banner.querySelector('#chk-cookie-analytics');
      const chkM = banner.querySelector('#chk-cookie-marketing');
      if (chkA) chkA.checked = true;
      if (chkM) chkM.checked = true;
      saveCookieConsent({ analytics: true, marketing: true });
    });
  }
  if (btnSaveCustom) {
    btnSaveCustom.addEventListener('click', () => {
      const analytics = banner.querySelector('#chk-cookie-analytics')?.checked || false;
      const marketing = banner.querySelector('#chk-cookie-marketing')?.checked || false;
      saveCookieConsent({ analytics, marketing });
    });
  }
}

function initCookieConsent() {
  let banner = document.getElementById('cookie-banner');
  if (!banner) {
    banner = createCookieBannerElement();
    document.body.appendChild(banner);
  }
  bindCookieBannerEvents(banner);

  const reopenPill = document.getElementById('cookie-reopen-pill');
  const saved = localStorage.getItem(COOKIE_STORAGE_KEY);

  if (!saved) {
    banner.classList.remove('hidden');
    if (reopenPill) reopenPill.classList.add('hidden');
  } else {
    try {
      const parsed = JSON.parse(saved);
      if (parsed && parsed.designVersion === COOKIE_DESIGN_VERSION) {
        banner.classList.add('hidden');
        if (reopenPill) reopenPill.classList.remove('hidden');
        const chkA = banner.querySelector('#chk-cookie-analytics');
        const chkM = banner.querySelector('#chk-cookie-marketing');
        if (chkA) chkA.checked = Boolean(parsed.analytics);
        if (chkM) chkM.checked = Boolean(parsed.marketing);
        window.dispatchEvent(new CustomEvent('cookieConsentUpdated', { detail: parsed }));
      } else {
        banner.classList.remove('hidden');
        if (reopenPill) reopenPill.classList.add('hidden');
      }
    } catch (e) {
      banner.classList.remove('hidden');
      if (reopenPill) reopenPill.classList.add('hidden');
    }
  }
}

function saveCookieConsent(preferences) {
  const payload = {
    essential: true,
    analytics: Boolean(preferences.analytics),
    marketing: Boolean(preferences.marketing),
    timestamp: new Date().toISOString(),
    designVersion: COOKIE_DESIGN_VERSION
  };
  localStorage.setItem(COOKIE_STORAGE_KEY, JSON.stringify(payload));
  window.dispatchEvent(new CustomEvent('cookieConsentUpdated', { detail: payload }));

  const banner = document.getElementById('cookie-banner');
  if (banner) banner.classList.add('hidden');

  const reopenPill = document.getElementById('cookie-reopen-pill');
  if (reopenPill) reopenPill.classList.remove('hidden');
}

window.openCookiePreferences = function () {
  let banner = document.getElementById('cookie-banner');
  if (!banner) {
    banner = createCookieBannerElement();
    document.body.appendChild(banner);
  }
  bindCookieBannerEvents(banner);

  const detailsPanel = document.getElementById('cookie-details-panel');
  if (detailsPanel) detailsPanel.classList.remove('hidden');
  banner.classList.remove('hidden');

  const reopenPill = document.getElementById('cookie-reopen-pill');
  if (reopenPill) reopenPill.classList.add('hidden');
};

function createCookieBannerElement() {
  const wrapper = document.createElement('aside');
  wrapper.id = 'cookie-banner';
  wrapper.setAttribute('role', 'dialog');
  wrapper.setAttribute('aria-modal', 'false');
  wrapper.setAttribute('aria-label', 'Gestión de consentimiento de cookies');
  wrapper.className = 'fixed bottom-5 left-5 right-5 md:right-32 z-50 max-w-4xl rounded-2xl bg-white p-6 text-xs text-[#465068]';

  wrapper.innerHTML = `
    <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-5">
      <div class="space-y-1.5 max-w-xl">
        <div class="flex items-center gap-2">
          <span class="w-2.5 h-2.5 rounded-full bg-[#ff4200] shrink-0"></span>
          <p data-i18n="cookie_title" class="font-extrabold text-[#12162a] text-sm font-heading">
            Gestión de Cookies y Privacidad (Ley N.º 8968 CR / GDPR / CCPA)
          </p>
        </div>
        <p class="leading-relaxed text-[#465068]">
          <span data-i18n="cookie_desc">En Dame Clic utilizamos cookies propias y de terceros para garantizar la operación segura del sitio, analizar el tráfico y optimizar nuestras campañas digitales. Elija sus preferencias:</span>
          <a href="./privacidad.html" data-i18n="footer_privacy" class="underline font-bold text-[#12162a] hover:text-[#ff4200] ml-1">Políticas de privacidad</a>.
        </p>
      </div>

      <div class="flex flex-wrap items-center gap-2.5 shrink-0">
        <button type="button" id="cookie-btn-config" data-i18n="cookie_btn_config" class="btn-inactive px-4 py-2.5 text-xs">
          Configurar
        </button>
        <button type="button" id="cookie-btn-essential" data-i18n="cookie_btn_essential" class="btn-inactive px-4 py-2.5 text-xs">
          Solo esenciales
        </button>
        <button type="button" id="cookie-btn-accept-all" data-i18n="cookie_btn_accept_all" class="btn-dameclic px-5 py-2.5 bg-[#12162a] text-white text-xs">
          Aceptar todas
        </button>
      </div>
    </div>

    <div id="cookie-details-panel" class="hidden mt-5 pt-5 border-t border-[#e2e6f0] space-y-4">
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
        <div class="p-3.5 rounded-xl border border-[#e2e6f0] bg-[#f0f0f0]">
          <div class="flex items-center justify-between">
            <span class="font-bold text-[#12162a]">Esenciales</span>
            <span class="text-[#00a2df] font-extrabold uppercase text-[10px]">Siempre activas</span>
          </div>
          <p class="mt-1 text-[#687287]">Requeridas para seguridad, idioma y envío protegido de formularios.</p>
        </div>

        <label class="p-3.5 rounded-xl border border-[#e2e6f0] bg-[#f0f0f0] cursor-pointer flex flex-col justify-between">
          <div class="flex items-center justify-between">
            <span class="font-bold text-[#12162a]">Analítica Web</span>
            <input type="checkbox" id="chk-cookie-analytics" checked class="h-4 w-4 rounded accent-[#12162a]" />
          </div>
          <p class="mt-1 text-[#687287]">Permiten medir visitas y optimizar la experiencia del usuario.</p>
        </label>

        <label class="p-3.5 rounded-xl border border-[#e2e6f0] bg-[#f0f0f0] cursor-pointer flex flex-col justify-between">
          <div class="flex items-center justify-between">
            <span class="font-bold text-[#12162a]">Marketing &amp; Ads</span>
            <input type="checkbox" id="chk-cookie-marketing" class="h-4 w-4 rounded accent-[#12162a]" />
          </div>
          <p class="mt-1 text-[#687287]">Para medición de campañas en Google Ads, Meta y LinkedIn.</p>
        </label>
      </div>

      <div class="flex justify-end">
        <button type="button" id="cookie-btn-save-custom" data-i18n="cookie_btn_save" class="btn-dameclic px-5 py-2.5 bg-[#00a2df] text-white text-xs">
          Guardar mi selección
        </button>
      </div>
    </div>
  `;

  return wrapper;
}
