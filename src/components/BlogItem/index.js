// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {blogsData} = props
  const {id, author, title, topic, imageUrl, avatarUrl} = blogsData

  return (
    <Link to={`blogs/${id}`} className="blog-item-container">
      <div className="blog-item-background">
        <img className="image" src={imageUrl} alt={`images${id}`} />
        <div className="title-and-topic">
          <p className="topic">{topic}</p>
          <h1 className="title-txt">{title}</h1>
          <div className="avatar-author">
            <img className="avatar" src={avatarUrl} alt={author} />
            <p className="avatar-txt">{author}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default BlogItem
