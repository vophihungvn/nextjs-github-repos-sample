import React, { useEffect } from "react";
import { Row, Col, Spin, Card, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { navigate } from "@reach/router";
import { actionCreator } from "../../store/repo/repo.meta";

const RepoDetail = (props) => {
  const dispatch = useDispatch();
  const { search = "" } = props.location;
  const [, repoName = ""] = search.split("=");
  const { loading, detail } = useSelector((store) => store.repo);

  useEffect(() => {
    dispatch(actionCreator.getRepoDetail(repoName));
  }, []);
  return (
    <Spin spinning={loading}>
      <Row
        justify="center"
        align="middle"
        type="flex"
        style={{ minHeight: "100vh", background: "#f5f5f5", padding: 18 }}
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
                <pre>
                  <code>{JSON.stringify(detail, null, 4)}</code>
                </pre>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </Spin>
  );
};

export default RepoDetail;
