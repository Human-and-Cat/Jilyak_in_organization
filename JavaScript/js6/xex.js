var win,win1;

function foo(){
    win=window.open("about:blank","window1","width=300,height=300");
}

function foo1(){
    win.document.write("какой-то текст и имя окна "+(win.name));
}

function foo2(){
    win.close();
}

function fun(){
    win1=window.open("about:blank","window","width=300,height=300");
}

function fun1(){
    win1.document.write("какой-то текст и имя окна "+(win1.name));
}

function fun2(){
    win1.close();
}

function tabl(){
    document.write("<tr><th>"+"Инфо о браузере"+"</th><td>"+navigator.userAgent+"</td></tr>")
    document.write("<tr><th>"+"Версия браузера"+"</th><td>"+navigator.appVersion +"</td></tr>");
    document.write("<tr><th>"+"название браузера"+"</th><td>"+navigator.appName +"</td></tr>");
    document.write("<tr><th>"+"кодовое название браузера"+"</th><td>"+navigator.appCodeName +"</td></tr>");
    document.write("<tr><th>"+"ОС, которую использует пользователь"+"</th><td>"+navigator.platform +"</td></tr>");
    document.write("<tr><th>"+"включена ли поддержка Java в браузере"+"</th><td>"+navigator.javaEnabled +"</td></tr>");
    document.write("<tr><th>"+"ширину и высоту экрана"+"</th><td>"+screen.width+":"+screen.height +"</td></tr>");
    document.write("<tr><th>"+"глубину цвета"+"</th><td>"+screen.colorDepth +"</td></tr>");
    document.write("<tr><th>"+"URL, которые были посещены в данном окне браузера"+"</th><td>"+location +"</td></tr>");
    document.write("<tr><th>"+"URL текущего документа"+"</th><td>"+location.href +"</td></tr>");
    document.write("<tr><th>"+"путь к загруженному документу"+"</th><td>"+location.pathname +"</td></tr>");
    document.write("<tr><th>"+"имя домена загруженного документа"+"</th><td>"+location.host +"</td></tr>");
}
