import * as React from 'react';
import { Add } from '@kubed/icons';
import { Empty } from './Empty';

export default {
  title: 'Components/Empty',
  component: Empty,
};

export const Basic = () => {
  return <Empty />;
};

export const Icon = () => {
  return (
    <Empty
      title={<span>暂时没有找到符合过滤条件的资源</span>}
      description={
        <div>
          你可以尝试<a>刷新</a>或<a>清空过滤条件</a>
        </div>
      }
    />
  );
};
