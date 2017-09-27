function drawShape() {

  var mContent = document.getElementById('mContent');
  mContent.innerHTML = '' ;
  for (let i=1; i<=10; i++) {
    var elmP = document.createElement("p");
    //console.log(elmP);
    elmP.innerHTML = i ;
    elmP.onclick = function () {
      alert ("Selectted: #" +i);
    }
    mContent.appendChild(elmP);
  }
}

function clearShape() {
  var mContent = document.getElementById('mContent');
  mContent.innerHTML = '';
}
