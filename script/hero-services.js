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
  ],
  container = document.getElementById("service-container");
services.forEach((e) => {
  let a = document.createElement("div");
  a.classList.add("service-card"),
    (a.innerHTML = `
  <h3 class="service-category">${e.category}</h3>
  <h2 class="heading-secondary service-title">${e.title}</h2>
  <p class="service-description">${e.description}</p>
`),
    container.appendChild(a);
});
