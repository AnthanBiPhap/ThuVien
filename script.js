const contractAddress = "0x5B38Da6a701c568545dCfcB03FcB875f56beddC4";
const contractABI = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_title",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_author",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_genre",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_publisher",
				"type": "string"
			},
			{
				"internalType": "uint16",
				"name": "_publicationYear",
				"type": "uint16"
			}
		],
		"name": "addBook",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_bookId",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_borrowerName",
				"type": "string"
			}
		],
		"name": "borrowBook",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "bookId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "title",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "author",
				"type": "string"
			}
		],
		"name": "BookAdded",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "bookId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "borrowerName",
				"type": "string"
			}
		],
		"name": "BookBorrowed",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "bookId",
				"type": "uint256"
			}
		],
		"name": "BookRemoved",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "bookId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "borrowId",
				"type": "uint256"
			}
		],
		"name": "BookReturned",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_bookId",
				"type": "uint256"
			}
		],
		"name": "removeBook",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_borrowId",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_bookId",
				"type": "uint256"
			}
		],
		"name": "returnBook",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_bookId",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_title",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_author",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_genre",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_publisher",
				"type": "string"
			},
			{
				"internalType": "uint16",
				"name": "_publicationYear",
				"type": "uint16"
			}
		],
		"name": "updateBook",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "bookCount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "books",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "title",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "author",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "genre",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "publisher",
				"type": "string"
			},
			{
				"internalType": "uint16",
				"name": "publicationYear",
				"type": "uint16"
			},
			{
				"internalType": "bool",
				"name": "isAvailable",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "borrowCount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "borrowRecords",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "borrowerName",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "bookId",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "borrowDate",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "returnDate",
				"type": "uint256"
			},			{
				"internalType": "uint256",
				"name": "returnedBookId",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "isReturned",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_bookId",
				"type": "uint256"
			}
		],
		"name": "getBook",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "id",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "title",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "author",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "genre",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "publisher",
						"type": "string"
					},
					{
						"internalType": "uint16",
						"name": "publicationYear",
						"type": "uint16"
					},
					{
						"internalType": "bool",
						"name": "isAvailable",
						"type": "bool"
					}
				],
				"internalType": "struct ImprovedLibraryManager.Book",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_borrowId",
				"type": "uint256"
			}
		],
		"name": "getBorrowRecord",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "id",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "borrowerName",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "bookId",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "borrowDate",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "returnDate",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "returnedBookId",
						"type": "uint256"
					},
					{
						"internalType": "bool",
						"name": "isReturned",
						"type": "bool"
					}
				],
				"internalType": "struct ImprovedLibraryManager.BorrowRecord",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];
let contract;
let connected = false;

document.addEventListener('DOMContentLoaded', () => {
    const connectButton = document.getElementById('connect-button');
    const addBookButton = document.getElementById('add-book-button');
    const addBorrowerButton = document.getElementById('add-borrower-button');
    const returnBookButton = document.getElementById('return-book-button');
    const bookForm = document.getElementById('book-form');
    const borrowerForm = document.getElementById('borrower-form');
    const returnForm = document.getElementById('return-form');
    const editBookForm = document.getElementById('edit-book-form');
    const editBorrowForm = document.getElementById('edit-borrow-form');
    const cancelButtons = document.querySelectorAll('.cancel-button');

    connectButton.addEventListener('click', connectWallet);
    addBookButton.addEventListener('click', () => showModal('add-book-form'));
    addBorrowerButton.addEventListener('click', () => showModal('add-borrower-form'));
    returnBookButton.addEventListener('click', () => showModal('return-book-form'));
    bookForm.addEventListener('submit', handleAddBook);
    borrowerForm.addEventListener('submit', handleAddBorrower);
    returnForm.addEventListener('submit', handleReturnBook);
    editBookForm.addEventListener('submit', handleEditBook);
    editBorrowForm.addEventListener('submit', handleEditBorrow);
    cancelButtons.forEach(button => button.addEventListener('click', hideModals));

    checkConnection();
});

function saveToLocalStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

function getFromLocalStorage(key) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
}

async function connectWallet() {
    if (typeof window.ethereum !== 'undefined') {
        try {
            await window.ethereum.request({ method: 'eth_requestAccounts' });
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            contract = new ethers.Contract(contractAddress, contractABI, signer);
            connected = true;
            updateUI();
            fetchBooks();
            fetchBorrowRecords();
        } catch (error) {
            console.error("Failed to connect to wallet:", error);
            document.getElementById('connection-error').textContent = error.message;
            document.getElementById('connection-error').classList.remove('hidden');
        }
    } else {
        document.getElementById('connection-error').textContent = "Please install MetaMask!";
        document.getElementById('connection-error').classList.remove('hidden');
    }
}

function updateUI() {
    document.getElementById('connect-button').classList.toggle('hidden', connected);
    document.getElementById('connection-status').classList.toggle('hidden', !connected);
    document.getElementById('main-content').classList.toggle('hidden', !connected);
}

async function fetchBooks() {
    let books = getFromLocalStorage('books') || [];
    if (contract && books.length === 0) {
        try {
            const bookCount = await contract.bookCount();
            for (let i = 1; i <= bookCount.toNumber(); i++) {
                const book = await contract.getBook(i);
                books.push({
                    id: book.id.toString(),
                    title: book.title,
                    author: book.author,
                    genre: book.genre,
                    publisher: book.publisher,
                    publicationYear: book.publicationYear,
                    isAvailable: book.isAvailable
                });
            }
            saveToLocalStorage('books', books);
        } catch (error) {
            console.error("Failed to fetch books:", error);
        }
    }
    displayBooks(books);
}

let currentPage = 1;
const itemsPerPage = 5;

function displayBooks(books) {
    const bookListBody = document.getElementById('book-list-body');
    bookListBody.innerHTML = '';

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedBooks = books.slice(startIndex, endIndex);

    paginatedBooks.forEach(book => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${book.id}</td>
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.genre}</td>
            <td>${book.publisher}</td>
            <td>${book.publicationYear}</td>
            <td>${book.isAvailable ? 'Yes' : 'No'}</td>
            <td>
                <button onclick="showEditBookModal(${book.id})">Edit</button>
                <button onclick="deleteBook(${book.id})">Delete</button>
            </td>
        `;
        bookListBody.appendChild(row);
    });

    displayPagination(books.length, fetchBooks, 'book_pagination');
}


async function fetchBorrowRecords() {
    let borrowRecords = getFromLocalStorage('borrowRecords') || [];
    if (contract && borrowRecords.length === 0) {
        try {
            const borrowCount = await contract.borrowCount();
            for (let i = 1; i <= borrowCount.toNumber(); i++) {
                const record = await contract.getBorrowRecord(i);
                borrowRecords.push({
                    id: record.id.toString(),
                    borrowerName: record.borrowerName,
                    borrowDate: record.borrowDate.toNumber() * 1000,
                    bookId: record.bookId.toString(),
                    returnDate: record.returnDate.toNumber() ? record.returnDate.toNumber() * 1000 : null,
                    returnedBookId: record.returnedBookId.toString() !== "0" ? record.returnedBookId.toString() : null
                });
            }
            saveToLocalStorage('borrowRecords', borrowRecords);
        } catch (error) {
            console.error("Failed to fetch borrow records:", error);
        }
    }
    displayBorrowRecords(borrowRecords);
}

function displayBorrowRecords(borrowRecords) {
    const borrowerListBody = document.getElementById('borrower-list-body');
    borrowerListBody.innerHTML = '';

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedRecords = borrowRecords.slice(startIndex, endIndex);

    paginatedRecords.forEach(record => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${record.id}</td>
            <td>${record.borrowerName}</td>
            <td>${new Date(record.borrowDate).toLocaleDateString()}</td>
            <td>${record.bookId}</td>
            <td>${record.returnDate ? new Date(record.returnDate).toLocaleDateString() : 'Not returned'}</td>
            <td>${record.returnedBookId || 'N/A'}</td>
            <td>
                <button onclick="showBorrowerDetails(${record.id})">View Details</button>
            </td>
        `;
        borrowerListBody.appendChild(row);
    });

    displayPagination(borrowRecords.length, fetchBorrowRecords, 'borrow_pagination');
}

