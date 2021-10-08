function miFuncion1() {
    let res = document.getElementById("res1");
    let asterisks = "";
    for (let i = 0; i < 16; i++) {
        for (let j = 0; j < i; j++) {
            asterisks = asterisks + "*";
        }
        asterisks = asterisks + "</br>";
    }

    res.innerHTML = asterisks;

}
function miFuncion2() {
    let res = document.getElementById("res2");
    let asterisks = "";
    for (let i = 0; i < 16; i++) {
        for (let j = 16; j > i; j--) {
            asterisks = asterisks + "*";
        }
        asterisks = asterisks + "</br>";
    }

    res.innerHTML = asterisks;


}
function miFuncion3() {
    console.log("ta vivo");
    let res = document.getElementById("res3");
    let asterisks = "";
    for (let i = 0; i < 16; i++) {
        if (i < 8) {
            for (let j = 0; j < i; j++) {
                asterisks = asterisks + "*";
            }
        }
        else{
            for (let j = i; j > 0; j--) {
                asterisks = asterisks + "*";
            }
        }
        asterisks = asterisks + "</br>";
    }

    res.innerHTML = asterisks;

}
function miFuncion4() {
    console.log("ta vivo");
    let res = document.getElementById("res4");
    let asterisks = "******** </br> ******** ";

    res.innerHTML = asterisks;

}