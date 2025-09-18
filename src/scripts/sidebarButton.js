  export default function initSideBar() {
    const menuItems = document.querySelectorAll("li");
    const menuButton = document.querySelector(".menu-btn");
    console.log(menuItems);
    function active() {
      menuItems.forEach((item) => {
        item.addEventListener("click", () => {
          menuItems.forEach((menuItem) => {
            menuItem.classList.remove("active");
          });

          if (item.classList.contains("active")) {
            item.classList.remove("active");
          } else {
            item.classList.add("active");
          }
        });
      });
    }

    active();

    menuButton.addEventListener("click", function (evt) {
      const sidebar = document.querySelector(".sidebar");
      sidebar.classList.toggle("close");
      console.log(evt.target)
    });
  }


