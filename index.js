function getFirstSelector(selector)
{
  return document.querySelector(selector);
}

function nestedTarget()
{
  let element = document.getElementById("nested").querySelector(".target");
  return element;
}


function deepestChild(element = document.getElementById("grand-node"))
{
  if (element.children.length) {
    element = deepestChild(element.lastElementChild);
  } else {
    return element;
  }
}
