import React, { useState, useEffect } from 'react';
import { Modal, Form, Input, Button, DatePicker, Checkbox, Row, Col } from 'antd';

const FormModule = (props) => {
  const { title, visible, onOk, onCancel, _uploadMD } = props;

  const [tags, setTags] = useState([]);

  const onFinish = values => {
    // console.log(values)
    // console.log('Success:', values['create_At'].format('YYYY-MM-DD'));
    onCancel();
    _uploadMD({
      ...values,
      create_At: values['create_At'].format('YYYY-MM-DD')
    });
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  useEffect(() => {
    setTags(['React', 'Vue', 'Cli', '长列表', '笔记', '缓存', 'Typescript', 'Javascript','Node']);
  }, []);

  return <Modal
    title={title}
    visible={visible}
    // onOk={onOk}
    onCancel={onCancel}
    // okText='确定'
    // cancelText='取消'
    footer={null}
  >
    <Form
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="博客标题"
        name="title"
        rules={[{ required: true, message: 'Please input your title!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="博客tag"
        name="flag"
        rules={[{ required: true, message: 'Please input your title!' }]}
      >
        <Checkbox.Group>
          <Row>
            {
              tags.map(item => {
                return <Col span={8} key={item}>
                  <Checkbox
                    value={item}
                    style={{
                      lineHeight: '32px',
                    }}
                  >
                    {item}
                </Checkbox>
                </Col>
              })
            }
          </Row>
        </Checkbox.Group>
      </Form.Item>
      <Form.Item
        label="创建时间"
        name="create_At"
        rules={[{ type: 'object', required: true, message: 'Please select time!' }]}
      >
        <DatePicker />
      </Form.Item>

      <Form.Item >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  </Modal>
}

export default FormModule;