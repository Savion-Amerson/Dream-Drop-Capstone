import html from "html-literal";

export default () => html`
  <nav class="navbar">
    <h1 class="logo">DREAM DROP</h1>
    <div class="nav-buttons">
      <button class="pfp-button">
        <i class="pfp material-icons" id="userIcon" class="toggle">person</i>
      </button>
      <div class="pfp-dropdown">
        <ul class="pfp-menu-options" class="toggle-content">
          <li>LOGIN</li>
          <li>REGISTER</li>
        </ul>
      </div>
    </div>
  </nav>
`;
