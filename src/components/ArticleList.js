import React from 'react'
import Article from './Article'
const ArticleList = ({posts}) => {
  let key = 0
  const article = posts.map(post=>{
    console.log()
  return <Article key={key++} title={post.title} date={post.date} preview={post.preview} mins={post.minutes}/>
})
  return (
    <>
      <main>
        {article}
      </main>
    </>
  )
}

export default ArticleList
