let choice = prompt("Please Enter one of the options");
const list = [];
while (choice.toLowerCase() != "quit") {
    if (choice.toLowerCase() == "new") {
        let ToDo = prompt("What is the ToDo");
        list.push(ToDo);
        console.log(`${ToDo} has been added`);
    }
    if (choice.toLowerCase() == "list") {
        console.log('******************');
        for (let i = 0; i < list.length; i++) {
            console.log(`${i + 1}. ${list[i]}`);
        }
        console.log('******************');
    }
    if (choice.toLowerCase() == "delete") {
        let index = parseInt(prompt("Enter the number of the entry you would like to delete"));
        if (!Number.isNaN(index)) {
            const deleted = list.splice(1, index);
            console.log("Entry has been deleted")
        }
        else{
            console.log("Unknown Index");
        }
    }
    choice = prompt("Please Enter one of the options");
}
console.log("OK QUITTING");
