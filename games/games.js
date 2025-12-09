
function anyClick(event) { // function for any click on the home page
    if (event.target.id === "tabbutton") { // go here if we click on the tabbutton
        const tabcontents = document.getElementById("tabcontents"); // actually gets the element
        const tabcontentdetails = getComputedStyle(tabcontents); // because everything is so weird, you need to get the computed style first before actually using it
        if (tabcontentdetails.display === "none") {
            tabcontents.style.display = "block";
            for (let child of tabcontents.children) {
                child.addEventListener("mouseover", mousedLinks);
                child.addEventListener("mouseleave", mousedLinks);
            }
        }
        else {
            tabcontents.style.display = "none";
        }
    }
    else if(event.target.id === "link1") {
        location.pathname = "index.html";
    }
    else if(event.target.id === "link2") {
        location.pathname = "study/study.html";
    }
    else if(event.target.id === "link3") {
        location.reload();
    }
    else if(event.target.id === "link4") {
        location.pathname = "extras/extras.html";
    }
    else if(event.target.id === "link5") {
        location.pathname = "help/help.html";
    }
    else if(event.target.id === "game1" || event.target.id === "game1p") {
        location.href = "game1/game1.html";
    }
    else if(event.target.id === "game2" || event.target.id === "game2p") {
        location.href = "game2/game2.html";
    }
    else {
        if (getComputedStyle(document.getElementById("tabcontents")).display === "block") {
            document.getElementById("tabcontents").style.display = "none";
        }
        console.log("you pressed the " + event.srcElement.id + " element !");
    }
}

function mousedLinks(event) {
    if (event.type === "mouseover") {
        event.target.style.backgroundColor = "#e8e8e8";
    }
    else if (event.type === "mouseleave") {
        event.target.style.backgroundColor = "#FFFFFF"
    }
}

document.addEventListener("click", anyClick); // universal click and differentiate based on element targeted