

// Question 1
const makeArticle = function (displayElement, position, name, lastName, email) {
  let s = '<article><h2>Position: ' + position + '</h2>'
          + '<p>Name: ' + name + '</p>'
          + '<p>Last Name: ' + lastName + '</p>'
          + '<p>Email: ' + email + '</p>'
          + '</article>';
  document.getElementById(displayElement).innerHTML = s;
}

function getvalue(id) {
  return document.getElementById(id).value;
}

function clearDisplay(displayElement){
  document.getElementById(displayElement).innerHTML = "";
}
