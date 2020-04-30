import React, { useState } from "react";
import { Row, Col, Spin, Card, List, Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { navigate } from "@reach/router";

const RepoList = (props) => {
  const { repos = [], loading = false } = useSelector((store) => store.repo);

  return (
    <Spin spinning={loading}>
      <Row
        justify="center"
        align="middle"
        type="flex"
        style={{ minHeight: "100vh", background: "#ddd", padding: 18 }}
      >
        <Col xs={18}>
          <Card>
            <Row type="flex" justify="center">
              <Button onClick={() => navigate("/")}>
                Get repos from another username
              </Button>
            </Row>
            <Row type="flex" style={{ marginTop: 24 }}>
              <Col xs={24}>
                <List
                  size="large"
                  bordered
                  dataSource={repos}
                  renderItem={(item) => <List.Item>{item.name}</List.Item>}
                />
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </Spin>
  );
};

export default RepoList;
