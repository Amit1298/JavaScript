/*
=>Make the UI by Bootstrap
=>Add the submit event listener to libraryForm(name,author,type(radiobuttons))
=>Add the e.preventDefault() can't loaded during click Button
=>Display the details on the table using the innerHTML
=>after adding the details data from libraryForm removed (clear function)
=>add the validation in form details string must be greater than to in case string is less than two case will be false
   and it show the error
=>show function in this it show the alert message 
=>alert message removed automatically in 5 sec due to setTimeout function
*/

class Book {
    constructor(name, author, type) {
        this.name = name;
        this.author = author;
        this.type = type;
    }
}

class Display {
    add(book) {
        console.log('Adding to UI');
        let tableBody = document.getElementById('tableBody');
        let uiString = `<tr>
                         <td>${book.name}</td>
                         <td>${book.author}</td>
                         <td>${book.type}</td>
                         </tr>`;
        tableBody.innerHTML = uiString;
    }

    clear() {
        let libraryForm = document.getElementById('libraryForm');
        libraryForm.reset();
    }
    validate(book) {
        if (book.name.length < 2 || book.author.length < 2) {
            return false;
        }
        else {
            return true;
        }
    }
    show(type, displayMessage) {
        let message = document.getElementById('message');
        message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
        <strong>Message:</strong>${displayMessage}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>`;
        setTimeout(function () {
            message.innerHTML = ''
        }, 5000);
    }
}


//Add submit event listener to libraryForm
let libraryForm = document.getElementById("libraryForm");
libraryForm.addEventListener('submit', libraryFormSubmit);
function libraryFormSubmit(e) {
    console.log("You have submitted library form");
    let name = document.getElementById('bookName').value;
    let author = document.getElementById('author').value;
    let type;

    // grapping firction,programming,cooking
    let fiction = document.getElementById('fiction');
    let programming = document.getElementById('programming');
    let cooking = document.getElementById('cooking');

    if (fiction.checked) {
        type = fiction.value;
    }
    else if (programming.checked) {
        type = programming.value;
    }
    else if (cooking.checked) {
        type = cooking.value;
    }
    let book = new Book(name, author, type);
    console.log(book);

    let display = new Display();

    // Apply validation
    if (display.validate(book)) {
        display.add(book);
        display.clear();
        display.show('Success', ' Your book has been successfully added');
    }
    else {
        //show error
        display.show('danger', ' Sorry you cannot add this book')
    }

    e.preventDefault();
}