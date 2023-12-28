import { useDeleteCmsItemMutation } from "@/lib/Midleware/CmsClassQuery";
import { useGetFullTextQuery } from "@/lib/Midleware/NewQuery";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";

const ViewBlog = ({ idB }) => {
  const [deleteCmsItem] = useDeleteCmsItemMutation();
  const [query, setQuery] = useState({
    id: idB,
  });

  // Hàm loại bỏ thẻ p từ chuỗi HTML
  function removePTags(htmlString) {
    const doc = new DOMParser().parseFromString(htmlString, "text/html");
    return doc.body.textContent || "";
  }

  const { data } = useGetFullTextQuery(query);
  console.log(data);

  const handleDelete = () => {
    if (!confirm("Xóa blog?")) return;
    //Call Api
  };

  return (
    <div>
      <h4 style={{ marginBottom: "30px" }}>
        Người đăng: {data?.created_by_alias}
      </h4>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          paddingRight: "80px",
        }}
      >
        <p>{removePTags(data?.full_text)}</p>
        <DeleteIcon style={{ cursor: "pointer" }} onClick={handleDelete} />
      </div>
    </div>
  );
};

export default ViewBlog;
