// Updated JavaScript to make blogs clickable and fetch from an API

// Pagination variables
const blogsPerPage = 10;
let currentPage = 1;

// DOM elements
const blogContainer = document.getElementById("blogContainer");
const paginationContainer = document.getElementById("pagination");

// Fetch blogs from API
async function fetchBlogs() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts"); // Replace with your actual API endpoint
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const blogs = await response.json();
    return blogs;
  } catch (error) {
    console.error("Failed to fetch blogs:", error);
    return [];
  }
}

// Render blogs for the current page
async function renderBlogs() {
  const blogs = await fetchBlogs();
  blogContainer.innerHTML = "";
  const startIndex = (currentPage - 1) * blogsPerPage;
  const endIndex = startIndex + blogsPerPage;
  const currentBlogs = blogs.slice(startIndex, endIndex);

  currentBlogs.forEach((blog) => {
    const blogCard = document.createElement("div");
    blogCard.classList.add("blog-card");
    blogCard.innerHTML = `
          <div class="blog-title">${blog.title}</div>
          <div class="blog-description">${blog.body}</div>
      `;

    // Make each blog clickable
    blogCard.addEventListener("click", () => {
      // Redirect to the blog template page with blog ID as query parameter
      window.location.href = `blog-template.html?blogId=${blog.id}`;
    });

    blogContainer.appendChild(blogCard);
  });
}

// Render pagination buttons
async function renderPagination() {
  const blogs = await fetchBlogs();
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
