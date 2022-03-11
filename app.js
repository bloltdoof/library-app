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
    
    }


// When the user clicks submit, add the book to the library.
document.getElementById('submit').addEventListener('click', function(e) {
  e.preventDefault();
  let title = document.getElementById('book-name').value;
  let author = document.getElementById('author').value;
  let pages = document.getElementById('page-number').value;
  let read = document.getElementById('read-unread').checked;
  // if checkbox is checked, set read to "read".
  if (read === true) {
    read = "read";
  } else {
    read = "unread";
  }
  addBookToLibrary(title, author, pages, read);
  // Clear the form.
  document.getElementById('book-name').value = '';
  document.getElementById('author').value = '';
  document.getElementById('page-number').value = '';
  document.getElementById('read-unread').checked = false;
  displayTotalBooks(myLibrary);

  
});

document.getElementById('delete-all').addEventListener('click', function(e) {
  e.preventDefault();
  myLibrary = [];
  displayTotalBooks(myLibrary);
  
});

// Display total read books, total unread books, and total books.
function displayTotalBooks(arr){
  let totalBooks = arr.length;
  let totalRead = 0;
  let totalUnread = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].read === "read") {
      totalRead++;
    } else {
      totalUnread++;
    }
  }
  document.getElementById('total-books').textContent = "TOTAL BOOKS: " + totalBooks;
  document.getElementById('total-read').textContent = "TOTAL READ: " + totalRead;
  document.getElementById('total-unread').textContent = "TOTAL UNREAD: " + totalUnread;
}



// Render the myLibrary array with rows of books inside of #tbody.
function render() {
  let tbody = document.getElementById('tbody');
  tbody.innerHTML = '';
  for (let i = 0; i < myLibrary.length; i++) {
    let tr = document.createElement('tr');
    // Change tr class for Tailwind CSS.
    document.getElementById('tr').className = 'bg-white border-b dark:bg-gray-800 dark:border-gray-700';
    // Create td elements for each book.
    let tdTitle = document.createElement('td');
    tdTitle.id = 'book-title';
    document.getElementById('book-title').className = 'py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white';
    let tdAuthor = document.createElement('td');
    tdAuthor.id = 'author-pages';
    let tdPages = document.createElement('td');
    tdPages.id = 'author-pages';
    document.getElementById('author-pages').className = 'py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400';
    let tdRead = document.createElement('td');
    tdRead.id = 'book-read-unread';
    document.getElementById('book-read-unread').className = 'py-4 px-6 text-sm font-medium text-right whitespace-nowrap';
    // If book is read
    if (myLibrary[i].read === "read") {
      // Create a element inside of book-read-unread with text "read" and class "text-green-600 dark:text-green-500 hover:underline"
      let read = document.createElement('a');
      read.textContent = "read";
      read.className = "text-green-600 dark:text-green-500 hover:underline";
      // Append the read element to the td element.
      tdRead.appendChild(read);
    } else {
      // Create a element inside of book-read-unread with text "unread" and class "text-red-600 dark:text-red-500 hover:underline"
      let unread = document.createElement('a');
      unread.textContent = "unread";
      unread.className = "text-red-600 dark:text-red-500 hover:underline";
      // Append the unread element to the td element.
      tdRead.appendChild(unread);
    }
    let tdDelete = document.createElement('td');
    tdDelete.id = 'delete-book';
    document.getElementById('delete-book').className = 'py-4 px-6 text-sm font-medium text-right whitespace-nowrap';
    // Create a element inside of delete-book with text "delete" and class "text-red-600 dark:text-red-500 hover:underline"
    let deleteBook = document.createElement('a');
    deleteBook.textContent = "delete";
    deleteBook.className = "text-red-600 dark:text-red-500 hover:underline";
    // Append the delete element to the td element.
    tdDelete.appendChild(deleteBook);
    // Append the td elements to the tr element.
    tr.appendChild(tdTitle);
    tr.appendChild(tdAuthor);
    tr.appendChild(tdPages);
    tr.appendChild(tdRead);
    tr.appendChild(tdDelete);
    // Append the tr element to the tbody element.
    tbody.appendChild(tr);
  }