// ===== START CUSTOM DATA =====
const DATA = {
    STYLE: {
        NB_MAX_CONTRIBUTORS_PER_LINE: 3, // Integer in [1, 2, 3, 4, 6]
        CONTRIBUTOR_IMAGE_SIZE: "180px",
        FOOTER_LOGO_SIZE: "240px",
    },
    HEAD: {
        FAVICON_SRC: "img/favicon.ico",
        PROJECT_TITLE: "Knocking on Admin’s Door: <br> Protecting Critical Web Applications with Deception",
        PROJECT_SUBTITLE: {
            "name": "DIMVA,  2024",
            "url": "#",
        },
        AUTHOR_NAME: "Billy Tsouvalas",
        VIDEO_SRC: "video/pageknocker_demo_1080_camera_ready.mp4",
    },
    ABSTRACT: {
        TEXT: [
            "In this paper, we introduce PageKnocker, a deception-based supplementary authentication mechanism, aimed primarily at protecting the public-facing authentication endpoints of critical web applications. PageKnocker is inspired by the network security concept of port knocking, and uses the requests to the web application as a means of authentication for the login page. Specifically, the authentication is successful (i.e. the user gets to access the login page of a web application), if the user's request sequence matches their personal predefined request sequence. In this manner, PageKnocker offers web application administrators the comparative advantage of knowing the nature of a visitor even before that visitor sends the first set of credentials.<br><br>Alongside PageKnocker, we introduce two deceptive login environments, one overtly deceptive and one clandestine, towards which we direct any unauthenticated user attempting to reach the real login page. To evaluate the security and usability of page knocks, we deploy PageKnocker-protected honeypots in the wild and perform a separate user study, showing that PageKnocker can resist tens of thousands of brute-forcing bots, while remaining usable and intuitive."
        ],
        OVERVIEW: {
            "src": "img/overview_dummy.png",
            //"legend": "Dummy overview of our method.",
            "legend" : "",
        }
    },
    CONTENT: [ // If you want to add other sections, add them with their title (used for navigation) and the html code of the section
        // {
        //     "name": "Section 1",
        //     "html": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi viverra finibus quam, nec ornare mi posuere id. Nullam vitae efficitur neque. Maecenas rutrum nunc sit amet rhoncus iaculis. Pellentesque rutrum at nisl vitae dapibus. Maecenas auctor faucibus cursus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vestibulum a leo porttitor, mollis diam id, porta odio. Donec convallis porttitor lectus sed fringilla. Nulla facilisi. Curabitur tincidunt turpis sit amet leo lobortis lacinia.",
        // },
        // {
        //     "name": "Section 2",
        //     "html": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi viverra finibus quam, nec ornare mi posuere id. Nullam vitae efficitur neque. Maecenas rutrum nunc sit amet rhoncus iaculis. Pellentesque rutrum at nisl vitae dapibus. Maecenas auctor faucibus cursus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vestibulum a leo porttitor, mollis diam id, porta odio. Donec convallis porttitor lectus sed fringilla. Nulla facilisi. Curabitur tincidunt turpis sit amet leo lobortis lacinia.",
        // },
    ],
    CONTRIBUTORS: [
        {
            "name": "Billy Tsouvalas",
            "img": "img/TsouvalasCircleCropped.png",
            "url": "https://www.tsouvalas.xyz/"
        },
        {
            "name": "Nick Nikiforakis",
            "img": "img/nick_new_small_cropped2.jpg",
            "url": "https://www.securitee.org/"
        },
        // {
        //     "name": "Contributor 3",
        //     "img": "img/contributor_dummy.png",
        //     "url": "#"
        // },
        // {
        //     "name": "Contributor 4",
        //     "img": "img/contributor_dummy.png",
        //     "url": "#"
        // },
        // {
        //     "name": "Contributor 5",
        //     "img": "img/contributor_dummy.png",
        //     "url": "#"
        // },
    ],
    LINKS: [
        {
            "title": "Paper",
            "icon": "img/paper.svg",
            "links": [
                {
                    "name": "PDF",
                    "url": "#",
                    "icon": "img/paper_copy.svg"
                },
            ],
        },
        {
            "title": "Code",
            "icon": "img/code.svg",
            "links": [
                {
                    "name": "Repository",
                    "url": "#",
                    "icon": "img/GitHub-Mark-Light-32px.png"
                },
                // {
                //     "name": "Repository 2",
                //     "url": "#",
                //     "icon": "img/GitHub-Mark-Light-32px.png"
                // },
            ],
        },
    ],
    CITATION: ` \
    @article{tsouvalas2024knocking,
        author    = {Tsouvalas, Billy and Nikiforakis, Nick},
        title     = {Knocking on Admin's Door: Protecting Critical Web Applications with Deception},
        journal   = {International Conference on Detection of Intrusions and Malware, and Vulnerability<br>\t\t\tAssessment (DIMVA)},
        year      = {2024}
    }`,
    FOOTER: {
        LOGOS: [
            {
                "name": "PragSec Lab",
                "src": "img/pragsec.png",
                "url": "#"
            },
            {
                "name": "Stony Brook University",
                "src": "img/SBU_stack_white_300ppi.png",
                "url": "#"
            },
        ],
        COPYRIGHT: `Copyright Copyright PragSec Lab 2024`
    },
}
// ===== END CUSTOM DATA =====




