// Library app.

let myLibrary = [];


// Book constructor.
function book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}


// Add book to library.
function addBookToLibrary(title, author, pages, read) {
    let newBook = new book(title, author, pages, read);
    myLibrary.push(newBook);
    // render();
    }

// When the user clicks submit button, get the values from the input fields and add the book to the library.
function submitBook() {
  let title = document.getElementById('book-name').value;
  let author = document.getElementById('author').value;
  let pages = document.getElementById('page-number').value;
  let read = document.getElementById('read-unread').value;
  addBookToLibrary(title, author, pages, read);
}

// When button with id 'submit' is clicked, call submitBook function and prevent default action.
document.getElementById('submit').addEventListener('click', function(e) {
  submitBook();
  e.preventDefault();
});


// Render the new book with a new row in the table.
function render() {
  //get tbody element.
  let tbody = document.getElementById('tbody');
  //Create tr element inside tbody.
  let tr = document.createElement('tr');
  // Add class to tr.
  tr.className = 'bg-white border-b dark:bg-gray-800 dark:border-gray-700';
  //Get tr element and append to tbody.
  tbody.appendChild(tr);
  
  // for loop to iterate through the array.
  for (let i = 0; i < myLibrary.length; i++) {
    // Create td elements inside tr with id "book-title", "book-author", "book-pages".
    let tdTitle = document.createElement('td');
    let tdAuthor = document.createElement('td');
    let tdPages = document.createElement('td');
    // Add class to td elements.
    tdTitle.className = 'py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white';
    tdAuthor.className = 'py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400';
    tdPages.className = 'py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400';
    // Add text to td elements.
    tdTitle.textContent = myLibrary[i].title;
    tdAuthor.textContent = myLibrary[i].author;}


}
