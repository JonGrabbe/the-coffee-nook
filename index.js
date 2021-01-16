let listOfIdes = [];

function elm(val) {
    console.log(val);
    listOfIdes.push(val);
    return document.getElementById(val);
}


function startSearch() {
    elm("exit-search").setAttribute("style", "display: inline-block;");
    elm("hamburger-menu").setAttribute("style", "display: none;");
    elm("logo-image").setAttribute("style", "display: none;");
    elm("cart-icon").setAttribute("style", "display: none;");
    elm("search-form-input").setAttribute("style", "display: inline;");
    elm("nav-right").setAttribute("class", "nav-right-mobile");
    elm("search-form").setAttribute("class", "search-form-mobile-search");
    
    console.log(listOfIdes);
}



function exitSearch() {
    let list = [
        {id: "exit-search", attr: "style"},
        {id: "hamburger-menu", attr: "style"},
        {id: "logo-image", attr: "style"},
        {id: "cart-icon", attr: "style"},
        {id: "search-form-input", attr: "style"},
        {id: "nav-right", attr: "class", change: true, newAttr: "nav-right"},
        {id: "search-form", attr: "class", change: true, newAttr: "search-form"}
    ];
    
    list.forEach(function(item) {
        if(item.change) {
            elm(item.id).setAttribute(item.attr, item.newAttr);
        } else {
            elm(item.id).removeAttribute(item.attr);    
        }
    })
}//end of exitSearch


let opened = false;

function dropDownMenu() {
    let menu = elm("navigation-menu");
    // let menuButton = elm("hamburger-menu");
    let menuAttributes = menu.attributes;


    if(!opened) {
        menu.setAttribute("class", "navigation-menu");
        opened = true;
    } else {
        menu.setAttribute("class", "navigation-menu-closed");
        opened = false;
    }



    console.log(menuAttributes);
}





elm("hamburger-menu").addEventListener("click", dropDownMenu);
elm("search-button-mobile").addEventListener("click", startSearch);
elm("exit-search").addEventListener("click", exitSearch);