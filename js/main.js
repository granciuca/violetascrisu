"use strict";

function videoDrop() {
  const videoItem = document.querySelectorAll(".item-video");

  if (videoItem) {
    videoItem.forEach((element) => {
      const dropContent = element.querySelector(".drop-content");
      const dropSection = element.querySelector(".action");
      const dropBtn = element.querySelector(".open-drop");
      const dropSpan = dropBtn.querySelector("span");
      dropSection.addEventListener("click", () => {
        dropContent.classList.toggle("_active");
        dropSpan.classList.toggle("_active");
      });
    });
  }
}
videoDrop();

function loadMore() {
  const loadItem = document.querySelectorAll(".item-video.load");
  const loadBtn = document.querySelector(".load-more-video");
  if (loadItem && loadBtn) {
    let textBtn = loadBtn.querySelector(".load-more-txt");

    loadBtn.addEventListener("click", () => {
      loadItem.forEach((element) => {
        element.classList.toggle("hide-off");
        if (textBtn.textContent === "Afișează Toate") {
          textBtn.textContent = "Mai Puțin";
        } else if (textBtn.textContent === "Mai Puțin") {
          textBtn.textContent = "Afișează Toate";
        }
      });
    });
  }
}

loadMore();

function burgerMenu() {
  const iconMenu = document.querySelector(".menu-icon");

  if (iconMenu) {
    const menuBody = document.querySelector(".nav-links");
    const header = document.querySelector("header");
    iconMenu.addEventListener("click", function () {
      document.body.classList.toggle("_lock");
      iconMenu.classList.toggle("_active");
      menuBody.classList.toggle("_active");
      header.classList.toggle("_active");
    });
  }
}

burgerMenu();

function timerPromo() {
  const finalDate = new Date("Dec 15, 2022 23:59:59").getTime() / 1000;

  let timerWrapper = document.querySelector(".timer-promo");

  if (timerWrapper) {
    let interval = setInterval(function () {
      let currentTime = new Date().getTime() / 1000;

      let timeLeft = finalDate - currentTime;

      const daySeconds = 60 * 60 * 24;

      const hourSeconds = 60 * 60;

      const minuteSeconds = 60;

      let days = Math.floor(timeLeft / daySeconds);

      let hours = Math.floor((timeLeft % daySeconds) / hourSeconds);

      let minutes = Math.floor((timeLeft % hourSeconds) / minuteSeconds);

      let seconds = Math.floor((timeLeft % minuteSeconds) / 1);

      let daysWrapper = timerWrapper.querySelector(".day-left");

      let hoursWrapper = timerWrapper.querySelector(".hour-left");

      let minutesWrapper = timerWrapper.querySelector(".minute-left");

      let secondsWrapper = timerWrapper.querySelector(".second-left");

      daysWrapper.textContent = days;
      hoursWrapper.textContent = hours;
      minutesWrapper.textContent = minutes;
      secondsWrapper.textContent = seconds;

      if (timeLeft < 0) {
        clearInterval(interval);
        timerWrapper.textContent = "Ofertă finalizată";
      }
    }, 1000);
  }
}
timerPromo();

function lessonsDrops() {
  const lessonsParent = document.querySelector(".video-number");

  if (lessonsParent) {
    const videoLessons = document.querySelectorAll(".video-lesson-wrapper");
    const lessonBtn = lessonsParent.querySelectorAll(".item");

    videoLessons.forEach((element) => {
      element.classList.add("display-hide");
      element.style.transform = "scale(0.5)";
      element.style.opacity = "0";
    });

    lessonBtn.forEach((element) => {
      const btnAttr = element.getAttribute("data-video");
      const atchVideo = document.querySelector("." + btnAttr);

      element.addEventListener("click", () => {
        lessonBtn.forEach((element) => {
          element.classList.remove("_active");
        });
        videoLessons.forEach((element) => {
          element.classList.add("display-hide");
          element.style.transform = "scale(0.5)";
          element.style.opacity = "0";
        });
        element.classList.add("_active");
        atchVideo.classList.remove("display-hide");
        atchVideo.style.transition = "all 0.3s ease-in-out";
        setTimeout(function () {
          atchVideo.style.opacity = "1";
          atchVideo.style.transform = "scale(1)";
        }, 100);
      });
    });
  }
}

lessonsDrops();
