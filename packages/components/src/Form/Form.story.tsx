import * as React from 'react';
import { Add, Trash } from '@kubed/icons';
import { KubedSizes } from '../theme';
import {
  Form,
  FormItem,
  FormList,
  Input,
  InputPassword,
  Row,
  Col,
  Button,
  useForm,
  Radio,
  RadioGroup,
  InputNumber,
} from '../index';

export default {
  title: 'Components/Form',
  component: Form,
};

const onFinish = (values) => {
  console.log(values);
};

export const Basic = () => (
  <Form onFinish={onFinish}>
    <Row gutter={[10, 40]}>
      <Col span={6}>
        <FormItem
          className="test"
          name="usename"
          label="Username"
          help="user name must input"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </FormItem>
      </Col>
      <Col span={6}>
        <FormItem
          name="password"
          label="密码"
          help="help content"
          rules={[{ required: true, message: 'Please input your uid!' }]}
        >
          <InputPassword />
        </FormItem>
      </Col>
      <Col span={6}>
        <FormItem name="group" label="Group" help="help content" tooltip="tooltip 内容 content">
          <Input />
        </FormItem>
      </Col>
    </Row>
    <button type="submit">Submit</button>
  </Form>
);

export const DynamicForm = () => {
  const [form] = useForm();
  const getFieldErrors = () => {
    console.log(form.validateFields());
  };
  return (
    <Form onFinish={onFinish} form={form}>
      <FormList name="users">
        {(fields, { add, remove }) => (
          <>
            {fields.map(({ key, name, ...restField }) => (
              <Row gutter={[10, 40]} key={key}>
                <Col span={5}>
                  <FormItem
                    {...restField}
                    name={[name, 'first']}
                    label="Fist Name"
                    help="user name must input"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                  >
                    <Input />
                  </FormItem>
                </Col>
                <Col span={5}>
                  <FormItem
                    {...restField}
                    name={[name, 'last']}
                    label="Last Name"
                    help="help content"
                    rules={[{ required: true, message: 'Please input your uid!' }]}
                  >
                    <Input />
                  </FormItem>
                </Col>
                <Col span={1}>
                  <Button variant="text" onClick={() => remove(name)}>
                    <Trash size={16} />
                  </Button>
                </Col>
              </Row>
            ))}
            <Row>
              <Col span={12}>
                <Button onClick={() => add()}>
                  <Add size={16} />
                </Button>
              </Col>
            </Row>
          </>
        )}
      </FormList>
      <Button onClick={getFieldErrors}>Submit</Button>
    </Form>
  );
};

export const layout = () => {
  const [form] = useForm();
  const [formLayout, setFormLayout] = React.useState('horizontal');
  const onRadioChange = (val) => {
    setFormLayout(val);
  };
  const getFieldData = () => {
    console.log(form.validateFields());
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed', errorInfo);
  };

  const layoutCol = {
    labelCol: { span: 4 },
    wrapperCol: { span: 20 },
  };

  return (
    <>
      <RadioGroup onChange={onRadioChange} defaultValue={formLayout}>
        <Radio label="horizontal" value="horizontal" />
        <Radio label="vertical" value="vertical" />
        <Radio label="inline" value="inline" />
      </RadioGroup>
      <Form
        {...layoutCol}
        layout={formLayout}
        form={form}
        size="lg"
        labelAlign="right"
        initialValues={{ account: 'wayne' }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <FormItem
          name="account"
          label="Account"
          help="please enter your account"
          rules={[{ required: true, message: 'Please input your account!' }]}
          tooltip="please enter your account"
        >
          <Input />
        </FormItem>
        <FormItem
          name="password"
          label="Password"
          help="Password"
          tooltip="please enter your password"
          rules={[{ required: true, message: 'Please input your name!' }]}
        >
          <InputPassword placeholder="Password" />
        </FormItem>
        <FormItem>
          <Button onClick={getFieldData} size="xs">
            Submit
          </Button>
        </FormItem>
      </Form>
    </>
  );
};

export const formSize = () => {
  const [componentSize, setComponentSize] = React.useState<KubedSizes>('xs');
  const onFormSizeChange = (size) => {
    console.log('size', size);
    setComponentSize(size);
  };
  const [form] = useForm();
  return (
    <>
      <RadioGroup onChange={onFormSizeChange} defaultValue={componentSize}>
        <Radio value="xs" label="xs" />
        <Radio value="sm" label="sm" />
        <Radio value="md" label="md" />
        <Radio value="lg" label="lg" />
        <Radio value="xl" label="xl" />
      </RadioGroup>
      <Form layout="horizontal" size={componentSize} form={form}>
        <FormItem label="Input">
          <Input placeholder="please input some text..." />
        </FormItem>
        <FormItem label="InputNumber">
          <InputNumber />
        </FormItem>
        <FormItem label="button">
          <Button color="primary" variant="filled" radius="xl">
            按钮
          </Button>
        </FormItem>
      </Form>
    </>
  );
};
