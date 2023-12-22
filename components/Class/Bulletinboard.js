import { Avatar, Card, Col, Row } from 'antd';

const { Meta } = Card;

const Bulletinboard = () => {
    return (
        <Row gutter={16}>
            <Col span={8}>
                <Card
                    style={{ width: 325 }}
                >
                    <Meta
                        avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />}
                        title="Card title"
                        description="This is the description"
                    />
                </Card>
            </Col>
            <Col span={8}>
                <Card
                    style={{ width: 325 }}
                >
                    <Meta
                        avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />}
                        title="Card title"
                        description="This is the description"
                    />
                </Card>
            </Col>
            <Col span={8}>
                <Card
                    style={{ width: 325 }}
                >
                    <Meta
                        avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />}
                        title="Card title"
                        description="This is the description"
                    />
                </Card>
            </Col>
        </Row>

    )
}

export default Bulletinboard