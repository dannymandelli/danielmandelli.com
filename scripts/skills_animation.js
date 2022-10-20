

"use strict"; 

const body = document.body;
const bgColorsBody = ["#BEEE6A", "#AF42C4", "#42B4C4", "#FBD35E", "#FC6EBB"];
const icon_top = ["3px", "92px", "185px", "270px", "357px"];
const section_id = ["coding", "applications", "os", "hardware", "soft_skills"]
const menu = body.querySelector(".menu");
const menuItems = menu.querySelectorAll(".menu__item");
const menuBorder = menu.querySelector(".menu__border");
let activeItem = menu.querySelector(".active");
const menu_section = body.querySelector(".menu__section");
let activeSection = menu_section.querySelector(".active");

function clickItem(item, index) {

    menu.style.removeProperty("--timeOut");
    
    if (activeItem == item) return;
    
    if (activeItem) {
        activeItem.classList.remove("active");
        activeSection.classList.remove("active");
        activeSection.style.display = "none";
    }

    
    item.classList.add("active");
    activeItem = item;
    offsetMenuBorder(index, menuBorder);

    displaySection(section_id[index]);
    
}

function offsetMenuBorder(index, menuBorder) {

    menuBorder.style.transform = `translate3d(0, ${icon_top[index]} , 0)`;

}

menuBorder.style.transform = `translate3d(0, 0, 0)`;

displaySection(section_id[0]);

menuItems.forEach((item, index) => {

    item.addEventListener("click", () => clickItem(item, index));
    
})

function displaySection(sectionID){
    activeSection = document.getElementById(sectionID);
    activeSection.style.display = "inline-block";
}
