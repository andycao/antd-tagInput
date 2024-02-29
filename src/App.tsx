import React, { useState } from "react";
import { Form, Input } from "antd";
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
      </Form>
    </div>
  );
}

export default App;
