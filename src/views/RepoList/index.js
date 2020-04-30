import React, { useState } from "react";
import { Row, Col, Spin, Card, Input, Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { actionCreator } from "../../store/repo/repo.meta";

const RepoList = (props) => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const { repos = [], loading = false } = useSelector((store) => store.repo);

  return (
    <Spin spinning={loading}>
      <Row
        justify="center"
        align="middle"
        type="flex"
        style={{ minHeight: "100vh", background: "#ddd" }}
      >
        <Col xs={18}>
          <Card>
            <Input.Group>
              <Input onChange={(e) => setUsername(e.target.value)} />
            </Input.Group>
            <Row type="flex" justify="center" style={{ marginTop: "2rem" }}>
              <Button
                onClick={() => dispatch(actionCreator.getRepos({ username }))}
              >
                Submit
              </Button>
            </Row>
          </Card>
        </Col>
      </Row>
    </Spin>
  );
};

export default RepoList;
