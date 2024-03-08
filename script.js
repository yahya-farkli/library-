const myLibrary = [];
let shelf = document.querySelector('.shelf');
let addButton = document.querySelector('i');
let dialog = document.getElementById("myDialog");
let closeBtn = document.getElementById('close');

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}

addButton.addEventListener('click', function(e) {
  e.preventDefault();
  dialog.show();
  dialog.style.display = "flex";
});

function addBookToLibrary() {
  dialog.addEventListener('close', function (event) {
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    if (title.trim() === '' || author.trim() === '' || pages.trim() === '') {
      alert('Please fill out all fields');
      return; // Exit the function without saving
    }
    let newBook = new Book(title, author, pages);
    myLibrary.push(newBook);
    console.log(myLibrary);

    event.preventDefault();
    document.getElementById("myForm").reset();   // Reset the form
  });
}

closeBtn.addEventListener('click', function(e) {
  e.preventDefault();
  dialog.close();
  dialog.style.display = "none";
  
  console.log("Close button clicked");
  console.log("Dialog closed");
  
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let pages = document.getElementById("pages").value;
  if (title === "" || author === "" || pages === "") {
    alert("Please fill out all fields before saving.");
    console.log("Empty fields detected");
    return; // Exit the function without adding the book
  }

  let bookCase = document.createElement('div');
  shelf.append(bookCase);
});








































/* const myLibrary = [];
let shelf = document.querySelector('.shelf')
let addButton = document.querySelector('i')
let dialog = document.getElementById("myDialog");
let closeBtn = document.getElementById('close');
function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;

}
addButton.addEventListener('click', function(e) {
    e.preventDefault();
  
    dialog.show();
    dialog.style.display = "flex"

  });


    function addBookToLibrary() {
        
        dialog.addEventListener('close', function (event) {
            let title = document.getElementById("title").value;
            let author = document.getElementById("author").value;
            let pages = document.getElementById("pages").value;
            if (title.trim() === '' || author.trim() === '' || pages.trim() === '') {
              alert('Please fill out all fields');
               *///return; // Exit the function without saving
          //}/* 
            //let newBook = new Book(title, author, pages);
            //myLibrary.push(newBook);
            //console.log(myLibrary);
    //
            //*/// event.preventDefault();
         //   document.getElementById("myForm").reset();   // Reset the form
      /*   });
    } 
    closeBtn.addEventListener('click', function(e) {
      e.preventDefault();
     */
      // Close the dialog.
   /*    dialog.close();
      dialog.style.display = "none";
  
      console.log("Close button clicked");
      console.log("Dialog closed");
      
      let title = document.getElementById("title").value;
      let author = document.getElementById("author").value;
      let pages = document.getElementById("pages").value;
      if (title === "" || author === "" || pages === "") {
          alert("Please fill out all fields before saving.");
          console.log("Empty fields detected");
    *///       return; // Exit the function without adding the book
/*       }
  
      let bookCase = document.createElement('div');
      shelf.append(bookCase);
      dialog.removeEventListener('close', arguments.callee);

    });
  
      
      


 */







































    /* 
function showDialog() {
    dialog.show();
  }
  
function closeDialog() {
    dialog.close();} */
/* function addBookToLibrary() {/* 
    let form = document.getElementById("myForm") */
    /*let dialog = document.getElementById("myDialog");

    dialog.showModal();
    
    dialog.addEventListener('submit', function (event) {
      let title = document.getElementById("title").value;
      let author = document.getElementById("author").value;
      let pages = document.getElementById("pages").value;
      let newBook = new Book(title, author, pages);
      myLibrary.push(newBook);
      console.log(myLibrary);
      
      event.preventDefault();
    })}
  */

   /* function addBookToLibrary() {
        let form = document.getElementById("myForm");
        let dialog = document.getElementById("myDialog");
        dialog.showModal();
        
        dialog.addEventListener('submit', function (event) {
          let title = document.getElementById("title").value;
          let author = document.getElementById("author").value;
          let pages = document.getElementById("pages").value;
          let newBook = new Book(title, author, pages);
          myLibrary.push(newBook);
          console.log(myLibrary);
          
          event.preventDefault();
          dialog.close(); // Close the dialog
          form.reset();   // Reset the form
        });
    }*/

   /* function addBookToLibrary() {
        let dialog = document.getElementById("myDialog");
    
        // Show the dialog when the button is clicked
        dialog.showModal();
    
        dialog.addEventListener('submit', function (event) {
            let title = document.getElementById("title").value;
            let author = document.getElementById("author").value;
            let pages = document.getElementById("pages").value;
            let newBook = new Book(title, author, pages);
            myLibrary.push(newBook);
            console.log(myLibrary);
    
            event.preventDefault();
            dialog.close(); // Close the dialog
            document.getElementById("myForm").reset();   // Reset the form
        });
    }
    */
