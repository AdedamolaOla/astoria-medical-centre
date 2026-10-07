/*
 * Static presentation data. The doctor cards in the Figma file use placeholder
 * identities. Replace these entries with clinic-approved profiles and verify
 * availability before treating this public prototype as an operational site.
 */
const homeServices = [
  { icon: "routine", title: "Routine Check-ups", description: "Regular health evaluations to monitor and maintain your well-being." },
  { icon: "preventive", title: "Preventive Care", description: "Vaccinations, screenings, and wellness advice to prevent illness and promote healthy lifestyles." },
  { icon: "chronic", title: "Chronic Disease Management", description: "Ongoing care and support for conditions such as diabetes, hypertension, and asthma." },
  { icon: "pediatric", title: "Pediatric Care", description: "Well-child visits, vaccinations, and developmental screenings for children of all ages." },
  { icon: "geriatric", title: "Geriatric Care", description: "Comprehensive geriatric assessments and management of age-related conditions." },
  { icon: "mental", title: "Mental Health Services", description: "Support and treatment for conditions such as depression, anxiety, and stress-related issues." }
];
const serviceDetails = [
  { icon: "routine", title: "Routine Check-ups", description: "Thoughtful, unhurried visits that establish your health baseline and keep small changes from becoming larger concerns.", benefits: ["Physical exams and health history", "Medication and lifestyle review", "Personalized follow-up plan"] },
  { icon: "preventive", title: "Preventive Care", description: "Age-appropriate prevention shaped around your history, risks, goals, and the realities of your daily life.", benefits: ["Immunizations and screening plans", "Heart and metabolic health checks", "Practical nutrition and sleep guidance"] },
  { icon: "chronic", title: "Chronic Disease Management", description: "Consistent physician guidance that connects symptoms, medication, specialist care, and everyday progress.", benefits: ["Regular monitoring and goal setting", "Medication coordination", "Specialist and allied-health referrals"] },
  { icon: "pediatric", title: "Pediatric Care", description: "Warm, reassuring care that helps children thrive and gives parents clear answers at every stage.", benefits: ["Well-child visits and immunizations", "Growth and development checks", "Same-family continuity and guidance"] },
  { icon: "geriatric", title: "Geriatric Care", description: "Respectful, coordinated support focused on independence, comfort, cognition, mobility, and quality of life.", benefits: ["Mobility, memory, and safety reviews", "Complex medication management", "Caregiver and community support"] },
  { icon: "mental", title: "Mental Health Services", description: "A confidential first point of care for emotional well-being, with ongoing check-ins and referral support when needed.", benefits: ["Private, compassionate assessment", "Treatment and progress monitoring", "Counselling and specialist referrals"] }
];
const doctors = [
  { name: "Dr. Name", credentials: "CMO, MD, CCFP, FRCGP", accepting: false },
  { name: "Dr. Name", credentials: "MD, CCFP, MRCGP, Dip Derm.", accepting: false },
  { name: "Dr. Name", credentials: "MD, CCFP, MRCGP, Dip Derm.", accepting: true },
  { name: "Dr. Name", credentials: "MD, CCFP, MRCGP", accepting: true },
  { name: "Dr. Name", credentials: "MD, CCFP, MRCGP", accepting: true },
  { name: "Dr. Name", credentials: "MD, CCFP, MRCGP", accepting: false },
  { name: "Dr. Name", credentials: "MD, CCFP, MRCGP", accepting: true },
  { name: "Dr. Name", credentials: "MBChB, MRCP", accepting: true },
  { name: "Dr. Name", credentials: "MBBS, MRCGP, CFPC", accepting: true }
];

