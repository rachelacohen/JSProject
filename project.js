let arr_keep_click=[];
let k=0;//משתנה שמבטא את המיקומים במערך arr_keep_click
let level_count=0;//משתנה שבודק איזה מס מנה השחקן נמצא
let points=0;
let heighttime=8;//משתנה בשביל ה-interval
let index="1";
let my_timer;
let newLocal = {
    namef:"",
    namel: "",
    arr:[0,0,0]   
};


const players_arr=[];   
  //שליפת ה JSON לתוך מערך
  let str=localStorage.getItem("players_arr");
  let arr_json=JSON.parse(str);
  if(arr_json!=null){
       for (let i=0;i<arr_json.length;i++)
  players_arr.push(arr_json[i]);

  }

//מערך מוצרים
const products_arr=[
    food1=
    {
    imgsrc :"../images/chickens-in-dli.png",
    name:"chicken_in_dli"
    },
    food2=
    {
    imgsrc :"../images/chips2.png",
    name:"chips"
    },
    food3=
    {
    imgsrc :"../images/drink.png",
    name:"drink"
    },
    food4=
    {
    imgsrc :"../images/yellow-cheese1.png",
    name:"yellow_cheese"
    },
    food5=
    {
    imgsrc :"../images/tamato.png",
    name:"tomato"
    },
    food6=
    {
    imgsrc :"../images/chasa.png",
    name:"chasa"
    },
    food7=
    {
    imgsrc :"../images/roll.png",
    name:"roll"
    },
    food8=
    {
    imgsrc :"../images/hamburger.png",
    name:"hamburger"
    },
    food9=
    {
    imgsrc :"../images/long-roll.png",
    name:"long_roll"
    },
    food10=
    {
    imgsrc :"../images/naknik.png",
    name:"naknik"
    },
    food11=
    {
    imgsrc :"../images/chardal.png",
    name:"chardal"
    },
    food12=
    {
    imgsrc :"../images/onion.png",
    name:"onion"
    },
    food13=
    {
    imgsrc :"../images/zeitim.png",
    name:"zeitim"
    },
    food14=
    {
    imgsrc :"../images/meshulash.png",
    name:"meshulash"
    },
    food15=
    {
    imgsrc :"../images/pita.png",
    name:"pita"
    },
    food16=
    {
    imgsrc :"../images/pastrama.png",
    name:"pastrama"
    },
    food17=
    {
    imgsrc :"../images/pepper.png",
    name:"pepper"
    },
    food18=
    {
    imgsrc :"../images/tomato-cherry.png",
    name:"cherry"
    },
    food19=
    {
    imgsrc :"../images/falafel.png",
    name:"falafel"
    },
    food20=
    {
    imgsrc :"../images/cucumber.png",
    name:"cucumber"
    },
    food21=
    {
    imgsrc :"../images/chumus.png",
    name:"chumus"
    },
    food22=
    {
    imgsrc :"../images/chicken.png",
    name:"chicken"
    },
    food23=
    {
    imgsrc :"../images/noodles.png",
    name:"noodles"
    },
    food24=
    {
    imgsrc :"../images/apple.png",
    name:"apple"
    },
    food25=
    {
    imgsrc :"../images/ketchup2.png",
    name:"ketchup"
    },
    food26=
    {
    imgsrc :"../images/milkshake.png",
    name:"milkshake"
    }
    ];
