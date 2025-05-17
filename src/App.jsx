import { useState } from "react";
import {
  FaCogs,
  FaRobot,
  FaCodeBranch,
  FaCloud,
  FaHandshake,
  FaMagic,
  FaChartBar,
  FaBrain,
  FaBars,
  FaTimes,
  FaInstagram,
  FaLinkedinIn,
  FaFacebookF
} from "react-icons/fa";
import { useTranslation } from "react-i18next";
import "./i18n";
import { motion } from "framer-motion";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const App = () => {
  const { t, i18n } = useTranslation();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
  { href: "#quemsomos", label: t("nav.about") },
  { href: "#especialidades", label: t("nav.specialties") },
  { href: "#ia", label: "IA" }, // Se quiser internacionalizar, adicione em `t("nav.ia")`
  { href: "#empresas", label: t("nav.clients") },
  { href: "#produtos", label: t("nav.products") },
  { href: "#blip", label: t("nav.partner") },
];

  return (
    <div className="font-sans bg-gray-50 text-gray-800">
       <nav className="sticky top-0 z-50 bg-white shadow-md py-4 px-6 flex justify-between items-center max-w-7xl mx-auto">
      {/* Logo */}
      <div className="flex items-center h-10">
        <img
          src="https://onyedkfjdkplbaxpetln.supabase.co/storage/v1/object/public/imagens//logodkteste.png"
          alt="Logo DKdevs"
          className="h-full w-auto object-contain"
        />
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-6 text-sm font-medium text-gray-600">
         {navItems.map((item) => (
    <li key={item.href}>
      <a href={item.href}>{item.label}</a>
    </li>
  ))}
      </ul>

      {/* Language Selector (desktop) */}
      <div className="relative hidden md:block">
        <button
          onClick={() => {
            const menu = document.getElementById("lang-menu");
            if (menu) menu.classList.toggle("hidden");
          }}
          className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white border shadow hover:bg-gray-100 focus:outline-none"
          aria-label="Selecionar idioma"
        >
          <img
            src={
              i18n.language === "pt"
                ? "https://flagcdn.com/w20/br.png"
                : i18n.language === "en"
                ? "https://flagcdn.com/w20/us.png"
                : "https://flagcdn.com/w20/es.png"
            }
            alt={i18n.language}
            className="w-5 h-auto rounded"
          />
        </button>

        <div
          id="lang-menu"
          className="hidden absolute mt-2 right-0 w-36 bg-white border border-gray-200 rounded-md shadow-lg z-50"
        >
          <ul className="py-1 text-sm text-gray-700">
            {[
              { code: "pt", label: "Português", flag: "br" },
              { code: "en", label: "English", flag: "us" },
              { code: "es", label: "Español", flag: "es" },
            ].map(({ code, label, flag }) => (
              <li key={code}>
                <button
                  onClick={() => {
                    i18n.changeLanguage(code);
                    document.getElementById("lang-menu")?.classList.add("hidden");
                  }}
                  className="flex items-center w-full px-4 py-2 hover:bg-gray-100"
                >
                  <img
                    src={`https://flagcdn.com/w20/${flag}.png`}
                    alt={label}
                    className="mr-2"
                  />
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Mobile Menu Toggle */}
      <button
        className="md:hidden text-gray-600 text-2xl"
        onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Menu"
      >
        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white border-t border-gray-200 shadow-md md:hidden z-50">
          <ul className="flex flex-col px-6 py-4 space-y-3 text-gray-700 font-medium">
  {navItems.map((item) => (
    <li key={item.href}>
      <a href={item.href}>{item.label}</a>
    </li>
  ))}
          </ul>
        </div>
      )}
    </nav>
      {/* NAVIGATION OMITTED FOR BREVITY */}

      <motion.header
        className="text-center bg-gradient-to-br from-white to-green-50 py-24 px-6 shadow"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex justify-center mb-6 text-green-600 text-5xl">
          <FaCogs />
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight max-w-3xl mx-auto text-gray-900">
          {t("header.title")}
        </h1>
        <p className="text-lg max-w-xl mx-auto mt-4 text-gray-700">
          {t("header.subtitle")}
        </p>
      </motion.header>

      <motion.section
        id="especialidades"
        className="bg-green-100 py-20 px-6"
        {...fadeIn}
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            {t("nav.specialties")}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              <FaRobot />,
              <FaCodeBranch />,
              <FaCloud />,
              <FaHandshake />,
              <FaMagic />,
              <FaChartBar />,
            ].map((icon, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: idx * 0.1,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
                className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-green-600 text-3xl">{icon}</div>
                <p className="text-left font-medium text-gray-700">
                  {t(`specialties.${idx}`)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section id="ia" className="bg-white py-20 px-6" {...fadeIn}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 flex items-center justify-center gap-2 mb-4">
            <FaBrain className="text-green-600" /> {t("section.ia_title")}
          </h2>
          <p className="text-gray-700 text-lg">{t("section.ia_description")}</p>
        </div>
      </motion.section>

      <motion.section
        id="empresas"
        className="bg-green-100 py-20 px-6 text-center"
        {...fadeIn}
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-12">
          {t("nav.clients")}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {[
            {
              src: "https://onyedkfjdkplbaxpetln.supabase.co/storage/v1/object/public/imagens//boasafraa-300x111.webp",
              alt: "Boa Safra",
              site: "https://www.boasafrasementes.com.br/",
              descKey: "clients.boasafra",
            },
            {
              src: "https://onyedkfjdkplbaxpetln.supabase.co/storage/v1/object/public/imagens//quality-1024x438.webp",
              alt: "Farmácia Quality",
              site: "https://qualityfarma.com.br",
              descKey: "clients.quality",
            },
            {
              src: "https://onyedkfjdkplbaxpetln.supabase.co/storage/v1/object/public/imagens//lantana.webp",
              alt: "Lantana Farma",
              site: "https://lantanafarmacia.com.br",
              descKey: "clients.lantana",
            },
            {
              src: "https://onyedkfjdkplbaxpetln.supabase.co/storage/v1/object/public/imagens//lecharpe_logo_1.webp",
              alt: "Le Charpe",
              site: "https://lecharpe.com.br",
              descKey: "clients.lecharpe",
            },
          ].map((cliente, idx) => (
            <a
              href={cliente.site}
              key={idx}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center hover:shadow-lg transition duration-300 hover:scale-105"
            >
              <img
                src={cliente.src}
                alt={cliente.alt}
                className="h-12 mb-3 object-contain"
              />
              <p className="text-sm text-gray-600 mt-1">{t(cliente.descKey)}</p>
            </a>
          ))}
        </div>
      </motion.section>

      <motion.section
        id="blip"
        className="bg-white py-20 px-6 text-center"
        {...fadeIn}
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            {t("nav.partner")}
          </h2>
          <div className="flex justify-center items-center gap-6 flex-col">
            <img
              src="https://onyedkfjdkplbaxpetln.supabase.co/storage/v1/object/public/imagens//Blip-Partner-colorido.webp"
              alt="Blip Logo"
              className="h-16"
            />
            <p className="max-w-2xl text-gray-600 text-lg">
              {t("section.blip_description_1")}
            </p>
            <p className="max-w-2xl text-gray-600 text-lg mt-4">
              {t("section.blip_description_2")}
            </p>
          </div>
        </div>
      </motion.section>

      <motion.section
        id="produtos"
        className="bg-green-100 py-20 px-6"
        {...fadeIn}
      >
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            {t("nav.products")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-white rounded-2xl shadow-2xl text-left transition hover:shadow-[0_10px_40px_rgba(0,0,0,0.15)] duration-300">
              <img
                src="https://onyedkfjdkplbaxpetln.supabase.co/storage/v1/object/public/imagens//ChatGPT%20Image%2011%20de%20mai.%20de%202025,%2012_39_59.png"
                alt="Farm Desk"
                className="h-32 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-green-700 mb-2">
                {t("products.farmdesk.name")}
              </h3>
              <p className="text-sm mb-4 text-gray-700">
                {t("products.farmdesk.desc")}
              </p>
              <a
                href="https://chromewebstore.google.com/detail/farm-desk/lijghefibplpdemmbaoehokpkdgiihdf"
                className="inline-block text-sm font-medium text-white bg-green-600 hover:bg-green-700 px-4 py-2 rounded"
              >
                {t("products.farmdesk.cta")}
              </a>
            </div>

            <div className="p-8 bg-white rounded-2xl shadow-2xl text-left transition hover:shadow-[0_10px_40px_rgba(0,0,0,0.15)] duration-300">
              <img
                src="https://onyedkfjdkplbaxpetln.supabase.co/storage/v1/object/public/imagens//ChatGPT%20Image%2011%20de%20mai.%20de%202025,%2012_39_43.png"
                alt="SalusAPI"
                className="h-32 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-green-700 mb-2">
                {t("products.salusapi.name")}
              </h3>
              <p className="text-sm mb-4 text-gray-700">
                {t("products.salusapi.desc")}
              </p>
              <a
                href="https://wa.me/5521974437698" // Substitua pelo seu número real
                target="_blank"
                className="inline-block text-sm font-medium text-white bg-green-600 hover:bg-green-700 px-4 py-2 rounded"
              >
                {t("products.salusapi.cta")}
              </a>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        id="quemsomos"
        className="bg-white py-20 px-6"
        {...fadeIn}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            {t("section.quem_somos_title")}
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            {t("section.quem_somos_1")}
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mt-6">
            {t("section.quem_somos_2")}
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mt-6">
            {t("section.quem_somos_3")}
          </p>
        </div>
      </motion.section>

      <footer className="bg-green-700 text-white text-sm">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-12 md:gap-16 border-b border-green-600 pb-8">
            {/* Coluna Institucional */}
<div className="md:w-1/2 space-y-3">
  <h3 className="text-2xl font-bold text-white">
    {t("footer.title")}
  </h3>
  <p className="text-gray-100 leading-relaxed">
    {t("footer.description")}
  </p>
  
  {/* Redes Sociais */}
  <div className="mt-4 flex gap-4">
    <a
      href="https://www.instagram.com/suaempresa"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Instagram"
      className="text-green-200 hover:text-white transition-colors duration-300 text-xl"
    >
      <FaInstagram />
    </a>
    <a
      href="https://www.linkedin.com/in/suaempresa"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="LinkedIn"
      className="text-green-200 hover:text-white transition-colors duration-300 text-xl"
    >
      <FaLinkedinIn />
    </a>
    <a
      href="https://www.facebook.com/suaempresa"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Facebook"
      className="text-green-200 hover:text-white transition-colors duration-300 text-xl"
    >
      <FaFacebookF />
    </a>
  </div>
</div>

            {/* Coluna de Links */}
            <div className="md:w-1/2 space-y-4">
              <h3 className="text-xl font-semibold text-white">
                {t("footer.navigation")}
              </h3>
              <div className="flex flex-wrap gap-x-6 gap-y-3 text-gray-100">
                <a
                  href="#quemsomos"
                  className="hover:underline hover:text-white"
                >
                  {t("footer.about")}
                </a>
                <a
                  href="#especialidades"
                  className="hover:underline hover:text-white"
                >
                  {t("footer.specialties")}
                </a>
                <a href="#ia" className="hover:underline hover:text-white">
                  {t("footer.ai")}
                </a>
                <a
                  href="#empresas"
                  className="hover:underline hover:text-white"
                >
                  {t("footer.clients")}
                </a>
                <a
                  href="#produtos"
                  className="hover:underline hover:text-white"
                >
                  {t("footer.products")}
                </a>
                <a href="#blip" className="hover:underline hover:text-white">
                  {t("footer.partner")}
                </a>
              </div>
            </div>
          </div>

          {/* Direitos Autorais */}
          <div className="text-center text-xs text-green-200 mt-6">
            © {new Date().getFullYear()} DKdevs. {t("footer.rights")}
          </div>
        </div>

      </footer>

      <a
        href="https://wa.me/5521974437698" // Substitua pelo seu número real
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-50 animate-bounce"
        aria-label="Fale conosco no WhatsApp"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/5/5e/WhatsApp_icon.png"
          alt="WhatsApp"
          className="w-14 h-14 drop-shadow-lg hover:scale-110 transition-transform duration-300"
        />
      </a>
    </div>
  );
};

export default App;