const currentPage = document.body.dataset.page;
const navItems = [
  { label: "Home", url: "index.html", page: "home" },
  { label: "About Us", url: "about.html", page: "about" },
  { label: "Our Team", url: "team.html", page: "team" },
  { label: "Services", url: "services.html", page: "services" },
  { label: "FAQ", url: "index.html#faq" },
  { label: "Contact", url: "#contact" }
];
const header = document.querySelector("#site-header");
header.innerHTML = `<header class="site-header"><nav class="container nav-layout" aria-label="Main navigation">
  <a class="brand" href="index.html" aria-label="Astoria Medical Centre home"><span class="brand-logo" aria-hidden="true"><picture><source media="(max-width: 900px)" srcset="assets/astoria-logo-icon-mobile.svg"><img src="assets/astoria-logo-icon.svg" alt=""></picture><picture><source media="(max-width: 900px)" srcset="assets/astoria-logo-wordmark-mobile.svg"><img src="assets/astoria-logo-wordmark.svg" alt=""></picture></span></a>
  <button class="menu-toggle" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="site-menu"><span></span><span></span><span></span></button>
  <div class="site-menu" id="site-menu">${navItems.map(item => `<a href="${item.url}" class="nav-link${item.page === currentPage ? " active" : ""}"${item.page === currentPage ? ' aria-current="page"' : ""}>${item.label}</a>`).join("")}</div>
  <button class="button button-primary nav-cta" type="button" data-booking>Register Patient</button>
</nav></header>`;
const footer = document.querySelector("#site-footer");
footer.innerHTML = `<footer class="site-footer" id="contact"><div class="container footer-main">
  <div class="footer-brand"><a class="footer-logo" href="index.html" aria-label="Astoria Medical Centre home"><img src="assets/astoria-logo-icon-white.svg" alt=""><img src="assets/astoria-logo-wordmark-white.svg" alt=""></a><p>Your trusted primary care and clinical walk-in facility. Dedicated to exceptional patient experiences, accessibility, and modern medical practices.</p></div>
  <div class="footer-links"><h2>Quick Links</h2><a href="index.html">Home</a><a href="about.html">About Us</a><a href="team.html">Our Team</a><a href="services.html">Services</a><a href="index.html#faq">FAQ</a><a href="#contact">Contact</a></div>
  <div class="footer-contact"><h2>Contact Astoria</h2><a href="mailto:info@astoriamedicalcentre.ca">Support Email: info@astoriamedicalcentre.ca</a><a href="tel:+13434781009">Phone: +1 343-478-1009</a></div>
</div><div class="container footer-bottom"><small>© Astoria Medical Centre. All rights reserved.</small><div class="social-icons" aria-label="Social media icons"><span class="social-icon"><img src="assets/icons/social-facebook.svg" alt=""></span><span class="social-icon"><img src="assets/icons/social-twitter.svg" alt=""></span><span class="social-icon"><img src="assets/icons/social-instagram.svg" alt=""></span><span class="social-icon"><img src="assets/icons/social-linkedin.svg" alt=""></span></div></div></footer>`;

const homeGrid = document.querySelector("#home-service-grid");
if (homeGrid) for (const service of homeServices) {
  const card = document.createElement("article");
  card.className = "home-service-card";
  card.innerHTML = `<img src="assets/icons/home-${service.icon}.svg" alt=""><h3></h3><p></p>`;
  card.querySelector("h3").textContent = service.title;
  card.querySelector("p").textContent = service.description;
  homeGrid.append(card);
}
const doctorGrid = document.querySelector("#doctor-grid");
if (doctorGrid) for (const doctor of doctors) {
  const card = document.createElement("article");
  card.className = "doctor-card";
  card.innerHTML = `<div class="doctor-photo" aria-hidden="true"></div><div class="doctor-info"><h3></h3><p></p><span class="status-badge ${doctor.accepting ? "accepting" : "not-accepting"}"><span class="status-dot"></span>${doctor.accepting ? "Accepting patients" : "Not accepting"}</span></div>`;
  card.querySelector("h3").textContent = doctor.name;
  card.querySelector("p").textContent = doctor.credentials;
  doctorGrid.append(card);
}
const detailGrid = document.querySelector("#detail-grid");
if (detailGrid) for (const service of serviceDetails) {
  const card = document.createElement("article");
  card.className = "detail-card";
  card.innerHTML = `<div class="detail-heading"><span class="circle-icon"><img src="assets/icons/services-${service.icon}.svg" alt=""></span><h3></h3></div><p></p><ul class="detail-benefits"></ul>`;
  card.querySelector("h3").textContent = service.title;
  card.querySelector("p").textContent = service.description;
  const list = card.querySelector("ul");
  for (const text of service.benefits) {
    const li = document.createElement("li");
    li.textContent = text;
    list.append(li);
  }
  detailGrid.append(card);
}

