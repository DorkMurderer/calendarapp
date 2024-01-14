let h2 = document.querySelector(".calendar-picture h2")
let h3 = document.querySelector(".calendar-picture h3") 





 console.log(moment().clone().startOf("month").format('dddd'))

var monthArr = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

let dayArr = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
]


let day31MonthArr = [
   "January",
   "March",
   "May",
   "July",
   "August",
   "October",
   "December"
]



let d = new Date()
 
let obj = getDate()
generateCalendar()

function getDate(){
    let month = d.getMonth()
    month = monthArr[month]


    let day = d.getDay()
    day = dayArr[day]

    let date = d.getDate()

    h2.innerHTML = date+", "+day
    h3.innerHTML = month
    return {m:month, dy:day, dt: date, yr:d.getFullYear()}
}

function generateCalendar(){
    let days

    if(obj.m === "February" && obj.yr % 4 !== 0){
        days = 28
    } else if (obj.m === "February" && obj.yr % 4 === 0) {
  days = 29
    } else if(day31MonthArr.includes(obj.m)){
        days = 31
    } else{
        days = 30
    }


    let localDayArr = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
    ]



    let startOfMonth = moment().clone().startOf("month").format('dddd')


    let dayIndex = localDayArr.indexOf(startOfMonth)



    for (var j = 0; j < dayIndex; j++){
        var element = document.createElement("div")
        element.classList.add = "calendar__number_empty"
        const lc = document.getElementById("lc")
        lc.appendChild(element)
    }

    for(var i = 1; i <= days; i++){
        var element = document.createElement("div")
        obj.dt === i
       ? (element.className = 'calendar__number calendar__number--current')
       : (element.className = "calendar__number")
    element.appendChild(document.createTextNode(i))
    let lc = document.getElementById("lc")
    lc.appendChild(element)
    }
}