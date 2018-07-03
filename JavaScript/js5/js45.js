function foo() {
    for (var i = 0; i < (document.all.length); i++) {
        alert("Tag " + document.all[i].tagName + " number " + i);
    }
}

function foo20() {
    foo2();
}

function foo2() {
    for (var i = 0; i < document.body.childElementCount; i++) {
        alert(document.body.children[i].tagName + "  " + i)
    }
}

function foo3() {
    var elements = document.all;
    for (var i = 0; i < elements.length; i++) {
        if ((elements[i]) == ("[object HTMLSpanElement]")) {
            alert("1 способ " + elements[i].innerHTML);
            break;
        }
    }

    var sp = document.getElementsByTagName("span");
    alert("2 способ " + sp[0].innerHTML);

    var el = document.getElementsByClassName("edit");
    alert("3 способ " + el[0].innerHTML);
}

function foo4() {
    var x = document.getElementsByClassName("x");
    var avg = 0;
    for (var i = 0; i < x.length; i++) {
        avg += parseInt(x[i].innerHTML);
    }
    alert("Средний балл " + avg / x.length);

    var el = document.getElementsByTagName("span");
    el[1].innerHTML = el[1].innerHTML + " " + avg / x.length;
}