const panel = document.querySelector("#booking-panel");
panel.innerHTML = `<dialog id="booking-dialog" aria-labelledby="booking-title">
  <div class="dialog-frame"><button type="button" class="dialog-close" aria-label="Close appointment form">×</button>
    <form id="booking-form">
      <div class="form-intro"><h2 id="booking-title">Book Appointment</h2><p>Scheduling an appointment is easy and convenient. We are committed to providing timely and efficient healthcare services to our patients.</p></div>
      <div class="form-fields">
        <label>Your Name<input type="text" name="name" placeholder="E.g. John Doe" autocomplete="name" required></label>
        <label>Your Email<input type="email" name="email" placeholder="E.g. john@example.com" autocomplete="email" required></label>
        <label>Your Phone<input type="tel" name="phone" placeholder="E.g. +1 (555) 000-0000" autocomplete="tel" required></label>
        <label>Your Family Doctor<select name="doctor" required><option>Dr. Samuel Babatunde</option></select></label>
        <label class="reason-field">Please provide us with the reason of the appointment<textarea name="reason" placeholder="Briefly describe your symptoms or the clinical service you require..." rows="5" required></textarea></label>
      </div>
      <div class="form-bottom"><p class="booking-message" id="booking-message" role="status">Online requests are not active yet. Please call the clinic to arrange an appointment; do not enter sensitive health details here.</p><button class="button button-primary" type="submit">Confirm your Appointment</button></div>
    </form>
  </div>
</dialog>`;
const dialog = document.querySelector("#booking-dialog");
const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".site-menu");
menuToggle.addEventListener("click", () => {
  const open = menuToggle.getAttribute("aria-expanded") !== "true";
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  menu.classList.toggle("is-open", open);
});
menu.addEventListener("click", event => {
  if (event.target.closest("a")) {
    menu.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open menu");
  }
});
document.querySelectorAll("[data-booking]").forEach(button => button.addEventListener("click", () => {
  menu.classList.remove("is-open");
  menuToggle.setAttribute("aria-expanded", "false");
  if (!dialog.open) dialog.showModal();
}));
function closeBooking() {
  if (!dialog.open || dialog.classList.contains("is-closing")) return;
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
    dialog.close();
    return;
  }
  dialog.classList.add("is-closing");
  window.setTimeout(() => {
    if (dialog.open) dialog.close();
    dialog.classList.remove("is-closing");
  }, 260);
}
document.querySelector(".dialog-close").addEventListener("click", closeBooking);
dialog.addEventListener("click", event => { if (event.target === dialog) closeBooking(); });
dialog.addEventListener("cancel", event => { event.preventDefault(); closeBooking(); });
dialog.addEventListener("close", () => dialog.classList.remove("is-closing"));
document.querySelector("#booking-form").addEventListener("submit", event => {
  event.preventDefault();
  document.querySelector("#booking-message").innerHTML = 'Online requests are not available. Please call <a href="tel:+13434781009">+1 343-478-1009</a> to book. Your form details were not sent.';
});
document.querySelectorAll(".faq-item").forEach(item => item.addEventListener("toggle", () => {
  if (item.open) document.querySelectorAll(".faq-item").forEach(other => { if (other !== item) other.open = false; });
}));
function revealMobileFaq() {
  if (location.hash === "#faq" && matchMedia("(max-width: 700px)").matches) {
    const section = document.querySelector("#faq");
    if (section) {
      section.classList.add("is-mobile-open");
      requestAnimationFrame(() => section.scrollIntoView());
    }
  }
}
window.addEventListener("hashchange", revealMobileFaq);
revealMobileFaq();

// Reveal each section once it enters view. Content stays visible without motion support.
if ("IntersectionObserver" in window && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const revealTargets = document.querySelectorAll([
    ".hours-intro", ".hours-grid", ".enrollment-image", ".enrollment-copy",
    ".home-services .section-heading", ".home-service-card",
    ".physicians .section-heading", ".doctor-card", ".faq-layout > *",
    ".story-layout > *", ".life-heading > *", ".life-layout > *",
    ".values-heading > *", ".value-card", ".community-layout > *",
    ".callout-layout > *", ".service-intro", ".detail-card", ".footer-main > *"
  ].join(","));
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    }
  }, { rootMargin: "0px 0px -8% 0px", threshold: 0 });
  revealTargets.forEach((element, index) => {
    // Small offsets make adjacent cards arrive in sequence without holding up a row.
    if (element.matches(".home-service-card,.doctor-card,.value-card,.detail-card")) {
      element.style.setProperty("--reveal-delay", `${(index % 3) * 65}ms`);
    }
    element.classList.add("reveal-on-scroll");
    observer.observe(element);
  });
}