function displayPagination(totalItems, fetchFunction, paginationId) {
    const paginationContainer = document.getElementById(paginationId);
    paginationContainer.innerHTML = '';

    const totalPages = Math.ceil(totalItems / itemsPerPage);

    for (let i = 1; i <= totalPages; i++) {
        const button = document.createElement('button');
        button.textContent = i;
        button.className = i === currentPage ? 'active' : '';
        button.addEventListener('click', () => {
            currentPage = i;
            fetchFunction();
        });
        paginationContainer.appendChild(button);
    }
}


async function handleAddBook(e) {
    e.preventDefault();
    if (contract) {
        try {
            const title = document.getElementById('book-title').value;
            const author = document.getElementById('book-author').value;
            const genre = document.getElementById('book-genre').value;
            const publisher = document.getElementById('book-publisher').value;
            const year = document.getElementById('book-year').value;
            const isAvailable = document.getElementById('book-isAvailable').value === 'yes';

            const tx = await contract.addBook(title, author, genre, publisher, parseInt(year));
            await tx.wait();

            const books = getFromLocalStorage('books') || [];
            books.push({
                id: (books.length + 1).toString(),
                title,
                author,
                genre,
                publisher,
                publicationYear: year,
                isAvailable
            });
            saveToLocalStorage('books', books);

            hideModals();
            displayBooks(books);
        } catch (error) {
            console.error("Failed to add book:", error);
        }
    }
}

async function handleAddBorrower(e) {
    e.preventDefault();
    if (contract) {
        try {
            const borrowerName = document.getElementById('borrower-name').value;
            const bookId = document.getElementById('book-id').value;

            if (!doesBookExist(bookId)) {
                showError('The book does not exist in the system.');
                return;
            }

            if (!isBookAvailable(bookId)) {
				alert('Sách này hiện không có sẵn để mượn.');
				return;
			}

            const tx = await contract.borrowBook(parseInt(bookId), borrowerName);
            await tx.wait();

            const books = getFromLocalStorage('books') || [];
            const bookIndex = books.findIndex(book => book.id === bookId);
            if (bookIndex !== -1) {
                books[bookIndex].isAvailable = true;
                saveToLocalStorage('books', books);
            }

            const borrowRecords = getFromLocalStorage('borrowRecords') || [];
            borrowRecords.push({
                id: (borrowRecords.length + 1).toString(),
                borrowerName,
                bookId,
                borrowDate: new Date().getTime(),
                returnDate: null,
                returnedBookId: null
            });
            saveToLocalStorage('borrowRecords', borrowRecords);

            hideModals();
            displayBooks(books);
            displayBorrowRecords(borrowRecords);
        } catch (error) {
            console.error("Failed to add borrower:", error);
        }
    }
}

async function handleReturnBook(e) {
    e.preventDefault();
    if (contract) {
        try {
            const borrowId = document.getElementById('return-borrow-id').value;
            const bookId = document.getElementById('return-book-id').value;

            if (!doesBookExist(bookId)) {
                showError('The book does not exist in the system.');
                return;
            }

            const tx = await contract.returnBook(parseInt(borrowId), parseInt(bookId));
            await tx.wait();

            const books = getFromLocalStorage('books') || [];
            const bookIndex = books.findIndex(book => book.id === bookId);
            if (bookIndex !== -1) {
                books[bookIndex].isAvailable = true;
                saveToLocalStorage('books', books);
            }

            const borrowRecords = getFromLocalStorage('borrowRecords') || [];
            const recordIndex = borrowRecords.findIndex(record => record.id === borrowId);
            if (recordIndex !== -1) {
                borrowRecords[recordIndex].returnDate = new Date().getTime();
                borrowRecords[recordIndex].returnedBookId = bookId;
                saveToLocalStorage('borrowRecords', borrowRecords);
            }

            hideModals();
            displayBooks(books);
            displayBorrowRecords(borrowRecords);
        } catch (error) {
            console.error("Failed to return book:", error);
        }
    }
}

