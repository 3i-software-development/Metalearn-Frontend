import { Avatar, Card, Col, Row } from "antd";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useDeleteQuizRefJsonMutation } from "@/lib/Midleware/QuizQuery";
const { Meta } = Card;

const Bulletinboard = ({ data }) => {
  const [deleteQuizRefJson] = useDeleteQuizRefJsonMutation();

  const handleDelete = async (id) => {
    if (!confirm("Xác nhận gỡ tin tức?")) return;
    try {
      await deleteQuizRefJson({
        id,
        userName: "admin",
      });
      alert("Xóa tin tức thành công!");
    } catch (error) {
      alert("Xóa tin tức thất bại!");
      console.log(error);
    }
  };
  return (
    <Row gutter={16}>
      {data?.Object?.map((item, i) => {
        return (
          <Col key={i} span={8}>
            <Card
              style={{ width: 325, marginBottom: "20px", position: "relative" }}
            >
              <DeleteOutlineIcon
                onClick={() => handleDelete(item?.Id)}
                style={{
                  position: "absolute",
                  right: 10,
                  top: 10,
                  cursor: "pointer",
                  color: "#f27059",
                }}
              />
              <Meta
                avatar={
                  <Avatar src="https://png.pngtree.com/png-vector/20210224/ourmid/pngtree-pin-png-image_2944837.jpg" />
                }
                title={item?.Title}
              />
              <p style={{ fontSize: "11px", marginTop: "10px" }}>
                Người đăng: {item?.CreatedBy}
              </p>
              <p style={{ fontSize: "11px", marginTop: "10px" }}>
                Thời gian: {item?.DatePost}
              </p>
            </Card>
          </Col>
        );
      })}
    </Row>
  );
};

export default Bulletinboard;
