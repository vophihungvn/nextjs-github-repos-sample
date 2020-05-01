import React, { useState } from "react";
import { Row, Card, Col, Input, Button } from "antd";

import { navigate } from "@reach/router";

const Home = (props) => {
  const [username, setUsername] = useState("");

  return (
    <Row
      justify="center"
      align="middle"
      type="flex"
      style={{ minHeight: "100vh", background: "#ddd" }}
    >
      <Col xs={12}>
        <Card>
          <Input.Group>
            <Input onChange={(e) => setUsername(e.target.value)} />
          </Input.Group>
          <Row type="flex" justify="center" style={{ marginTop: "2rem" }}>
            <Button onClick={() => navigate("/repo-list/" + username)}>
              Submit
            </Button>
          </Row>
        </Card>
      </Col>
    </Row>
  );
};

export default Home;
