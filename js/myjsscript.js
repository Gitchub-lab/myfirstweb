
function Confirm_Buttons() {
    var txtconf;
    if (confirm("Confirm to continue!")) {
        txtconf = "OK!";
    } else {
        txtconf = "Cancel!";
    }

    alert(txtconf);

    document.getElementById("test").innerHTML = txtconf;
}


function mouseDescFocus(desc) {
    if (desc.children.length < 3) return;
    if (desc.children[2].tagName === 'SMALL')
        desc.children[2].style.display = ''
}

function mouseDescBlur(desc) {
    if (desc.children.length < 3) return;
    if (desc.children[2].tagName === 'SMALL')
        desc.children[2].style.display = 'none'
}

function LoadthePage() {
    let divs = document.getElementsByClassName("grp-form");
    for (let i = 0; i < divs.length; i++) {
        divs[i].addEventListener("focusin", () => mouseDescFocus(divs[i]));
        divs[i].addEventListener("focusout", () => mouseDescBlur(divs[i]));

    }
}

