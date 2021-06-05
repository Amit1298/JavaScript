/*
class Library and implement the following
>constructor must take the book list as an argument
>getBookList()
>issueBook(bookName,user)
>returnBook(bookName)
*/

class Library{
    constructor(bookList){
        this.bookList=bookList; 
        this.issuedBooks={};
    }
    getBookList(){
        this.bookList.forEach(element=>{
            console.log(element);
        })
    }
    issueBook(bookname,user){
         this.issuedBooks[bookname]=user;
    }
    returnBook(bookname){

    }
}