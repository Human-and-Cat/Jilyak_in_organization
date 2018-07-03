function fun1(){
    alert('Вас приветствует учебный центр')
}
        
function fun2(){
    var name = prompt("Введите имя", "name");
    alert('Добро пожаловать на наши курсы, '+name);
}

function fun3(){
    var web = confirm("Хотите стать Web-дизайнером?")
    if(web){
        alert("Учите стили CSS и JavaScript!")
    }
    else{
        alert("Упускаете время!")
    }
}
        
function fun4(){
    alert("Результатом сложения строки и числа всегда будет ...")
    alert("строка")
}    

function fun5(){
    alert("Результат сложения чисел 25 и 5 : " + (25+ 5));
    alert("Результат сложения двух строк 25 и 5 : " + 25 + 5);
    alert("результат сложения числа и строки 30 и '5' : " + (30 + '5'));
    alert("результат сложения строки и числа '45' и 1 : " + ('45'+ 1));
}

function fun6(){
    var x = 5 , y = 7,c;
    
    var b =(35*y-25*x)/5+23;
    alert("(35y-25x)/5+23 = "+b);

    var a=((8*y)/x+(5*x)/y+43)*6;
    alert("(8*y/x+5*x/y + 43)*6) = "+(Math.round(a*100)/100));
            
    if (a>b){
        c=a%b;
        alert(Math.round(c*100)/100);
    }
    else {
        c=b%a;
        alert(Math.round(c*100)/100);
    }
}

function fun7(){
    var x=prompt("Ввод х",5);
    if((x>=2 || x<=31) && (x!=17) && (x%3==0)){
        alert("true value");
    }
    else{
        alert("false value");
    }
}

function fun8(){
    var UserName=prompt("Введите логин",NaN);
            
    if(UserName=="admin"){
            
    var Password=prompt("Введите пароль");
            
    if(Password=="The_Dark_Lord"){
        alert("Добро пожаловать!");
    }
    else if(Password==null){
        alert("Вход отменён");
    }
    else{
        alert("Я вас не знаю");
    }
    }
    else if(UserName==null){
        alert("Вход отменён");
    }
    else{
        alert("Я вас не знаю");
    }
}

function fun9(){
    var UserName=prompt("Введите логин",NaN);
    var Password;
    (UserName=="admin") ? Password=prompt("Введите пароль"):
    (UserName==null) ?
    alert("Вход отменён"):
    alert("Я вас не знаю");
    (Password=="The_Dark_Lord") ? alert("Добро пожаловать!"):
    (Password==null) ? alert("Вход отменён"):
    alert("Я вас не знаю");
}

function fun10(){
    var day=prompt("Введите день недели",1);
    if(day<=31){
        switch(day%7){
            case 1:
                alert("Понедельник");
                break;
            case 2:
                alert("Вторник");
                break;
            case 3:
                alert("Среда");
                break;
            case 4:
                alert("Четверг");
                break;
            case 5:
                alert("Пятница");
                break;
            case 6:
                alert("Суббота");
                break;
            case 7:
                alert("Воскресенье");
                break;
            case 0:
                alert("Воскресенье");
                break;
        }
    }
    else{
        alert("Такого дня не существует");
    }
}
