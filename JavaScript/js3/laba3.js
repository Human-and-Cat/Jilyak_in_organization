function mm() {
    var arr = new Array();

    arr[0] = parseFloat((6 * Math.pow(Math.PI, 2) + 3 * (Math.pow(Math.E, 8))).toFixed(1));
    arr[1] = parseFloat((2 * Math.cos(4) + Math.cos(12) + 8 * (Math.pow(Math.E, 3))).toFixed(1));
    arr[2] = parseFloat((3 * Math.sin(9) + Math.log10(5) + Math.sqrt(3)).toFixed(1));
    arr[3] = parseFloat((2 * Math.tan(5) + 6 * Math.PI + Math.sqrt(12)).toFixed(1));
    
    min = 0;
    max = 0;

    for (i = 0; i < (arr.length); i++) {
        if (arr[min] > arr[i]) {
            min = i;
        }
        if (arr[max] < arr[i]) {
            max = i;
        }
    }
    
    alert("Минимальный элемент массива - " + arr[min] + " под индексом - " + min);
    alert("Максимальный элемент масиива - " + arr[max] + " под индексом - " + max);
    
    var varr=new Array("gffgj","llhllh","hghg","jhkjhk","jjhjl");
   
    alert(varr[varr.length-1])
}
