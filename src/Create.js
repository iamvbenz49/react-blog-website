import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
const Create = () => {

    const[title,setTitle] = useState("");
    const[body,setBody] = useState("");
    const[author,setAuthor] = useState("vijay");
    const[isPending,setisPending] = useState(false);
    const history = useHistory();
    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {title,body,author}
        setisPending(true);
        fetch('http://localhost:8000/blogs',{
            method:'POST',
            headers:{"Content-Type":"application/json"},
            body: JSON.stringify(blog)
        }).then(()=>{
            console.log("new blog added");
            setisPending(false);
        });
        history.push('/');
    }
    return (
        <div className="create">
            <h1>Add a New Blog</h1>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input 
                type="text" 
                required 
                value={title}
                onChange={(e) => setTitle(e.target.value)}>

                </input>
                <label>Blog Body:</label>
                <textarea 
                required
                value={body}
                onChange={(e) => setBody(e.target.value)}>
                </textarea>
                <select
                value={author}
                onChange={(e) => setAuthor(e.target.value)}>
                    <option value="vijay">
                        vijay
                    </option>
                    <option value="benz">
                        benz
                    </option>
                    <option value="wayne">
                        wayne
                    </option>
                </select>
                {!isPending && <button>Add blog</button>}
                {isPending && <button disabled>Add blog...</button>}
            </form>
        </div>
    )
}

export default Create;