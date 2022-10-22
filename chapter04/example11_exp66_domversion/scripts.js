

// Question 1
const makeArticle = function (displayElement, position, name, lastName, email) {
  let p = document.getElementById(displayElement);
  let art = document.createElement("article");
  let h2 = document.createElement("h2");
  h2.appendChild( document.createTextNode('Position: ' + position) );
  let p1 = document.createElement("p");
  p1.appendChild( document.createTextNode('Name: ' + name) );
  let p2 = document.createElement("p");
  p2.appendChild( document.createTextNode('Last Name: ' + lastName ) );
  let p3 = document.createElement("p");
  p3.appendChild( document.createTextNode('Email: ' + email) );

  art.appendChild(h2);
  art.appendChild(p1);
  art.appendChild(p2);
  art.appendChild(p3);
  p.appendChild(art);
}

function getvalue(id) {
  return document.getElementById(id).value;
}

function clearDisplay(displayElement){
  let p = document.getElementById(displayElement);
  p.removeChild(p.firstElementChild);
}

