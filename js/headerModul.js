function loadCss() {
	$("head").append(
		'<link rel="stylesheet" type="text/css" href="/css/grid.css">',
		'<link rel="stylesheet" type="text/css" href="/css/header.css">'
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
            <li class="dropdown">
            <a href="/menu-gym-yoga-dance.html" class="dropbtn"><i class="fas fa-dumbbell"></i> <span class="hideOnMobile hideOnTablet">Be Stronger</span></a>
                    <div class="dropdown-content">
    				<a href="/gym.html">GYM</a>
    				<a href="/yoga.html">YOGA</a>
    				<a href="/arobic.html">AEROBIC</a>
  					</div>
             </li>
              <li class="dropdown">
              <a href="/haidm-index.html" class="dropbtn"><i class="fab fa-pagelines fa-lg"></i> <span class="hideOnMobile hideOnTablet">Healthy Life</span></a>
                     <div class="dropdown-content">
    				<a href="haidm-page-news.html">News</a>
    				<a href="haidm-page-tips.html">Tips</a>
    				<a href="haidm-page-thuoc.html">Functional Foods</a>
  					</div>
              </li>
              <li class="dropdown">
              <a href="/mngan-main-page.html" class="dropbtn"><i class="fas fa-seedling fa-lg"></i> <span class="hideOnMobile hideOnTablet">Healthy Foods</span></a>                    
              <div class="dropdown-content">
    				<a href="healthy-recipes.html">Healthy Recipes</a>
    				<a href="nutrition-facts.html">Nutrition Facts</a>
    				<a href="mngancountdown.html">Event</a>
  					</div>
              </li>
              <li class="dropdown">
              <a href="/calc.html" class="dropbtn"><i class="fas fa-heartbeat"></i> <span class="hideOnMobile hideOnTablet">Health Calculators</span></a>
                    <div class="dropdown-content">
    				<a href="/calc.html">Body Mass Index (BMI)</a>
    				<a href="/calc.html">Ideal Body Weight</a>
    				<a href="/calc.html">Daily Calorie Intake</a>
    				<a href="/calc.html">Calories Burned</a>
  					</div>
              </li>
              <li class="dropdown">
              <a href="#" class="dropbtn"><i class="fas fa-ellipsis-h fa-lg"></i></a>
                    <div class="dropdown-content">
    				<a href="userDashboard.html">User Dashboard</a>
    				<a href="userDashboard.html">Link 2</a>
    				<a href="userDashboard.html">Link 3</a>
  					</div>
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
              <li><a href="/home.html"><i class="fas fa-home fa-lg"></i> Home</a></li>
              <li><a data-toggle="modal" data-target="#header-modal" href="#"><i class="fas fa-address-card fa-lg"></i>
                  Sign In / Sign Up</a></li>
                  <li><a href="/menu-gym-yoga-dance.html"><i class="fas fa-dumbbell"></i> Be Stronger</a></li>
              <li><a href="/haidm-index.html"><i class="fab fa-pagelines fa-lg"></i> Healthy Life</a></li>
              <li><a href="/mngan-main-page.html"><i class="fas fa-seedling fa-lg"></i> Healthy Foods</a></li>
              <li><a href="/calc.html"><i class="fas fa-heartbeat"></i> Health Calculators</a></li>
            </ul>
          </div>
        </div>
      </div>
    `;
	document.getElementById("header").innerHTML = ct;
}
header();

function navbar() {
	var searchIcon = document.getElementById("search-icon");
	var searchForm = document.getElementById("search-form");
	searchIcon.onclick = function () {
		if (searchForm.style.display == "none") {
			searchForm.style.display = "grid";
		} else {
			searchForm.style.display = "none";
		}
		window.addEventListener("mouseup", function (event) {
			if (event.target != searchIcon && event.target.parentNode != searchForm) {
				searchForm.style.display = "none";
				return;
			}
		});
	};
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

// window.onscroll = function () {
// 	scrollFunction();
// };

// function scrollFunction() {
// 	if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
// 		document.getElementById("header").style.backgroundColor = "#ffffff";
// 		document.getElementById("header").style.border = "1px solid #ccc";
// 	} else {
// 		document.getElementById("header").style.border = "none";
// 		document.getElementById("header").style.backgroundColor = "transparent";
// 	}
// }
