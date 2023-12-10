

function hasDone(event) {
    let button = event.target.parentElement;
  
      if (event.target.localName == "i") {
  
        button.parentElement.previousElementSibling.style.textDecoration =
          "line-through";
        button.remove();
      } 
      else {
        button.previousElementSibling.style.textDecoration = "line-through";
      }
  }
  


function removeTask(event) {

    let button = event.target.parentElement;
  
      if (event.target.localName == "i") {
        button.parentElement.parentElement.remove();
      } 
      else {
        button.parentElement.remove();
      }
    
  }


function addNewTask(event){

    let list = document.querySelector(".tasks");
    let tasks = document.getElementsByClassName("task");//чтобы посчитать их количество
    let input = document.querySelector('input[name="todo-text"]');

    if(input.value.trim() != ""){

        list.insertAdjacentHTML(

            "beforeend",
            `<div class="task">
    
            <span>${tasks.length + 1}) ${input.value}</span>
    
            <div class="elements">
    
                <button class="yes" onclick="hasDone(event)"><i class="gg-chevron-double-right"></i></button>
    
                <button class="remove" onclick="removeTask(event)"><i class="fa fa-trash"></i></button>
    
            </div>
        </div>`
    
        );

    }
    else{
        alert("Sorry, I can't add this one, add some information");
    }

    



    //OR
    /*let l = list.innerHTML;
    let newTaskCode = `<div class="task">

        <span>${tasks.length + 1}. ${input.value}</span>

        <div class="elements">

            <button class="yes"></button>

            <button class="remove"><i class="fa fa-trash"></i></button>

        </div>
    </div>`;

    list.innerHTML = l + newTaskCode;*/

}

