import React from 'react'

const Article = ({title, date="January 1, 1970", preview, mins}) => {
    let emoji = ''
    let bentoBox = ''
    if(mins < 30){
        for(let i=0; i<mins; i+=5 ){
            emoji += '☕️'
        }
    }else {
        for(let i=0; i<mins; i+=10 ){
            bentoBox += '🍱'
        }
    }
      
  return (
    <>
      <article>
        <h3>{title}</h3>
        <small>{date} : {mins < 30 ? <span>{emoji}{mins} min read</span>: <span>{bentoBox}{mins} min read</span>}</small>
        <p>{preview}</p>
      </article>
    </>
  )
}

export default Article
