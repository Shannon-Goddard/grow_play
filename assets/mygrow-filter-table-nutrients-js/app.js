function hide_show_table(e){if("show"==document.getElementById(e).value){for(var t=document.getElementsByClassName(e),l=0;l<t.length;l++)t[l].style.display="none";document.getElementById(e+"_head").style.display="none",document.getElementById(e).value="hide"}else{for(var t=document.getElementsByClassName(e),l=0;l<t.length;l++)t[l].style.display="table-cell";document.getElementById(e+"_head").style.display="table-cell",document.getElementById(e).value="show",$("#taskButton").show()}}$(function(){$("#table1").attr("contenteditable","true");var e=document.getElementById("table1");$(".get-started-btn").click(function(){localStorage.setItem("page_html",JSON.stringify(e.innerHTML))});var t=JSON.parse(localStorage.getItem("page_html"));t&&(e.innerHTML=t)});