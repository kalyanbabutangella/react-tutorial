import React from 'react';
import BlogList from './BlogList';
import useFetch from './useFetch';


const Home = () => {

    const {data:blogs,isLoading,error} = useFetch("http://localhost:8000/blogs")

    // const handleDelete=(id)=>{
    //     const newBlogs = blogs.filter(Blog=>Blog.id!==id);
    //     setBlogs(newBlogs)
    // }


    // const [name,setName]=useState('Kalyan');
    // const [age,setAge]=useState(22);
    // const handleClick=()=>{
    //     setName('Nani')
    //     setAge(21)
    // }
    // const handleClickagain=(name,e)=>{
    //     console.log("Hello "+name,e.target)
    // }

    return ( 
        <div className="home">
            {error && <div>{error}</div>}
            {isLoading && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs!" />}

            {/* <BlogList blogs={blogs.filter((Blog)=>Blog.author==="Nani")} title="Nani Blogs!"/> */}
            {/* <h2>HomePage</h2>
            <p>{name} is {age} years old</p>
            <button onClick={handleClick}>Click Me</button> */}
            {/* <button onClick={(e)=>handleClickagain("kalyan",e)}>Click Me Again</button> */}
        </div>
    );
}

export default Home; 