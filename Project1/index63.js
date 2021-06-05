
//Utility function:
//1. Utility function to get DOM element from string
function getElementFromString(string){
    let div= document.createElement('div');
    div.innerHTML =string;
    return div.firstElementChild;
}

//Initialize no of parameters
let addedParamCount=0;

// Hide the parametersBox intially
let parametersBox = document.getElementById('parametersBox');
parametersBox.style.display = 'none';

// If the user clicks on params box , hide the json box
let paramsRadio =document.getElementById('paramsRadio');
paramsRadio.addEventListener('click', ()=>{
    document.getElementById('requestJsonBox').style.display= "none";
    document.getElementById('parametersBox').style.display= 'block';
})

// If the user click on json parametersBox, hide the params box
let jsonRadio =document.getElementById('jsonRadio');
jsonRadio.addEventListener('click', ()=>{
    document.getElementById('parametersBox').style.display = 'none';
    document.getElementById('requestJsonBox').style.display= 'block';
})


// If the user click on + button , add more parameters
let addParam= document.getElementById('click', ()=>{
    let params=document.getElementById('params');
    let string=`<div class="form-row my-2">
    <label for="url" class="col-sm-2 col-form-label">Parameter ${addedParamCount + 2}</label>
    <div class="col-md-4">
      <input type="text" class="form-control" id="parameterKey ${addedParamCount + 2}" placeholder="Enter Parameter ${addedParamCount + 2} Key" />
    </div>
    <div class=" col-md-4">
      <input type="text" class="form-control" id="parameterValue ${addedParamCount + 2}" placeholder="Enter Parameter ${addedParamCount + 2} value" />
    </div>
    <button id="addParam" class="btn btn-primary">-</button>
  </div>`;

  //Convert the element string to DOM node
  let paramElement = getElementFromString(string);
  params.appendChild(paramElement)
  addedParamCount ++;
})