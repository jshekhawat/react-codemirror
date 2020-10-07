import React from 'react'
import ReactDOM from 'react-dom'
import CodeMirror from '../index'


const App = props => {
    return <div>
        <h2>React Code Mirror</h2>
        <CodeMirror height={600} width={`100%`} theme={'darcula'} />
    </div>
}

ReactDOM.render(<App/>, document.getElementById('container')) 