// /!\ --- Do not change following lines ---

const NB_COLS = 12;
const section_links_nav = DATA.CONTENT.map(section => ({ "id": idFromTitle(section), "name": section.name }));
const NAVIGATION_LINKS = [{ "id": "abstract", "name": "Abstract" }].concat(
    DATA.CONTENT.map(section => ({ "id": idFromTitle(section), "name": section.name })),
    [
        { "id": "contributors", "name": "Contributors" },
        { "id": "links", "name": "Links" }
    ]
);


/* Utils */
function link(url, content, style = ``) {
    return `<a href=${url} target="_blank" ${style}>${content}</a>`;
}

function padding(nbElements, nbElementsMax) {
    const PADDING_COLS = (NB_COLS - nbElements * Math.floor(NB_COLS / nbElementsMax)) / 2;
    return PADDING_COLS > 0 ? `<div class=col-lg-${PADDING_COLS}></div>` : ``;
}

function idFromTitle(title) {
    return title.name.toLowerCase().replace(' ', '-');
}

/* Header */
function displayTitle() {
    let oneLineTitle = DATA.HEAD.PROJECT_TITLE;
    const remove = ["<br>", "<br/>", "<br />"];
    for (const val of remove) {
        oneLineTitle = oneLineTitle.replace(val, " ");
    }
    document.head.querySelector("title").innerHTML = oneLineTitle;
    document.head.querySelector("meta[name='author']").content = DATA.HEAD.AUTHOR_NAME;
    document.head.querySelector("meta[name='description']").content = oneLineTitle;

    document.head.querySelector("link[rel='icon']").type = `image/${DATA.HEAD.FAVICON_SRC.split(".").at(-1)}`;
    document.head.querySelector("link[rel='icon']").href = DATA.HEAD.FAVICON_SRC;

    document.getElementById("nav-project-title").innerHTML = oneLineTitle;
    document.getElementById("head-title").innerHTML = DATA.HEAD.PROJECT_TITLE;
    document.getElementById("head-subtitle").innerHTML = `<a href=${DATA.HEAD.PROJECT_SUBTITLE.url}>${DATA.HEAD.PROJECT_SUBTITLE.name}</a>`;
}

function displayNav() {
    document.getElementById("navigation").innerHTML = NAVIGATION_LINKS.map(
        link => `
        <li class="nav-item">
            <a class="nav-link active" href="#${link.id}">${link.name}</a>
        </li>
    `).join("");
}

/* Video section */
function displayVideo() {
    document.getElementById("video").innerHTML = `<video class="embed-responsive-item" controls autoplay loop muted><source src=${DATA.HEAD.VIDEO_SRC} type="video/mp4"></video>`;
    // let vid_element = document.getElementById("video");
    // vid_element.loop = true;
    // vid_element.load();
}

/* Abstract section */
function displayAbstract() {
    document.getElementById("abstract-text").innerHTML = `
    <div class="col-sm">
        <h2 class="text-center">Abstract</h2>
        <hr>
        ${DATA.ABSTRACT.TEXT.map(text => `<p>${text}</p>`).join("")}
        <br>
        <br>
    </div>
  `;
}

function displayOverview() {
    document.getElementById("overview").innerHTML = `
        <div class="col-sm">
            <img src=${DATA.ABSTRACT.OVERVIEW.src} alt="Method Overview" class="img-fluid">
            <div id="overview-legend">${DATA.ABSTRACT.OVERVIEW.legend}</div>
        </div>
    `;
}

