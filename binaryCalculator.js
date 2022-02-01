var res = document.getElementById("res");

function action(e) {
    var btn = e.target;

    switch (btn.id) {
        case "btn0":
            res.innerHTML += 0;
            break;
        case "btn1":
            res.innerHTML += 1;
            break;
        case "btnClr":
            res.innerHTML = "";
            break;
        case "btnSum":
            res.innerHTML += "+";
            break;
        case "btnSub":
            res.innerHTML += "-";
            break;
        case "btnMul":
            res.innerHTML += "*";
            break;
        case "btnDiv":
            res.innerHTML += "/";
            break;
        case "btnEql":
            var numbers = []; //array for binary numbers and mathematical operators
            var number = []; //array for binary numbers
            var result = 0;
            let wrongRegEx = /(^[-*\/\+])|\+{2,}|-{2,}|\*{2,}|\/{2,}/;

            if (wrongRegEx.test(res.innerHTML)) {
                alert("Not a valid expression!");
                res.innerHTML = "";
            }

            //create numbers array of binary numbers and operators
            for (let i = 0; i < res.innerHTML.length; i++) {
                if (res.innerHTML[i] == 0 || res.innerHTML[i] == 1) {
                    number.push(res.innerHTML[i]);
                }
                if (
                    res.innerHTML[i] == "+" ||
                    res.innerHTML[i] == "-" ||
                    res.innerHTML[i] == "*" ||
                    res.innerHTML[i] == "/"
                ) {
                    numbers.push(parseInt(number.join(""), 2));
                    numbers.push(res.innerHTML[i]);
                    number = [];
                }
            }
            numbers.push(parseInt(number.join(""), 2));

            //calculate result and convert to base 2 integer
            result = Math.floor(eval(numbers.join(""))).toString(2);
            res.innerHTML = result;
            break;
    }
}

document.getElementById("btn0").onclick = action;
document.getElementById("btn1").onclick = action;
document.getElementById("btnClr").onclick = action;
document.getElementById("btnEql").onclick = action;
document.getElementById("btnSum").onclick = action;
document.getElementById("btnSub").onclick = action;
document.getElementById("btnMul").onclick = action;
document.getElementById("btnDiv").onclick = action;
