import html from "html-literal";

export default () => html`
  <nav class="navbar">
    <h1 class="logo">DREAM DROP</h1>
    <div class="nav-buttons">
      <button class="pfp-button">
        <a href="/create">
          <i class="create material-icons" id="userIcon" class="toggle"
            >create</i
          >
        </a>
      </button>
    </div>
  </nav>
`;
