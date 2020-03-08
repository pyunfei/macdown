import React from 'react';
import { Progress, Tooltip } from 'antd';

import './Progress.css';

const MyProgress = (props) => {
  let { size } = props;
  size = parseInt((size / 1000) * 100);

  return <div className='progress-container'>
    <Tooltip title="当前已编辑字节数">
      <Progress
        width={80}
        status={size === 100 ? 'exception' : 'normal'}
        type="circle"
        percent={size}
      />
    </Tooltip>
  </div>
}

export default MyProgress;