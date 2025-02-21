import axios from "axios";
import { useEffect, useState } from "react"
import BACKEND_URL from "../config";

export  interface Blog{
    "content": string;
    "title": string;
    "id": number;
    "author": {
        "name": string
    }
}


export const useBlog = ({ id }: { id: string }) =>{
    const [loading, setLoading] = useState(true);
    const [blog, setBlog] = useState<Blog>();

    useEffect(() => {
        axios.get(`${BACKEND_URL}/api/v1/blog/${id}`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        })
            .then(response => {
                setBlog(response.data);
                console.log(response.data);
                setLoading(false)
            })
    },[]);

    return {
        loading,
        blog
    }
}

export const useBlogs = () => {
    const [loading, setLoading] = useState(true);
    const [blogs, setBlogs] = useState<Blog[]>([]);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await axios.get(`${BACKEND_URL}/api/v1/blog/bulk`, {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                });
    
                // Only update state if new data is different
                if (JSON.stringify(response.data.posts) !== JSON.stringify(blogs)) {
                    setBlogs(response.data.posts);
                }
            } catch (error) {
                console.error("Error fetching blogs:", error);
            } finally {
                setLoading(false);
            }
        };
    
        fetchBlogs(); // Initial fetch
    
        const interval = setInterval(fetchBlogs, 60000); // Fetch every 60 seconds
    
        return () => clearInterval(interval); // Cleanup on unmount
    }, []); // Runs only on mount
    

    return {
        loading,
        blogs,
    };
};
