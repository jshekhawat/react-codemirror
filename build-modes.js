const fs = require('fs')

const modesPath = './modes.js'


const writeModes = () => {
    if(fs.existsSync(modesPath)) {
       fs.unlinkSync(modesPath)
    }

    const modes = fs.readdirSync('node_modules/codemirror/mode', {withFileTypes: true})
                                    .filter(m => m.isDirectory())
                                        
    const lazyFunc = `const loadMode = async mode => {
    switch(mode) {
    ${modes.map(
        m => `case '${m.name}':
        await import ('codemirror/mode/${m.name}/${m.name}.js')
        break
        `).join('\n')}
        }
    }
    export default loadMode
    
    `
    fs.writeFileSync(modesPath, lazyFunc, 'utf-8')
    

}

writeModes()