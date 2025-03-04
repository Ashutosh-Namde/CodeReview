import prism from 'prismjs'
import "prismjs/themes/prism-tomorrow.css"
import { useEffect, useState } from 'react'
import Editor from 'react-simple-code-editor'
import axios from 'axios'
import Markdown from 'react-markdown'
import rehypeHightLight from 'rehype-highlight'
import "highlight.js/styles/github-dark.css"
const App = () => {

  const [code, setcode] = useState(`function sum(){
  return a+b
}`)

const [review, setreview] = useState(``)

  useEffect(()=>{
    prism.highlightAll()
  },[])

  const  clickHandeler = async()=>{
    const response = await axios.post("http://localhost:3000/ai/get-review",{code})
    setreview(response.data)
    
  }
  return (
    <div className='h-screen w-full flex text-white bg-[#252525]'>
    <div className="left p-2  w-1/2  h-screen m-0 relative">
    <div className="code h-full bg-[#0A0A0A]  ">
     <Editor 
     value={code}
     onValueChange={code=> setcode(code)}
     highlight={code => prism.highlight(code,prism.languages.javascript,"javascript")}
     padding={10}
     style={{
      fontFamily: '"Fira code", "Fira Mono", monospace',
      fontSize: 16,
      border: "1px solid #ddd",
      borderRadius: "5px",
      height: "100%",
      width: "100%"
    }}></Editor>
    </div>
       <button onClick={clickHandeler} className="rounded-md text-black font-semibold text-sm py-1 cursor-pointer bg-[#84849A] absolute bottom-4 left-[85%] pointer-events-auto px-4 ">REVIEW</button>
    </div>
    <div className="right p-2   w-1/2 ">
    <div className="code  h-full  rounded-md  p-2 pl-4 overflow-auto bg-[#343434]  ">
<Markdown 
rehypePlugins={[rehypeHightLight]}>{review}</Markdown>
    </div>
    </div>
    </div>
  )
}


export default App