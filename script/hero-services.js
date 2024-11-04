const services = [
  {
    category: "Pedijatrijski pregled",
    title: "Pregled novorođenčadi",
    description:
      "Preventivni pregled novorođenčeta nudi savjete i mjerenje žutice u „Suncokretu“.",
  },
  {
    category: "Pedijatrijski pregled",
    title: "Dojenčad, mala i predškolska djeca",
    description:
      "„Suncokret“ nudi opušten pregled i nagrade za hrabrost najmlađima.",
  },
  {
    category: "Pedijatrijski pregled",
    title: "Pedijatrijski pregled školske djece",
    description:
      "Školskoj djeci su potrebni pedijatrijski pregledi za praćenje rasta i prevenciju budućih zdravstvenih problema.",
  },
  {
    category: "Savjetovališta",
    title: "Savjetovalište za zdravu djecu",
    description:
      "Savjetovalište prati rast i razvoj zdrave djece, uključujući preglede, mjerenja i savjete za roditelje.",
  },
  {
    category: "Savjetovališta",
    title: "Pulmološko-Alergološko savjetovalište",
    description:
      "Pulmološko-alergološki program nudi testiranja, praćenje i terapiju za djecu s astmom i alergijama.",
  },
  {
    category: "Savjetovališta",
    title: "Neuro pedijatrijsko savjetovalište",
    description:
      "Neuro pedijatar nudi podršku djeci s neurološkim problemima, uključujući ultrazvuk mozga za rizične i zdrave dojenčad.",
  },
  {
    category: "Ultrazvučna dijagnostika",
    title: "Ultrazvuk kukova",
    description:
      "Ultrazvuk kukova za ranu dijagnozu preporučen do trećeg mjeseca života.",
  },
  {
    category: "Ultrazvučna dijagnostika",
    title: "Ultrazvuk mozga",
    description:
      "Ultrazvuk mozga moguć kod otvorene fontanele, idealno do šest mjeseci.",
  },
  {
    category: "Ultrazvučna dijagnostika",
    title: "Ultrazvuk abdomena",
    description:
      "Ultrazvuk abdomena: gornji zahtijeva post, donji pun mokraćni mjehur.",
  },
];

const container = document.getElementById("service-container");

services.forEach((service) => {
  const card = document.createElement("div");
  card.classList.add("service-card");

  card.innerHTML = `
    <h4 class="service-category">${service.category}</h4>
    <h2 class="heading-secondary service-title">${service.title}</h2>
    <p class="service-description">${service.description}</p>
  `;

  container.appendChild(card);
});
