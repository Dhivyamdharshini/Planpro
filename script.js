var popupoverlay=document.querySelector(".popup-overlay")
var popupbox=document.querySelector(".popup-box")
var addpopupbutton=document.getElementById("add-popup-button")

addpopupbutton.addEventListener("click",function(){
    popupoverlay.style.display="block"
     popupbox.style.display="block"
})

var cancelpopup=document.getElementById("cancel-popup");
cancelpopup.addEventListener("click",function(event){
    event.preventDefault()
    popupoverlay.style.display="none"
     popupbox.style.display="none"
})


//container,add,course-name-input,date-input,description-input

var container=document.querySelector(".container")
var addbutton=document.getElementById("add")
var coursename=document.getElementById("course-name-input")
var dateinput=document.getElementById("date-input")
var description=document.getElementById("description-input")

addbutton.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","plan-container")
    div.innerHTML=`<h2>${coursename.value}</h2><br>
    <h5>${dateinput.value}</h5><br>
    <p>${description.value}</p>
    <button onclick="deletebutton(event)">Delete</button>`
    container.append(div)
    popupoverlay.style.display="none"
     popupbox.style.display="none"
})

function deletebutton(event){
    event.target.parentElement.remove()
}

function logout(){
    window.location.href = 'login.html';
}
