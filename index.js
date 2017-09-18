function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.querySelector('#nested .target');
}

function deepestChild(){
  return document.querySelector('#grand-node div div div div');
}

function increaseRankBy(n){
  const rankedLists = document.querySelectorAll('.ranked-list')
  const firstList = rankedLists[0];
  const secondList = rankedLists[1];

  let children = firstList.children
  let start = 1

  for (let i = 0, l = children.length; i < l; i++) {
    (parseInt(children[i].innerHTML +n))
  }

  
  while (current) {
    if (criteriaFn(current)) {
      return current
    }
    if (Array.isArray(current)) {
      for (let i = 0; i < current.length; i++) {
        next.push(current[i])
      }
    }
    current = next.shift()
  }
  return null
}

/*const rankedLists = document.querySelectorAll('.ranked-list')
const firstList = rankedLists[0]
const secondList = rankedLists[1]

let children = firstList.children
let start = 1
for (let i = 0, l = children.length; i < l; i++) {
  expect(parseInt(children[i].innerHTML)).toEqual(start + i + 3)
}

children = secondList.children
start = 12

for (let i = 0, l = children.length; i < l; i++) {
  expect(parseInt(children[i].innerHTML)).toEqual(start - i + 3)
*/

