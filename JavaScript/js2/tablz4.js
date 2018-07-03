function foo3() {
    var x = 55;
    var y = 18.45468;

    for (i = 0; i < 8; i++) {
        document.write("<tr>");
        if ((i % 2) == 0) {
            document.write("<th>" + x + "</th>");
        } else {
            document.write("<th>" + y + "</th>");
        }
        for (j = 0; j < 3; j++) {
            if (j == 0) {
                if (i == 0 || i == 1) {
                    document.write("<th>" + "toExponential" + "</th>");
                }
                else if (i == 2 || i == 3) {
                    document.write("<th>" + "toFixed" + "</th>");
                }
                else if (i == 4 || i == 5) {
                    document.write("<th>" + "toPrecision" + "</th>");
                }
                else {
                    document.write("<th>" + "toString" + "</th>");
                }
            } 
            else if (j == 1) {
                switch(i){
                    case 0:{
                        document.write("<th>" + (x.toExponential(1)) + "</th>");
                        break;
                    }
                    case 1:{
                        document.write("<th>" + (y.toExponential(2)) + "</th>");
                        break;
                    }
                    case 2:{
                        document.write("<th>" + (x.toFixed(1)) + "</th>");
                        break;
                    }
                    case 3:{
                        document.write("<th>" + (y.toFixed(3)) + "</th>");
                        break;
                    }
                    case 4:{
                        document.write("<th>" + (x.toPrecision(4)) + "</th>");
                        break;
                    }
                    case 5:{
                        document.write("<th>" + (y.toPrecision(5)) + "</th>");
                        break;
                    }
                    case 6:{
                        document.write("<th>" + (x.toString(2)) + "</th>");
                        break;
                    }
                    case 7:{
                        document.write("<th>" + (y.toString(16)) + "</th>");
                        break;
                    }
                }

            } 
            else {
                if (i == 0 || i == 1) {
                    document.write("<th>" + "Возвращает строку в экспоненциальной записи." + "</th>");
                } 
                else if (i == 2 || i == 3) {
                    document.write("<th>" + "Ворматирует число  используя запись <br>с фиксированной запятой." + "</th>");
                }
                else if (i == 4 || i == 5) {
                    document.write("<th>" + "Возвращает строку с указанной точностью." + "</th>");
                }
                else {
                    document.write("<th>" + "Возвращает строку  представляющую объект,<br>так же переводит числа в другие системы счисления" + "</th>");
                }
            }
        }
    }
    document.write("</tr>");
}
