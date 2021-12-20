$("#currentDay").text(moment().format('dddd MMMM Do YYYY'))

let toDoEvents = [];

let saveEvents = function() {
    localStorage.setItem("Events", JSON.stringify(toDoEvents))
}

$(".saveBtn").on("click", function() {
    let takeSiblingEl = $(this).siblings(".to-do-content")
    let taskText = takeSiblingEl.val();
    let hours = this.getAttribute('id')
    console.log(hours)

    toDoEvents.push({
        hours: hours,
        text: taskText
    });
    saveEvents();
}
)

let loadEvents = function() {
    toDoEvents = JSON.parse(localStorage.getItem("Events"))
    if(!toDoEvents) {
        toDoEvents = []
    }
    for (i=0; i<toDoEvents.length; i++) {
        let selected = $("."+toDoEvents[i].hours)
        selected.text(toDoEvents[i].text)

        // if (toDoEvents[i].text === "") {
        //     toDoEvents.splice(i,1)
        // toDoEvents=toDoEvents
        // }
    }
}
let refreshTime = function(){

let currentTime = moment().format('h')

for (i=0; i<currentTime; i++) {
    pastDueSelector = $("#"+i)
    pastDueSelector.addClass("past")
}

$("#"+currentTime).addClass("present")

for (i=21; i>currentTime; i--) {
    upcomingSelector = $("#"+i)
    upcomingSelector.addClass("future")
}
}

setInterval(function () {
    $(".time-block .to-do-content").each(refreshTime());
  }, (1000*60)*30);

refreshTime()
loadEvents()
