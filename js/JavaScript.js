function Ben() {
    var ss = document.getElementById("ban");
    ss.style.display = "none";
}

function ben1() {
    var ss = document.getElementById("hyr");
    var hh = document.getElementById("hh88");
    var ll = document.getElementById("Wal");
    hh.style.backgroundImage = "url('image/current.gif')";
    ll.style.backgroundImage = "url('image/gray.gif')";
    hh.style.color = "white";
    ll.style.color = "black";
    ss.style.display = "none";
}

function ben2() {
    var ss = document.getElementById("hyr");
    var hh = document.getElementById("hh88");
    var ll = document.getElementById("Wal");
    hh.style.backgroundImage = "url('image/gray.gif')";
    ll.style.backgroundImage = "url('image/current.gif')";
    hh.style.color = " black";
    ll.style.color = "white";
    ss.style.display = "block";
}

function ben11() {
    var hh = document.getElementById("Button1");
    var ll = document.getElementById("Button2");
    var gg = document.getElementById("gdff");
    gg.innerHTML = "邮箱：";
    hh.style.backgroundImage = "url('image/current.gif')";
    ll.style.backgroundImage = "url('image/gray.gif')";
    hh.style.color = "white";
    ll.style.color = "black";
}

function ben22() {
    var hh = document.getElementById("Button1");
    var ll = document.getElementById("Button2");
    var gg = document.getElementById("gdff");
    gg.innerHTML = "手机号：";
    hh.style.backgroundImage = "url('image/gray.gif')";
    ll.style.backgroundImage = "url('image/current.gif')";
    hh.style.color = " black";
    ll.style.color = "white";
}

function Gan() {
    document.getElementById("tex").value =parseInt(document.getElementById("tex").value)+1;

}

function Gen() {
    if (document.getElementById("tex").value > 0) {
        document.getElementById("tex").value = parseInt(document.getElementById("tex").value) - 1;
    }
}

function Gea() {
    if (document.getElementById("tat").value > 0) {
        document.getElementById("tat").value = parseInt(document.getElementById("tat").value) - 1;
    }
}

function Geq() {
    document.getElementById("tat").value = parseInt(document.getElementById("tat").value) + 1;
}