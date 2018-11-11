window.onload = function () {
  const wrapperEle = document.getElementsByClassName("wrapper")[0];

  const titleOpacity = () => {
    console.log("poopoo");
  }

  document.body.addEventListener("scroll", titleOpacity)

  console.log(wrapperEle);
}
