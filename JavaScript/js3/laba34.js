function foo(){
    var lol=new Date();
    document.write("<th>"+ "Year" + "</th>");
    document.write("<th>"+ (lol.getFullYear()) + "</th>");
}

function foo2(){
    var lol=new Date();
    var x=parseInt(lol.getDay());
    
    for(var i=0;i<5;i++){
        document.write("<tr>");
        switch(i){
            case 0 :
                document.write("<th>"+ "Month" + "</th>");
                document.write("<th>"+ (lol.getMonth()+1) + "</th>");
                break;
            case 1 :
                document.write("<th>"+ "Day" + "</th>");
                switch (x) {
                    case 1:
                        document.write("<th>" + "Понедельник" + "</th>");
                        break;
                    case 2:
                        document.write("<th>" + "Вторник" + "</th>");
                        break;
                    case 3:
                        document.write("<th>" + "Среда" + "</th>");
                        break;
                    case 4:
                        document.write("<th>" + "Четверг" + "</th>");
                        break;
                    case 5:
                        document.write("<th>" + "Пятница" + "</th>");
                        break;
                    case 6:
                        document.write("<th>" + "Суббота" + "</th>");
                        break;
                    case 0:
                        document.write("<th>" + "Воскресенье" + "</th>");
                        break;
                }
                break;
            case 2 :
                document.write("<th>"+ "Hour" + "</th>");
                document.write("<th>"+ (lol.getHours()) + "</th>");
                break;
            case 3 :
                document.write("<th>"+ "Minutes" + "</th>");
                document.write("<th>"+ (lol.getMinutes()) + "</th>");
                break;
            case 4 :
                document.write("<th>"+ "Seconds" + "</th>");
                document.write("<th>"+ (lol.getSeconds()) + "</th>");
                break;
        }        
        document.write("</tr>");  
    }
    
}