// מערך מנות לכל מנה יש שם תמונה רמה ומערך מוצרים
    const meal_arr=[
        meal1={
            name: "magash",
            imgsrc: "../images/level2-4.png",
            products:[food15,food6,food19,food18,food21],
            level:1,
            person:"../images/p1.png"
        },
        
        meal2={
            name: "falafel",
            imgsrc: "../images/level1=5.png",
            products:[food19,food20,food6,food5,food15],
            level:1,
            person:"../images/p2.png"
        },
        
        meal3={
            name: "karich2",
            imgsrc: "../images/karich2.png",
            products:[food4,food5,food6,food7,food8],
            level:1,
            person:"../images/p3.png"
        },
        
        meal4={
            name: "lachmania-naknik",
            imgsrc: "../images/lachmania-im-naknik.png",
            products:[food9,food6,food10,food11],
            level:1,
            person:"../images/p4.png"
        },
        
        meal5={
            name: "with-tomato",
            imgsrc: "../images/hamburger-tomato-2.png",
            products:[food2,food4,food5,food6,food7,food8],
            level:2,
            person:"../images/p5.png"
        },
        
        meal6={
            name: "hamburger2",
            imgsrc: "../images/hamburger2.png",
            products:[food2,food5,food6,food8,food12,food25,food7],
            level:2,
            person:"../images/p6.png"
        },
        
        meal7={
            name: "karich1",
            imgsrc: "../images/karich1.png",
            products:[food12,food4,food5,food6,food8,food13,food14],
            level:2,
            person:"../images/p7.png"
        },
        
        meal8={
            name: "karich4",
            imgsrc: "../images/karich4.png",
            products:[food2,food4,food5,food6,food7,food8],
            level:2,
            person:"../images/p8.png"
        },
        
        meal9={
            name: "with-milkshake",
            imgsrc: "../images/milkshake3.png",
            products:[food2,food4,food5,food6,food7,food8,food12,food26],
            level:3,
            person:"../images/p9.png"
        },
        
        meal10={
            name: "hamburger3",
            imgsrc: "../images/hamburger3.png",
            products:[food2,food3,food5,food6,food8,food7],
            level:3,
            person:"../images/p10.png"
        },
        
        meal11={
            name: "big_meal",
            imgsrc: "../images/level3-2.png",
            products:[food2,food3,food4,food6,food7, food8, food5,food22,food23,food24],
            level:3,
            person:"../images/p11.png"
        },
        
        meal12={
            name: "hamburger_big",
            imgsrc: "../images/level3-5.png",
            products:[food1,food2,food3,food4,food5,food6,food7,food8],
            level:3,
            person:"../images/p12.png"
        }
        ];

        //פונקציה שמופעלת בעת טעינת עמוד הבית
  function go(){
    //הוספת כפתורים לרישום או כניסה
document.querySelector("#toform").innerHTML=`<button id="reg">הרשמה</button><button id="enter">כניסה</button>`
document.querySelector("#reg").onclick=regist;
document.querySelector("#enter").onclick=enterr;

    document.querySelector("#inst").style.display="none";
    document.querySelector("#toform").style.display="flex";
    document.querySelector("#start").onclick=function(){                
    location.href="html/game.html";
    }
    document.querySelector("#instruction").onclick=function(){
        document.querySelector("#toform").style.display="none";
         document.querySelector("#inst").style.display="flex"; 
    }  
    document.querySelector("#close").onclick=function(){
    document.querySelector("#inst").style.display="none";
    document.querySelector("#toform").style.display="flex";
  }
  //בלחיצה על כפתור הצגת שיאים הצגה של 3 השיאים הגבוהים ביותר
    document.querySelector("#record").onclick=function(){
    document.querySelector("#my_record").style.display="inline-flex"
    document.querySelector("#my_record").innerHTML="רשימת שיאים:"+" </br>"
    for(let i=0;i<players_arr.length;i++)
    { 
      if(players_arr[i].namef==newLocal.namef&&players_arr[i].namel==newLocal.namel)
        {  //מיון המערך
                players_arr[i].arr.sort(function(a, b) {
                    return a-b;
                  });
                  //אם המערך ריק כלומר משחק ראשון
            if(players_arr[i].arr.length==0)
             document.querySelector("#my_record").innerHTML="אין לך שיאים עדיין התחל לשחק---"+" </br>";
            else{
            for(let j=players_arr[i].arr.length-1;j>=0&&j>players_arr[i].arr.length-1-3;j--)
            { 
              if(players_arr[i].arr[j]==null){
              document.querySelector("#my_record").innerHTML+=0
              continue;
              }
                document.querySelector("#my_record").innerHTML+=players_arr[i].arr[j]+" </br>";
            }
        }
            break;
       }
    }
}
}     
       
