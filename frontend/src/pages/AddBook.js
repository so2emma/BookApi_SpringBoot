import React, { useEffect } from 'react'
import api from "../api/AxiosConfig"

const AddBook = () => {



  return (
    <div>
        <div className='container mx-auto px-4 sm:px-6 md:px-8 lg:px-10'>
        <form>
            <div className='input-group'>
                <label htmlFor="">Name:</label>
                <input type="text" name='name' placeholder='Enter name of Book'/>
            </div>
            <div className='input-group'>
                <label htmlFor="">Author:</label>
                <input type="text" name='author'placeholder='Enter name of Author'/>
            </div>
            <div className='input-group'>
                <label htmlFor="">Publisher:</label>
                <input type="text" name='publisher' placeholder='Enter name of Publisher'/>
            </div>
            <div className='input-group'>
                <label htmlFor="">ISBN:</label>
                <input type="text"  name='isbn' placeholder='Enter ISBN'/>
            </div>

            <div className='flex justify-center'>
                <button className='bg-green-500 text-white p-4 rounded-md'>New Book</button>
            </div>
        </form>
        </div>

      
    </div>
  )
}

export default AddBook
