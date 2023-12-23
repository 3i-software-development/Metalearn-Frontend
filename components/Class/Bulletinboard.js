import { Avatar, Card, Col, Row } from "antd";

const { Meta } = Card;

const Bulletinboard = ({ data }) => {
    console.log(data?.Object);
  return (
    <Row gutter={16}>
      {data?.Object?.map((item, i) => {
        return (
          <Col key={i} span={8}>
            <Card style={{ width: 325, marginBottom: '20px' }}>
              <Meta
                avatar={
                  <Avatar src="https://png.pngtree.com/png-vector/20210224/ourmid/pngtree-pin-png-image_2944837.jpg" />
                }
                title={item?.Title}
                // description="This is the description"
              />
              <p style={{fontSize: '11px', marginTop: '10px'}}>Người đăng: {item?.CreatedBy}</p>
              <p style={{fontSize: '11px', marginTop: '10px'}}>Thời gian: {item?.DatePost}</p>
            </Card>
          </Col>
        );
      })}
    </Row>
  );
};

export default Bulletinboard;
