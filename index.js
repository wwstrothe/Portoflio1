function createLink(text, href) {
	const a = document.createElement("a");
	a.textContent = text;
	a.href = href;
	a.classList.add("header-link");

	if (window.location.pathname === href) {
		a.classList.add("header-link--active");
	}

	return a;
}

function generateHeader() {
	const header = document.createElement("header");
	header.classList.add("header-bar");

	if (window.location.pathname === "/index.html") {
		const h1 = document.createElement("h1");
		h1.textContent = "William Strothe Portfolio";
		h1.classList.add("header-title");
		header.appendChild(h1);
	} else {
		const a = document.createElement("a");
		a.textContent = "William Strothe Portfolio";
		a.href = "/index.html";
		a.classList.add("header-title");
		a.classList.add("header-title--link");
		header.appendChild(a);
	}

	const nav = document.createElement("nav");
	nav.classList.add("header-links");
	nav.appendChild(createLink("About", "/about.html"));
	nav.appendChild(createLink("Projects", "/projects.html"));

	header.appendChild(nav);
	document.body.appendChild(header);
}

generateHeader();
