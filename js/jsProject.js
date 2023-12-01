
//создаем выдвигающийся блок меню

let findButton = document.querySelector(".button"); //для начала найдем кнопку на странице нашего документа(дерево объектов на странице) по селектору(по классу)
let menu = document.getElementById("main-menu");

if(findButton){ //проверка есть ли вообще это на странице

    findButton.addEventListener("click", () => {
        if(findButton.classList.contains("pushed")) {
            findButton.classList.remove("pushed");
            menu.classList.remove("opened");
        }//ClassList - список/коллекция классов объекта + contains проверка есть ли у объекта данный класс в атрибутах, и если есть - то удаляем()
        else{//в противном случае - добавляем класс (со стилями)
            findButton.classList.add("pushed");
            menu.classList.add("opened");
        }
    }) //привязываем обработчик событий(в случае, если объект найден)
}

//меню