async function handleEditBook(e) {
    e.preventDefault();
    if (contract) {
        try {
            const bookId = document.getElementById('edit-book-id').value;
            const title = document.getElementById('edit-book-title').value;
            const author = document.getElementById('edit-book-author').value;
            const genre = document.getElementById('edit-book-genre').value;
            const publisher = document.getElementById('edit-book-publisher').value;
            const year = document.getElementById('edit-book-year').value;
            const isAvailable = document.getElementById('edit-book-isAvailable').value === 'yes';

            const tx = await contract.updateBook(parseInt(bookId), title, author, genre, publisher, parseInt(year));
            await tx.wait();

            const books = getFromLocalStorage('books') || [];
            const bookIndex = books.findIndex(book => book.id === bookId);
            if (bookIndex !== -1) {
                books[bookIndex] = {
                    ...books[bookIndex],
                    title,
                    author,
                    genre,
                    publisher,
                    publicationYear: year,
                    isAvailable
                };
                saveToLocalStorage('books', books);
            }

            hideModals();
            displayBooks(books);
        } catch (error) {
            console.error("Failed to edit book:", error);
        }
    }
}

async function handleEditBorrow(e) {
    e.preventDefault();
    if (contract) {
        try {
            const borrowId = document.getElementById('edit-borrow-id').value;
            const borrowerName = document.getElementById('edit-borrower-name').value;
            const bookId = document.getElementById('edit-book-id').value;
            const borrowDate = new Date(document.getElementById('edit-borrow-date').value).getTime() / 1000;

            // Note: This function doesn't exist in the original contract. You might need to add it.
            const tx = await contract.updateBorrowRecord(parseInt(borrowId), borrowerName, parseInt(bookId), borrowDate);
            await tx.wait();

            const borrowRecords = getFromLocalStorage('borrowRecords') || [];
            const recordIndex = borrowRecords.findIndex(record => record.id === borrowId);
            if (recordIndex !== -1) {
                borrowRecords[recordIndex] = {
                    ...borrowRecords[recordIndex],
                    borrowerName,
                    bookId,
                    borrowDate: borrowDate * 1000
                };
                saveToLocalStorage('borrowRecords', borrowRecords);
            }

            hideModals();
            displayBorrowRecords(borrowRecords);
        } catch (error) {
            console.error("Failed to edit borrow record:", error);
        }
    }
}

async function deleteBook(bookId) {
    if (contract) {
        try {
            const tx = await contract.removeBook(parseInt(bookId));
            await tx.wait();

            let books = getFromLocalStorage('books') || [];
            books = books.filter(book => book.id !== bookId.toString());
            saveToLocalStorage('books', books);

            displayBooks(books);
        } catch (error) {
            console.error("Failed to delete book:", error);
        }
    }
}

async function deleteBorrowRecord(borrowId) {
    if (contract) {
        try {
            // Note: This function doesn't exist in the original contract. You might need to add it.
            const tx = await contract.deleteBorrowRecord(parseInt(borrowId));
            await tx.wait();

            let borrowRecords = getFromLocalStorage('borrowRecords') || [];
            borrowRecords = borrowRecords.filter(record => record.id !== borrowId.toString());
            saveToLocalStorage('borrowRecords', borrowRecords);

            displayBorrowRecords(borrowRecords);
        } catch (error) {
            console.error("Failed to delete borrow record:", error);
        }
    }
}

