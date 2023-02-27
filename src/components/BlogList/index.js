import {Component} from 'react'
import Loader from 'react-loader-spinner'

import BlogItem from '../BlogItem/index'

import './index.css'

class BlogList extends Component {
  state = {blogsData: {}, isLoading: true}

  componentDidMount() {
    this.getBlogData()
  }

  getBlogData = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()
    const updatedData = data.map(eachItem => ({
      id: eachItem.id,
      author: eachItem.author,
      title: eachItem.title,
      topic: eachItem.topic,
      imageUrl: eachItem.image_url,
      avatarUrl: eachItem.avatar_url,
    }))
    this.setState({blogsData: updatedData, isLoading: false})
    console.log(updatedData)
  }

  render() {
    const {blogsData, isLoading} = this.state
    return (
      <div className="blogs-list-container">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          blogsData.map(eachItem => (
            <BlogItem blogsData={eachItem} key={eachItem.id} />
          ))
        )}
      </div>
    )
  }
}

export default BlogList
