let books = [
  {
    name: "خودت را به فنا نده",
    number: 15,
    amount: "35,000",
    due: "1400/10/12",
  },
  {
    name: "تختخوابت را مرتب کن",
    number: 16,
    amount: "27,000",
    due: "1401/01/12",
  },
  {
    name: "عادت های اتمی",
    number: 17,
    amount: "145,000",
    due: "1400/01/12",
  },
  {
    name: "نمی گذارم کسی اعصابم را به هم بریزد",
    number: 18,
    amount: "110,000",
    due: "1400/01/12",
  },
  {
    name: "کیمیاگر",
    number: 19,
    amount: "60,000",
    due: "1401/01/12",
  },
  {
    name: "هنر ظریف رهایی",
    number: 20,
    amount: "80,000",
    due: "1401/01/12",
  },
  {
    name: "آئین زندگی",
    number: 21,
    amount: "50,000",
    due: "1401/01/12",
  },
  {
    name: "زمان حال",
    number: 22,
    amount: "65,000",
    due: "1400/12/22",
  },
  {
    name: "مدیریت زمان",
    number: 23,
    amount: "42,000",
    due: "1400/08/03",
  },
  {
    name: "اثر مرکب",
    number: 24,
    amount: "75,000",
    due: "1399/01/12",
  },
  {
    name: "انگیزه",
    number: 25,
    amount: "52,000",
    due: "1401/02/14",
  },
  {
    name: "محدودیت صفر",
    number: 26,
    amount: "80,000",
    due: "1401/02/14",
  },
];

export const getBooks = () => {
  return books;
};

export const getBook = (number) => {
  return books.find((book) => book.number === number);
};

export const deleteBook = numner => {
  books = books.filter((book) => book.number !== numner)
}