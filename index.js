function getFirstSelector(selector)
{
  return document.querySelector(selector);
}

function nestedTarget()
{
  let element = document.getElementById("nested").querySelector(".target");
  return element;
}


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
  element = document.getElementById("grand-node");
  
  while(element.children.length)
  {
    element = element.lastElementChild;
  }
  return element;
}
