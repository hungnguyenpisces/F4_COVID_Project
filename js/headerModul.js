function loadCss() {
  $("head").append(
    '<link rel="stylesheet" type="text/css" href="/css/grid.css">',
    '<link rel="stylesheet" type="text/css" href="/css/header.css">',
  );
}
loadCss();
function header() {
    var ct = `
    <div class="grid wide">
        <div class="row">
          <div class="header__logo col l-3 md-3 c-10">
            <a href="/home.html"><img src="/images/logo-final.png" alt=""></a>
          </div>
          <div class="header__menu col l-9 md-9 c-0">
            <ul>
              <li><a href="/haidm-page1.html"><i class="fab fa-pagelines fa-lg"></i> <span
                    class="hideOnMobile hideOnTablet">Healthy Life</span></a></li>
              <li><a href="/mngancountdown.html"><i class="fas fa-seedling fa-lg"></i> <span
                    class="hideOnMobile hideOnTablet">Healthy Foods</span></a></li>
              <li><a href="/menu-gym-yoga-dance.html"><i class="fas fa-dumbbell"></i> <span
                    class="hideOnMobile hideOnTablet">Be Stronger</span></a></li>
              <li><a href="/calc.html"><i class="fas fa-heartbeat"></i> <span class="hideOnMobile hideOnTablet">Health Calculators</span></a></li>
              <li>
                <a id="sub-menu" href="#"><i class="fas fa-ellipsis-h fa-lg"></i></a>
                <ul id="hidden-menu" style="display: none;">
                  <li><a href="/userDashboard.html">User Dashboard</a></li>
                  <li><a href="##">Quick link 2</a></li>
                  <li><a href="##">Quick link 3</a></li>
                  <li><a href="##">Quick link 4</a></li>
                </ul>
              </li>
              <li>
                <a id="search-icon" href="#"><i class="fas fa-search fa-lg"></i></a>
                <div id="search-form" style="display: none;">
                  <input type="text" name="search" placeholder="Search" class="form-control" />
                </div>
              </li>
              <li>
                <a data-toggle="modal" data-target="#header-modal" href="#"><i
                    class="fas fa-address-card fa-lg"></i></a>
              </li>
            </ul>
          </div>
          <label for="mobile__menu-check" class="mobile__menu-btn col l-0 md-0 c-2">
            <i class="fas fa-bars fa-lg  "></i>
          </label for="mobile__menu-check">
          <input type="checkbox" hidden name="" id="mobile__menu-check">
          <label for="mobile__menu-check" class="mobile-overlay"></label>
          <div class="mobile__menu">
            <label for="mobile__menu-check" class="mobile__menu-close ">
              <i class="fas fa-times fa-lg  "></i>
            </label>
            <ul>
              <li><input type="text" name="search" placeholder="Search" id="" class="form-control" /></li>
              <li><a data-toggle="modal" data-target="#header-modal" href="#"><i class="fas fa-address-card fa-lg"></i>
                  Sign In / Sign Up</a></li>
              <li><a href="/haidm-page1.html"><i class="fab fa-pagelines fa-lg"></i> Healthy Life</a></li>
              <li><a href="/haidm-page-news.html"><i class="fas fa-seedling fa-lg"></i> Healthy Foods</a></li>
              <li><a href="/menu-gym-yoga-dance.html"><i class="fas fa-dumbbell"></i> Be Stronger</a></li>
              <li><a href="/calc.html"><i class="fas fa-heartbeat"></i> Body Boots</a></li>
            </ul>
          </div>
        </div>
      </div>
    `;
    document.getElementById("header").innerHTML = ct;
}
header();

function navbar() {
    var subMenu = document.getElementById('sub-menu');
      var hiddenMenu = document.getElementById('hidden-menu');
      subMenu.onclick = function () {
        if (hiddenMenu.style.display == 'none') {
          hiddenMenu.style.display = 'grid';
        } else {
          hiddenMenu.style.display = 'none';
        }
        window.addEventListener('mouseup', function (event) {
          if (event.target != subMenu && event.target != hiddenMenu) {
            hiddenMenu.style.display = 'none';
            return;
          }
        });
      }
      var searchIcon = document.getElementById('search-icon');
      var searchForm = document.getElementById('search-form');
      searchIcon.onclick = function () {
        if (searchForm.style.display == 'none') {
          searchForm.style.display = 'grid';
        } else {
          searchForm.style.display = 'none';
        }
        window.addEventListener('mouseup', function (event) {
          if (event.target != searchIcon && event.target.parentNode != searchForm) {
            searchForm.style.display = 'none';
            return;
          }
        });
      }
}
navbar();

 function headerModal() {
     var md = `
     <div class="modal-dialog modal-dialog-centered modal-lg" style="margin-top: -50px;">
        <div class="modal-content" style="padding: 20px;">
          <div class="container">
            <h2>Sign In / Sign Up</h2>
            <form action="#">
              <div class="form-group">
                <label for="email">Email:</label>
                <input type="email" class="form-control" id="email" placeholder="Enter email" name="email" required>
              </div>
              <div class="form-group">
                <label for="pwd">Password:</label>
                <input type="password" class="form-control" id="pwd" placeholder="Enter password" name="pswd" required>
              </div>
              <div class="form-group form-check">
                <label class="form-check-label">
                  <input class="form-check-input" type="checkbox" name="remember"> Remember me
                </label>
              </div>
              <button type="submit" class="btn btn-success">Sign In</button>
              <button type="submit" class="btn btn-primary">Sign Up</button>
            </form>
          </div>
          <!-- Modal footer -->
          <div class="modal-footer">
            <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
          </div>

        </div>
      </div>
     `;
    document.getElementById("header-modal").innerHTML = md;
 }
 headerModal();
 