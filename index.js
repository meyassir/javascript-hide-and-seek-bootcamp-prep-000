function getFirstSelector(selector)
{
  return document.querySelector(selector);
}

function nestedTarget()
{
  let element = document.getElementById("nested").querySelector(".target");
  return element;
}


function deepestChild()
{
  let element = document.getElementById("grand-node");
  return element.lastChild;
}