function showEditBookModal(bookId) {
    const books = getFromLocalStorage('books') || [];
    const book = books.find(b => b.id === bookId.toString());
    if (book) {
        document.getElementById('edit-book-id').value = book.id;
        document.getElementById('edit-book-title').value = book.title;
        document.getElementById('edit-book-author').value = book.author;
        document.getElementById('edit-book-genre').value = book.genre;
        document.getElementById('edit-book-publisher').value = book.publisher;
        document.getElementById('edit-book-year').value = book.publicationYear;
        document.getElementById('edit-book-isAvailable').value = book.isAvailable ? 'yes' : 'no';
        showModal('edit-book-form');
    }
}

function showEditBorrowModal(borrowId) {
    const borrowRecords = getFromLocalStorage('borrowRecords') || [];
    const record = borrowRecords.find(r => r.id === borrowId.toString());
    if (record) {
        document.getElementById('edit-borrow-id').value = record.id;
        document.getElementById('edit-borrower-name').value = record.borrowerName;
        document.getElementById('edit-book-id').value = record.bookId;
        document.getElementById('edit-borrow-date').value = new Date(record.borrowDate).toISOString().split('T')[0];
        showModal('edit-borrow-form');
    }
}

function showModal(modalId) {
    document.getElementById(modalId).classList.remove('hidden');
}

function hideModals() {
    document.querySelectorAll('.modal').forEach(modal => modal.classList.add('hidden'));
}

async function checkConnection() {
    if (typeof window.ethereum !== 'undefined') {
        try {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const accounts = await provider.listAccounts();
            if (accounts.length > 0) {
                const signer = provider.getSigner();
                contract = new ethers.Contract(contractAddress, contractABI, signer);
                connected = true;
                updateUI();
                fetchBooks();
                fetchBorrowRecords();
            }
        } catch (error) {
            console.error("Error checking connection:", error);
        }
    }
}

window.ethereum.on('chainChanged', (chainId) => {
    window.location.reload();
});

window.ethereum.on('accountsChanged', function (accounts) {
    checkConnection();
});

function formatDate(timestamp) {
    const date = new Date(timestamp * 1000);
    return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
}

function isBookAvailable(bookId) {
    const books = getFromLocalStorage('books') || [];
    const book = books.find(book => book.id === bookId);
    return book ? book.isAvailable : false;
}

function doesBookExist(bookId) {
    const books = getFromLocalStorage('books') || [];
    const exists = books.some(book => book.id === bookId);
    if (!exists) {
        alert(`Book with ID ${bookId} does not exist in the system.`);
    }
    return exists;
}

async function showBorrowerDetails(borrowId) {
    const borrowRecords = getFromLocalStorage('borrowRecords') || [];
    const books = getFromLocalStorage('books') || [];
    const record = borrowRecords.find(r => r.id === borrowId.toString());
    
    if (record) {
        const book = books.find(b => b.id === record.bookId);
        const modalContent = `
            <h3>Borrower Details</h3>
            <p><strong>Borrower Name:</strong> ${record.borrowerName}</p>
            <p><strong>Borrow Date:</strong> ${new Date(record.borrowDate).toLocaleDateString()}</p>
            <p><strong>Book ID:</strong> ${record.bookId}</p>
            <p><strong>Book Title:</strong> ${book ? book.title : 'N/A'}</p>
            <p><strong>Book Author:</strong> ${book ? book.author : 'N/A'}</p>
			<p><strong>Book Genre:</strong> ${book ? book.genre : 'N/A'}</p>
			<p><strong>Book Publisher:</strong> ${book ? book.publisher : 'N/A'}</p>
            <p><strong>Return Date:</strong> ${record.returnDate ? new Date(record.returnDate).toLocaleDateString() : 'Not returned'}</p>
            <p><strong>Returned Book ID:</strong> ${record.returnedBookId || 'N/A'}</p>
        `;
        
        document.getElementById('borrower-details-content').innerHTML = modalContent;
        showModal('borrower-details-modal');
    }
}

