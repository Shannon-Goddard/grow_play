$(function(){$("#table1").attr("contenteditable","true");var t=document.getElementById("table1");$(".get-started-btn").click(function(){localStorage.setItem("page_html",JSON.stringify(t.innerHTML))});var e=JSON.parse(localStorage.getItem("page_html"));e&&(t.innerHTML=e)}),$(function(){$("table tr").show(),$(".notes").hide()});