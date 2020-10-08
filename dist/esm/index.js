import React, { useState, useRef, useEffect } from 'react';
import CodeMirrorDep from 'codemirror';
import 'codemirror/mode/meta';

const loadMode = async mode => {
  switch (mode) {
    case 'apl':
      await import('codemirror/mode/apl/apl.js');
      break;

    case 'asciiarmor':
      await import('codemirror/mode/asciiarmor/asciiarmor.js');
      break;

    case 'asn.1':
      await import('codemirror/mode/asn.1/asn.1.js');
      break;

    case 'asterisk':
      await import('codemirror/mode/asterisk/asterisk.js');
      break;

    case 'brainfuck':
      await import('codemirror/mode/brainfuck/brainfuck.js');
      break;

    case 'clike':
      await import('codemirror/mode/clike/clike.js');
      break;

    case 'clojure':
      await import('codemirror/mode/clojure/clojure.js');
      break;

    case 'cmake':
      await import('codemirror/mode/cmake/cmake.js');
      break;

    case 'cobol':
      await import('codemirror/mode/cobol/cobol.js');
      break;

    case 'coffeescript':
      await import('codemirror/mode/coffeescript/coffeescript.js');
      break;

    case 'commonlisp':
      await import('codemirror/mode/commonlisp/commonlisp.js');
      break;

    case 'crystal':
      await import('codemirror/mode/crystal/crystal.js');
      break;

    case 'css':
      await import('codemirror/mode/css/css.js');
      break;

    case 'cypher':
      await import('codemirror/mode/cypher/cypher.js');
      break;

    case 'd':
      await import('codemirror/mode/d/d.js');
      break;

    case 'dart':
      await import('codemirror/mode/dart/dart.js');
      break;

    case 'diff':
      await import('codemirror/mode/diff/diff.js');
      break;

    case 'django':
      await import('codemirror/mode/django/django.js');
      break;

    case 'dockerfile':
      await import('codemirror/mode/dockerfile/dockerfile.js');
      break;

    case 'dtd':
      await import('codemirror/mode/dtd/dtd.js');
      break;

    case 'dylan':
      await import('codemirror/mode/dylan/dylan.js');
      break;

    case 'ebnf':
      await import('codemirror/mode/ebnf/ebnf.js');
      break;

    case 'ecl':
      await import('codemirror/mode/ecl/ecl.js');
      break;

    case 'eiffel':
      await import('codemirror/mode/eiffel/eiffel.js');
      break;

    case 'elm':
      await import('codemirror/mode/elm/elm.js');
      break;

    case 'erlang':
      await import('codemirror/mode/erlang/erlang.js');
      break;

    case 'factor':
      await import('codemirror/mode/factor/factor.js');
      break;

    case 'fcl':
      await import('codemirror/mode/fcl/fcl.js');
      break;

    case 'forth':
      await import('codemirror/mode/forth/forth.js');
      break;

    case 'fortran':
      await import('codemirror/mode/fortran/fortran.js');
      break;

    case 'gas':
      await import('codemirror/mode/gas/gas.js');
      break;

    case 'gfm':
      await import('codemirror/mode/gfm/gfm.js');
      break;

    case 'gherkin':
      await import('codemirror/mode/gherkin/gherkin.js');
      break;

    case 'go':
      await import('codemirror/mode/go/go.js');
      break;

    case 'groovy':
      await import('codemirror/mode/groovy/groovy.js');
      break;

    case 'haml':
      await import('codemirror/mode/haml/haml.js');
      break;

    case 'handlebars':
      await import('codemirror/mode/handlebars/handlebars.js');
      break;

    case 'haskell':
      await import('codemirror/mode/haskell/haskell.js');
      break;

    case 'haskell-literate':
      await import('codemirror/mode/haskell-literate/haskell-literate.js');
      break;

    case 'haxe':
      await import('codemirror/mode/haxe/haxe.js');
      break;

    case 'htmlembedded':
      await import('codemirror/mode/htmlembedded/htmlembedded.js');
      break;

    case 'htmlmixed':
      await import('codemirror/mode/htmlmixed/htmlmixed.js');
      break;

    case 'http':
      await import('codemirror/mode/http/http.js');
      break;

    case 'idl':
      await import('codemirror/mode/idl/idl.js');
      break;

    case 'javascript':
      await import('codemirror/mode/javascript/javascript.js');
      break;

    case 'jinja2':
      await import('codemirror/mode/jinja2/jinja2.js');
      break;

    case 'jsx':
      await import('codemirror/mode/jsx/jsx.js');
      break;

    case 'julia':
      await import('codemirror/mode/julia/julia.js');
      break;

    case 'livescript':
      await import('codemirror/mode/livescript/livescript.js');
      break;

    case 'lua':
      await import('codemirror/mode/lua/lua.js');
      break;

    case 'markdown':
      await import('codemirror/mode/markdown/markdown.js');
      break;

    case 'mathematica':
      await import('codemirror/mode/mathematica/mathematica.js');
      break;

    case 'mbox':
      await import('codemirror/mode/mbox/mbox.js');
      break;

    case 'mirc':
      await import('codemirror/mode/mirc/mirc.js');
      break;

    case 'mllike':
      await import('codemirror/mode/mllike/mllike.js');
      break;

    case 'modelica':
      await import('codemirror/mode/modelica/modelica.js');
      break;

    case 'mscgen':
      await import('codemirror/mode/mscgen/mscgen.js');
      break;

    case 'mumps':
      await import('codemirror/mode/mumps/mumps.js');
      break;

    case 'nginx':
      await import('codemirror/mode/nginx/nginx.js');
      break;

    case 'nsis':
      await import('codemirror/mode/nsis/nsis.js');
      break;

    case 'ntriples':
      await import('codemirror/mode/ntriples/ntriples.js');
      break;

    case 'octave':
      await import('codemirror/mode/octave/octave.js');
      break;

    case 'oz':
      await import('codemirror/mode/oz/oz.js');
      break;

    case 'pascal':
      await import('codemirror/mode/pascal/pascal.js');
      break;

    case 'pegjs':
      await import('codemirror/mode/pegjs/pegjs.js');
      break;

    case 'perl':
      await import('codemirror/mode/perl/perl.js');
      break;

    case 'php':
      await import('codemirror/mode/php/php.js');
      break;

    case 'pig':
      await import('codemirror/mode/pig/pig.js');
      break;

    case 'powershell':
      await import('codemirror/mode/powershell/powershell.js');
      break;

    case 'properties':
      await import('codemirror/mode/properties/properties.js');
      break;

    case 'protobuf':
      await import('codemirror/mode/protobuf/protobuf.js');
      break;

    case 'pug':
      await import('codemirror/mode/pug/pug.js');
      break;

    case 'puppet':
      await import('codemirror/mode/puppet/puppet.js');
      break;

    case 'python':
      await import('codemirror/mode/python/python.js');
      break;

    case 'q':
      await import('codemirror/mode/q/q.js');
      break;

    case 'r':
      await import('codemirror/mode/r/r.js');
      break;

    case 'rpm':
      await import('codemirror/mode/rpm/rpm.js');
      break;

    case 'rst':
      await import('codemirror/mode/rst/rst.js');
      break;

    case 'ruby':
      await import('codemirror/mode/ruby/ruby.js');
      break;

    case 'rust':
      await import('codemirror/mode/rust/rust.js');
      break;

    case 'sas':
      await import('codemirror/mode/sas/sas.js');
      break;

    case 'sass':
      await import('codemirror/mode/sass/sass.js');
      break;

    case 'scheme':
      await import('codemirror/mode/scheme/scheme.js');
      break;

    case 'shell':
      await import('codemirror/mode/shell/shell.js');
      break;

    case 'sieve':
      await import('codemirror/mode/sieve/sieve.js');
      break;

    case 'slim':
      await import('codemirror/mode/slim/slim.js');
      break;

    case 'smalltalk':
      await import('codemirror/mode/smalltalk/smalltalk.js');
      break;

    case 'smarty':
      await import('codemirror/mode/smarty/smarty.js');
      break;

    case 'solr':
      await import('codemirror/mode/solr/solr.js');
      break;

    case 'soy':
      await import('codemirror/mode/soy/soy.js');
      break;

    case 'sparql':
      await import('codemirror/mode/sparql/sparql.js');
      break;

    case 'spreadsheet':
      await import('codemirror/mode/spreadsheet/spreadsheet.js');
      break;

    case 'sql':
      await import('codemirror/mode/sql/sql.js');
      break;

    case 'stex':
      await import('codemirror/mode/stex/stex.js');
      break;

    case 'stylus':
      await import('codemirror/mode/stylus/stylus.js');
      break;

    case 'swift':
      await import('codemirror/mode/swift/swift.js');
      break;

    case 'tcl':
      await import('codemirror/mode/tcl/tcl.js');
      break;

    case 'textile':
      await import('codemirror/mode/textile/textile.js');
      break;

    case 'tiddlywiki':
      await import('codemirror/mode/tiddlywiki/tiddlywiki.js');
      break;

    case 'tiki':
      await import('codemirror/mode/tiki/tiki.js');
      break;

    case 'toml':
      await import('codemirror/mode/toml/toml.js');
      break;

    case 'tornado':
      await import('codemirror/mode/tornado/tornado.js');
      break;

    case 'troff':
      await import('codemirror/mode/troff/troff.js');
      break;

    case 'ttcn':
      await import('codemirror/mode/ttcn/ttcn.js');
      break;

    case 'ttcn-cfg':
      await import('codemirror/mode/ttcn-cfg/ttcn-cfg.js');
      break;

    case 'turtle':
      await import('codemirror/mode/turtle/turtle.js');
      break;

    case 'twig':
      await import('codemirror/mode/twig/twig.js');
      break;

    case 'vb':
      await import('codemirror/mode/vb/vb.js');
      break;

    case 'vbscript':
      await import('codemirror/mode/vbscript/vbscript.js');
      break;

    case 'velocity':
      await import('codemirror/mode/velocity/velocity.js');
      break;

    case 'verilog':
      await import('codemirror/mode/verilog/verilog.js');
      break;

    case 'vhdl':
      await import('codemirror/mode/vhdl/vhdl.js');
      break;

    case 'vue':
      await import('codemirror/mode/vue/vue.js');
      break;

    case 'wast':
      await import('codemirror/mode/wast/wast.js');
      break;

    case 'webidl':
      await import('codemirror/mode/webidl/webidl.js');
      break;

    case 'xml':
      await import('codemirror/mode/xml/xml.js');
      break;

    case 'xquery':
      await import('codemirror/mode/xquery/xquery.js');
      break;

    case 'yacas':
      await import('codemirror/mode/yacas/yacas.js');
      break;

    case 'yaml':
      await import('codemirror/mode/yaml/yaml.js');
      break;

    case 'yaml-frontmatter':
      await import('codemirror/mode/yaml-frontmatter/yaml-frontmatter.js');
      break;

    case 'z80':
      await import('codemirror/mode/z80/z80.js');
      break;
  }
};

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = "/* BASICS */\n\n.CodeMirror {\n  /* Set height, width, borders, and global font properties here */\n  font-family: monospace;\n  height: 300px;\n  color: black;\n  direction: ltr;\n}\n\n/* PADDING */\n\n.CodeMirror-lines {\n  padding: 4px 0; /* Vertical padding around content */\n}\n.CodeMirror pre.CodeMirror-line,\n.CodeMirror pre.CodeMirror-line-like {\n  padding: 0 4px; /* Horizontal padding of content */\n}\n\n.CodeMirror-scrollbar-filler, .CodeMirror-gutter-filler {\n  background-color: white; /* The little square between H and V scrollbars */\n}\n\n/* GUTTER */\n\n.CodeMirror-gutters {\n  border-right: 1px solid #ddd;\n  background-color: #f7f7f7;\n  white-space: nowrap;\n}\n.CodeMirror-linenumbers {}\n.CodeMirror-linenumber {\n  padding: 0 3px 0 5px;\n  min-width: 20px;\n  text-align: right;\n  color: #999;\n  white-space: nowrap;\n}\n\n.CodeMirror-guttermarker { color: black; }\n.CodeMirror-guttermarker-subtle { color: #999; }\n\n/* CURSOR */\n\n.CodeMirror-cursor {\n  border-left: 1px solid black;\n  border-right: none;\n  width: 0;\n}\n/* Shown when moving in bi-directional text */\n.CodeMirror div.CodeMirror-secondarycursor {\n  border-left: 1px solid silver;\n}\n.cm-fat-cursor .CodeMirror-cursor {\n  width: auto;\n  border: 0 !important;\n  background: #7e7;\n}\n.cm-fat-cursor div.CodeMirror-cursors {\n  z-index: 1;\n}\n.cm-fat-cursor-mark {\n  background-color: rgba(20, 255, 20, 0.5);\n  -webkit-animation: blink 1.06s steps(1) infinite;\n  -moz-animation: blink 1.06s steps(1) infinite;\n  animation: blink 1.06s steps(1) infinite;\n}\n.cm-animate-fat-cursor {\n  width: auto;\n  border: 0;\n  -webkit-animation: blink 1.06s steps(1) infinite;\n  -moz-animation: blink 1.06s steps(1) infinite;\n  animation: blink 1.06s steps(1) infinite;\n  background-color: #7e7;\n}\n@-moz-keyframes blink {\n  0% {}\n  50% { background-color: transparent; }\n  100% {}\n}\n@-webkit-keyframes blink {\n  0% {}\n  50% { background-color: transparent; }\n  100% {}\n}\n@keyframes blink {\n  0% {}\n  50% { background-color: transparent; }\n  100% {}\n}\n\n/* Can style cursor different in overwrite (non-insert) mode */\n.CodeMirror-overwrite .CodeMirror-cursor {}\n\n.cm-tab { display: inline-block; text-decoration: inherit; }\n\n.CodeMirror-rulers {\n  position: absolute;\n  left: 0; right: 0; top: -50px; bottom: 0;\n  overflow: hidden;\n}\n.CodeMirror-ruler {\n  border-left: 1px solid #ccc;\n  top: 0; bottom: 0;\n  position: absolute;\n}\n\n/* DEFAULT THEME */\n\n.cm-s-default .cm-header {color: blue;}\n.cm-s-default .cm-quote {color: #090;}\n.cm-negative {color: #d44;}\n.cm-positive {color: #292;}\n.cm-header, .cm-strong {font-weight: bold;}\n.cm-em {font-style: italic;}\n.cm-link {text-decoration: underline;}\n.cm-strikethrough {text-decoration: line-through;}\n\n.cm-s-default .cm-keyword {color: #708;}\n.cm-s-default .cm-atom {color: #219;}\n.cm-s-default .cm-number {color: #164;}\n.cm-s-default .cm-def {color: #00f;}\n.cm-s-default .cm-variable,\n.cm-s-default .cm-punctuation,\n.cm-s-default .cm-property,\n.cm-s-default .cm-operator {}\n.cm-s-default .cm-variable-2 {color: #05a;}\n.cm-s-default .cm-variable-3, .cm-s-default .cm-type {color: #085;}\n.cm-s-default .cm-comment {color: #a50;}\n.cm-s-default .cm-string {color: #a11;}\n.cm-s-default .cm-string-2 {color: #f50;}\n.cm-s-default .cm-meta {color: #555;}\n.cm-s-default .cm-qualifier {color: #555;}\n.cm-s-default .cm-builtin {color: #30a;}\n.cm-s-default .cm-bracket {color: #997;}\n.cm-s-default .cm-tag {color: #170;}\n.cm-s-default .cm-attribute {color: #00c;}\n.cm-s-default .cm-hr {color: #999;}\n.cm-s-default .cm-link {color: #00c;}\n\n.cm-s-default .cm-error {color: #f00;}\n.cm-invalidchar {color: #f00;}\n\n.CodeMirror-composing { border-bottom: 2px solid; }\n\n/* Default styles for common addons */\n\ndiv.CodeMirror span.CodeMirror-matchingbracket {color: #0b0;}\ndiv.CodeMirror span.CodeMirror-nonmatchingbracket {color: #a22;}\n.CodeMirror-matchingtag { background: rgba(255, 150, 0, .3); }\n.CodeMirror-activeline-background {background: #e8f2ff;}\n\n/* STOP */\n\n/* The rest of this file contains styles related to the mechanics of\n   the editor. You probably shouldn't touch them. */\n\n.CodeMirror {\n  position: relative;\n  overflow: hidden;\n  background: white;\n}\n\n.CodeMirror-scroll {\n  overflow: scroll !important; /* Things will break if this is overridden */\n  /* 50px is the magic margin used to hide the element's real scrollbars */\n  /* See overflow: hidden in .CodeMirror */\n  margin-bottom: -50px; margin-right: -50px;\n  padding-bottom: 50px;\n  height: 100%;\n  outline: none; /* Prevent dragging from highlighting the element */\n  position: relative;\n}\n.CodeMirror-sizer {\n  position: relative;\n  border-right: 50px solid transparent;\n}\n\n/* The fake, visible scrollbars. Used to force redraw during scrolling\n   before actual scrolling happens, thus preventing shaking and\n   flickering artifacts. */\n.CodeMirror-vscrollbar, .CodeMirror-hscrollbar, .CodeMirror-scrollbar-filler, .CodeMirror-gutter-filler {\n  position: absolute;\n  z-index: 6;\n  display: none;\n  outline: none;\n}\n.CodeMirror-vscrollbar {\n  right: 0; top: 0;\n  overflow-x: hidden;\n  overflow-y: scroll;\n}\n.CodeMirror-hscrollbar {\n  bottom: 0; left: 0;\n  overflow-y: hidden;\n  overflow-x: scroll;\n}\n.CodeMirror-scrollbar-filler {\n  right: 0; bottom: 0;\n}\n.CodeMirror-gutter-filler {\n  left: 0; bottom: 0;\n}\n\n.CodeMirror-gutters {\n  position: absolute; left: 0; top: 0;\n  min-height: 100%;\n  z-index: 3;\n}\n.CodeMirror-gutter {\n  white-space: normal;\n  height: 100%;\n  display: inline-block;\n  vertical-align: top;\n  margin-bottom: -50px;\n}\n.CodeMirror-gutter-wrapper {\n  position: absolute;\n  z-index: 4;\n  background: none !important;\n  border: none !important;\n}\n.CodeMirror-gutter-background {\n  position: absolute;\n  top: 0; bottom: 0;\n  z-index: 4;\n}\n.CodeMirror-gutter-elt {\n  position: absolute;\n  cursor: default;\n  z-index: 4;\n}\n.CodeMirror-gutter-wrapper ::selection { background-color: transparent }\n.CodeMirror-gutter-wrapper ::-moz-selection { background-color: transparent }\n\n.CodeMirror-lines {\n  cursor: text;\n  min-height: 1px; /* prevents collapsing before first draw */\n}\n.CodeMirror pre.CodeMirror-line,\n.CodeMirror pre.CodeMirror-line-like {\n  /* Reset some styles that the rest of the page might have set */\n  -moz-border-radius: 0; -webkit-border-radius: 0; border-radius: 0;\n  border-width: 0;\n  background: transparent;\n  font-family: inherit;\n  font-size: inherit;\n  margin: 0;\n  white-space: pre;\n  word-wrap: normal;\n  line-height: inherit;\n  color: inherit;\n  z-index: 2;\n  position: relative;\n  overflow: visible;\n  -webkit-tap-highlight-color: transparent;\n  -webkit-font-variant-ligatures: contextual;\n  font-variant-ligatures: contextual;\n}\n.CodeMirror-wrap pre.CodeMirror-line,\n.CodeMirror-wrap pre.CodeMirror-line-like {\n  word-wrap: break-word;\n  white-space: pre-wrap;\n  word-break: normal;\n}\n\n.CodeMirror-linebackground {\n  position: absolute;\n  left: 0; right: 0; top: 0; bottom: 0;\n  z-index: 0;\n}\n\n.CodeMirror-linewidget {\n  position: relative;\n  z-index: 2;\n  padding: 0.1px; /* Force widget margins to stay inside of the container */\n}\n\n.CodeMirror-widget {}\n\n.CodeMirror-rtl pre { direction: rtl; }\n\n.CodeMirror-code {\n  outline: none;\n}\n\n/* Force content-box sizing for the elements where we expect it */\n.CodeMirror-scroll,\n.CodeMirror-sizer,\n.CodeMirror-gutter,\n.CodeMirror-gutters,\n.CodeMirror-linenumber {\n  -moz-box-sizing: content-box;\n  box-sizing: content-box;\n}\n\n.CodeMirror-measure {\n  position: absolute;\n  width: 100%;\n  height: 0;\n  overflow: hidden;\n  visibility: hidden;\n}\n\n.CodeMirror-cursor {\n  position: absolute;\n  pointer-events: none;\n}\n.CodeMirror-measure pre { position: static; }\n\ndiv.CodeMirror-cursors {\n  visibility: hidden;\n  position: relative;\n  z-index: 3;\n}\ndiv.CodeMirror-dragcursors {\n  visibility: visible;\n}\n\n.CodeMirror-focused div.CodeMirror-cursors {\n  visibility: visible;\n}\n\n.CodeMirror-selected { background: #d9d9d9; }\n.CodeMirror-focused .CodeMirror-selected { background: #d7d4f0; }\n.CodeMirror-crosshair { cursor: crosshair; }\n.CodeMirror-line::selection, .CodeMirror-line > span::selection, .CodeMirror-line > span > span::selection { background: #d7d4f0; }\n.CodeMirror-line::-moz-selection, .CodeMirror-line > span::-moz-selection, .CodeMirror-line > span > span::-moz-selection { background: #d7d4f0; }\n\n.cm-searching {\n  background-color: #ffa;\n  background-color: rgba(255, 255, 0, .4);\n}\n\n/* Used to force a border model for a node */\n.cm-force-border { padding-right: .1px; }\n\n@media print {\n  /* Hide the cursor when printing */\n  .CodeMirror div.CodeMirror-cursors {\n    visibility: hidden;\n  }\n}\n\n/* See issue #2901 */\n.cm-tab-wrap-hack:after { content: ''; }\n\n/* Help users use markselection to safely style text background */\nspan.CodeMirror-selectedtext { background: none; }\n";
styleInject(css_248z);

const CodeMirror = props => {
  const {
    width,
    height,
    mode,
    ...options
  } = props;
  const [editorInst, setInstance] = useState();
  const editorRef = useRef();
  useEffect(() => {
    if (!editorInst) {
      const editor = CodeMirrorDep.fromTextArea(editorRef.current, { ...options
      });
      editor.setSize(width, height);

      if (mode) {
        const codeMode = CodeMirrorDep.findModeByName(mode);
        loadMode(codeMode);
        editor.setOption("mode", codeMode.mime);
      }

      Object.keys(options).forEach(key => {
        editor.setOption(key, options[key]);
      });
      setInstance(editor);
    } //cleanup


    return () => {
      if (editorInst) {
        setInstance(undefined);
      }
    };
  }, []);
  return /*#__PURE__*/React.createElement("textarea", {
    ref: editorRef
  });
};

export default CodeMirror;
