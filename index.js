const projects = [
  {
    title: "Personal Portfolio (Angular)",
    shortDescription:
      "A full-stack personal portfolio built with Angular and Typescript in an NX Monorepo",
    description:
      "A full-stack personal portfolio built with Angular and TypeScript in an Nx monorepo. Features dynamic project data powered by Firestore, leveraging shared libraries for authentication, database operations, and responsive UI components. Demonstrates scalable architecture with centralized design tokens and reusable service patterns.",
    status: "active",
    tags: [
      "Angular",
      "TypeScript",
      "Nx Monorepo",
      "Firestore",
      "Shared Libraries",
    ],
    pageUrl: "https://william-strothe.pages.dev",
    repoUrl:
      "https://github.com/wwstrothe/nx-portfolio/tree/main/apps/portfolio",
  },
  {
    title: "Personal Portfolio (React)",
    shortDescription:
      "A full-stack personal portfolio built with React and Typescript in an NX Monorepo",
    description:
      "A full-stack personal portfolio built with React and TypeScript in an Nx monorepo. Features dynamic project data powered by Firestore, leveraging shared libraries for authentication, database operations, and responsive UI components. Demonstrates scalable architecture with centralized design tokens and reusable service patterns.",
    status: "active",
    tags: [
      "React",
      "TypeScript",
      "Nx Monorepo",
      "Firestore",
      "Shared Libraries",
    ],
    pageUrl: "https://william-strothe-react.pages.dev",
    repoUrl:
      "https://github.com/wwstrothe/nx-portfolio/tree/main/apps/portfolio-react",
  },
  {
    title: "Angular Games",
    shortDescription: "A collection of games built with Angular and TypeScript",
    description:
      "A collection of games built with Angular and TypeScript. Features interactive gameplay, responsive design, and modular architecture. Demonstrates proficiency in Angular framework and TypeScript language.",
    status: "active",
    tags: ["Angular", "TypeScript", "Games", "Interactive", "Responsive"],
    pageUrl: "https://beta.william-strothe-games.pages.dev/",
    repoUrl: "https://github.com/wwstrothe/nx-portfolio/tree/beta/apps/games",
  },
  {
    title: "Nx Monorepo Example",
    shortDescription:
      "An example of an Nx monorepo with multiple applications and shared libraries",
    description:
      "An example of an Nx monorepo with multiple applications and shared libraries. Demonstrates how to structure a monorepo for scalable development, with shared code and resources across different projects.",
    status: "active",
    tags: [
      "Nx",
      "Monorepo",
      "Shared Libraries",
      "Scalable Development",
      "Node",
    ],
    repoUrl:
      "https://github.com/wwstrothe/nx-portfolio/tree/beta/apps/nx-monorepo-example",
  },
];

function createNavLink(text, href) {
  const a = document.createElement("a");
  a.textContent = text;
  a.href = href;
  a.classList.add("link");

  const currentPage =
    globalThis.location.pathname.split("/").pop() || "index.html";
  const linkPage = href.split("/").pop();

  if (currentPage === linkPage) {
    a.classList.add("link--active");
  }

  return a;
}

function generateUserInfoCard() {
  const card = document.createElement("div");
  card.id = "user-info-card";
  const img = document.createElement("img");
  img.src = "/Portoflio1/profile-picture.jpg";
  img.alt = "User";
  img.classList.add("user-picture");
  card.appendChild(img);
  const textInfo = document.createElement("div");
  textInfo.classList.add("user-text-info");
  const name = document.createElement("h1");
  name.textContent = "William Strothe";
  name.classList.add("user-name");
  textInfo.appendChild(name);
  const quickInfo = document.createElement("p");
  quickInfo.textContent =
    "Senior Software Developer (Angular) | Full Stack Developer";
  quickInfo.classList.add("user-quick-info");
  textInfo.appendChild(quickInfo);
  card.appendChild(textInfo);
  document.getElementById("page").prepend(card);
}

function generatePageNavigation() {
  const nav = document.createElement("nav");
  nav.id = "page-navigation";
  nav.appendChild(createNavLink("About", "index.html"));
  nav.appendChild(createNavLink("Projects", "projects.html"));
  nav.appendChild(createNavLink("Contact", "contact.html"));
  document.getElementById("page-content").prepend(nav);
}

function generateProjectCards() {
  if (!projects || projects.length === 0) {
    const noProjectsMessage = document.createElement("p");
    noProjectsMessage.textContent = "No projects to display.";
    document
      .getElementById("projects-container")
      .appendChild(noProjectsMessage);
    return;
  }

  const currentPage =
    globalThis.location.pathname.split("/").pop() || "index.html";
  const displayProjects =
    currentPage === "projects.html" ? projects : projects.slice(0, 2);

  displayProjects.forEach((project) => {
    const card = document.createElement("div");
    card.classList.add("project-card");

    const title = document.createElement("h2");
    title.textContent = project.title;
    title.classList.add("project-title");
    card.appendChild(title);

    if (currentPage === "projects.html") {
      const longDescription = document.createElement("p");
      longDescription.textContent = project.description;
      longDescription.classList.add("project-long-description");
      card.appendChild(longDescription);
    } else {
      const shortDescription = document.createElement("p");
      shortDescription.textContent = project.shortDescription;
      shortDescription.classList.add("project-short-description");
      card.appendChild(shortDescription);
    }

    const tagsContainer = document.createElement("div");
    tagsContainer.classList.add("project-tags");
    project.tags.forEach((tag) => {
      const tagElement = document.createElement("span");
      tagElement.textContent = tag;
      tagElement.classList.add("project-tag");
      tagsContainer.appendChild(tagElement);
    });
    card.appendChild(tagsContainer);

    const linksContainer = document.createElement("div");
    linksContainer.classList.add("project-links");

    if (project.pageUrl) {
      const pageLink = document.createElement("a");
      pageLink.href = project.pageUrl;
      pageLink.textContent = "View Page";
      pageLink.classList.add("project-link");
      pageLink.target = "_blank";
      linksContainer.appendChild(pageLink);
    }

    if (project.repoUrl) {
      const repoLink = document.createElement("a");
      repoLink.href = project.repoUrl;
      repoLink.textContent = "View Repo";
      repoLink.classList.add("project-link");
      repoLink.target = "_blank";
      linksContainer.appendChild(repoLink);
    }

    card.appendChild(linksContainer);
    document.getElementById("projects-container").appendChild(card);
  });
}

generateUserInfoCard();
generatePageNavigation();
generateProjectCards();
