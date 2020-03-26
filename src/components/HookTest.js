import React, {useState, useEffect} from 'react'
import {Form, Input, Button, Icon, Select} from 'dpl-react';
const FormItem = Form.Item;
const Login = React.forwardRef((props, ref) => {
  const { getFieldDecorator } = props.form;
  return (
    <Form layout="inline">
      <FormItem>
      {getFieldDecorator('username', {
        rules: [{required: true, message: '请输入用户名'}],
      })(
        <Input prefix={<Icon type="user" style={{fontSize: 13}}/>} placeholder="Username"/>
      )}
      </FormItem>
      <FormItem>
        <Input prefix={<Icon type="lock" style={{fontSize: 13}}/>} type="password" placeholder="Password"/>
      </FormItem>
      <FormItem>
        <Button type="primary" htmlType="submit">Log in</Button>
      </FormItem>
      <FormItem>
              {getFieldDecorator('titleId', {
                  rules: [{ required: true, message: '请选择贷方科目' }],
              })(<Select onChange={val => { console.log(val) }}>
                <Select.Option value={1}>
                      1
                </Select.Option>
                <Select.Option value={2}>
                    2
                </Select.Option>
              </Select>
              )}
      </FormItem>
    </Form>
  )
});
export default Form.create()(Login);