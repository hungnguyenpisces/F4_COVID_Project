function loadCss() {
    $("head").append(
      '<link rel="stylesheet" type="text/css" href="/css/footer.css">'
    );
  }
  loadCss();
  function footer() {
      var ct = `
      <div class="row">
        <div class="col l-3 md-6 c-12">
          <h3><i class="fas fa-user-friends"></i> <b>ABOUT US</b> </h3>
          <p>
            Mollit quis mollit sint magna deserunt magna duis excepteur Lorem
            laboris in tempor. Quis occaecat consectetur pariatur eiusmod Lorem.
            Ex nulla et cillum veniam ullamco duis dolor. Est qui non ullamco
            laborum adipisicing eiusmod anim. In sint quis consequat aliquip
            occaecat voluptate magna consectetur in consectetur nulla anim ad.
          </p>
        </div>
        <div class="col l-3 md-6 c-12">
          <h3><i class="fas fa-info"></i> <b>INFO</b></h3>
          <ul>
            <li><i class="fas fa-map-marked-alt fa-lg"></i> Địa chỉ</li>
            <li><i class="fas fa-phone-alt fa-lg"></i> +123 456 789</li>
            <li><i class="fas fa-envelope fa-lg"></i> Email@email.com</li>
            <li><i class="fas fa-globe-asia fa-lg"></i> www.website.com.vn</li>
            <li><i class="fas fa-fax fa-lg"></i> +987 654 3210</li>
          </ul>
        </div>
        <div class="col l-3 md-6 c-12">
          <h3><i class="fas fa-link"></i> <b>LINKS</b></h3>
          <ul>
            <li>
              <a href="/home.html"><i class="fas fa-home fa-lg"></i> Home</a>
            </li>
            <li>
              <a data-toggle="modal" data-target="#header-modal" href="#"><i class="fas fa-address-card fa-lg"></i> Sign
                In / Sign Up</a>
            </li>
            <li>
              <a href="/haidm-index.html"><i class="fab fa-pagelines fa-lg"></i> Healthy Life</a>
            </li>
            <li>
              <a href="/mngan-main-page.html"><i class="fas fa-seedling fa-lg"></i> Healthy Foods</a>
            </li>
            <li>
              <a href="/menu-gym-yoga-dance.html"><i class="fas fa-dumbbell"></i> Be Stronger</a>
            </li>
            <li>
              <a href="/calc.html"><i class="fas fa-heartbeat"></i> Health Calculators</a>
            </li>
          </ul>
        </div>
        <div class="col l-3 md-6 c-12">
          <h3><i class="fas fa-project-diagram"></i> <b>CONNECT WITH US</b></h3>
          <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Enter your email" />
            <div class="input-group-append">
              <button class="btn btn-success" type="submit">
                <i class="fas fa-check fa-lg"></i>
              </button>
            </div>
          </div>
          <div class="footer-socials">
            <i class="fab fa-facebook fa-3x"></i>
            <i class="fab fa-twitter fa-3x"></i>
            <i class="fab fa-instagram fa-3x"></i>
            <i class="fab fa-youtube fa-3x"></i>
            <i class="fab fa-google-plus fa-3x"></i>
            <i class="fab fa-skype fa-3x"></i>
            <i class="fab fa-snapchat-ghost fa-3x"></i>
          </div>
        </div>
      </div>
      `
    document.getElementById("footer").innerHTML = ct;

  }
  footer();