//הצהרה על מערך התמונות המוצגות במשחק
let arr_img=[];
//פנקציה שמופעלת בעת טעינת עמוד המשחק
function start_game()
{
heighttime=8;
    document.querySelector("#points").innerHTML="נקודות"
    points=0;//איפוס מספר הנקודות
    document.querySelector("#home").onclick=function(){
        location.href="../start.html";//אפשור העברה לדף הבית
       
        }

    document.querySelector("#table").innerHTML=`<button id="send">שלח מנה</button>      
    <button id="remove">הסר</button>`;//הוספת כפתור שלח מנה
    k=0;
    //הצגת מערך התמונות על המסך והוספת דיו לכל אחת מהתמונות
    for(let i=0;i<products_arr.length;i++)
    {
       document.querySelector("#table").innerHTML+=`<div class="divimg"><img src="${products_arr[i].imgsrc}" id="${products_arr[i].name}"class="food_table"><div/>`
      
    }
    //הגדרה שבעת לחיצה על התמונות התמונה תכנס למערך וצבע הרקע יהפך לירוק ע"י הוספת קלאסarr_keep_click 
     arr_img= document.querySelectorAll(".food_table")
    for(let i=0;i<arr_img.length;i++)
    {  
       arr_img[i].onclick=function()
       {
        arr_keep_click[k++]=this.id;
        this.classList.add("green");//class list שימוש ב
       }; 
    }

document.querySelector("#remove").onclick= remove1;
   document.querySelector("#send").onclick=compare;
    level_count=0;
     show_man();//הכנסת האיש הראשון למסך   
}

//פונקציה שמשווה בין מערך המוצרים של המנה לבין המערך arr_keep_click
function compare(){
    let flag=false;
    let flag2=true;
    for(item2 of meal_arr[level_count].products)
    {
        flag=false;
        for(item of arr_keep_click)
        {
            if(item== item2.name)
               {
                flag=true;
               }
        }
        if(flag==false)//אם יש במערך של המנה מוצר שלא נמצא במערך של השחקן 
          {
             remove1();//שליחה לפונקציה שמסירה את כל המוצרים מהמערך arr_keep_click
            flag2=false;
          }
    } 
     //בדיקה נוספת שבודקת האם במערך המוצרים של השחקן יש מוצרים שלא קיימים במערך המוצרים של המנה
    for(item of arr_keep_click)
    {
        flag=false;
        for(item2 of meal_arr[level_count].products)
        {
            if(item==item2.name)
               {
                flag=true;
               }
        }
        if(flag==false)
          {
             remove1();
            flag2=false;
          }
    }  
    if(flag2==true) //אם המערכים היו תואמים שליחה לפונקציה שממשיכה את המשחק
    up_level();
}

function up_level()
{
if(level_count<11)//בודקת האם זה האיש האחרון
{
    level_count++; 
    k=0;
    remove1();
    switch (level_count)// בודק איזה שלב ואם הוא עולה שלב יש להראות דיו שאומר על כך
    {
        case 4:
             {           
                document.querySelector("#up_level2").style.display="flex";
                clearInterval(my_timer);
            break;
             }
        case 8:
           {
            clearInterval(my_timer);
            document.querySelector("#up_level2").style.display="flex";
            break;
           }
        }

    switch (meal_arr[level_count].level)//בודק באיזה רמה נמצא השחקן ובהתאם לכך מעלה נקוד
    {
        case 1:
             {points+=100;

            break;
             }
        case 2:
           { points+= 150;
            break;
           }
        case 3:
            {points+=200;
            break  ; 
            
            }
    }
        
    if(level_count!=4&&level_count!=8)//אם אתה לא איפה שעולה שלב
    show_man();//הכנסת האיש הבא
    else
   {
     document.querySelector("#down").onclick=function(){
        //אם אתה איפה שעולה שלב אז בלחציה על המשך תסגור את הדיו ותתחיל את הטיימר
         clearInterval(my_timer);
        document.querySelector("#up_level2").style.display="none";           
        show_man();  
        }  
   }
    document.querySelector("#points").innerHTML=points;//הצגת הנקודות המעודכנות
    
}
else{//אם זה האיש האחרון השחקן סיים את המשחק
    level_count=0;
    end_game();  
}

}
//פונקציה שמעבירה לדף סיום
function end_game(){
    add_best();
  location.href="end.html";
 
}
//פונקציה שמופעלת כשנגמר לשחקן הזמן 
function game_over(){
    add_best();
   document.querySelector("#game_over").style.display="flex";//הצגת הודעה שהמשחק נגמר
    //בעת לחיצה על כפתור התחל משחק חדש מתחיל המשחק מחדש
   document.querySelector("#button_game_start").onclick=function(){
        document.querySelector("#game_over").style.display="none";
        start_game();
    };
  
}
//פונקציית המרה לסטרינג ושמירה לתמיד
// בשביל שכל שחקן ששיחק פעם יוכל להכנס למשחק ולראות את רשימת השיאים שלו
function json(){
let players_json=JSON.stringify(players_arr);
localStorage.setItem("players_arr",players_json);
}

