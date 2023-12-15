

function sendForm(event){
    let error = {};

    let address = event.target[6].value;

    if(address.length < 10){
        error.address = "Try again (bad address)";
        let addressFiled = document.getElementById("address-error");
        addressFiled.innerHTML = error.address;
        addressFiled.previousElementSibling.classList.add("error");
    }else{
        error.address = null;
        let addressFiled = document.getElementById("address-error");
        addressFiled.innerHTML = '';
        addressFiled.previousElementSibling.classList.remove("error");
    }

    //---------------------------------------------test inputName



    let name = event.target[0].value;
    //let nameTemplate = /^[a-zA-Z\s]*[a-zA-Z\s]*[a-zA-Z\s]*[a-zA-Z\s]$/;
    let nameTemplate = /^[A-Z][a-zA-Z\s]*[a-z]$/g; //регулярные выражения - \s - пробел

    if(!nameTemplate.test(name)){
        error.name = "Enter correct name";
        let nameFiled = document.getElementById("name-error");
        nameFiled.innerHTML = error.name;
        nameFiled.previousElementSibling.classList.add("error");
    }
    else{
        error.name = null;
        let nameFiled = document.getElementById("name-error");
        nameFiled.innerHTML = '';
        nameFiled.previousElementSibling.classList.remove("error");
    }

    //---------------------------------------------test inputNumber



    let phone =  event.target[3].value;

    let phoneTemplate = /^\+375[0-9]{9}$/g;

    if(!phoneTemplate.test(name)){
        error.phone = "Enter correct phone(+375 XX)";
        let phoneFiled = document.getElementById("phone-error");
        phoneFiled.innerHTML = error.phone;
        phoneFiled.previousElementSibling.classList.add("error");
    }
    else{
        error.phone = null;
        let phoneFiled = document.getElementById("phone-error");
        phoneFiled.innerHTML = '';
        phoneFiled.previousElementSibling.classList.remove("error");
    }


    return false;


}



function addPerson(){
    let list = document.querySelector(".class-list");
    let inputName = document.querySelector('input[name="FN"]');
    let inputAge = document.querySelector('input[name="birthday"]');


    if(inputName.value.trim() != "" &&  inputAge.value.trim() != ""){

        list.insertAdjacentHTML(

            "beforeend",
            `<div class="cardL">
                <image src="avatar.png" alt=""></image>
                <div class="card-name">${inputName.value}</div>
                <div class="card-age">Age: ${inputAge.value}</div>
                <button type="button">Information</button>
            </div> `
    
        );

        }
        else{
            alert("Sorry, I can't add this one, add some information");
        }

}


