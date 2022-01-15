// const , let, var the type of variables
// const a, b, 
// const PI = Math.PI

// console.log(PI);

// let existance = Boolean(0)
// let text  = "1213"
// console.log(Number(text));
// console.log(Number(existance));

// function oddnumber(number){
        
//     if(number%2==0){
//         alert("jup san")
//     }else{
//         alert("taq san")
//     }
// }

// // oddnumber(545)



// function add(num1, num2){
//     if(num1+num2<100){
//         return true
//     }
// }

// // add(34, 56)


// function farmer(chickens, cows, pigs){
//     let summoflegs = chickens*2+cows*4+pigs*4
//     return summoflegs
// }


// console.log(farmer(24, 45, 56));



// function oddnums(number){
//     let birinshi = Math.floor(number/10)
//     if(number%10==0 && birinshi%2 != 0){
//         alert("10ga bolinedi")
//     }
// }

// oddnums(70)







// function _pd(num){
//     let bir = Math.floor(num/1000)
//     let eki = Math.floor(num/100)%10
//     let ush = Math.floor(num%10/10)
//     let tort = num%10
//     if((bir+eki+ush+tort)%3==0){
//         alert("duris")
//     }
// }


// _pd(2354)





function Switcher(){
    let who = Math.floor(Math.random()*7)
    switch (who) {
        case 1:
            return "Nurdawlet"
        case 2:
            return "Nursultan"
        case 3:
            return "Tumaris"
        case 4:
            return "Berdax"
        case 5:
            return "Ulmeken"                            
        case 6:
            return "Bekzad"    
        case 0:
            return "Samandar"                
        default:
            break;
    }
}

// console.log(Switcher())

// function _randomize(a, b){
//     return Math.random()*(b-a)+a
// }




// function _birinshi(){
//     alert("ok")
// }

// function _boom(){
//     setInterval(()=>{
//         let time = new Date()
//         if(time.getHours()==16 && time.getMinutes()==58 ){
//             _birinshi()
//         }
//     }, 1000)
// }

// _boom()














// const, var, let -> type of variable
// let a=1,b=2,c=3 a,b,c-> variable 

// prompt()
// Number()
// new Date()
// Boolean()

// alert(), console.log()
// Math 

// setinterval()

// function(){}

// if(){}































// let time = new Date().getSeconds()

// function santa(){
    
//     setInterval(()=>{
        
//         console.log(time);
//     }, 1000)
// }



// santa()












// let num = prompt()
// console.log(num+"34");


// function _textlen(text1, text2){
//     if(text1.length>text2.length){
//         return true
//     }else{
//         return false
//     }
// }


// console.log(_textlen("text", "te"));



// function KelvintoCelcius( K ){
//     const f = 273.15 
//     let celcius = K - f
//     return celcius
// }


// console.log(KelvintoCelcius(20));


// function exchange(num, type){
//     if(type=="kelvin"){
//         return num-273
//     }
//     else if(type=="celcius"){
//         return num + 273
//     }
// }




// console.log(exchange(23, "celcius"));



// function valutaexchangerate(amount,type){
//     if(type=="USD"){
//         return amount*10800
//     }else if(type == 'UZS'){
//         return amount/10800
//     }else{
    
//     }
// }

// console.log(valutaexchangerate(1000, "UZS"));





// let today = new Date()
// let day = today.getDay()


// switch(day){
//     case 1: console.log("Monday"); break;
//     case 2: console.log("2kinshi kun"); break;
//     case 3: console.log("3shi kun");break
//     case 4: console.log("4nshi kun");break
//     case 5: console.log("5shi kun");break
//     case 6: console.log("6tinshi kun"); break
//     case 0: console.log("7nshi kun"); break
// }


// function _number( num ){
//     let birinshi = Math.floor(num/10)
//     let ekinshi = (num%10)
//     let text = ""

//     switch(birinshi){
//         case 1: text=text+"on"; break;
//         case 2: text=text+"jigirma"; break;
//         case 3: text=text+"otiz"; break;
//         case 4: text=text+"qiriq"; break;
//         case 5: text=text+"eliw"; break;
//         case 6: text=text+"alpis"; break;
//         case 7: text=text+"jetpis"; break;
//         case 8: text=text+"seksen"; break;
//         case 9: text=text+"toqsan"; break;
//         case 0: text=text+""; break;
//     }

//     switch(ekinshi){
//         case 1: text=text+" bir"; break;
//         case 2: text=text+" eki"; break;
//         case 3: text=text+" ush"; break;
//         case 4: text=text+" tort"; break;
//         case 5: text=text+" bes"; break;
//         case 6: text=text+" alti"; break;
//         case 7: text=text+" jeti"; break;
//         case 8: text=text+" segiz"; break;
//         case 9: text=text+"togiz"; break;
//         case 0: text=text+""; break;
//     }
//     return text
// }

// console.log(_number(92));



// function _valute(amount, type){
//     switch (type) {
//         case "USD": return amount/10800
//         case "UZS": return amount*10800 
//         default: return "Onday valyuta joq"        
//     }
// }

// console.log(_valute(12333, "UZS"));



// function _random(a, b){
//     return Math.floor(Math.random()*(b-a)+a)
// }

// console.log(_random(213, 346));

// function _randomy(a, b, c, d){
    
// }

// function _Success(success){
//     console.log(success);
// }
// function _Error(error){
//     console.log(error);
// }

// function Geolocation(){
//     if(navigator.geolocation){
//         let watchID = navigator.geolocation.watchPosition((s)=>{
//             console.log(s.coords.latitude);
//             console.log(s.coords.longitude);
//         }, (err)=>{
//             console.log(err);
//         }, {
//             timeout: 1000,

//             enableHighAccuracy: true
//         })

//         // navigator.geolocation.clearWatch(watchID)

//     }else{
//         return "It is impossible"
//     }

    
// }


const express  = require('express')
const path = require('path')

const app = express()

app.set('/', 'html')
app.use(express.static(path.join(__dirname, '/')))
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.get("/", (req, res)=>{
    res.render('index')
})

app.listen(3000, ()=>{
    console.log("server running");
})









































 