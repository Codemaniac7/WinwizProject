document.querySelectorAll(".tit").forEach((e) => {
    e.addEventListener("mouseover", function () {
      document.querySelector(".subCover").classList.add("down");
      document.querySelector(".black-bg").classList.add("show");
      document.querySelector(".black-bg").style.height = "100%";
      document.querySelector(".gnb").style.height = "630px";
    });
  });

  $(".gnb-list").on("mouseleave", function () {
    document.querySelector(".subCover").classList.remove("down");
    document.querySelectorAll(".sub-gnb").forEach((e) => {
      document.querySelector(".black-bg").classList.remove("show");
    });
    document.querySelector(".black-bg").style.height = "0";
    document.querySelector(".gnb").style.height = "130px";
  });


  $("#menu-btn").on("click", function () {
    $(".gnb-list").addClass("menuOn");
    $("#menu-btn").hide();
    $("#close-btn").addClass("show");
  });

  $("#close-btn").on("click", function () {
    $(".gnb-list").removeClass("menuOn");
    $("#close-btn").removeClass("show");
    $("#menu-btn").show();
    document.querySelectorAll(".sub-gnb").forEach((e)=>{
        e.classList.remove("open")
      })
  });

  // document.querySelectorAll("sub-gnb").
 

  document.querySelectorAll(".gnb-list > li").forEach((e) => {
    e.addEventListener("click", function () {
      e.lastElementChild.classList.toggle("open");     
    });
  });

