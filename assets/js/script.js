const allPosts = [
  {
    authorName: "Space",
    authorImage: "assets/img/space-pp.png",
    postInfo: "Kopi mantap",
    postImage: "assets/img/kopi.jpg",
    liked: false,
    bookmarked: true,
    comments: [
      {
        authorName: "Rafuri",
        authorImage: "assets/img/other-pp.png",
        comment: "Sangat refreshing yah",
      },
      {
        authorName: "RugeFX",
        authorImage: "assets/img/my-pp.png",
        comment: "Aku mw seratus",
      },
    ],
  },
  {
    authorName: "Rafuri",
    authorImage: "assets/img/other-pp.png",
    postInfo: "Pemandangan indah......",
    postImage: "assets/img/stock-1.jpg",
    liked: false,
    bookmarked: false,
    comments: [
      {
        authorName: "GlexX",
        authorImage: "assets/img/other-pp.png",
        comment: "Marvelous.",
      },
      {
        authorName: "Rafuri",
        authorImage: "assets/img/other-pp.png",
        comment: "dimana tuh?",
      },
    ],
  },
];

const content = document.querySelector("#content");
const aside = document.querySelector("aside");
const mobileSideToggle = document.querySelector("#mobileSideToggle");

const navItems = document.querySelectorAll(".nav-item");

document.addEventListener("click", (e) => {
  if (e.target.id === "commentsToggler") {
    e.target.nextElementSibling.classList.toggle("open");
  }
});

mobileSideToggle.addEventListener("click", () => {
  mobileSideToggle.classList.toggle("closed");
  aside.classList.toggle("active-mobile");
});

navItems.forEach((i) => {
  i.addEventListener("click", toggleNavItems);
});

allPosts.forEach((p) => {
  content.appendChild(postElementConstructor(p));
});

function toggleNavItems(e) {
  navItems.forEach((i) => {
    if (i.id === e.target.id) {
      i.classList.add("active");
    } else {
      i.classList.remove("active");
    }
  });
}

/**
 * reference
    authorName: string,
    authorImage: string,
    postInfo: string,
    postImage: string,
    liked: boolean,
    bookmarked: boolean,
 */
function postElementConstructor({
  authorName,
  authorImage,
  postInfo,
  postImage,
  liked,
  bookmarked,
  comments,
}) {
  const article = document.createElement("article");
  article.id = "post";

  let commentsElementString = ``;
  comments.forEach((c) => {
    commentsElementString += `
    <div class="comment-entry">
      <img
        class="author-image"
        src="${c.authorImage}"
        alt="Commenter's Profile Picture"
      />
      <div class="comment-content">
        <a href="#commentauthorprofile" class="author">${c.authorName}</a>
        <span class="body">${c.comment}</span>
      </div>
    </div>
    `;
  });

  article.innerHTML = `
    <header class="post-header">
      <img class="user-image" src="${authorImage}" alt="Profile Picture" />
      <div class="header-info">
        <a href="#userprofile" class="post-author">${authorName}</a>
        <p class="post-info">${postInfo}</p>
      </div>
    </header>
    <hr />
    <div class="post-content">
      <img class="post-image" src="${postImage}" alt="User Image Post" />
    </div>
    <hr />
    <div class="post-engagements">
      <div class="engagement-buttons">
        <button class="like-button ${liked && "liked"}" type="button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            class="bi bi-suit-heart-fill"
            viewBox="0 0 16 16"
          >
            <path
              d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z"
            />
          </svg>
          <span>Like</span>
        </button>
        <button class="bookmark-button ${bookmarked && "bookmarked"}" type="button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            class="bi bi-bookmark-fill"
            viewBox="0 0 16 16"
          >
            <path
              d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z"
            />
          </svg>
          <span>Bookmark</span>
        </button>
        <div class="comment-container">
          <input
            type="text"
            name="comment"
            id="commentInput"
            placeholder="Add a comment...."
          />
          <button class="send-button" type="button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              class="bi bi-send-fill"
              viewBox="0 0 16 16"
            >
              <path
                d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z"
              />
            </svg>
          </button>
        </div>
      </div>
      <hr />
      <div class="post-comments">
        <button id="commentsToggler">Comments</button>
        <div id="comments" class="comments-container">
          ${commentsElementString}
        </div>
      </div>
    </div>
  `;
  return article;
}
