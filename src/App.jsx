import React, { useState } from "react";
import { Form, Input } from "antd";
import AntdTagsInput from "antd-tags-input";

import TagInput from "./antdTagInput";

import "./App.css";

function App() {
  return (
    <div className="App">
      <h2>component test</h2>
      <hr />
      <Form style={{ width: 400 }}>
        <Form.Item
          name="tags"
          label="标签输入"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <TagInput />
        </Form.Item>

        <Form.Item
          name="tags2"
          label="标签输入2"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <AntdTagsInput />
        </Form.Item>
      </Form>
    </div>
  );
}

export default App;
