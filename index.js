const pointElement1 = document.getElementById("point1")
const pointElement2 = document.getElementById("point2")
const pointElement3 = document.getElementById("point3")
const pointElement4 = document.getElementById("point4")
const pointElement5 = document.getElementById("point5")
const pointElement6 = document.getElementById("point6")
const pointElement7 = document.getElementById("point7")
const pointElement8 = document.getElementById("point8")
const pointElement9 = document.getElementById("point9")
const pointElement10 = document.getElementById("point10")
const butfeedback = document.getElementById("but_send")

const inputElement = document.getElementById("inp")
const feedbackList = JSON.parse(localStorage.getItem("listFeedback")) || []
let pointnum = 0
// let listFeedback = [
//     {
//         point: 10,
//         writefeedback: "10 đỉm"
//     }
// ]
//     localStorage.setItem("listFeedback",JSON.stringify(listFeedback))

function renderFeedback(){
    let element = "";
        feedbackList.forEach((item,index) => {
        element +=
        `
        <div class="edit_eva">
                    <div class="point_choice">${item.point}</div>
                    <div class="edit">
                        <div class="fix" onclick="editFeedback(${index})"><ion-icon name="create-outline"></ion-icon></div>
                        <div class="del" onclick="deleteFeedback(${index})">x</div>
                    </div>
                </div>
                <div class="inputValue">${item.writefeedback}</div>
        `
    })
    document.getElementById("evaluate").innerHTML = element;
}
renderFeedback();

pointElement1.addEventListener("click",function(){
    pointnum = 1;
})
pointElement2.addEventListener("click",function(){
    pointnum = 2;
})
pointElement3.addEventListener("click",function(){
    pointnum = 3;
})
pointElement4.addEventListener("click",function(){
    pointnum = 4;
})
pointElement5.addEventListener("click",function(){
    pointnum = 5;
})
pointElement6.addEventListener("click",function(){
    pointnum = 6;
})
pointElement7.addEventListener("click",function(){
    pointnum = 7;
})
pointElement8.addEventListener("click",function(){
    pointnum = 8;
})
pointElement9.addEventListener("click",function(){
    pointnum = 9;
})
pointElement10.addEventListener("click",function(){
    pointnum = 10;
})

butfeedback.addEventListener("click",function(){ 
    if(pointnum > 0 && inputElement.value){
        const feedback = {
            point: pointnum,
            writefeedback: inputElement.value
        }
        feedbackList.push(feedback);
        localStorage.setItem("listFeedback",JSON.stringify(feedbackList));
        renderFeedback();
        
    }
});

function deleteFeedback(index){
    feedbackList.splice(index, 1);
    localStorage.setItem("listFeedback",JSON.stringify(feedbackList));
    renderFeedback();
}

function editFeedback(index){
    feedbackList[index].point = pointnum  
    feedbackList[index].writefeedback = inputElement.value 
    renderFeedback();
}

