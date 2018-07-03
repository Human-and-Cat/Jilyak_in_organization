function foo1(){
    var str="Кот Илья Владимирович";
    var s1=str.toUpperCase();
    var s2=str.toLowerCase();
    var s4="";
    
    alert("Длина строки : "+str.length);
    
    alert("Строка с верхним регистром + нижний регистр\n" + s1.concat(s2));
    
    alert("ФИО : " + (s4=str[0]+str[4]+str[9]));
}