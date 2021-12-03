import { Link } from "react-router-dom";

const BlogList = ({blogs,title}) => {

    return ( 
        <div className="blog-list">
            <h2>{title}</h2>
            {
                blogs.map((Blog)=>(
                    <div className="blog-preview" key={Blog.id}>
                        <Link to={`/blogs/${Blog.id}`}>
                        <h2>{Blog.title}</h2>
                        </Link>
                        <p>Written by {Blog.author}</p>
                        {/* <button onClick={()=>handleDelete(Blog.id)}>Delete Blog</button> */}
                    </div>
                ))
            }
        </div>
    );
}

export default BlogList;