/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Menu, Dropdown, message, Button, Avatar, Tooltip, Popover, Modal } from 'antd';
import { DownOutlined, CopyOutlined, CloudDownloadOutlined, QuestionCircleOutlined } from '@ant-design/icons';

import { connect } from 'react-redux';
import actions from '../../store/actions/navbar'

import { TEMPLATE_OPTIONS, CODE_OPTIONS } from '../../util/constant';
import { parseHtml, copySafari } from '../../util/converter';

import template from '../../template/module'

import './NavBar.css';

const NavBar = (props) => {

  const _switchCode = ({ key }) => {
    props.setCodeId(key);
    message.success('代码主题切换成功!!!');
  };

  const _switchStyle = ({ key }) => {
    message.error('别慌, 小老弟还没开始写呢!!!');
  };

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
            {item.name}
          </Menu.Item>)
        })
      }
    </Menu>
  );


  const copyCode = () => {
    const value = document.getElementById('content').children
    if (value.length === 0) {
      message.warning("当前暂无可复制代码块");
    } else {
      let html = parseHtml();
      copySafari(html);
      message.success("成功复制代码块");
    }
  }

  const copyMD = () => {
    const value = window.localStorage.getItem('CONTENT');
    if (!value) {
      message.warning('当前暂无可复制MD')
    } else {
      copySafari(value);
      message.success("成功复制MD");
    }
  }

  const downloadMD = () => {
    message.error('稍后实现, 请稍等')
  }

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
        <Tooltip title="复制代码块">
          <Button onClick={copyCode} type="primary" icon={<CopyOutlined />}>
            Code
          </Button>
        </Tooltip>
      </div>
      <div className='nav-item'>
        <Tooltip title="复制MD">
          <Button onClick={copyMD} type="primary" icon={<CopyOutlined />}>
            MD
          </Button>
        </Tooltip>
      </div>
      <div className='nav-item'>
        <Tooltip title="下载MD">
          <Button onClick={downloadMD} type="primary" icon={<CloudDownloadOutlined />}>
            <a style={{ color: '#fff' }} download>下载MD</a>
          </Button>
        </Tooltip>
      </div>
      <div className='nav-item'>
        <Tooltip title="下载HTML">
          <Button onClick={downloadMD} type="primary" icon={<CloudDownloadOutlined />}>
            <a style={{ color: '#fff' }} download>下载HTML</a>
          </Button>
        </Tooltip>
      </div>
      <div className='nav-item'>
        <Popover placement="bottom"  content={<img alt='彭雲飛' src={require('../../assets/my.png')} />} title="一位低调,大器晚成的负二代">
          <Avatar size="large">雲飛</Avatar>
        </Popover>
      </div>
    </div>
  </div>
}

export default connect(state => state, actions)(NavBar);