import React, { useEffect, useState } from 'react';
import { UnControlled as CodeMirror } from 'react-codemirror2'
import 'codemirror/mode/markdown/markdown';
import showdown from 'showdown';
import './App.css';

import { connect } from 'react-redux';
import actions from './store/actions/initContent';

import NavBar from './components/NavBar'
import MyProgress from './components/Progress'

import highlightjs from './util/langHiglight';
import 'highlight.js/styles/atom-one-light.css'

import 'codemirror/addon/scroll/simplescrollbars.css'
import 'codemirror/addon/scroll/simplescrollbars'

// import TEMPLATE from './template'


showdown.setOption('tables', true);
showdown.setOption('tasklists', true);
showdown.setFlavor('github');
// 引入样式

const App = (props) => {
  const [size, setSize] = useState(0);

  const onContentChange = (editor, data, value) => {
    // console.log(parseInt((value.length / 1024 / 100) * 100))
    if(parseInt((value.length / 1024 / 100) * 100) > 100) {
      return
    }else {
      // 计算当前字节数
      // console.log(value.length / 1024 + 'kb')
      setSize(value.length / 1024);

      setMarkHtml(value);
      // 格式化Code高亮
      parseCode();

      // 存储持久化
      props.setContent(value);
    }
  };

  const setMarkHtml = (value) => {
    const converter = new showdown.Converter();
    const $el = document.getElementById('content');
    if (!$el) return;
    $el.innerHTML = converter.makeHtml(value);
  }

  const onEditorScroll = (editor, scrollInfo) => {
    const $el = document.querySelector('#content');
    if (!$el) return;
    $el.scrollTo(0, Math.round(scrollInfo.top / scrollInfo.height * ($el.scrollHeight + $el.clientHeight)));
  };

  const parseCode = () => {
    const blocks = document.querySelectorAll('pre code');
    blocks.forEach(block => {
      highlightjs.highlightBlock(block);
    })
  }

  useEffect(() => {
    // 调整CodeMirror高度
    setTimeout(() => {
      const $el = document.querySelector('.codeMirror');
      if ($el) {
        $el.setAttribute('style', 'min-height:calc(100vh - 100px);box-shadow:none');
      }
    }, 100);
  }, []);

  useEffect(() => {
    // init
    props.initConfig();
    // setState(window.localStorage.getItem('CONTENT'));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className='App'>
      <div className='topBar'>
        <NavBar />
      </div>
      <div className='main'>
        <div className='editor'>
          <div className='markdown'>
            <CodeMirror
              // value={handleChange()}
              className='CodeMirror'
              options={{
                mode: 'markdown',
                theme: 'github',
                lineNumbers: false,
                lineWrapping: true,
                scrollbarStyle: 'simple',
                smartIndent: true, //智能缩进
                indentUnit: 4, // 智能缩进单位为4个空格长度
                indentWithTabs: true,  // 使用制表符进行智能缩进
              }}
              onChange={onContentChange}
              onScroll={onEditorScroll}
            />
          </div>
          <div className='footer'>
            <label style={{ marginLeft: 20 }}>Macdown编辑器</label>
          </div>
        </div>
        
        <MyProgress size={size}/>

        <div id="preview" className='preview'>
          <div id='copy' className='content'>
            <article id="content" />
          </div>
          <div className='footer'>
            <label style={{ marginLeft: 20 }}>预览</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect(state => state, actions)(App);