import axios from "axios"
import { Appbar } from "../components/Appbar"
import  BACKEND_URL  from "../config.ts"
import { ChangeEvent, useState } from "react"
import { useNavigate } from "react-router-dom"

export const Publish = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const navigate = useNavigate()
const handlePusblish=async () => {
    if(title!="" && description!=""){
    const response = await axios.post(`${BACKEND_URL}/api/v1/blog`, {
        title,
        content: description
        
    }, {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
    });
    navigate(`/blog/${response.data.id}`)
    }
    else{
       alert("Fill the details");
    }

}
  return (
    <div><Appbar />
        <div className="flex justify-center w-full pt-8">
            <div className="max-w-screen-lg w-full">
                {/* <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label> */}
                <input onChange={(e) => {
                    setTitle(e.target.value)
                }} type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your Title">
                </input>
                <TextEditor onChange={(e) => {
                    setDescription(e.target.value)
                }} />
                <button onClick={handlePusblish} type="submit" className="mt-4 inline-flex items-center px-3 py-2.5 text-sm font-medium text-center text-white bg-black rounded-lg focus:ring-4 focus:ring-black ">
                    Publish post
                </button> 
            </div>   

     </div>
    </div>
  )
}

function TextEditor({ onChange }: { onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void}){
    return(
<div className="mt-8">
   <div className="w-full mb-4">
       <div className="flex items-center justify-between px-3 py-2 border">
       
        <div className="my-2 bg-white rounded-b-lg w-full">
            <label  className="sr-only">Publish post</label>
            <textarea onChange={onChange} id="editor" rows={8} className="border-none block w-full px-0 text-sm focus:outline-none text-gray-800 bg-white  " placeholder="Write a blog..." required ></textarea>
        </div>
   </div>
   
   </div>
</div>
    )
}