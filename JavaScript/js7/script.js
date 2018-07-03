function foo(){
    var header=document.getElementById("department");
    var inputname=document.getElementById("youname").value;
    var inputsname=document.getElementById("yousname").value;
    var youselect=document.getElementById("youspec").value;
    var youkurs;
    for(i=4;i<=7;i++){
        if(document.forms[0].elements[i].checked){
            youkurs=i-3;
        }
    }
    var subject=new Array;
    var j=0;
    for(i=1;i<=5;i++){
        if(document.getElementById("checkbox"+i).checked){
            subject[j]=document.getElementById("checkbox"+i).value;
            j++;
        }
    }
    document.write("<h1 style='text-align:center;'>"+header.innerHTML+"</h1>" +"\t<p style='text-align:center;font-size:20px;'> Студент "+ inputname+" "+inputsname+" специальности "+youselect+" "+youkurs+" курса , должен сдавать следующие предметы:</p>");
    document.write("<ul style='margin-left:25%;text-align:left;'>")
    for(i=0;i<subject.length;i++){
        document.write("<li>"+subject[i]+"</li>");
    }
    document.write("</ul>");
}
function fun(){
    var subject=new Array;
    var j=0;
    for(i=1;i<=5;i++){
        if(document.getElementById("checkbox"+i).checked){
        subject[j]=document.getElementById("checkbox"+i).value;
            j++;
        }
    }
    for(i=0;i<subject.length;i++){
        document.write("<li>"+subject[i]+"</li>");
    }
}





function foo1(){
    var inputtxt=document.getElementById("input1").value;
    alert(inputtxt);
    var select=document.getElementById("select1").value;
    alert(select);
    var radio;
    for(i=2;i<=5;i++){
        if(document.forms[0].elements[i].checked){
            radio=i;
        }
    }
    alert(radio);
}