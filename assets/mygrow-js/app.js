//////retrieve local storage data
//  Retrieve Plant Logo
var plantLogo = localStorage.getItem('plantLogo');

if (plantLogo) {
  $("#mylogo").attr("src" , plantLogo);
  document.getElementById("MyGrowText").style.display = "block";
  document.getElementById("DeleteButton").style.display = "block";
  document.getElementById("MyGrowAdd").style.display = "none";
  $("#taskButton").show();
};
/////////////delete button////////
DeleteButton.addEventListener('click', function () {
  localStorage.clear();
  location.reload();
});