function show_man(){
//הכנסת האיש הבא לפי ה level_count
document.querySelector("#person").innerHTML=`<div id="animation"><img
 src="${meal_arr[level_count].person}"id="psmall"> 
 <img src="${meal_arr[level_count].imgsrc}"id="small"></div>`;
heighttime=8;//הגדרה של הגובה של הדיו הפנימי
//הוספת הטיימר לדף
document.querySelector("#animation").innerHTML+=`<div id="timer">
<div id="inner"></div></div>`;
clearInterval(my_timer);//ניקוי הטיימר הקודם כדי שלא יעבדו כמה טיימרים ביחד
timer();
}
// פונקציה שמסירה את כל המוצרים מהמערך ומסירה את הקלאס של צבע הרקעarr_keep_click
function remove1(){
    for(let i=0;i<k;i++)
    {
      arr_keep_click.pop();
    }  
//שימוש ב foreach  classlist 
//הסרת הרקע הירוק מכל המוצרים
arr_img.forEach(function(item){
    item.classList.remove("green");
})
    k=0;
}
function timer(){
    heighttime=8;
    my_timer=setInterval(function(){
        heighttime-=0.5
        document.querySelector("#inner").style.height=`${heighttime}vw`;
        if(heighttime<=0)//אם נגמר הזמן שליחה לפונקציה game_over
        { 
             clearInterval(my_timer);
             heighttime=8;       
             game_over();           
        }       
    },1200)
}

//פונקציית הרשמה למשחק
function regist(){
    //הוספת טופס הרשמה לדיו
document.querySelector("#toform").innerHTML=`הרשמה<form id="form">
<input type="text" placeholder="שם" id="name" required="text">
<input type="text" placeholder="משפחה" id="family" required="text">
<input type="email" placeholder="מייל לשליחת עדכונים"  id="email">
<button id="submit2">שליחה</button>
</form>`
//בבדיקה בעת שליחת הטופס אם השחקן לא קיים כבר והכנסתו למערך השחקנים
    document.querySelector("#form").onsubmit=function(e){
         e.preventDefault();
        let flag2=true;
        if(players_arr!=null)
        {for(let i=1;i<players_arr.length;i++)
    if(players_arr[i].namef==document.querySelector("#name").value
    &&players_arr[i].namel==document.querySelector("#family").value){
        newLocal.arr=players_arr[i].arr;
        flag2=false;             
    }
}
//אם השחקן כבר קיים תחילת משחק
    if(flag2==false){
        
        
        newLocal.namef=document.querySelector("#name").value,
        newLocal.namel=document.querySelector("#family").value;
        let strlocal=JSON.stringify(newLocal);
      sessionStorage.setItem("local",strlocal);
         document.querySelector("#toform").style.display="none";
         document.querySelector("#record").style.display="block";
       alert("הנך רשום  במערכת");
    }
    
    else{
        newLocal.namef=document.querySelector("#name").value,
        newLocal.namel=document.querySelector("#family").value;
        let strlocal=JSON.stringify(newLocal);
      sessionStorage.setItem("local",strlocal);
        players_arr.push({namef:newLocal.namef, namel:newLocal.namel,arr:newLocal.arr});
        document.querySelector("#record").style.display="block";
        alert("נרשמת בהצלחה");
        json();
        document.querySelector("#toform").style.display="none";

    }
    } 
}

