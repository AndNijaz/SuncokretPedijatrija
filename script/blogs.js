// Array of blog data
const blogs = [
  {
    title: "Aflatoksin",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sollicitudin ultricies erat. Etiam aliquam tempor vestibulum.",
  },
  {
    title: "Alergije",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sollicitudin ultricies erat. Etiam aliquam tempor vestibulum.",
  },
  {
    title: "Anemija",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sollicitudin ultricies erat. Etiam aliquam tempor vestibulum.",
  },
  {
    title: "Antibiotici",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sollicitudin ultricies erat. Etiam aliquam tempor vestibulum.",
  },
  {
    title: "Celijakija / Glutenska Enteropatija",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sollicitudin ultricies erat. Etiam aliquam tempor vestibulum.",
  },
  {
    title: "Astma",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sollicitudin ultricies erat. Etiam aliquam tempor vestibulum.",
  },
  {
    title: "Dohrana Beba",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sollicitudin ultricies erat. Etiam aliquam tempor vestibulum.",
  },
  {
    title: "Epilepsija",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sollicitudin ultricies erat. Etiam aliquam tempor vestibulum.",
  },
  {
    title: "Imunitet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sollicitudin ultricies erat. Etiam aliquam tempor vestibulum.",
  },
  {
    title: "Kašalj",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sollicitudin ultricies erat. Etiam aliquam tempor vestibulum.",
  },
  {
    title: "Migrena",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sollicitudin ultricies erat. Etiam aliquam tempor vestibulum.",
  },
  {
    title: "Dijabetes",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sollicitudin ultricies erat. Etiam aliquam tempor vestibulum.",
  },
  {
    title: "Bolovi u zglobovima",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sollicitudin ultricies erat. Etiam aliquam tempor vestibulum.",
  },
  {
    title: "Osteoporoza",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sollicitudin ultricies erat. Etiam aliquam tempor vestibulum.",
  },
  {
    title: "Hipertenzija",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sollicitudin ultricies erat. Etiam aliquam tempor vestibulum.",
  },
  {
    title: "Depresija",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sollicitudin ultricies erat. Etiam aliquam tempor vestibulum.",
  },
  {
    title: "Anksioznost",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sollicitudin ultricies erat. Etiam aliquam tempor vestibulum.",
  },
  {
    title: "Glavobolja",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sollicitudin ultricies erat. Etiam aliquam tempor vestibulum.",
  },
  {
    title: "Gorušica",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sollicitudin ultricies erat. Etiam aliquam tempor vestibulum.",
  },
  {
    title: "Umor",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sollicitudin ultricies erat. Etiam aliquam tempor vestibulum.",
  },
];

// Pagination variables
const blogsPerPage = 10;
let currentPage = 1;

// DOM elements
const blogContainer = document.getElementById("blogContainer");
const paginationContainer = document.getElementById("pagination");

// Render blogs for the current page
function renderBlogs() {
  blogContainer.innerHTML = "";
  const startIndex = (currentPage - 1) * blogsPerPage;
  const endIndex = startIndex + blogsPerPage;
  const currentBlogs = blogs.slice(startIndex, endIndex);

  currentBlogs.forEach((blog) => {
    const blogCard = document.createElement("div");
    blogCard.classList.add("blog-card");
    blogCard.innerHTML = `
          <div class="blog-title">${blog.title}</div>
          <div class="blog-description">${blog.description}</div>
      `;
    blogContainer.appendChild(blogCard);
  });
}

// Render pagination buttons
function renderPagination() {
  paginationContainer.innerHTML = "";
  const totalPages = Math.ceil(blogs.length / blogsPerPage);

  const prevButton = document.createElement("button");
  prevButton.textContent = "Previous";
  prevButton.disabled = currentPage === 1;
  prevButton.addEventListener("click", () => {
    currentPage--;
    renderBlogs();
    renderPagination();
  });
  paginationContainer.appendChild(prevButton);

  for (let i = 1; i <= totalPages; i++) {
    const pageButton = document.createElement("button");
    pageButton.textContent = i;
    pageButton.disabled = i === currentPage;
    pageButton.addEventListener("click", () => {
      currentPage = i;
      renderBlogs();
      renderPagination();
    });
    paginationContainer.appendChild(pageButton);
  }

  const nextButton = document.createElement("button");
  nextButton.textContent = "Next";
  nextButton.disabled = currentPage === totalPages;
  nextButton.addEventListener("click", () => {
    currentPage++;
    renderBlogs();
    renderPagination();
  });
  paginationContainer.appendChild(nextButton);
}

// Initial render
renderBlogs();
renderPagination();
