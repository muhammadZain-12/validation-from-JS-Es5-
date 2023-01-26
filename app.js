let required = document.getElementById('true')
let notRequired = document.getElementById('false')

let modal = document.getElementById("modal")

const createElementThroughParams = () => {

    const dataType = document.getElementById('dataType')
    let div = document.getElementById('div2')
    let fieldValue = document.getElementById('fieldName')
    let inputValue = fieldValue.value
    if(inputValue===""){
        modal.style.display = "none"
        alert("input value")
        
    }
    else{
        modal.style.display = "block"
        let fieldList = document.createElement('span')
    fieldList.setAttribute('class', 'fieldList')
    fieldList.setAttribute('id', 'fieldList')
    let fieldTextNode = document.createTextNode(`${inputValue}`)
    fieldList.appendChild(fieldTextNode);
    console.log(fieldList, 'fieldList')
    div.appendChild(fieldList)
    if (dataType.value == "Boolean") {
        let checkBox = document.createElement('input')
        checkBox.setAttribute('type', 'checkbox')
        checkBox.setAttribute('class', 'inputValue booleanCheckBox form-check-input')
        checkBox.setAttribute('id','booleanCheck')
        checkBox.setAttribute('id','input')
        div.appendChild(checkBox)
        let br = document.createElement('br')
        let br1 = document.createElement('br')
        div.appendChild(br)
        div.appendChild(br1)
        fieldValue.value = ""
    }
    else {
        let inputCreate = document.createElement('input')
        inputCreate.setAttribute('class', "inputValue form-control")
        inputCreate.setAttribute('placeholder',"Enter Input Here")
        inputCreate.setAttribute('id','input')

        if (required.checked) {

            inputCreate.setAttribute('required', 'required')
        }
        // let type = document.createElement('button')
        // let typeNode = document.createTextNode(`${dataType.value}`)
        // console.log(typeNode, "type")
        // type.appendChild(typeNode)
        // type.setAttribute('id', 'dataType')
        div.appendChild(inputCreate)
        inputCreate.setAttribute('id','input')
        inputCreate.setAttribute('type', `${dataType.value}`)
        
        
        let br = document.createElement('br')
        let br1 = document.createElement('br')
        div.appendChild(br)
        div.appendChild(br1)
        fieldValue.value = ""
    let button = document.getElementById('btn')
    button.style.display = "inline"

    }
}
}

const addInput = () => {


    createElementThroughParams()

}


let unorderList = document.getElementById('unOrder')

const addInList = () => {
 
    let list = document.getElementsByClassName('fieldList')
    let inputValue = document.getElementsByClassName('inputValue')
    let booleanCheckBox = document.getElementsByClassName('booleanCheckBox')


    // let matchFound = false
    let flag = false;
    for (var i = 0; i < list.length; i++) {
        let isRequired = inputValue[i].getAttribute('required') == "required";
        if (isRequired && inputValue[i].value.length == 0) {
            flag = true;
        }

    
        

    }
    if (!flag) {
        for (var i = 0; i < list.length; i++) {
            if (inputValue[i].getAttribute('class').includes('booleanCheckBox')) {

                unorderList.innerHTML += `<ul><li>  ${list[i].innerHTML} </li>  <li> ${inputValue[i].checked}</li></ul>`
                // inputValue[i].value = ""
            } else {

                unorderList.innerHTML += `<ul><li>  ${list[i].innerHTML} </li>  <li> ${inputValue[i].value}</li></ul>`
                // inputValue[i].value = ""
            }
        }
    } else {
        alert("please fill required input")
    }
    
    
    let inputRemove = document.getElementById('input')
    let isRequired = inputRemove.getAttribute('required') == 'required'
    

     if(isRequired && inputRemove.value.length==0){
        console.log(1) 
        return false
    }
    else{
        let removeDiv = document.getElementById('div2')
            console.log(removeDiv)
        removeDiv.innerHTML = "";
}

    // let isRequired = inputRemove.getAttribute('required') == 'required'
    // console.log(isRequired)
//     if(isRequired && inputRemove.value.length==0){
//         return false
//     }
//     else{
//     let removeDiv = document.getElementById('div2')
//     removeDiv.innerHTML = "";
// }
}


    


















