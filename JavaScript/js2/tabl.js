function foo1(){
    var a=prompt("cols ",10);
    var b=prompt("rows ",10);
    
    document.write("<thead>");
    document.write("<tr><th> * </th>");
    for(i=1;i<=a;i++){
        document.write("<th>"+i+"</th>");
    }
    document.write("</thead>");
    document.write("<tbody>");
    for(i=1;i<=b;i++){
        document.write("<tr><th>"+i+"</th>");
        for(j=1;j<=a;j++){
            document.write("<td>"+(i*j)+"</td>");
        }
        document.write("</tr>");
    }
    document.write("</tbody>");    
}