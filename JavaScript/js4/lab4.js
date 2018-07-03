function Gruppa(numb,spec,count,kurs){
    this.numb=numb;
    this.spec=spec;
    this.count=count;
    this.kurs=kurs;
    
    this.add_stud=function add_stud(k) {
        this.count+=k;
        alert('В группу ' + this.numb + '\nдобавили '+k+' студента(ов)');
    }
    
    this.sub_stud=function sub_stud(k) {
        this.count-=k;
        alert('Из группы ' + this.numb + '\nисключили '+k+' студентов(а)');
    }
}

function evg(age,name,grup){
    this.age=age;
    this.name=name;
    this.grup=grup;
    
    this.show=function show(){
        alert("Имя" + name + "возраст "+age+" группа" +grup);
    }
}

var st=new evg(20,"Евгений",7);
st.show;
function foo1(){
    var gr1 = new Gruppa(1, "ИСиТ", 28, 1);
    gr1.add_stud(5);

    var gr2 = new Gruppa(5, "ПОиТ", 29, 1);
    gr2.sub_stud(1);

    var gr3 = new Gruppa(7, "ПОиБМС", 31, 1);
    gr3.add_stud(3);

    var gr4 = new Gruppa(10, "ДЭиВИ", 25, 1);
    gr4.sub_stud(10);
    
    alert("В первой группе" + "("+(gr1.spec)+") :" +(gr1.count) + " студент(ов)");
    alert("Во второй группе" + "("+(gr2.spec)+") :"+(gr2.count) + " студент(ов)");
    alert("В третьей группе" + "("+(gr3.spec)+") :"+(gr3.count) + " студент(ов)");
    alert("В четвертой группе " + "("+(gr4.spec)+") :"+(gr4.count) + " студент(ов)");
}

function student(Name,SecondName,Physics,Mat,Info){
    this.Name=Name;
    this.SecondName=SecondName;
    this.Physics=Physics;
    this.Mat=Mat;
    this.Info=Info;
    
    this.showSumm=function show(){
        var summ=(parseFloat((this.Physics+this.Mat+this.Info)/3)).toFixed(1);
        alert("Студент " + (this.SecondName)+(this.Name)+ " имеет средний балл равный = "+ summ);
    }
    
    this.ShowAll=function ShowAll(){
        alert("Студент " + (this.SecondName)+(this.Name)+" , "+(this.kurs)+" курса\nимеет следующие баллы по следующим предметам : \n"+ "Физика - "+this.Physics + "  Матиматика - "+this.Mat+"  Информатика - "+this.Info);
    }
}

function foo2(){
    var s1=new student("Василий ","Вакуленко ",4,5,3);
    var s2=new student("Юрий ","Чехов ",8,7,8);
    var s3=new student("Петр ","Гланц ",10,9,10);
    
    s1.showSumm();
    s2.showSumm();
    s3.showSumm();
    
    student.prototype.kurs=this.kurs;
    s1.kurs=3;
    s2.kurs=4;
    s3.kurs=2;
    
    

    
    s1.ShowAll();
    s2.ShowAll();
    s3.ShowAll();
    
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////

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
    
//    alert("Исходный массив : " + arr + " , его длина - " + arr.length);
    //alert("Массив с методами Array (один метод добавлен в начало массива) : " + Arr + " , его длина - " + Arr.length);
  //  alert("Массив с методами Math (один метод добавлен в конец массива) : " + math + " , его длина - " + math.length);

    var str="Кот Илья Владимирович";
    var s1=str.toUpperCase();
    var s2=str.toLowerCase();
    var s4="";
    
   // alert("Длина строки : "+str.length);
    
    //alert("Строка с верхним регистром + нижний регистр\n" + s1.concat(s2));
    
    //alert("ФИО : " + (s4=str[0]+str[4]+str[9]));

function foo3(){
    alert("Исходный массив : " + arr + " , его длина - " + arr.length);
    delete arr[2];
    alert("массив : " + arr + " , его длина - "+arr.length);
}

function foo4(){
    alert(2 in arr);
}

function foo5(){
    var s1=new student("Василий ","Вакуленко ",4,5,3);
    alert('Name' in s1);
}

function foo6(){
    alert(arr instanceof Array);
    alert(student instanceof Object);
    alert(s4 instanceof String);
}

function foo7(){
    var s1=new student("Василий ","Вакуленко ",4,5,3);
    var gr3 = new Gruppa(7, "ПОиБМС", 31, 1);
    function fee(){
        return 5;
    }
    
    alert(typeof fee());
    alert(typeof s1);
    alert(typeof str);
    alert(typeof k);
    alert(typeof s1.Mat);
    alert(typeof gr2.numb);
}