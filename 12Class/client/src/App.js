
import React, { useState, useEffect } from 'react';
import './App.css';
import Axios from 'axios';

function App() {

  const [bookList, setBookList] = useState([])   //create a state for retrieving booklist
  const getData = () => {
    Axios.get('http://localhost:3001/read').then(res => {
      setBookList(res.data)
    })
  }

  getData();

  const [title, settitle] = useState('')
  const [isbn, setisbn] = useState('')
  const [pageCount, setpageCount] = useState(0)
  const [shortDescription, setshortDescription] = useState('')
  const [newtitle, setnewtitle] = useState('')

  // useEffect(() => {
  //   Axios.get("http://localhost:3001/read").then((response) => {
  //     setBookList(response.data)
  //   })
  // }, [])


  const clearField = () => {

    settitle('');
    setisbn('');
    setpageCount('');
    setshortDescription('');
    setnewtitle('')

  }


  const addToList = () => {
    // console.log(title+isbn)
    Axios.post('http://localhost:3001/insert', {
      title: title, isbn: isbn, pageCount: pageCount, shortDescription: shortDescription
    })
    clearField();
    getData();
  }
  const updateTitle = (id) => {
    Axios.put('http://localhost:3001/update', {
      id: id,
      newtitle: newtitle
    })
    clearField();
    getData();

  }


  const deleteBook = (id) => {
    Axios.delete(`http://localhost:3001/delete/${id}`)
    getData();

  }
  return (
    <div className="App">
      <h1>CRUD APP with MERN</h1>
      <label>Title</label><input type="text" value={title} onChange={(event) => { settitle(event.target.value) }} ></input>
      <label>ISBN</label><input type="text" value={isbn} onChange={(event) => { setisbn(event.target.value) }}></input>
      <label>Page Count</label><input type="number" value={pageCount} onChange={(event) => { setpageCount(event.target.value) }}></input>
      <label>Short Description</label><input type="text" value={shortDescription} onChange={(event) => { setshortDescription(event.target.value) }}></input>
      <button onClick={addToList}>Add</button>

      <h1>Book List</h1>
      <table id='books'>
        <thead>
          <th>Title</th><th>ISBN</th><th>Page Count</th><th>Short Description</th><th>Action</th>
        </thead>
        <tbody>
          {bookList.map((val, key) => {
            return (
              <tr>
                <td>
                  {val.title} <input type='text' placeholder='New Title' onChange={(event) => { setnewtitle(event.target.value); }}></input>
                  <button onClick={() => updateTitle(val._id)}>Update</button>
                </td>
                <td>{val.isbn}</td>
                <td>{val.pageCount}</td>
                <td>{val.shortDescription}</td>
                <td><button onClick={() => deleteBook(val._id)}>DELETE</button></td>
              </tr>)
          })}
        </tbody>
      </table>
    </div >
  );
}
export default App;