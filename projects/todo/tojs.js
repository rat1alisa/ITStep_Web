

function addNewTask(event){

    let list = document.querySelector(".tasks");
    let tasks = document.getElementsByClassName("task");//чтобы посчитать их количество
    let input = document.querySelector('input[name="todo-text"]');

    list.insertAdjacentHTML(
        "beforeend",
        `<div class="task">

        <span>${tasks.length + 1}) ${input.value}</span>

        <div class="elements">

            <button class="yes"></button>

            <button class="remove"><i class="fa fa-trash"></i></button>

        </div>
    </div>`

    );

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

