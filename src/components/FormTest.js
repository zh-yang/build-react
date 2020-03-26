import React from 'react';
// import {Form, Select, Button} from 'dpl-react';
import {Form, Select, Button} from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;


const Login = React.forwardRef((props, ref) => {
    const { getFieldDecorator, setFieldsValue } = props.form;
    return (
        <Form layout="inline">
            <FormItem>
                {getFieldDecorator('username', {

                })(
                    <Select style={{width: 200}}>
                        <Option value="1">xxx1</Option>
                        <Option value="2">xxx2</Option>
                        <Option value="3">xxx3</Option>
                    </Select>
                )}
            </FormItem>

            <FormItem>
                <Button onClick={() => { setFieldsValue({ username: "" }) }} >Reset</Button>
            </FormItem>
        </Form>
    )
});
export default Form.create()(Login);