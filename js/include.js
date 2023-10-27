$.ajax({
  url: "../navbar.html",
  method: "get",
  success: function (data) {
    document.querySelector("navbar").innerHTML = data;
  },
});
