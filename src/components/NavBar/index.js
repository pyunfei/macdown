/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { Menu, Dropdown, message, Button, Avatar, Tooltip, Popover, Modal } from 'antd';
import { DownOutlined, CopyOutlined, CloudDownloadOutlined, QuestionCircleOutlined } from '@ant-design/icons';

import { connect } from 'react-redux';
import actions from '../../store/actions/navbar'

import { TEMPLATE_OPTIONS, CODE_OPTIONS } from '../../util/constant';
import { parseHtml, copySafari } from '../../util/converter';

import template from '../../template/module'
import { saveAs, htmlTemplate } from "../../util/FileSaver";

import MyModule from './component/module';
import MyTimeLine from './component/timeline';

import './NavBar.css';

const NavBar = (props) => {
  const [codeFlag, setCodeFlag] = useState(props.navbar.codeId);
  const [visible, setVisible] = useState(false);
  const [title, setTitle] = useState('');

  const download = {
    '1': function () {
      const value = window.localStorage.getItem('CONTENT');
      if (!value) {
        message.warning('当前暂无可下载MD')
      } else {
        let blob = new Blob([value], { type: "text/plain;charset=utf-8" });
        saveAs(blob, "文件导出测试.md");
      }
    },
    '2': function () {
      const value = document.getElementById('content').children
      if (value.length === 0) {
        message.warning("当前暂无可可下载html");
      } else {
        let html = parseHtml();
        let blob = new Blob([htmlTemplate(html)], { type: "text/plain;charset=utf-8" });
        saveAs(blob, "文件导出测试.html");
      }
    }
  }

  const copy = {
    '1': function () {
      const value = window.localStorage.getItem('CONTENT');
      if (!value) {
        message.warning('当前暂无可复制MD')
      } else {
        copySafari(value);
        message.success("成功复制MD");
      }
    },
    '2': function () {
      const value = document.getElementById('content').children
      if (value.length === 0) {
        message.warning("当前暂无可复制代码块");
      } else {
        let html = parseHtml();
        copySafari(html);
        message.success("成功复制代码块");
      }
    },
  }

  const help = {
    '1': function () {
      setVisible(true);
      setTitle('关于');
    },
    '2': function () {
      setVisible(true);
      setTitle('版本信息')
    },
  }

  const moduleContent = () => {
    if (title === '关于') {
      return (<>
        <h3 style={{ color: 'black' }}>
          Macdown
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://github.com/pyunfei/macdown"
          style={{ border:'none' }}
        >
          <img alt="github" style={{width: "70px", height: '20px', marginLeft: "10px", display: "inline-block"}}  src="https://badgen.net/github/stars/pyunfei/macdown" />
        </a>
        </h3>
        <p>可自定义样式的Macdown编辑器</p>
        <h3 style={{ color: 'black' }}>关于</h3>
        <p>一个月黑风高的夜晚, 脑袋抽筋写了个这个鬼玩意</p>
        <p>出于浏览器兼容问题, 当前设置可最大编辑字节数为 1MB -- 1000kb, 为保证流畅度, 接近临界值将不再解析 （任可输入）</p>
      </>)
    } else if (title === '版本信息') {
      return (<MyTimeLine />)
    }
  }

  const _switchCode = ({ key }) => {
    props.setCodeId(key);
    setCodeFlag(key);
    message.success('代码主题切换成功!!!');
  };

  const _switchStyle = ({ key }) => message.error('别慌, 小老弟还没开始写呢!!!');

  const _downloadFile = ({ key }) => download[key]();

  const _copyFile = ({ key }) => copy[key]();

  const _switchHelp = ({ key }) => help[key]();

  const menuStyle = (
    <Menu onClick={_switchStyle}>
      {
        TEMPLATE_OPTIONS.map(item => {
          return (<Menu.Item key={item.id}>
            {item.name}
          </Menu.Item>)
        })
      }
    </Menu>
  );
  const menuCode = (
    <Menu onClick={_switchCode}>
      {
        CODE_OPTIONS.map(item => {
          return (<Menu.Item key={item.id}>
            <div className='code-item'>
              <span className='code-flag'>{item.id === codeFlag ? '✔️' : null}</span>
              <span className='code-name'>{item.name}</span>
            </div>
          </Menu.Item>)
        })
      }
    </Menu>
  );
  const menuHelp = (
    <Menu onClick={_switchHelp}>
      <Menu.Item key='1'>
        <div className='code-item'>
          <span className='code-name'>关于</span>
        </div>
      </Menu.Item>
      <Menu.Item key='2'>
        <div className='code-item'>
          <span className='code-name'>版本信息</span>
        </div>
      </Menu.Item>
    </Menu>
  );
  const menuDownload = (
    <Menu onClick={_downloadFile}>
      <Menu.Item key="1">
        <CloudDownloadOutlined />
        下载MD
      </Menu.Item>
      <Menu.Item key="2">
        <CloudDownloadOutlined />
        下载HTML
      </Menu.Item>
    </Menu>
  );
  const menuCopy = (
    <Menu onClick={_copyFile}>
      <Menu.Item key="1">
        <CopyOutlined />
        拷贝MD
      </Menu.Item>
      <Menu.Item key="2">
        <CopyOutlined />
        拷贝HTML
      </Menu.Item>
    </Menu>
  )

  const writModule = () => {
    Modal.success({
      okText: '复制',
      closable: true,
      width: '60%',
      title: '专注于为迷路的小老弟准备 ---- 滑至底部 复制 粘贴到左侧编辑器即可',
      content: template,
      onOk() {
        copySafari(template);
        message.success("成功复制");
      }
    });
  }

  const onOk = () => setVisible(false)
  const onCancel = () => setVisible(false)

  return <div className='nice-navbar'>
    <div className='navbar-left'>
      <h1 className='nav-title'>Macdown</h1>
      <div className='nav-item'>
        <Dropdown overlay={menuStyle}>
          <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
            主题 <DownOutlined />
          </a>
        </Dropdown>
      </div>
      <div className='nav-item'>
        <Dropdown overlay={menuCode}>
          <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
            代码主题 <DownOutlined />
          </a>
        </Dropdown>
      </div>
      <div className='nav-item'>
        <Dropdown overlay={menuHelp}>
          <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
            帮助 <DownOutlined />
          </a>
        </Dropdown>
        {/* 自定义模态框 */}
        <MyModule
          visible={visible}
          title={title}
          onOk={onOk}
          onCancel={onCancel}
          content={moduleContent()}
        />
      </div>
    </div>
    <div className='navbar-right'>
      <div className='nav-item'>
        <Tooltip title="文档示例">
          <Button onClick={writModule} type="primary" danger icon={<QuestionCircleOutlined />}>
            示例代码
          </Button>
        </Tooltip>
      </div>

      <div className='nav-item'>
        <Dropdown.Button
          overlay={menuCopy}
          buttonsRender={([leftButton, rightButton]) => [
            <Tooltip title="MD/Code复制<可应用于其他平台>" key="leftButton">
              {leftButton}
            </Tooltip>,
            rightButton,
          ]}
        >
          文件拷贝
        </Dropdown.Button>
      </div>
      <div className='nav-item'>
        <Dropdown.Button
          overlay={menuDownload}
          buttonsRender={([leftButton, rightButton]) => [
            <Tooltip title="MD/HTML下载" key="leftButton">
              {leftButton}
            </Tooltip>,
            rightButton,
          ]}
        >
          文件下载
        </Dropdown.Button>
      </div>
      <div className='nav-item'>
        <Popover placement="bottom" content='' title="一位低调,大器晚成的负二代">
          <Avatar size="large">雲飛</Avatar>
        </Popover>
      </div>
      <div className='nav-item-github'>
        <a href="https://github.com/pyunfei" className='item-github'>
          <img className='github-img' src={require('../../assets/github.svg')} alt="" />
        </a>
      </div>
    </div>
  </div>
}

export default connect(state => state, actions)(NavBar);