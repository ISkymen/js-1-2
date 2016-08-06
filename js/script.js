function getpow() {
    document.getElementById("pow").innerHTML='&nbsp;';
    do {
        var x = prompt("Введите целое число для возведения в степень (x)", "");
        if (x === null) {
            return;
        }
    }
    while (checkNumber(x));

    do {
        var n = prompt("Введите степень числа (n)", "");
        if (x === null) {
            return;
        }
    }
    while (checkNumber(n));

    console.log("%s в степени %s = %d", x, n, pow(x, n));
    var resultPow = x + " в степени " + n + " = " + pow(x, n);
    document.getElementById("pow").innerHTML=resultPow;
}


function pow(x, n) {
  var result = 1;
    var a = abs(n);

    for (var i = 0; i < a; i++) {
      result *= x;
    }

    if (n < 0) {
        result = 1/result;
    }

    return result;
}

//Не ищем легких путей (Math.abs())

function abs(a) {
    var abs = a.replace("-", "");
    return abs;
}

function checkNumber(num) {
    var check = +num;
    if (isNaN(check) || ((check ^ 0) != check)) {
        alert("Программа работает только с целыми числами! Попробуйте еще раз.")
        return true;
    }
    else {
        return false;
    }
}

function nameGame() {

    document.getElementById("name").innerHTML='&nbsp;';

/*    var names = prompt("Введите через запятую 5 любых имен", "");
    console.log(names);
    names = names.replace(/ /g, "");
    var arr = names.split(',');
    console.log(arr);*/

    var arr = [];

    for (var i = 0; i < 5; i++) {
        arr[i] = prompt("Введите " + (i + 1) + "-е имя");
        if (arr[i] === null) {
            return;
        }
    }

    console.log(arr);
    var nameGame = "Право доступа имеют: <br>" + arr.join("<br>");
    document.getElementById("name").innerHTML=nameGame;
    console.log(arr);
    var needName = prompt("Введите имя пользователя");

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === needName) {
            alert(arr[i] + ", вы успешно вошли");
            console.log(arr[i]);
            return;
        }
    }
    alert("Доступ запрещен!");
    return;
}

