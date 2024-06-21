import React from 'react';
import '../styles/NewPost.css';

const NewPost = () => {
  return (
    <div className="new-post">
      <h2>Inserir novo Post</h2>
      <form>
        <div className="form-control">
          <label htmlFor="title">Título:</label>
          <input 
          type="text"
          name="title"
          id="title"
          placeholder='DIgite o título'
          />
        </div>
        <div className="form-control">
          <label htmlFor="body">Título:</label>
          <textarea
          name="body"
          id="body"
          cols="30"
          rows="10"
          placeholder='Digite o conteúdo'
          ></textarea>
        </div>
        <input type="submit" value="Criar Post" className='btn' />
      </form>
    </div>
  )
}

export default NewPost;