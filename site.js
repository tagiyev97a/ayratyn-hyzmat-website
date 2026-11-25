
const translations = {"tk": ["Baş sahypa", "Biz barada", "Hyzmatlarymyz", "Müşderiler", "Habarlaşmak", "Syýahatçylyk, arassaçylyk we gorag hyzmatlary", "Şahsy we korporatiw müşderiler üçin uçar petekleri, myhmanhana bronlamak we syýahat goldawy. Kärhanalar we edaralar üçin arassaçylyk we gorag hyzmatlary.", "Syýahatçylyk", "Uçar petekleri, myhmanhana bronlamak we syýahat goldawy.", "Turkish Airlines awiakompaniýasynyň ygtyýarly agentligi.", "Arassaçylyk", "Binalaryň içini we daşky ýüzüni arassalamak. Daşky ýüzleri arassalaýan toparymyzda IRATA şahadatnamaly işgärler bar.", "Gorag", "Kärhanalar we edaralar üçin gorag hyzmatlary.", "Biziň bilen işleýän guramalar", "BMG-niň Türkmenistandaky edarasy", "Berkarar Business Center, 1-nji gat, Aşgabat, Türkmenistan", "Baş edara we gorag", "Şahadatnamalaryň gerimi: syýahatçylyk, arassaçylyk we gorag hyzmatlary.", "Hyzmat barada", "Uçar petekleri we syýahat goldawy", "Şahsy we iş saparlary üçin uçar petekleri, myhmanhana bronlamak we sapary meýilleşdirmek boýunça kömek edýäris.", "Jaýlaryň we fasadlaryň arassalanyşy", "Kärhanalar we edaralar üçin jaýlaryň içini hem-de binalaryň daşky ýüzüni arassalaýarys.", "Kärhanalar we edaralar üçin gorag", "Gorag hyzmatlary barada maglumat almak we zerurlyklaryňyzy ara alyp maslahatlaşmak üçin baş edaramyz bilen habarlaşyň."], "ru": ["Главная", "О компании", "Услуги", "Клиенты", "Контакты", "Туризм, клининг и охрана", "Авиабилеты, бронирование отелей и помощь в организации поездок для частных и корпоративных клиентов. Клининг и охрана для компаний и учреждений.", "Туризм", "Авиабилеты, бронирование отелей и помощь в организации поездок.", "Авторизованное агентство Turkish Airlines.", "Клининг", "Уборка помещений и чистка фасадов. В нашей команде по чистке фасадов работают специалисты с сертификатами IRATA.", "Охрана", "Охранные услуги для компаний и учреждений.", "Наши клиенты", "ООН в Туркменистане", "Berkarar Business Center, 1-й этаж, Ашхабад, Туркменистан", "Главный офис и охрана", "Область сертификации: туристические, клининговые и охранные услуги.", "Подробнее", "Авиабилеты и организация поездок", "Помогаем подобрать авиабилеты и забронировать гостиницы для личных и деловых поездок.", "Уборка помещений и чистка фасадов", "Предоставляем услуги по уборке помещений и чистке фасадов для компаний и учреждений.", "Охрана для компаний и учреждений", "Свяжитесь с нашим главным офисом, чтобы узнать об услугах охраны и обсудить ваши потребности."], "en": ["Home", "About Us", "Services", "Clients", "Contact", "Travel, Cleaning & Security Services", "Air ticketing, hotel reservations and travel assistance for individuals and corporate clients. Cleaning and security services for businesses and institutions.", "Travel", "Air ticketing, hotel reservations and travel assistance.", "Turkish Airlines Authorized Agency.", "Cleaning", "Commercial and façade cleaning. Our façade cleaning team includes IRATA-certified rope access technicians.", "Security", "Security services for businesses and institutions.", "Organizations We Work With", "UN in Turkmenistan", "Berkarar Business Center, 1st floor, Ashgabat, Turkmenistan", "Head Office & Security", "Certification scope: travel, cleaning and security services.", "View service", "Air ticketing and travel assistance", "We help individuals and corporate clients with flights, hotel reservations and trip planning.", "Commercial and façade cleaning", "We provide interior and façade cleaning for businesses and institutions.", "Security for businesses and institutions", "Contact our head office to discuss your security needs and learn about our services."]};
const languageButtons = document.querySelectorAll("[data-lang]");
function setLanguage(language) {
  document.documentElement.lang = language;
  document.querySelectorAll("[data-t]").forEach(element => {
    element.textContent = translations[language][Number(element.dataset.t)];
  });
  const heading = document.querySelector("h1");
  if (heading.hasAttribute("data-t")) {
    document.title = heading.textContent + " | AÝRATYN HYZMAT";
  }
  document.querySelectorAll("a[data-page]").forEach(link => {
    const url = new URL(link.href);
    if (language === "tk") url.searchParams.delete("lang");
    else url.searchParams.set("lang", language);
    link.href = url.href;
  });
  languageButtons.forEach(button => {
    button.setAttribute("aria-pressed", String(button.dataset.lang === language));
  });
}
languageButtons.forEach(button => {
  button.addEventListener("click", () => {
    const url = new URL(window.location.href);
    if (button.dataset.lang === "tk") url.searchParams.delete("lang");
    else url.searchParams.set("lang", button.dataset.lang);
    history.replaceState(null, "", url);
    setLanguage(button.dataset.lang);
  });
});

const requestedLanguage = new URLSearchParams(location.search).get("lang");
setLanguage(Object.hasOwn(translations, requestedLanguage) ? requestedLanguage : "tk");
