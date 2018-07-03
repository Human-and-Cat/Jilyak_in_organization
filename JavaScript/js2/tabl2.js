function foo2() {
    var s, l;
    var x = parseFloat(prompt("x=", 0.3));
    var y = parseFloat(prompt("y=", 3));
    var i = x;
    var w = 0.3;
    
    do {
        document.write("<tr><th>" + ((Math.round(i * 100)) / 100) + "</th>");
        
        s = (Math.PI) * Math.pow(i, 2);
        l = 2 * (Math.PI) * i;
        j = 0;
        
        do {
            document.write("<td>" + ((Math.round(s * 100)) / 100) + "</td>");
            j++;
        } while (j == 0);
        
        do {
            document.write("<td>" + ((Math.round(l * 100)) / 100) + "</td>");
            j++;
        } while (j == 0);
        
        document.write("</tr>");
        i += w;
        
    } while (i <= y);
}
