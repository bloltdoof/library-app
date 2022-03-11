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
    render(myLibrary);
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
  render(myLibrary);

  
});

document.getElementById('delete-all').addEventListener('click', function(e) {
  e.preventDefault();
  myLibrary = [];
  displayTotalBooks(myLibrary);
  render(myLibrary);
  
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

function deleteBook(arr, i){
  arr.splice(i, 1);
  render(arr);
  displayTotalBooks(arr);
}

let colour = {
  read: 'green',
  unread: 'red'
}

function render(arr) {
  let tbody = document.getElementById('tbody');
  tbody.innerHTML = '';
  for (let i = 0; i < arr.length; i++) {
    let book = arr[i];
    let bookStat = book.read;
    let greenorred = colour[bookStat];
    let tr = document.createElement('tr');
    tr.id = 'product';
    // Change tr class name.
    tr.className = 'bg-white border-b dark:bg-gray-800 dark:border-gray-700';
    tr.innerHTML = `
      <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white"> ${book.title} </td>
      <td class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400"> ${book.author} </td>
      <td class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400"> ${book.pages} </td>
      <td class="py-4 px-6 text-sm font-medium whitespace-nowrap">
        <a href="#" class="text-${greenorred}-600 dark:text-${greenorred}-500 hover:underline">${book.read}</a>
      </td>
      <td class="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
        <a href="#" id="delete-the-book" onclick="deleteBook(myLibrary,${i})" class="text-red-600 dark:text-red-500 hover:underline">delete</a>
      </td>
    `;
    tbody.appendChild(tr);
  }
}
