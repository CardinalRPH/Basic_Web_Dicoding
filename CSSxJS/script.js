const togglebar = document.getElementById("side-menu-bar");
const navlist = document.getElementById("nav-list-id");

togglebar.addEventListener('click', () => {
  navlist.classList.toggle("show-nav-list");
  if (navlist.classList.contains("show-nav-list")) {
    togglebar.style.color = "rgb(182, 182, 182)";
  } else {
    togglebar.style.color = "white";
  }
});

document.getElementById("about-nav-id").onclick = () => {
  document.getElementById("box-1-id").scrollIntoView({ block: 'center' });
}

document.getElementById("home-nav-id").onclick = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

document.getElementById("profile-nav-id").onclick = () => {
  document.getElementById("box-3-profile-id").scrollIntoView({ block: 'start' });
}

document.getElementById("footer-up-id").onclick = () => {
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
}

document.getElementById("anime-nav-id").onclick = () => {
  document.getElementById("box-2-id").scrollIntoView({ block: 'start' });
}
document.getElementById("news-nav-id").onclick = () => {
  document.getElementById("box-3-id").scrollIntoView({ block: 'start' });
}
document.getElementById("event-nav-id").onclick = () => {
  document.getElementById("box-4-id").scrollIntoView({ block: 'start' });
}
document.getElementById("more-details-id").onclick = () => {
  document.getElementById("box-3-profile-id").scrollIntoView({ block: 'start' });
}

//Loader
slideshow_f();
popular_f();
upcomming_f();
news_f();
festival_f();
top_air_f();
top_upc_f();
function slideshow_f() {
  for (let i = 0; i < slideshow_dt.length; i++) {
    document.getElementById("slideshow-container-id").innerHTML += `
    <div class="mySlides fade fromtop">
    <img src="${slideshow_dt[i].im_file}">
    <div class="img-caption">
    <h5>
    ${slideshow_dt[i].text}
    </h5>
    <h2>
    ${slideshow_dt[i].title}
    </h2>
    </div>
    </div>`;
  }
  document.getElementById("slideshow-container-id").innerHTML += `
  <a class="prev" onclick="plusSlides(-1)">❮</a>
  <a class="next" onclick="plusSlides(1)">❯</a>`;
}

function popular_f() {
  for (let i = 0; i < popular_this.length; i++) {
    document.getElementById("popular-now").innerHTML += `
    <div class="item" title="${popular_this[i].title}">
    <a href="#">
    <img src="${popular_this[i].im_file}" alt="" width="210" height="300">
    <div class="img-caption s-caption">
    <h3>${popular_this[i].title}</h3>
    </div>
    </a>
    </div>`;
  }
}

function upcomming_f() {
  for (let i = 0; i < upcomming_next.length; i++) {
    document.getElementById("upcomming-next").innerHTML += `
    <div class="item" title="${upcomming_next[i].title}">
    <a href="#">
    <img src="${upcomming_next[i].im_file}" alt="" width="210" height="300">
    <div class="img-caption s-caption">
    <h3>${upcomming_next[i].title}</h3>
    </div>
    </a>
    </div>`;
  }
}

function news_f() {
  let x;
  for (let i = 0; i < news_update.length; i++) {
    switch (news_update[i].tag) {
      case "Anime":
        x = '<div class="g-tag anime-tag">';
        break;
      case "Game":
        x = '<div class="g-tag game-tag">';
        break;
      case "Event":
        x = '<div class="g-tag event-tag">';
        break;
      case "Music":
        x = '<div class="g-tag music-tag">';
        break;
      case "Manga":
        x = '<div class="g-tag manga-tag">';
        break;
    }
    document.getElementById("news-update-id").innerHTML += `
        <div class="grid-item">
        <a href="#">
        <div class="g-content">
        <div class="g-img">
        <img src="${news_update[i].im_file}" alt="">
        ${x}
        <small>${news_update[i].tag}</small>
        </div>
        </div>
        <div class="g-text">
        <article>
        <h2>${news_update[i].title}</h2>
        <small>${news_update[i].date}</small>
        <h4>${news_update[i].descr}</h4>
        </article>
        </div>
        </div>
        </a>
        </div>`;
  }
}

function festival_f() {
  for (let i = 0; i < festival.length; i++) {
    document.getElementById("festival-id").innerHTML += `
      <div class="grid-item">
      <a href="#">
      <div class="g-content">
      <div class="g-img">
      <img src="${festival[i].im_file}" alt="">
      <div class="g-tag event-tag">
      <small>Event</small>
      </div>
      </div>
      <div class="g-text">
      <article>
      <h2>${festival[i].title}</h2>
      <small>${festival[i].date}</small>
      <h4>${festival[i].location}</h4>
      </article>
      </div>
      </div>
      </a>
      </div>`;
  }
}

function top_air_f() {
  for (let i = 0; i < top_airing.length; i++) {
    document.getElementById("top-airing-id").innerHTML += `
    <li class="rank-unit" title="${top_airing[i].title}">
    <a href="#">
    <span class="rank">${i+1}</span>
    <img src="${top_airing[i].im_file}" alt="">
    <div class="rank-data">
    <h3>${top_airing[i].title}</h3>
    <span>scored ${top_airing[i].scored}</span>
    </div>
    </a>
    </li>`;
  }
}

function top_upc_f() {
  for (let i = 0; i < top_upcoming.length; i++) {
    document.getElementById("top-upcoming-id").innerHTML += `
    <li class="rank-unit" title="${top_upcoming[i].title}">
    <a href="#">
    <span class="rank">${i + 1}</span>
    <img src="${top_upcoming[i].im_file}" alt="">
    <div class="rank-data">
    <h3>${top_upcoming[i].title}</h3>
    </div>
    </a>
    </li>`;
  }
}



var slideIndex = 1;

var myTimer;

var slideshowContainer;

window.addEventListener("load", () => {
  showSlides(slideIndex);
  myTimer = setInterval(function () { plusSlides(1) }, 5000);
  slideshowContainer = document.getElementsByClassName('slideshow-container')[0];
  slideshowContainer.addEventListener('mouseenter', pause)
  slideshowContainer.addEventListener('mouseleave', resume)
})

// control next or prev
function plusSlides(n) {
  clearInterval(myTimer);
  if (n < 0) {
    showSlides(slideIndex -= 1);
  } else {
    showSlides(slideIndex += 1);
  }

  //keep mouse enter pause/resume

  if (n === -1) {
    myTimer = setInterval(function () { plusSlides(n + 2) }, 5000);
  } else {
    myTimer = setInterval(function () { plusSlides(n + 1) }, 5000);
  }
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

pause = () => {
  clearInterval(myTimer);
}

resume = () => {
  clearInterval(myTimer);
  myTimer = setInterval(function () { plusSlides(slideIndex) }, 5000);
}

function prevscrl(x) {
  x.parentElement.childNodes[3].scrollLeft -= 200;
}

function nextscrl(x) {
  x.parentElement.childNodes[3].scrollLeft += 200;
}