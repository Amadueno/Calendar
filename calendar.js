// this grabs the whole document and makes it ready for Jquery script

$(document).ready(function () {
    // this is adding a click function for the saveBtn, also put variables and localstorage within the click function
    $('.saveBtn').click(function () {
        let value = $(this).siblings(".description").val()
        console.log(value)
        let time = $(this).parents().attr("id")
        console.log(time)

        localStorage.setItem(time, value)







    })

    //  create this to format the time into hours

    let day = moment().format('h');
    // this keeps what is written within the planner on the page even it is refreshed. 


    $("hour-9 .description").val(localStorage.getItem("9"))
    $("#hour-10 .description").val(localStorage.getItem("10"))
    $("#hour-11 .description").val(localStorage.getItem("11"))
    $("#hour-12 .description").val(localStorage.getItem("12"))
    $("#hour-13 .description").val(localStorage.getItem("13"))
    $("#hour-14 .description").val(localStorage.getItem("14"))
    $("#hour-15.description").val(localStorage.getItem("15"))
    $("#hour-16 .description").val(localStorage.getItem("16"))
    $("#hour-17.description").val(localStorage.getItem("17"))
//   this changes the format of hours into a number as opposed to a string
    let currentHour = parseInt(moment().format("H"))
//   this is changing the colors within the calendar for past, present, and future. 
    $(".time-block").each(function () {
        let timeBlock = parseInt($(this).attr("id"))
        if (timeBlock === currentHour) {
            $(this).addClass("present")
        } else if (timeBlock > currentHour) {
            $(this).addClass("future")
        } else {
            $(this).addClass("past")
        }

    })







})
