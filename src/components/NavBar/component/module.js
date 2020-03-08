import React from 'react';
import { Modal } from 'antd';

const MyModule = (props) => {
  const { title, visible, onOk, onCancel, content } = props;
  return <Modal
    title={title}
    visible={visible}
    onOk={onOk}
    onCancel={onCancel}
    okText='确定'
    cancelText='取消'
  >
    {content}
  </Modal>
}

export default MyModule;