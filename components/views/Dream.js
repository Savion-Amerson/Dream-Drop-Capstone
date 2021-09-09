import html from "html-literal";
import axios from "axios";

const unsplash =
  "https://api.unsplash.com/search/photos?query=cloud&client_id=_o5CRN55I6Sp2P93a8isOHWC60ncJAHYUumbOOgfbv0";

let randomNumber = Math.floor(Math.random() * 10);

axios.get(unsplash).then(response => {
  window.sessionStorage.setItem(
    "currentphoto",
    response.data.results[randomNumber].urls.small
  );
});

export default () => html`
  <main class="main-content">
    <div class="dream-post-container">
    <h1>⚠️THIS PART IS UNDER CONSTRUCTION⚠️</h1>
      <div id="dream-post-body" class="dream-post-body">

        </article>
      </div>

      <div class="comment-section">
      <h2>0 COMMENTS</h2>
      <div class="commentprof">
        <label for="content"></label>
        <img class="pfp-img" id="pfpimg" src="${window.sessionStorage.getItem(
          "currentphoto"
        )}" />
          <textarea placeholder="Add your comment" class="dream-comment" id="dreamcomment"></textarea>
          <button type="submit" class="pink-button" id="commentsubmit">POST</button>
          </div>
        <div>

          <!-- <div class="comment">
            <h2 class="anon-comment-name">User</h2>
            <p class="comment-content">User's comment</p>
          </div> -->
        </div>
      </div>
    </div>
  </main>
`;
