function filterSelection(filter, selector) {
  let cata_img = document.querySelectorAll(selector);
  var btn = document.querySelectorAll(".filterBtn > .btn");
  for (let i = 0; i < btn.length; i++) {
    btn[i].classList.remove("active");
  }
  if (filter == "All") {
    for (let i = 0; i < cata_img.length; i++) {
      cata_img[i].classList.add("scale1");
    }
  } else {
    for (let i = 0; i < cata_img.length; i++) {
      if (cata_img[i].classList.contains(filter)) {
        cata_img[i].classList.add("scale1");
      } else {
        cata_img[i].classList.remove('scale1');
      }
    }
  }
  this.classList.add("active");
}
