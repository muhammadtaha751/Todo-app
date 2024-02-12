
// var getul = document.getElementById('ul')


// function add(){

//     var a =document.getElementById('inp')
//     var li = document.createElement('li')
//     var litext = document.createTextNode(a.value)

//     li.appendChild(litext)
// ul.appendChild(li)
// a.value = ' '

// var delbtn = document.createElement('button')
// var delbtntext = document.createTextNode('delete')



// delbtn.setAttribute('onclick','del(this)')

// delbtn.appendChild(delbtntext)
// li.appendChild(delbtn)



// var editbtn = document.createElement('button')
// var editbtntext = document.createTextNode('Edit')

// editbtn.appendChild(editbtntext)
// li.appendChild(editbtn)

// editbtn.setAttribute('onclick','edit(this)')


// }

// function del(e){
// e.parentNode.remove()


// }

// function delall(){
//     getul.innerHTML = ' '
// }



// function edit(e){

//     var a = prompt('Enter Edit value',e.parentNode.firstChild.nodeValue)


//  e.parentNode.firstChild.nodeValue =a




// }


var getul = document.getElementById('ul')

function add() {
    var a = document.getElementById('inp')
    var li = document.createElement('li')
    var litext = document.createTextNode(a.value)
    li.appendChild(litext)
    ul.appendChild(li)

    a.value = ' '

    var editbtn = document.createElement('button')
    var editbtntext = document.createTextNode('Edit')
    editbtn.appendChild(editbtntext)
    li.appendChild(editbtn)
editbtn.setAttribute('onclick','edt(this)')


    var delbtn = document.createElement('button')
    var delbtntext = document.createTextNode('Delete')
    delbtn.appendChild(delbtntext)
    li.appendChild(delbtn)

    delbtn.setAttribute('onclick','del(this)')
}

function edt(e){

    var a = prompt('Enter Edit value',e.parentNode.firstChild.nodeValue)

e.parentNode.firstChild.nodeValue = a

}

function del(e){

    e.parentNode.remove()

}
function delall(){

getul.innerHTML= ' '

}