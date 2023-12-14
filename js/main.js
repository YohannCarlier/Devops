console.log('start');

let boxes = document.querySelectorAll('.box');

console.log(boxes);

// setInterval ( ()=>{
// console.log('set interval') } , 5000);

let array = ['Box A','Box B','Box C','Box D','Box E','Box F'];
array = array.sort((a, b) => 0.5 - Math.random());

boxes.forEach((box, key) => {
    console.log(box, key);
    box.innerHTML = array [key];



    box.addEventListener('click',(event) => {
        console.log("clique sur box",  event.target.innerHTML );
        // alert (vous avez cliquez sur ${event.target.innerHTML});
        // event.target.style.background="red";
        // event.target.style.visibility="hidden";
        event.target.style.display="none";
        setTimeout(() => {
          event.target.style.display = "block";
        }, 1000) ;


    })
})