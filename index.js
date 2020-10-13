import React, {useEffect, useMemo, useRef, useState} from 'react'
import CodeMirrorDep from 'codemirror'
import loadMode from './modes'
import 'codemirror/mode/meta'
import './codemirror.css'


const CodeMirror = (props) => {
    const {width, height, mode, value, ...options} = props
    const [editorInst, setInstance] = useState()
    const editorRef = useRef()       

    useEffect(() => {        
        if (!editorInst) {            
            const editor = CodeMirrorDep.fromTextArea(editorRef.current, {...options})            
            editor.setSize(width, height)
            if (mode) {
                const codeMode = CodeMirrorDep.findModeByName(mode)                           
                loadMode(codeMode)
                editor.setOption("mode", codeMode.mime)
            }            
            editor.setValue(value)              
            Object.keys(options).forEach(key => {
                editor.setOption(key, options[key])
            })
            setInstance(editor)
        }

        
        //cleanup
        return () => {
            if(editorInst) {
                setInstance(undefined)
            }          
        }
    }, [])

    useMemo(() => {
        if(!editorInst) return
        if (!!value && value !== editorInst.value) {
            editorInst.setValue(value)
        } 
    }, [value])

    return (<textarea ref={editorRef}/>)
}

export default CodeMirror