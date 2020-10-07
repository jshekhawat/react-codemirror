import React, {useEffect, useRef, useState} from 'react'
import CodeMirrorDep from 'codemirror'


const CodeMirror = ({}) => {
    const editorInst = useState({})
    const editorRef = useRef()
        

    useEffect(() => {        
        if (!!editorInst) 
            editorInst = CodeMirrorDep.fromTextArea(editorRef.current)

        

        //cleanup
        return () => {
            editorInst = undefined
        }
    }, [])

    return (<textarea ref={editorRef}/>)
}

export default CodeMirror