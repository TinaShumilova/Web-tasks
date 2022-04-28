function testButton() {
    alert("Тестовая кнопочка");
    let confirmation = confirm("Сложим числа?");
        if (confirmation == true){
            let answer = parseInt(prompt ("Сколько будет 2+2 ?"));
            switch (answer) {
                case 4:
                    alert("Молодчинка!");
                    break;
                case 3:
                    alert("Маловато будет!");
                    break;
                case 5:
                    alert("А чего так много?!");
                    break;
                default:
                    alert("Совсем не правильно :(")
                    break;
            }
        } else {
            alert("Ну как хочешь...")
        }


}