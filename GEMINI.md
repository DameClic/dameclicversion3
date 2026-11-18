# Reglas de Proyecto: Dameclic Web Design (Agencia + Automatización)

Este archivo establece las instrucciones obligatorias para el desarrollo, rediseño, cumplimiento SEO/Legal y previsualización visual de sitios web corporativos y comerciales en este workspace.

---

## 3. SEO Técnico, Privacidad Internacional y Production Readiness
Todo sitio generado debe incluir de forma obligatoria:
* **Meta Tags por Página:** `<title>`, `<meta name="description">`, `canonical`, etiquetas **Open Graph** (`og:title`, `og:description`, `og:image`, `og:url`) para WhatsApp/LinkedIn y **Twitter Cards**.
* **Datos Estructurados (Schema.org):** Bloque `<script type="application/ld+json">` en cada página (`Organization`, `ProfessionalService`, `WebSite`, `WebPage`).
* **Archivos de Raíz:** Generar siempre `robots.txt`, `sitemap.xml`, `site.webmanifest`, `privacidad.html` y `404.html`.
* **Gestión de Cookies (GDPR / CCPA / Ley 8968 CR):** Banner de consentimiento de cookies con diseño editorial discreto y **fondo sólido opaco (nunca transparente)**, opciones claras (*Aceptar todas*, *Solo esenciales*, *Configurar*), persistencia en `localStorage` (`dameclic_cookie_consent`), disparo de `CustomEvent('cookieConsentUpdated')` y enlace en el footer para reabrir preferencias.
* **Accesibilidad & Core Web Vitals:** Skip-link (`Saltar al contenido`), jerarquía única de `<h1>`, `fetchpriority="high"` en imagen Hero y `loading="lazy"` en imágenes bajo el pliegue.

---

## 4. Contratos con el Backend y Automatización
* **Estructura Estática Pura:** Solo se crean archivos `.html`, `.css`, `.js` (puro UI), archivos de raíz SEO (`robots.txt`, `sitemap.xml`, `site.webmanifest`) e imágenes optimizadas en `assets/images/`. Cero backend (PHP, Node, bases de datos o servicios como Formspree/EmailJS).
* **Formularios:**
  * Siempre con `method="POST"` y `action="/api/v1/submit-form"`.
  * Siempre con el atributo identificador `data-form-id="[id-del-formulario]"`.
  * Campo Honeypot anti-spam `<input type="text" name="_gotcha" class="hidden" tabindex="-1" autocomplete="off" />`.
  * Casilla obligatoria de aceptación de Política de Privacidad (`name="privacy_consent"`).
  * Nombres de campos semánticos (`name`, `email`, `phone`, `company`, `message`).
  * Para subida de archivos: `enctype="multipart/form-data"` e input estándar `<input type="file" name="attachment" accept="image/*,.pdf" />`.

---

## 5. Skills Asociados
* `@skill:bespoke-editorial-design`: Consultar para lineamientos de Modo Claro por defecto, tipografía, curaduría de fotografías reales, cintillos de clientes en escala de grises, Bento Grids asimétricos y espaciado.
* `@skill:static-frontend-contract`: Consultar para el flujo de rediseño con imágenes del sitio live, compatibilidad de artefactos, estructura de archivos y plantillas de formularios compatibles con el orquestador.
* `@skill:seo-compliance-and-readiness`: Consultar para Meta Tags por página, Open Graph, Schema.org JSON-LD, `robots.txt`, `sitemap.xml`, Cookie Consent Manager, páginas legales (`privacidad.html`, `404.html`), accesibilidad WCAG AA y Core Web Vitals.
