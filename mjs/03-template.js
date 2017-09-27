let elm = document.getElementById('mContent');
elm.style.color = "#0174DF";

/*
let name = "TypeScipt" ;
let price = 25;

elm.innerHTML = `<div>Course name: <strong>${name}</strong> ,
                    price: <strong style="color:red">${price} USD</strong>
                </div>`
*/

let todo = {
  id: 269,
  name: "Coding" ,
  status : false
};


elm.innerHTML = `<div id="to-do-${todo.id}">
                  <i class="${todo.status== true ? "hidden" : ""} glyphicon glyphicon-ok"></i>
                  <span>${todo.name}</span>
              </div>`;
