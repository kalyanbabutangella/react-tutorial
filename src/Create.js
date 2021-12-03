import { useState } from "react";
import { useHistory } from "react-router";

const Create = () => {
    const [title,setTitle]=useState('')
    const [body,setBody]=useState('')
    const [author,setAuthor]=useState('mario')
    const [isPending, setisPending] = useState(false)

    const history =useHistory()

    const handleSubmit = (e) =>{
        e.preventDefault();
        const blog = {title,body,author};
        console.log(blog)

        setisPending(true)

        fetch('http://localhost:8000/blogs/',{
            method:'POST',
            headers:{"Content-Type":"application/json"},
            body: JSON.stringify(blog)
        })
        .then(()=>{
            console.log("new Blog")
            setisPending(false)
            history.push('/')
        })

    }


    return ( 
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title :</label>
                <input 
                    type="text"
                    value={title}
                    onChange={(e)=>setTitle(e.target.value)}
                    required
                />
                <textarea
                    value={body}
                    onChange={(e)=>setBody(e.target.value)}
                    required
                ></textarea>
                <label>Blog Author:</label>
                <select
                    value={author}
                    onChange={(e)=>setAuthor(e.target.value)}
                    required
                >
                    <option value="mario">Mario</option>
                    <option value="yoshi">Yoshi</option>
                </select>
                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled>Adding Blog...</button>}
                <p>{title}</p>
                <p>{body}</p>
                <p>{author}</p>
            </form>
        </div>
    );
}

export default Create;