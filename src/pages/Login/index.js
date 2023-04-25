import React, { Component } from "react";
import { Card, Button, Checkbox, Form, Input } from "antd";
import "./index.scss";
import logo from "assets/logo.png";
import request from "utils/request";
export default class Login extends Component {
  render() {
    return (
      <div className="login">
        <Card className="login-container">
          <img src={logo} alt="" className="login-logo" />
          {/*react里的图片src必须像这样显示导入*/}
          {/* 插入表单 */}
          <Form
            size="large"
            onFinish={this.onFinish}
            validateTrigger={["onChange", "onBlur"]}
            initialValues={{
              mobile: "13911111111",
              code: "246810",
              agree: true,
            }}
          >
            <Form.Item
              name="mobile"
              validateTrigger={["onChange", "onBlur"]}
              rules={[
                {
                  required: true,
                  message: "手机号不能为空",
                  validateTrigger: "onBlur",
                },
                {
                  pattern: /^1[3-9]\d{9}$/,
                  message: "手机号格式错误",
                  validateTrigger: "onBlur",
                },
              ]}
            >
              <Input placeholder="请输入你的手机号" autoComplete="off" />
            </Form.Item>

            <Form.Item
              name="code"
              validateTrigger={["onChange", "onBlur"]}
              rules={[
                {
                  validator(rule, value) {
                    //  自定义校验规则
                    if (value) {
                      return Promise.resolve();
                    } else {
                      return Promise.reject(new Error("请阅读并同意用户协议"));
                    }
                  },
                },
              ]}
            >
              <Input placeholder="请输入验证码" autoComplete="off"></Input>
            </Form.Item>

            <Form.Item
              valuePropName="checked"
              name="agree"
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
  onFinish = async ({ mobile, code }) => {
    const res = await request({
      method: "post",
      url: "/authorizations",
      data: {
        mobile,
        code,
      },
    });
    console.log(res);
  };
}
