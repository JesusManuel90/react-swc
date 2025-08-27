import axios from 'axios';
import {useState, useEffect, useMemo} from 'react';
import {API_URL, POSTS_PER_PAGE} from '../../constants/post';

export const usePosts = () => {
    const [allPosts, setAllPosts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                setIsLoading(true);
                setError(null);
                const response = await axios.get(`${API_URL}/posts`);
                if (response.status !== 200) {
                    throw new Error('Error al obtener los datos');
                }
                setAllPosts(response.data);
            } catch (err) {
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        };
        fetchPosts();
    }, []);

    const totalPosts = useMemo(() => allPosts.length, [allPosts]);

    const paginatedPosts = useMemo(() => {
        const filteredPosts = allPosts.filter(post =>
            post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            post.body.toLowerCase().includes(searchTerm.toLowerCase())
        );

        const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
        const endIndex = startIndex + POSTS_PER_PAGE;

        return filteredPosts.slice(startIndex, endIndex);
    }, [allPosts, searchTerm, currentPage]);

    const totalPages = useMemo(() => {
        const filteredPosts = allPosts.filter(post =>
            post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            post.body.toLowerCase().includes(searchTerm.toLowerCase())
        );
        return Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
    }, [allPosts, searchTerm]);


    return {
        totalPosts,
        posts: paginatedPosts,
        isLoading,
        error,
        searchTerm,
        setSearchTerm,
        currentPage,
        setCurrentPage,
        totalPages,
    };
};
