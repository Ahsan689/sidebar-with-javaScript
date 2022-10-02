const toggleBtn = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");

var menuIsOpen;

window.addEventListener("click",function(event){
  // console.log(event.target,"target");
  console.log(event.target);
  console.log(sidebar);

  if(event.target == toggleBtn){
    // console.log((sidebar.classList.contains("show-sidebar")));
    sidebar.classList.remove("show-sidebar");
    
  }
  
})

toggleBtn.addEventListener("click", function () {
  // if (sidebar.classList.contains("show-sidebar")) {
  //   sidebar.classList.remove("show-sidebar");
  // } else {
  //   sidebar.classList.add("show-sidebar");
  // }
  sidebar.classList.toggle("show-sidebar");
});


closeBtn.addEventListener("click", function () {
  menuIsOpen = false
  sidebar.classList.remove("show-sidebar");
});




// window.document.addEventListener("onmousedown",function(){
//   if(sidebar.classList.contains("show-sidebar")){
//     sidebar.classList.remove("show-sidebar");
//   }

// })
// console.log(window,"sideeee");
