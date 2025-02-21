import { ChangeEvent, useState } from 'react'
import axios from "axios"
import { SignupType} from 'common-dev-pav';
import { useNavigate,Link } from 'react-router-dom';
import  BACKEND_URL  from "../config.ts"

const Auth = ({type}: {type: "signup" | "signin"}) => {
    const navigate = useNavigate();
    const [postInputs,setPostsInputs]=useState<SignupType>({
        
        email:"",password:"",name:""
    });
    async function sendRequest () {
        try{
          const response = await axios.post(`${BACKEND_URL}/api/v1/user/${type === "signup" ? "signup" : "signin"}`, postInputs);
          const jwt = response.data.jwt;
          console.log(jwt);
          localStorage.setItem("token", jwt);
          navigate("/blogs")
        } catch (e){
          alert("Error while signing up"+e)
        }
      }
    
  return (
    <div> <div className="h-screen flex justify-center flex-col">
      <div className="flex justify-center">
        <div>
          <div className="text-4xl font-extrabold pb-2">
          Welcome to Medium! <br /> <div className='text-3xl font-extrabold pb-2'>Create an account</div> <div className="text-2xl text-slate-500 mt-3 mb-3">
                {type === "signin" ? "Dont have an account:?" : "Already have an account?"}
                <Link className="pl-2 underline" to={type=== "signin" ? "/" : "/signin"}>
                  {type === "signin" ? "Sign Up" : "Sign In"}
                </Link>
            </div>
          </div>
          <LabelledInput type="text" placeholder='abc@gmail.com' label='Enter Email' onChange={(e)=>{
            setPostsInputs({...postInputs,email:e.target.value});
          }}/>
          <LabelledInput type="text" placeholder='*****' label='Password' onChange={(e)=>{
            setPostsInputs({...postInputs,password:e.target.value});
          }}/>

<div>          <button onClick={sendRequest} type="button" className="mt-6 w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">{type === "signup" ? "Sign Up" : "Sign In"}</button></div>
          </div>
         

       </div>        
      </div>
    </div>
  )
}
interface LabelledInputType{
    label:string,
    placeholder:string,
    onChange:(e:ChangeEvent<HTMLInputElement>)=>void,
    type?:string
}
function LabelledInput({label,placeholder,onChange,type}:LabelledInputType){
    return (
        <div className="pt-3 grid w-full max-w-sm items-center ">
<label className="text-lg font-medium ">{label}</label><br/>
<input className="flex h-12 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm" type={type || "text"} placeholder={placeholder} onChange={onChange} required/>

        </div>
    )
}
export default Auth