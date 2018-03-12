var skills = document.getElementsByClassName('skills-content')
var skillBars = document.getElementsByClassName('progress-bar')

for (var i = 0; i < skills.length; i++) {
    skills[i].addEventListener("mouseover", setProgressBar)
}

for (var i = 0; i < skills.length; i++) {
    skills[i].addEventListener("mouseleave", resetProgressBars)
}

function setProgressBar(e) {
    var id = e.target.getAttribute('id')
    var progressBarDiv = document.getElementById(`${id}-bar`)
    // var barDiv = document.querySelector(`#${id} > .skills-bar`)
    if (progressBarDiv) {
        var barMaxValue = progressBarDiv.getAttribute('aria-valuemax')
        progressBarDiv.setAttribute("style", `width: ${barMaxValue}%`)
    }
}

function resetProgressBars() {
    for (var i = 0; i < skillBars.length; i++) {
        skillBars[i].setAttribute("style", `width: 0%`)
    }
}