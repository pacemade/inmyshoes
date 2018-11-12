window.onload = function () {
  const wrapperEle = document.getElementsByClassName("header-container")[0];

  const titleOpacity = () => {

    if ($(this).scrollTop() > 50) {
      console.log("top");
    }
    if ($(this).scrollTop() < 50) {
      console.log("down");
    }

  }

  document.body.addEventListener("scroll", titleOpacity)

  console.log(wrapperEle);
}
