document.addEventListener("scroll",handleScroll);var scrollToTopBtn=document.querySelector(".scrollToTopBtn");function handleScroll(){var o=document.documentElement.scrollHeight-document.documentElement.clientHeight;document.documentElement.scrollTop/o>.15?scrollToTopBtn.classList.contains("showScrollBtn")||scrollToTopBtn.classList.add("showScrollBtn"):scrollToTopBtn.classList.contains("showScrollBtn")&&scrollToTopBtn.classList.remove("showScrollBtn")}function scrollToTop(){window.scrollTo({top:0,behavior:"smooth"})}scrollToTopBtn.addEventListener("click",scrollToTop);
//# sourceMappingURL=my-library.82721ec0.js.map