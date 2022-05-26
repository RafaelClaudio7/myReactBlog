import './styles.css';
import { useState, useEffect, useCallback } from 'react';


import Header from '../../components/Header/Header';
import { loadPosts } from '../../utils/load-posts';
import Posts from '../../components/Posts/Posts';

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [allPosts, setAllPosts] = useState([]);
  const [page, setPage] = useState(0);
  const [postsPerPage] = useState(6);
  const [searchValue, setSearchValue] = useState('');

  const handleLoadPosts = useCallback (async (page, postsPerPage) => {
    const postsAndPhotos = await loadPosts();

    setPosts(postsAndPhotos.slice(page, postsPerPage));
    setAllPosts(postsAndPhotos);
  }, []);

  useEffect(() => {
    handleLoadPosts(0, postsPerPage);
  }, [handleLoadPosts, postsPerPage]);


  return (
    <div className="home-page">
      <header className="home-header">
        <Header />
        <Posts posts={allPosts}/>
      </header>
    </div>
  );
}


