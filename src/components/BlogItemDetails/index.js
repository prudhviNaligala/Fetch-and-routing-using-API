// Write your JS code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'

class BlogItemDetails extends Component {
  state = {blogItemData: {}, isLoading: true}

  componentDidMount() {
    this.getBlogItemDetails()
  }

  getBlogItemDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()
    const updatedData = {
      id: data.id,
      title: data.title,
      author: data.author,
      content: data.content,
      topic: data.topic,
      imageUrl: data.image_url,
      avatarUrl: data.avatar_url,
    }
    this.setState({blogItemData: updatedData, isLoading: false})
  }

  renderBlogItemData = () => {
    const {blogItemData} = this.state
    const {title, author, content, imageUrl, avatarUrl} = blogItemData
    return (
      <div className="blog-details-container">
        <h1 className="title-txt">{title}</h1>
        <div className="avatar-and-avatarTxt-container">
          <img className="avatar-image" src={avatarUrl} alt={author} />
          <p>{author}</p>
        </div>
        <img className="content-image" src={imageUrl} alt={title} />
        <p className="content">{content}</p>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state

    return (
      <div className="bg-container">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          this.renderBlogItemData()
        )}
      </div>
    )
  }
}

export default BlogItemDetails
