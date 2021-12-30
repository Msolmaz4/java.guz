

// getElemebntById

let fName=document.getElementById('adiniz')
console.log(fName)
 // getElementByClassName

 // querySelector
 //let fNmae =documnet.qierySelwector('#adiniz') id olduguicn
  //# kullandik calls olsa . kullamilir hepsbnin cagir,ak icin All yazilir 
/*
  adiniz.value= 'kemal'

  let node =document.createElement('div')
  let text =document.createTextNode('iuyrt')
  node.appendChild(text)
  eklemeli.appendChild(node)*/
/*
  adiniz.value ='kemal'
  const val =adiniz.value
  console.log(val)



  // id vermek istoyorum bunu setAttribure
  let lobalName =document.querySelectorAll('.form-label')[0]
  lobalName.setAttribute('id','lobal-nmae')
  console.log(lobalName)

  // getattribute

  /*const classAtt = lobalName.getAttribute('for')
  console.log(classAtt)*/

  // yeni bir div ekliyecgiz

let newDiv =document.createElement('div')
newDiv.setAttribute('class','mb-3')
let newInput = document.createElement('input')
newInput.setAttribute('type','text')
newInput.setAttribute('class','form-control')
newInput.setAttribute('id','koy')
newInput.setAttribute('placeholder','koymali')
newDiv.appendChild(newInput)

console.log(newDiv)
eklemeli.appendChild(newDiv)

const parentDiv = document.getElementById('adiniz').parentNode
const girisInput =document.getElementById('adiniz')
parentDiv.insertBefore(newInput,girisInput)


let positionDiv = ['pozition','junior','denior','proje']
let jobList = document.getElementById('pos')
for (let i =0 ; i<positionDiv.length; i++){
    jobList.innerHTML+=`<option>${positionDiv[i]}</option>`
}

// yakalamak girilen burseyi key up bastikca ratan

const lastName =document.getElementById('adiniz')
const charCo = document.getElementById('saymak')

const showRemaninChar = () => {
const val =lastName.value
charCo.innerText = val.length +'/40'

}


lastName.addEventListener('keyup',showRemaninChar)