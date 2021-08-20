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

      <div class="upload-section">
        <div class="img-upload">
          <input class="file-upload" type="file" hidden><i class="large material-icons" id="upload-icon">wallpaper</i></input>
          <button class="upload-button"><h1>UPLOAD IMAGE</h1></button>

        </div>
        <button class="pink-button" id="dream-post-button">POST</button>
      </div>
    </div>
  </main>
`;
