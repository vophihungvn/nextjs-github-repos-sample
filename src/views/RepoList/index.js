import React, { useEffect } from "react";
import { Row, Col, Spin, Card, List, Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { navigate } from "@reach/router";
import { actionCreator } from "../../store/repo/repo.meta";

const RepoList = ({ username = "" }) => {
  const { repos = [], loading = false } = useSelector((store) => store.repo);
  const dispatch = useDispatch();
  useEffect(() => {
    // const {}
    dispatch(actionCreator.getRepos({ username }));
  }, [dispatch, username]);

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
                <List
                  size="large"
                  bordered
                  dataSource={repos}
                  renderItem={(item) => (
                    <List.Item>
                      <List.Item.Meta
                        title={
                          <a href={"/repo-detail?repo=" + item.full_name}>
                            {item.name}
                          </a>
                        }
                        description={item.description}
                      />
                    </List.Item>
                  )}
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
