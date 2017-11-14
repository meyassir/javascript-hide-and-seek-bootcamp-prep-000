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
  let element = document.getElementById("grand-node");

  while(element.children.length)
  {
    element = element.lastElementChild;
  }
  return element;
}

function increaseRankBy(n)
{
  let lists = document.querySelectorAll(".ranked-list li");

  for (var i = 0; i < lists.length; i++) {
    lists[i].innerHTML = parseInt(lists[i].innerHTML) + n;
  }
}