//פונקציית כניסה למשחק
function enterr(){
    //הוספת טופס כניסה
document.querySelector("#toform").innerHTML=`כניסה<form id="forme">
<input type="text" placeholder="שם" id="namee" required="text">
<input type="text" placeholder="משפחה" id="fname" required="text">
<button id="submit1">שליחה</button>
</form>`
// בדיקה בעת שליחת הטופס האם השחקן באמת קיים והכנסתו למשחק
document.querySelector("#forme").onsubmit=function(e){
    e.preventDefault();
    let flag=true;
    for(let i=0;i<players_arr.length;i++)
if(players_arr[i].namef==document.querySelector("#namee").value
&&players_arr[i].namel==document.querySelector("#fname").value){
    //שמירת פרטי השחקן בשביל רשימת שיאים
      newLocal.namef=document.querySelector("#namee").value,
      newLocal.namel=document.querySelector("#fname").value;
      newLocal.arr=players_arr[i].arr;
      //שמירת פרטי השחקן ב JSON
      let strlocal=JSON.stringify(newLocal);
      //שמירת פרטי השחקן ב כדי שיוכר גם בדף המשחקsession storage 
      sessionStorage.setItem("local",strlocal);
      //הורדת דיו ההרשמה/כניסה
      document.querySelector("#toform").style.display="none";
      //הצגת כפתור השיאים
      document.querySelector("#record").style.display="block";
    alert("נכנסת בהצלחה");
   
    flag=false;
}
//אם השחקן לא קיים העברה להרשמה
if(flag==true)
{
    alert("אינך קיים במערכת");
    regist();
}
}
}
let count=0;
//פונקציית הוספת שיא לרשימת השיאים של השחקן
function add_best(){
    flag3=true;
    //המרת המשתנה מ JSON ל אובייקט
    let localnew=sessionStorage.getItem("local")
        newLocal=JSON.parse(localnew);
        //חיפוש השחקן הנוכחי במערך השחקנים
    for(let i=0;i<players_arr.length;i++)
    { 
      if(players_arr[i].namef==newLocal.namef&&players_arr[i].namel==newLocal.namel)
        {             //הכנסת השיא לרשימת השיאים של השחקן
                    players_arr[i].arr.push(points);
           
                      //מיון מערך השיאים
                      players_arr[i].arr.sort(function(a, b) {
                        return a-b;
                      });
                               //מחיקת כפולים במערך                  
                      for(let j=players_arr[i].arr.length-1;j>=0;j--){
                        for(let l=players_arr[i].arr.length-1;l>j;l--){
                            if(players_arr[i].arr[j]==players_arr[i].arr[l])
                                delete (players_arr[i].arr[j]);
                        }
                      }
                      //מחיקת כל השיאים חוץ משלושת האחרונים הגבוהים ביותר
                      for(let j=0;j<players_arr[i].arr.length-4;j++){
                        players_arr[i].arr.shift();
                      }
                     //שמירה בlocal storage 
                 json();            
            break;
        }   
   }
}
//בלחיצה על כפתור הצגת שיאים הצגה של 3 השיאים הגבוהים ביותר
document.querySelector("#record").onclick=function(){
    document.querySelector("#my_record").style.display="inline-flex"
    document.querySelector("#my_record").innerHTML="רשימת שיאים:"+" </br>"
    for(let i=0;i<players_arr.length;i++)
    { 
      if(players_arr[i].namef==newLocal.namef&&players_arr[i].namel==newLocal.namel)
        {    players_arr[i].arr.sort(function(a, b) {
                    return a-b;
                  });
             if(players_arr[i].arr[players_arr[i].arr.length-1]==0||players_arr[i].arr[players_arr[i].arr.length-1]==null)
             document.querySelector("#my_record").innerHTML="אין לך שיאים עדיין התחל לשחק---"+" </br>";
             else{
            for(let j=players_arr[i].arr.length-1;j>0&&j>players_arr[i].arr.length-1-3;j--)
            { 
              
                document.querySelector("#my_record").innerHTML+=players_arr[i].arr[j]+" </br>";
            }
        }
            break;
       }

    }
}

