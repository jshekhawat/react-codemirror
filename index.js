import React, {useEffect, useRef, useState} from 'react'
import CodeMirrorDep from 'codemirror'


const CodeMirror = (props) => {
    const {width, height, ...options} = props
    const [editorInst, setInstance] = useState()
    const editorRef = useRef()
        

    useEffect(() => {        
        if (!!editorInst) {
            const editor = CodeMirrorDep.fromTextArea(editorRef.current, {...options})
            editor.setSize({
                width,
                height
            })
            setInstance(editor)
        }

        //cleanup
        return () => {            
            setInstance(undefined)
        }
    }, [])

    return (<textarea ref={editorRef}/>)
}

export default CodeMirror