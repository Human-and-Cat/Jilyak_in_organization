function foo(){
    var arr=["pow","pop","push","shift","round","floor","slice","sort"];
    var Arr=[];
    var math=[];
    var k=0,l=0;
    
    for(var i=0;i<(arr.length);i++){
        if((arr[i]=="pow") || (arr[i]=="round") || (arr[i]=="floor")){
            math[k]=arr[i];
            k++;
        }
        else if((arr[i]=="pop") || (arr[i]=="push") || (arr[i]=="slice") || (arr[i]=="sort")){
            Arr[l]=arr[i];
            l++;
        }
        
    }
    
    Arr.unshift("concat");
    math.push("random");
    
    alert("Исходный массив : " + arr + " , его длина - " + arr.length);
    alert("Массив с методами Array (один метод добавлен в начало массива) : " + Arr + " , его длина - " + Arr.length);
    alert("Массив с методами Math (один метод добавлен в конец массива) : " + math + " , его длина - " + math.length);
}