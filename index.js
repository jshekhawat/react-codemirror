import React, {useEffect, useRef, useState} from 'react'
import CodeMirrorDep from 'codemirror'


const CodeMirror = ({}) => {
    const editorInst = useState()
    const editorRef = useRef()
        

    useEffect(() => {
        CodeMirrorDep.fromTextArea(editorRef.current)
    }, [])

    return (<textarea ref={editorRef}/>)
}

export default CodeMirror