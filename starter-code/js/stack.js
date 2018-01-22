//initialize stack
var stack = new StackDataStructure();

//select btns
var stackAddBtn = document.querySelector('#stackAdd');
var stackRemoveBtn = document.querySelector('#stackRemove');

//select input values
var newStackEntry = document.querySelector('#stackInput');

//select state message 
var stackState = document.querySelector('#stack-state');

//other vars
var message = '';

//add event
function inputValidation(){
    console.log('validating: ', newStackEntry.value);
    if(newStackEntry.value.length>0){
        addToStack();
    }
}

function addToStack(){ //adds element to stack, updates the message and the DOM
 var res = stack.push(newStackEntry.value);
 console.log('adding to stack: ', newStackEntry.value);
 if(!Array.isArray(res)){
     message = res;
 }
 else {
     message = '';
 }
 updateDom();
}

stackAddBtn.addEventListener('click', inputValidation);
stackRemoveBtn.addEventListener('click', removeElement);

function removeElement(){
    var popped = stack.pop();
    if(popped === 'Stack Underflow'){
        message = popped;
    }
    else {
        message = '';
    }
    updateDom();
}


//update DOM
function updateDom(){
    emptyInput();
    setMessage();
    updateDomstackView();
}

function emptyInput(){ //reset input value
    newStackEntry.value = '';
}

function setMessage(){ //updates the message
    stackState.innerText = message;
}

function buildArr(arr){ //transform the stack array in to one that can be used in the DOM
    var newArr = [];
    for(i=0;i<stack.MAX_SIZE;i++){
        if(i<arr.length){
            newArr.push(arr[i]);
        }
        else {
            newArr.push('');
        }    
    }
    return newArr.reverse();
}

function updateDomstackView(){ //updates the stack view   
    var elements = document.querySelectorAll('#stack-data .element');
    var arr = buildArr(stack.stackControl);
    for(i=0;i<arr.length;i++){
        elements[i].innerText = arr[i];
        if(arr[i].length>0){
            elements[i].classList.add('active');
        }
        else {
            elements[i].classList.remove('active');
        }
    }
}