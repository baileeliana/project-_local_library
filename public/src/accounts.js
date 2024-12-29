function findAccountById(accounts, id) {
  let found = null;
  for (let i = 0; i < accounts.length; i++) {
    const account = accounts[i];
    if (account.id === id) found = account;
  }
  return found;
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((a, b) => {const lastNameA = a.name.last.toLowerCase(); const lastNameB = b.name.last.toLowerCase();
  if (lastNameA < lastNameB) { return -1;
  } if (lastNameA > lastNameB) {
    return 1;
  }
  return 0; 
  });
}

function getAccountFullNames(accounts) {
  const result = accounts.map((account) => `${account.name.first} ${account.name.last}`);
  return result;
}


// NOTE: YOU DON'T HAVE TO EDIT THE FUNCTIONS BELOW
function getTotalNumberOfBorrows(account, books) {
  return books.reduce((acc, book) => {
    const count = book.borrows.reduce((borrowAcc, borrow) => {
      return borrow.id === account.id ? borrowAcc + 1 : borrowAcc;
    }, 0);

    return acc + count;
  }, 0);
}

function getBooksPossessedByAccount(account, books, authors) {
  return books
    .filter((book) => {
      const recent = book.borrows[0];
      return !recent.returned && recent.id === account.id;
    })
    .map((book) => {
      const author = authors.find((author) => author.id === book.authorId);
      return { ...book, author };
    });
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getAccountFullNames,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
