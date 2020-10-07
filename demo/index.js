import React from 'react'
import ReactDOM from 'react-dom'
import CodeMirror from '../index'

const Editor = props => <CodeMirror/>

const App = props => {
    return <div>
        <Editor/>
    </div>
}

ReactDOM.render(<App/>, document.getElementById('container')) 