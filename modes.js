const loadMode = async mode => {
    switch(mode) {
    case 'apl':
        await import ('codemirror/mode/apl/apl.js')
        break
        
case 'asciiarmor':
        await import ('codemirror/mode/asciiarmor/asciiarmor.js')
        break
        
case 'asn.1':
        await import ('codemirror/mode/asn.1/asn.1.js')
        break
        
case 'asterisk':
        await import ('codemirror/mode/asterisk/asterisk.js')
        break
        
case 'brainfuck':
        await import ('codemirror/mode/brainfuck/brainfuck.js')
        break
        
case 'clike':
        await import ('codemirror/mode/clike/clike.js')
        break
        
case 'clojure':
        await import ('codemirror/mode/clojure/clojure.js')
        break
        
case 'cmake':
        await import ('codemirror/mode/cmake/cmake.js')
        break
        
case 'cobol':
        await import ('codemirror/mode/cobol/cobol.js')
        break
        
case 'coffeescript':
        await import ('codemirror/mode/coffeescript/coffeescript.js')
        break
        
case 'commonlisp':
        await import ('codemirror/mode/commonlisp/commonlisp.js')
        break
        
case 'crystal':
        await import ('codemirror/mode/crystal/crystal.js')
        break
        
case 'css':
        await import ('codemirror/mode/css/css.js')
        break
        
case 'cypher':
        await import ('codemirror/mode/cypher/cypher.js')
        break
        
case 'd':
        await import ('codemirror/mode/d/d.js')
        break
        
case 'dart':
        await import ('codemirror/mode/dart/dart.js')
        break
        
case 'diff':
        await import ('codemirror/mode/diff/diff.js')
        break
        
case 'django':
        await import ('codemirror/mode/django/django.js')
        break
        
case 'dockerfile':
        await import ('codemirror/mode/dockerfile/dockerfile.js')
        break
        
case 'dtd':
        await import ('codemirror/mode/dtd/dtd.js')
        break
        
case 'dylan':
        await import ('codemirror/mode/dylan/dylan.js')
        break
        
case 'ebnf':
        await import ('codemirror/mode/ebnf/ebnf.js')
        break
        
case 'ecl':
        await import ('codemirror/mode/ecl/ecl.js')
        break
        
case 'eiffel':
        await import ('codemirror/mode/eiffel/eiffel.js')
        break
        
case 'elm':
        await import ('codemirror/mode/elm/elm.js')
        break
        
case 'erlang':
        await import ('codemirror/mode/erlang/erlang.js')
        break
        
case 'factor':
        await import ('codemirror/mode/factor/factor.js')
        break
        
case 'fcl':
        await import ('codemirror/mode/fcl/fcl.js')
        break
        
case 'forth':
        await import ('codemirror/mode/forth/forth.js')
        break
        
case 'fortran':
        await import ('codemirror/mode/fortran/fortran.js')
        break
        
case 'gas':
        await import ('codemirror/mode/gas/gas.js')
        break
        
case 'gfm':
        await import ('codemirror/mode/gfm/gfm.js')
        break
        
case 'gherkin':
        await import ('codemirror/mode/gherkin/gherkin.js')
        break
        
case 'go':
        await import ('codemirror/mode/go/go.js')
        break
        
case 'groovy':
        await import ('codemirror/mode/groovy/groovy.js')
        break
        
case 'haml':
        await import ('codemirror/mode/haml/haml.js')
        break
        
case 'handlebars':
        await import ('codemirror/mode/handlebars/handlebars.js')
        break
        
case 'haskell':
        await import ('codemirror/mode/haskell/haskell.js')
        break
        
case 'haskell-literate':
        await import ('codemirror/mode/haskell-literate/haskell-literate.js')
        break
        
case 'haxe':
        await import ('codemirror/mode/haxe/haxe.js')
        break
        
case 'htmlembedded':
        await import ('codemirror/mode/htmlembedded/htmlembedded.js')
        break
        
case 'htmlmixed':
        await import ('codemirror/mode/htmlmixed/htmlmixed.js')
        break
        
case 'http':
        await import ('codemirror/mode/http/http.js')
        break
        
case 'idl':
        await import ('codemirror/mode/idl/idl.js')
        break
        
case 'javascript':
        await import ('codemirror/mode/javascript/javascript.js')
        break
        
case 'jinja2':
        await import ('codemirror/mode/jinja2/jinja2.js')
        break
        
case 'jsx':
        await import ('codemirror/mode/jsx/jsx.js')
        break
        
case 'julia':
        await import ('codemirror/mode/julia/julia.js')
        break
        
case 'livescript':
        await import ('codemirror/mode/livescript/livescript.js')
        break
        
case 'lua':
        await import ('codemirror/mode/lua/lua.js')
        break
        
case 'markdown':
        await import ('codemirror/mode/markdown/markdown.js')
        break
        
case 'mathematica':
        await import ('codemirror/mode/mathematica/mathematica.js')
        break
        
case 'mbox':
        await import ('codemirror/mode/mbox/mbox.js')
        break
        
case 'mirc':
        await import ('codemirror/mode/mirc/mirc.js')
        break
        
case 'mllike':
        await import ('codemirror/mode/mllike/mllike.js')
        break
        
case 'modelica':
        await import ('codemirror/mode/modelica/modelica.js')
        break
        
case 'mscgen':
        await import ('codemirror/mode/mscgen/mscgen.js')
        break
        
case 'mumps':
        await import ('codemirror/mode/mumps/mumps.js')
        break
        
case 'nginx':
        await import ('codemirror/mode/nginx/nginx.js')
        break
        
case 'nsis':
        await import ('codemirror/mode/nsis/nsis.js')
        break
        
case 'ntriples':
        await import ('codemirror/mode/ntriples/ntriples.js')
        break
        
case 'octave':
        await import ('codemirror/mode/octave/octave.js')
        break
        
case 'oz':
        await import ('codemirror/mode/oz/oz.js')
        break
        
case 'pascal':
        await import ('codemirror/mode/pascal/pascal.js')
        break
        
case 'pegjs':
        await import ('codemirror/mode/pegjs/pegjs.js')
        break
        
case 'perl':
        await import ('codemirror/mode/perl/perl.js')
        break
        
case 'php':
        await import ('codemirror/mode/php/php.js')
        break
        
case 'pig':
        await import ('codemirror/mode/pig/pig.js')
        break
        
case 'powershell':
        await import ('codemirror/mode/powershell/powershell.js')
        break
        
case 'properties':
        await import ('codemirror/mode/properties/properties.js')
        break
        
case 'protobuf':
        await import ('codemirror/mode/protobuf/protobuf.js')
        break        
case 'pug':
        await import ('codemirror/mode/pug/pug.js')
        break
        
case 'puppet':
        await import ('codemirror/mode/puppet/puppet.js')
        break
        
case 'python':
        await import ('codemirror/mode/python/python.js')
        break
        
case 'q':
        await import ('codemirror/mode/q/q.js')
        break
        
case 'r':
        await import ('codemirror/mode/r/r.js')
        break
        
case 'rpm':
        await import ('codemirror/mode/rpm/rpm.js')
        break
        
case 'rst':
        await import ('codemirror/mode/rst/rst.js')
        break
        
case 'ruby':
        await import ('codemirror/mode/ruby/ruby.js')
        break
        
case 'rust':
        await import ('codemirror/mode/rust/rust.js')
        break
        
case 'sas':
        await import ('codemirror/mode/sas/sas.js')
        break
        
case 'sass':
        await import ('codemirror/mode/sass/sass.js')
        break
        
case 'scheme':
        await import ('codemirror/mode/scheme/scheme.js')
        break
        
case 'shell':
        await import ('codemirror/mode/shell/shell.js')
        break
        
case 'sieve':
        await import ('codemirror/mode/sieve/sieve.js')
        break
        
case 'slim':
        await import ('codemirror/mode/slim/slim.js')
        break
        
case 'smalltalk':
        await import ('codemirror/mode/smalltalk/smalltalk.js')
        break
        
case 'smarty':
        await import ('codemirror/mode/smarty/smarty.js')
        break
        
case 'solr':
        await import ('codemirror/mode/solr/solr.js')
        break
        
case 'soy':
        await import ('codemirror/mode/soy/soy.js')
        break
        
case 'sparql':
        await import ('codemirror/mode/sparql/sparql.js')
        break
        
case 'spreadsheet':
        await import ('codemirror/mode/spreadsheet/spreadsheet.js')
        break
        
case 'sql':
        await import ('codemirror/mode/sql/sql.js')
        break
        
case 'stex':
        await import ('codemirror/mode/stex/stex.js')
        break
        
case 'stylus':
        await import ('codemirror/mode/stylus/stylus.js')
        break
        
case 'swift':
        await import ('codemirror/mode/swift/swift.js')
        break
        
case 'tcl':
        await import ('codemirror/mode/tcl/tcl.js')
        break
        
case 'textile':
        await import ('codemirror/mode/textile/textile.js')
        break
        
case 'tiddlywiki':
        await import ('codemirror/mode/tiddlywiki/tiddlywiki.js')
        break
        
case 'tiki':
        await import ('codemirror/mode/tiki/tiki.js')
        break
        
case 'toml':
        await import ('codemirror/mode/toml/toml.js')
        break
        
case 'tornado':
        await import ('codemirror/mode/tornado/tornado.js')
        break
        
case 'troff':
        await import ('codemirror/mode/troff/troff.js')
        break
        
case 'ttcn':
        await import ('codemirror/mode/ttcn/ttcn.js')
        break
        
case 'ttcn-cfg':
        await import ('codemirror/mode/ttcn-cfg/ttcn-cfg.js')
        break
        
case 'turtle':
        await import ('codemirror/mode/turtle/turtle.js')
        break
        
case 'twig':
        await import ('codemirror/mode/twig/twig.js')
        break
        
case 'vb':
        await import ('codemirror/mode/vb/vb.js')
        break
        
case 'vbscript':
        await import ('codemirror/mode/vbscript/vbscript.js')
        break
        
case 'velocity':
        await import ('codemirror/mode/velocity/velocity.js')
        break
        
case 'verilog':
        await import ('codemirror/mode/verilog/verilog.js')
        break
        
case 'vhdl':
        await import ('codemirror/mode/vhdl/vhdl.js')
        break
        
case 'vue':
        await import ('codemirror/mode/vue/vue.js')
        break
        
case 'wast':
        await import ('codemirror/mode/wast/wast.js')
        break
        
case 'webidl':
        await import ('codemirror/mode/webidl/webidl.js')
        break
        
case 'xml':
        await import ('codemirror/mode/xml/xml.js')
        break
        
case 'xquery':
        await import ('codemirror/mode/xquery/xquery.js')
        break
        
case 'yacas':
        await import ('codemirror/mode/yacas/yacas.js')
        break
        
case 'yaml':
        await import ('codemirror/mode/yaml/yaml.js')
        break
        
case 'yaml-frontmatter':
        await import ('codemirror/mode/yaml-frontmatter/yaml-frontmatter.js')
        break
        
case 'z80':
        await import ('codemirror/mode/z80/z80.js')
        break
        
        }
    }
export default loadMode
    
    