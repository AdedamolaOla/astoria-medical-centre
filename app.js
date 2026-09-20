/*
 * Astoria Medical Centre
 *
 * The doctor and service arrays are the temporary content source for this
 * prototype. Replace or connect them to a secure content source when the
 * clinic is ready to manage this information outside the codebase.
 */
const FIGMA_ASSETS = "https://www.figma.com/api/mcp/asset/97fb5661-be9a-4072-be65-57cfb6e38b35";

const doctors = [
  { name: "Dr. A", credentials: "CMO, MD, CCFP, FRCGP", image: `${FIGMA_ASSETS}/a343a.png`, accepting: false },
  { name: "Dr. B", credentials: "MD, CCFP, MRCGP, Dip Derm.", image: `${FIGMA_ASSETS}/b6ed0.png`, accepting: false },
  { name: "Dr. C", credentials: "MD, CCFP, MRCGP, Dip Derm.", image: `${FIGMA_ASSETS}/b229f.png`, accepting: true },
  { name: "Dr. D", credentials: "MD, CCFP, MRCGP", image: `${FIGMA_ASSETS}/004c4.png`, accepting: true },
  { name: "Dr. E", credentials: "MD, CCFP, MRCGP", image: `${FIGMA_ASSETS}/83331.png`, accepting: true },
  { name: "Dr. F", credentials: "MD, CCFP, MRCGP", image: `${FIGMA_ASSETS}/a343a.png`, accepting: false },
  { name: "Dr. G", credentials: "MD, CCFP, MRCGP", image: `${FIGMA_ASSETS}/fdca1.png`, accepting: true },
  { name: "Dr. H", credentials: "MBChB, MRCP", image: `${FIGMA_ASSETS}/03729.png`, accepting: true },
  { name: "Dr. I", credentials: "MBBS, MRCGP, CFPC", image: `${FIGMA_ASSETS}/228be.png`, accepting: true }
];

const services = [
  { name: "Routine Check-ups", description: "Regular health evaluations to monitor and maintain your well-being.", icon: `${FIGMA_ASSETS}/20ee4.svg` },
  { name: "Preventive Care", description: "Vaccinations, screenings, and wellness advice to prevent illness and promote healthy lifestyles.", icon: `${FIGMA_ASSETS}/9e375.svg` },
  { name: "Chronic Disease Management", description: "Ongoing care and support for conditions such as diabetes, hypertension, and asthma.", icon: `${FIGMA_ASSETS}/532b0.svg` },
  { name: "Pediatric Care", description: "Well-child visits, vaccinations, and developmental screenings for children of all ages.", icon: `${FIGMA_ASSETS}/ee10b.svg` },
  { name: "Geriatric Care", description: "Comprehensive geriatric assessments and management of age-related conditions.", icon: `${FIGMA_ASSETS}/8bdfe.svg` },
  { name: "Mental Health Services", description: "Support and treatment for conditions such as depression, anxiety, and stress-related issues.", icon: `${FIGMA_ASSETS}/4787f.svg` }
];

const statusBadge = (accepting) => `
  <span class="status-badge ${accepting ? "accepting" : "not-accepting"}">
    <img src="${FIGMA_ASSETS}/${accepting ? "09306.svg" : "acb45.svg"}" alt="" />
    <span>${accepting ? "Accepting" : "Not accepting"}</span>
  </span>
`;

function renderServices() {
  const target = document.querySelector("#services-grid");
  if (!target) return;
  target.innerHTML = services.map((service) => `
    <article class="service-card">
      <img class="service-icon" src="${service.icon}" alt="" />
      <h3>${service.name}</h3>
      <p>${service.description}</p>
    </article>
  `).join("");
}

function renderDoctors(filter = "all") {
  const target = document.querySelector("#doctors-grid");
  if (!target) return;

  const visibleDoctors = doctors.filter((doctor) => {
    if (filter === "accepting") return doctor.accepting;
    if (filter === "not-accepting") return !doctor.accepting;
    return true;
  });

  if (!visibleDoctors.length) {
    target.innerHTML = `<p class="empty-state">No physicians match this filter.</p>`;
    return;
  }

  target.innerHTML = visibleDoctors.map((doctor) => `
    <article class="doctor-card">
      <div class="doctor-photo"><img src="${doctor.image}" alt="Portrait of ${doctor.name}" loading="lazy" /></div>
      <div class="doctor-info"><strong>${doctor.name}</strong><span>${doctor.credentials}</span></div>
      ${statusBadge(doctor.accepting)}
    </article>
  `).join("");
}

function populateDoctorSelect() {
  const select = document.querySelector("#doctor-select");
  if (!select) return;
  const defaultDoctor = "Dr. Samuel Babatunde";
  const doctorOptions = [defaultDoctor, ...doctors.map((doctor) => doctor.name)];
  select.innerHTML = doctorOptions.map((doctor) => `<option value="${doctor}">${doctor}</option>`).join("");
  select.value = defaultDoctor;
}

function setupMobileNavigation() {
  const menu = document.querySelector("#site-menu");
  const toggle = document.querySelector(".menu-toggle");
  if (!menu || !toggle) return;

  toggle.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  menu.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
    menu.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  }));
}

function setupAppointmentForm() {
  const form = document.querySelector("#appointment-form");
  const message = document.querySelector("#form-message");
  if (!form || !message) return;

  // Add the clinic's approved secure Google Apps Script web-app URL here.
  const FORM_ENDPOINT = "";

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    message.className = "form-message";
    message.textContent = "Submitting your request…";

    const formData = Object.fromEntries(new FormData(form).entries());
    if (!FORM_ENDPOINT) {
      message.textContent = "Preview complete. Connect the clinic’s secure form endpoint before launch; no information was sent.";
      form.reset();
      populateDoctorSelect();
      return;
    }

    try {
      await fetch(FORM_ENDPOINT, { method: "POST", mode: "no-cors", body: JSON.stringify(formData) });
      message.textContent = "Thank you. Your appointment request has been received.";
      form.reset();
      populateDoctorSelect();
    } catch (error) {
      console.error(error);
      message.className = "form-message error";
      message.textContent = "We could not submit your request. Please call the clinic instead.";
    }
  });
}

function setupFaq() {
  const items = [...document.querySelectorAll(".faq-item")];

  items.forEach((item) => {
    const summary = item.querySelector("summary");
    const indicator = summary?.querySelector("span");
    if (!summary || !indicator) return;

    indicator.textContent = item.open ? "−" : "+";
    item.addEventListener("toggle", () => {
      if (item.open) {
        items.forEach((otherItem) => {
          if (otherItem !== item && otherItem.open) otherItem.open = false;
        });
      }
      indicator.textContent = item.open ? "−" : "+";
    });
  });
}

function setupActiveNavigation() {
  const links = [...document.querySelectorAll(".nav-link")];
  const sections = links.map((link) => document.querySelector(link.getAttribute("href"))).filter(Boolean);
  if (!("IntersectionObserver" in window)) return;

  const observer = new IntersectionObserver((entries) => {
    const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (!visible) return;
    links.forEach((link) => link.classList.toggle("active", link.getAttribute("href") === `#${visible.target.id}`));
  }, { rootMargin: "-35% 0px -55% 0px", threshold: [0, .25, .6] });

  sections.forEach((section) => observer.observe(section));
}

renderServices();
renderDoctors();
populateDoctorSelect();
setupMobileNavigation();
setupAppointmentForm();
setupFaq();
setupActiveNavigation();
