import React, { Component } from "react";
import { Card, Button, Checkbox, Form, Input } from "antd";
import "./index.scss";
import logo from "assets/logo.png";
export default class Login extends Component {
  render() {
    return (
      <div className="login">
        <Card className="login-container">
          <img src={logo} alt="" className="login-logo" />
          {/*react里的图片src必须像这样显示导入*/}
          {/* 插入表单 */}
          <Form size="large">
            <Form.Item
              name="mobile"
              rules={[
                {
                  required: true,
                  message: "手机号不能为空",
                },
                {
                  pattern: /^1[3-9]\d{9}$/,
                  message: "手机号格式错误",
                  validateTrigger: "onchange",
                },
              ]}
            >
              <Input placeholder="请输入你的手机号" />
            </Form.Item>

            <Form.Item
              name="code"
              rules={[
                {
                  required: true,
                  message: "验证码不能为空",
                },
                {
                  pattern: /^\6{6}$/,
                  message: "验证码格式错误",
                },
              ]}
            >
              <Input placeholder="请输入验证码"></Input>
            </Form.Item>

            <Form.Item
              valuePropName="checked"
              rules={[
                {
                  required: true,
                  message: "请阅读并同意",
                },
              ]}
            >
              <Checkbox>我已阅读同意隐私协议和条款</Checkbox>
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" block>
                登录
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
    );
  }
}
