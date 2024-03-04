//import logo from './logo.svg';
import './Home.css';
import { loadPosts } from '../../Load/load-posts'
import { Posts } from '../../Components/Posts/posts';
import { TextInput } from '../../Components/TextInput/input';
import { useState } from 'react';
import { useEffect } from 'react';
import { useCallback } from 'react';
// import { Button } from '../../Components/Button/button'

export const Home = () => {
  const [posts, setPosts] = useState([])
  const [allPosts, setAllPosts] = useState([])
  const [page, setPage] = useState(0)
  const [postsPerPage] = useState(10)
  const [searchValue, setSearchValue] = useState('')

  const noMorePosts = page + postsPerPage >= allPosts.length
  const filteredPosts = !!searchValue ? allPosts.filter(posts => {
    return posts.title.toLowerCase().includes(searchValue.toLowerCase())
  }) : posts

  const handleLoadPosts = useCallback(async (page, postsPerPage) => {
    const postsAndPhotos = await loadPosts()
    setPosts(postsAndPhotos.slice(page, postsPerPage))
    setAllPosts(postsAndPhotos)
  }, [])
  useEffect(() => {
    handleLoadPosts(0, postsPerPage)
  }, [handleLoadPosts, postsPerPage])
  const loadMorePosts = () => {
    const nextPage = page + postsPerPage
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage)
    console.log(page, postsPerPage, nextPage, nextPage + postsPerPage)
    posts.push(...nextPosts)
    setPosts(posts)
    setPage(nextPage)
  }

  const handleChange = (e) => {
    const { value } = e.target
    setSearchValue(value)
  }
  return (
    <section className='box'>
      <div className='search-box'>
        {!!searchValue && (
          <h1>Search Value: {searchValue}</h1>
        )}
        <TextInput searchValue={searchValue} handleChange={handleChange} />
      </div>
      {filteredPosts.length > 0 && (
        <Posts posts={filteredPosts} />
      )}
      {filteredPosts.length === 0 && (
        <p>Não existem posts</p>
      )}
      <div className="button-box" >
        {!searchValue && (
          <button text="Load more posts"
            onClick={loadMorePosts}
            disabled={noMorePosts} />
        )}
      </div>
    </section>
  )
}



/**export class Home2 extends Component {
  state = {
    posts: [],
    allPosts: [],
    page: 0,
    postsPerPage: 3,
    searchValue: ''
  }

  async componentDidMount() {
    await this.loadPosts()
  }

  loadPosts = async () => {
    const { page, postsPerPage } = this.state
    const postsAndPhotos = await loadPosts()
    this.setState({
      posts: postsAndPhotos.slice(page, postsPerPage),
      allPosts: postsAndPhotos
    })
  }

  loadMorePosts = () => {
    const {
      page,
      postsPerPage,
      allPosts,
      posts
    } = this.state
    const nextPage = page + postsPerPage
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage)
    console.log(page, postsPerPage, nextPage, nextPage + postsPerPage)
    posts.push(...nextPosts)
    this.setState({ posts, page: nextPage })
  }

  handleChange = (e) => {
    const { value } = e.target
    this.setState({ searchValue: value })
  }

  render() {

    const filteredPosts = !!searchValue ? allPosts.filter(posts => {
      return posts.title.toLowerCase().includes(searchValue.toLowerCase())
    }) : posts
    return (
      <section className='box'>
        <div className='search-box'>
          {!!searchValue && (
            <h1>Search Value: {searchValue}</h1>
          )}
          <TextInput searchValue={searchValue} handleChange={this.handleChange} />
        </div>
        {filteredPosts.length > 0 && (
          <Posts posts={filteredPosts} />
        )}
        {filteredPosts.length === 0 && (
          <p>Não existem posts</p>
        )}
        <div className="button-box" >
          {!searchValue && (
            <button text="Load more posts"
              onClick={this.loadMorePosts}
              disabled={noMorePosts} />
          )}
        </div>
      </section>
    )
  }

}**/
