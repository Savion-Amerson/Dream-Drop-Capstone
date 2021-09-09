import html from "html-literal";

export default () => html`
  <main class="main-content">

    <div class="post-page">
      <div class="dream-info">
        <form method="POST">
          <label for="title"></label>
          <input type="text" class="dream-title" id="dreamtitle" placeholder="Title" autocomplete="off" />
          <label for="content"></label>
          <textarea placeholder="Type here..." class="dream-content" id="dreamcontent"></textarea>

          <!-- <label for="content"></label>
          <textarea placeholder="Type here..." class="dream-comment" id="dreamcomment"></textarea> -->

          <div class="checks-and-post-button">
          <input type="checkbox" id="tos-agreement">

          <label>I AGREE TO DREAM DROP'S TERMS OF SERVICE </label><br />
          <input type="checkbox" id="nsfw-warning">

          <label> MY DREAM CONTAINS ADULT CONTENT</label><br />
          <button type="submit" class="pink-button" name="submit" id="dream-post-button">DROP!</button>
          </div>

        </form>
      </div>

      </div>

    </div>
  </div>
  </div>
  </main>
`;
