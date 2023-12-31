// Copy text
let copyText = document.querySelector(".copy-text");
copyText.querySelector("button").addEventListener("click", function () {
  let input = copyText.querySelector("textarea.text");
  input.select();
  document.execCommand("copy");
  copyText.classList.add("active");
  window.getSelection().removeAllRanges();
  setTimeout(function () {
    copyText.classList.remove("active");
  }, 2500);
});

let copyText2 = document.querySelector(".copy-text2");
copyText2.querySelector("button").addEventListener("click", function () {
  let input2 = copyText2.querySelector("input.text");
  input2.select();
  document.execCommand("copy");
  copyText2.classList.add("active");
  window.getSelection().removeAllRanges();
  setTimeout(function () {
    copyText2.classList.remove("active");
  }, 2500);
});

$("#tabs-nav li:first-child").addClass("active");
$(".tab-content").hide();
$(".tab-content:first").show();

// Click function
$("#tabs-nav li").click(function () {
  $("#tabs-nav li").removeClass("active");
  $(this).addClass("active");
  $(".tab-content").hide();

  var activeTab = $(this).find("a").attr("href");
  $(activeTab).fadeIn();
  return false;
});
function openModalAndTab(modalId, tabId) {
  var modal = new bootstrap.Modal(document.getElementById(modalId));
  modal.show();

  var tabs = document.querySelectorAll(".tab-content");
  for (var i = 0; i < tabs.length; i++) {
    tabs[i].style.display = "none";
  }
  document.getElementById(tabId).style.display = "block";

  var tabListItems = document.querySelectorAll("#tabs-nav li");
  for (var i = 0; i < tabListItems.length; i++) {
    tabListItems[i].classList.remove("active");
  }

  var selectedTabListItem = document.querySelector(
    'a[href="#' + tabId + '"]'
  ).parentNode;
  if (selectedTabListItem) {
    selectedTabListItem.classList.add("active");
  }
}
