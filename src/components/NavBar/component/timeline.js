import React from 'react';
import { Timeline } from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';

const MyTimeLine = () => {
  return (<Timeline mode="alternate">
    <Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}>
      本地文件持久化问题
    </Timeline.Item>
    <Timeline.Item>实现文件复制, 下载功能 2020-03-07</Timeline.Item>
    <Timeline.Item>完成基础编辑功能 2020-03-06</Timeline.Item>
    <Timeline.Item>萌生想法, 开始搭建基础架构 2020-03-05</Timeline.Item>
  </Timeline>)
}

export default MyTimeLine;