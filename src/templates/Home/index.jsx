import "./styles.css";
import { useState, useEffect, useCallback } from "react";


import { loadPosts } from "../../utils/load-posts";
import Posts from "../../components/Posts/Posts";
import TextInput from "../../components/TextInput/TextInput";
import Button from "../../components/Button/Button";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [allPosts, setAllPosts] = useState([]);
  const [page, setPage] = useState(0);
  const [postsPerPage] = useState(10);
  const [searchValue, setSearchValue] = useState("");

  const filteredPosts = !!searchValue
    ? allPosts.filter((post) => {
        return post.title.toLowerCase().includes(searchValue.toLowerCase());
      })
    : posts;

  const noMorePosts = page + postsPerPage >= allPosts.length;

  const handleChange = (e) => {
    const { value } = e.target;
    setSearchValue(value);
  };

  const handleLoadPosts = useCallback(async (page, postsPerPage) => {
    const postsAndPhotos = await loadPosts();

    setPosts(postsAndPhotos.slice(page, postsPerPage));
    setAllPosts(postsAndPhotos);
  }, []);

  const loadMorePosts = () => {
    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);
    posts.push(...nextPosts);

    setPosts(posts);
    setPage(nextPage);
  };

  useEffect(() => {
    handleLoadPosts(0, postsPerPage);
  }, [handleLoadPosts, postsPerPage]);

  return (
    <div className="container">
      <header className="header-container">
        <nav className="header-nav">
          <span className="logo">myReactBlog</span>
          <div className="search-container">
            <label htmlFor="search-words">Search</label>
            <TextInput searchValue={searchValue} handleChange={handleChange} />
          </div>
        </nav>
      </header>
      {filteredPosts.length > 0 && <Posts posts={filteredPosts} />}
      {filteredPosts.length === 0 && (
        <p style={{ color: "red" }}>Não existem posts com essa(s) palavra(s)</p>
      )}
      {!searchValue && (
        <>
          <Button
            disabled={noMorePosts}
            text="Load more posts"
            onClick={loadMorePosts}
          />
        </>
      )}
    </div>
  );
}
