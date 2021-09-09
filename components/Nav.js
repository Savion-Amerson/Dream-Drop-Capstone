import html from "html-literal";

export default () => html`
  <nav class="navbar">
    <a href="/"><img class="logo" src="https://i.imgur.com/y0b602R.png"/></a>
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
