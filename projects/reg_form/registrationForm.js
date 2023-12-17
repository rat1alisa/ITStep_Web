


function sendForm(event){
    let error = {};

    let address = event.target[6].value;

    if(address.length < 10){
        error.address = "Try again (bad address)";
        let addressFiled = document.getElementById("address-error");
        addressFiled.innerHTML = error.address;
        addressFiled.previousElementSibling.classList.add("error");
    }else{
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
        let nameFiled = document.getElementById("name-error");
        nameFiled.innerHTML = '';
        nameFiled.previousElementSibling.classList.remove("error");
    }

    //---------------------------------------------test inputNumber


     /*let phone =  event.target[3].value;

    let phoneTemplate = /^\+375[0-9]{9}$/g;

    if(!phoneTemplate.test(name)){
        error.phone = "Enter correct phone(+375 XX)";
        let phoneFiled = document.getElementById("phone-error");
        phoneFiled.innerHTML = error.phone;
        phoneFiled.previousElementSibling.classList.add("error");
    }
    else{
        let phoneFiled = document.getElementById("phone-error");
        phoneFiled.innerHTML = '';
        phoneFiled.previousElementSibling.classList.remove("error");
    }

    

    //---------------------------------------------test inputEmail



   let email =  event.target[4].value;

    let emailTemplate = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/g;

    if( emailTemplate.test(email)){
        error.email = "Enter correct email";
        let emailFiled = document.getElementById("email-error");
     emailFiled.innerHTML = error.email;
     emailFiled.previousElementSibling.classList.add("error");
    }
    else{
        error.email = null;
        let emailFiled = document.getElementById("email-error");
     emailFiled.innerHTML = '';
     emailFiled.previousElementSibling.classList.remove("error");
    }



    //---------------------------------------------test inputLink



    let link =  event.target[5].value;

    let linkTemplate = /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/g;

    if( linkTemplate.test(link)){
        error.link = "Enter correct link";
        let linkFiled = document.getElementById("link-error");
     linkFiled.innerHTML = error.link;
     linkFiled.previousElementSibling.classList.add("error");
    }
    else{
        error.link = null;
        let linkFiled = document.getElementById("link-error");
     linkFiled.innerHTML = '';
     linkFiled.previousElementSibling.classList.remove("error");
    }*/



    let date = event.target[1].value;
    let gender = event.target[2].value;
    let email = event.target[4].value;
    let url = event.target[5].value;

    let errors = 0;


    //теперь проверка для добавления карточек (если массив error пуст - тогда добавлем карточку, в противном случае - нет)
    //let errors = Object.keys(error)

    for(key in error){
        errors++;
    }

    let now = new Date();
    let birth = new Date(date);

    let age = now.getFullYear() - birth.getFullYear();


    if(errors){
        return false;
    }
    else{
        let list = document.getElementsByClassName("class-list")[0];

        list.insertAdjacentHTML(

                "beforeend",
                `<div class="cardL" draggable="true" ondragstart="startDrag(event) id="user-${now.getMilliseconds()}">
                    <image src="avatar.png" alt=""></image>
                    <div class="card-name">${name}</div>
                    <div class="card-age">Age: ${age}</div>
                    <button type="button">Information</button>
                </div> `
        
            );
    }



    return false;


}


/*function addPerson(){
    let list = document.querySelector(".class-list");
    let inputName = document.querySelector('input[name="FN"]');
    let inputAge = document.querySelector('input[name="birthday"]');

    if(inputName.value.trim() != "" &&  inputAge.value.trim() != ""){

        list.insertAdjacentHTML(

            "beforeend",
            `<div class="cardL">
                <image src="avatar.png" alt=""></image>
                <div class="card-name">${{inputName.value}</div>
                <div class="card-age">Age: ${age}</div>
                <button type="button">Information</button>
            </div> `
    
        );

        }
        else{
            alert("Sorry, I can't add this one, add some information");
        }

}*/


function startDrag(event){
    event.dataTransfer.setData("text/html", event.target.id); //info про перетаскиваемый объект()
    event.dataTransfer.effectAllowed = "move"; //при нажатии мы ТОЛЬКО перемещаем объект

    //ondragenter - когда элемент входит в зону другого элеента
}

function enterDrag(event){
    //event.preventDefault(); отключение установленных по умолчанию обработчиков
    event.dataTransfer.dropEffect = "move";

    event.target.classList.add("active");
}

function leaveDrag(event){
    event.target.classList.remove("active");
}

function endDrag(event){
    let cart = document.getElementsByClassName("removeCard")[0];

    if(confirm("Delete?")){
        let elementId = event.dataTransfer.getData("text/html");
        let el = document.getElementById(elementId);

        if(el){
            cart.classList.remove("active");
            el.remove();
            cart.classList.add("active");
            setInterval(() => {cart.classList.remove("action")}, 500);

        }
        else{
            cart.classList.remove("active");
        }
    }
}