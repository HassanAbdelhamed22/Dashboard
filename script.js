// Dark Theme
var dark = document.querySelector(".dark-icon");
dark.addEventListener("click", function (e) {
  e.preventDefault();
  document.body.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    dark.src = "imgs/sun.png";
  } else {
    dark.src = "imgs/moon.png";
  }
});
//////////////////////////////////////////////////
// Projects Search

const projectSearch = () => {
  const searchBox = document
    .getElementById("projects-search-input")
    .value.toUpperCase();
  const storeItems = document.getElementById("projects-list");
  const product = document.querySelectorAll(".project");
  const pName = storeItems.getElementsByTagName("h4");
  for (var i = 0; i < pName.length; i++) {
    let match = product[i].getElementsByTagName("h4")[0];

    if (match) {
      let textValue = match.textContent || match.innerHTML;

      if (textValue.toUpperCase().indexOf(searchBox) > -1) {
        product[i].style.display = "";
      } else {
        product[i].style.display = "none";
      }
    }
  }
};

const courseSearch = () => {
  const searchBox = document
    .getElementById("courses-search-input")
    .value.toUpperCase();
  const storeItems = document.getElementById("courses-list");
  const product = document.querySelectorAll(".course");
  const pName = storeItems.getElementsByTagName("h4");
  for (var i = 0; i < pName.length; i++) {
    let match = product[i].getElementsByTagName("h4")[0];

    if (match) {
      let textValue = match.textContent || match.innerHTML;

      if (textValue.toUpperCase().indexOf(searchBox) > -1) {
        product[i].style.display = "";
      } else {
        product[i].style.display = "none";
      }
    }
  }
};

const friendSearch = () => {
  const searchBox = document
    .getElementById("friends-search-input")
    .value.toUpperCase();
  const storeItems = document.getElementById("friends-list");
  const product = document.querySelectorAll(".friend");
  const pName = storeItems.getElementsByTagName("h4");
  for (var i = 0; i < pName.length; i++) {
    let match = product[i].getElementsByTagName("h4")[0];

    if (match) {
      let textValue = match.textContent || match.innerHTML;

      if (textValue.toUpperCase().indexOf(searchBox) > -1) {
        product[i].style.display = "";
      } else {
        product[i].style.display = "none";
      }
    }
  }
};
//////////////////////////////////////////////////////
// Modal Window
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnsOpenModal.forEach((btn) => btn.addEventListener("click", openModal));

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
///////////////////////////////////////////////
// Widget Hidden

const allWidgets = document.querySelectorAll(".widget");

window.addEventListener("scroll", checkWidgets);
checkWidgets();

function checkWidgets() {
  const triggerBottom = (window.innerHeight / 5) * 4;
  allWidgets.forEach((widget) => {
    const widgetTop = widget.getBoundingClientRect().top;
    if (widgetTop < triggerBottom) {
      widget.style.opacity = "1";
    } else {
      widget.style.opacity = "0";
    }
  });
}
/////////////////////////////////
// Notification
const bell = document.querySelector(".bell");
const notiWindow = document.querySelector(".base-notification");

bell.addEventListener("click", function () {
  notiWindow.classList.toggle("visible");
});

const closeNoti = function () {
  notiWindow.classList.remove("visible");
};

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && notiWindow.classList.contains("visible")) {
    closeNoti();
  }
});

document.addEventListener("click", function (e) {
  const isWidgetClicked = bell.contains(e.target);

  if (!isWidgetClicked && notiWindow.classList.contains("visible")) {
    closeNoti();
  }
});
//////////////////////////////////////////
// Navigate to another page
const seeAllBtn = document.querySelector(".see-all");
const notification = document.querySelector(".notification");
const beforeElement = window.getComputedStyle(notification, "::before");

seeAllBtn.addEventListener("click", function () {
  window.location.href = "notification.html";
  beforeElement.style.display = "none";
});

////////////////////////////////////////////////
// Delete function
const deleteDiv = document.querySelector(".delete");

deleteDiv.addEventListener("click", (e) => {
  target = e.target;
  console.log("welcome");
  if (target.classList.contains("delete-icon")) {
    target.parentElement.parentElement.remove();
  }
});