/* Content sections */
function displayContentSections() {
    document.getElementById("content").innerHTML = DATA.CONTENT.map(
        section => `
        <div class="container section" id=${idFromTitle(section)}>
            <div class="row">
                <div class="col-sm">
                    <h2 class="text-center">${section.name}</h2>
                    <hr>
                    ${section.html}
                </div>
            </div>
        </div>
        `
    ).join("");
}

/* Contributors section */
function addPadding(nbContributorsInLine) {
    return padding(nbContributorsInLine, DATA.STYLE.NB_MAX_CONTRIBUTORS_PER_LINE);
}

function displayContributorsRow(contributorsInRow) {
    let htmlContent = `<div class="row text-center">` + addPadding(contributorsInRow.length);

    for (const contributor of contributorsInRow) {
        const htmlImg = `<br><br><img class="rounded-circle" src=${contributor.img} alt=${contributor.name} width=${DATA.STYLE.CONTRIBUTOR_IMAGE_SIZE} height=${DATA.STYLE.CONTRIBUTOR_IMAGE_SIZE} />`;
        htmlContent +=
            `<div class="col-lg-${Math.floor(NB_COLS / DATA.STYLE.NB_MAX_CONTRIBUTORS_PER_LINE)}">
                ${link(contributor.url, htmlImg)}
                <br>
                <h4>${link(contributor.url, contributor.name)}</h4>
                <br>
                <br>
            </div>`;
    }
    htmlContent += addPadding(contributorsInRow.length) + `</div>`;
    return htmlContent;
}

function displayContributors() {
    htmlContent = "";

    nbLines = Math.ceil(DATA.CONTRIBUTORS.length / DATA.STYLE.NB_MAX_CONTRIBUTORS_PER_LINE)
    for (const rowId of Array(nbLines).keys()) {
        const contributorsInRow = DATA.CONTRIBUTORS.slice(rowId * DATA.STYLE.NB_MAX_CONTRIBUTORS_PER_LINE, (rowId + 1) * DATA.STYLE.NB_MAX_CONTRIBUTORS_PER_LINE);
        htmlContent += displayContributorsRow(contributorsInRow);
    }

    document.getElementById("contributors").innerHTML += htmlContent;
}


/* Links section */
function formatLink(_link) {
    return `<div class="col-sm text-center">
            ${link(_link.url, `<img src=${_link.icon} width="20px"> ${_link.name}`, `role="button" class="btn btn-dark"  style="background-color:#210d47;"`)}
        </div>`;
}

function formatLinkGroup(group) {
    return `<div class="col-sm text-center">
                <br>
                <br>
                <img src=${group.icon} />
                <h4  style="color:#210d47;">${group.title}</h4>
                ${group.links.map(link => formatLink(link)).join("")}
            </div>`;
}

function displayLinks() {
    document.getElementById("links-area").innerHTML = DATA.LINKS.map(
        group => formatLinkGroup(group)
    ).join("");
}

/* Citation */
function displayCitation() {
    htmlContent = `<code style="font-size:16px;">${DATA.CITATION}</code>`;
    document.getElementsByClassName("citation")[0].innerHTML = htmlContent;
}

/* Footer */
function displayFooter() {
    const nbLogos = DATA.FOOTER.LOGOS.length;
    const nbColsPerDiv = Math.floor(NB_COLS / (nbLogos + 1));
    const pad = padding(nbLogos + 1, nbLogos + 1);

    const htmlLogos = DATA.FOOTER.LOGOS.map(logo => `\
        <div class="col-md-${nbColsPerDiv} text-center">
            ${link(logo.url, `<img src=${logo.src} alt=${logo.name} width=${DATA.STYLE.FOOTER_LOGO_SIZE}>`)}
        </div>
    `);

    document.getElementById("footer").innerHTML = `\
        <div class="container footer-container">
            <div class="row align-items-center h-100">
                ${pad}
                ${htmlLogos.join("")}
                <div class="col-md-${nbColsPerDiv} text-center align-middle">
                    <h5>&copy; ${DATA.FOOTER.COPYRIGHT}</h5>
                    Website Design: ${link("https://github.com/rjgpinel/dark-academic-website", "dark-academic-website")}
                </div>
                ${pad}
            </div>
        </div>
    `;
}

/* Main */
function displayPage() {
    displayTitle();
    displayNav();
    displayAbstract();
    displayVideo();
    //displayOverview();
    displayContentSections();
    displayContributors();
    displayLinks();
    displayCitation();
    displayFooter();
}

displayPage();
