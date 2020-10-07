import React from 'react'
import ReactDOM from 'react-dom'
import ReactCode from '../index'
import 'codemirror/theme/darcula.css'
import 'codemirror/keymap/sublime'


const App = props => {    
    return <div>
        <h2>React Code Mirror</h2>
        <ReactCode height={600} width={`100%`} theme={'darcula'} mode={'haskell'} lineNumbers={true}/>
    </div>
}

ReactDOM.render(<App/>, document.getElementById('container')) 