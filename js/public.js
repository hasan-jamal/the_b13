$(document).ready(function () {
  const $openMenuBtn = $(".openMenuBtn");
  const $sideMenu = $(".side-menu");
  const $menuLinks = $sideMenu.find("a");
  const $overlay = $(".overlay");

  // Open side menu
  $openMenuBtn.click(function () {
    console.log($sideMenu.addClass("active"));
    $sideMenu.addClass("active");
    $overlay.show();
  });

  // Close side menu
  function closeSideMenu() {
    $sideMenu.removeClass("active");
    $overlay.hide();
  }
  $(".close-menu-btn").click(function () {
    closeSideMenu();
  });
  // Close side menu when a link is clicked
  $menuLinks.click(function () {
    closeSideMenu();
  });

  // Close side menu when overlay is clicked
  $overlay.click(function () {
    closeSideMenu();
  });

  // Close side menu when clicking anywhere outside the menu
  $(document).on("click", function (event) {
    if (
      !$(event.target).closest($sideMenu).length &&
      !$(event.target).is($openMenuBtn) &&
      !$(event.target).is($overlay)
    ) {
      closeSideMenu();
    }
  });
});
