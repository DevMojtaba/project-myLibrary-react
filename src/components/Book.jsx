import React from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { getBook, deleteBook } from '../data/data';
import CS from './Book.module.scss'

const Book = () => {
    const demo = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    const book = getBook(parseInt(demo.bookId));

    // console.log(demo)
    // console.log(book)

    if(book){
        return (
            <main className={CS.bookContainer} >

            <h3>نام کتاب :<span>{book.name}</span></h3>

            <h4>قیمت کل : <span>{`${book.amount} تومان`}</span></h4>

            <h5>
              تاریخ انتشار : <span>{book.due}</span>
            </h5>

            <p>
              <button onClick={() => {
                deleteBook(book.number)
                navigate(`/books${location.search}`)
              }}>حذف کتاب</button>
            </p>

          </main>
        );
    }else{
        return <div className="imageNotFound">
        <img  src={require('../assets/404.gif')} />
      </div>
    }
};

export default Book;