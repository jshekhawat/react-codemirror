import React, {useEffect, useRef} from 'react'
import CodeMirrorDep from 'codemirror'


const CodeMirror = ({}) => {

    const editorRef = useRef()
        

    useEffect(() => {
        CodeMirrorDep.fromTextArea(editorRef.current)
    }, [])

    return (<textarea ref={editorRef}/>)
}

export default CodeMirror