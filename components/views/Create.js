import html from "html-literal";

export default () => html`
  <main class="main-content">

    <div class="post-page">
      <div class="dream-info">
        <form>
          <input type="text" class="dream-title" placeholder="Title" />
          <textarea placeholder="Type here..." class="dream-content"></textarea>
        </form>
      </div>

      <div class="checks-and-post-button">
      <input type="checkbox" id="tos-agreement">

          <label for="vehicle1">I AGREE TO DREAM DROP'S TERMS OF SERVICE </label><br />
          <input type="checkbox" id="nsfw-warning">

          <label for="vehicle1"> MY DREAM CONTAINS NSFW CONTENT</label><br />
          <button class="pink-button" id="dream-post-button">POST</button>
      </div>

    </div>
  </div>
  </div>
  </main>
`;
