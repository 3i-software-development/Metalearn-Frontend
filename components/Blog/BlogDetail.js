import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useGetFullTextQuery } from "@/lib/Midleware/NewQuery";
import Image from "next/image";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import {
  useDeleteCmsItemMutation,
  useGetListCmsItemQuery,
} from "@/lib/Midleware/CmsClassQuery";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Link from "next/link";
import { useAuth } from "@/hooks/authContext";

const BlogDetail = ({ load }) => {
  // const { userName } = useAuth();
  const userName = "admin";
  useEffect(() => {
  }, [userName]);
  // Hàm loại bỏ thẻ p từ chuỗi HTML
  function removePTags(htmlString) {
    const doc = new DOMParser().parseFromString(htmlString, "text/html");
    return doc.body.textContent || "";
  }

  const [deleteCmsItem] = useDeleteCmsItemMutation();

  const { data: listCms } = useGetListCmsItemQuery({
    cat_id: "1391",
    userName: userName,
    blogSubject: "BLOG_GROUP_fb0fc637-4571-4745-8a23-45e635a00ecf",
  });
  // console.log(listCms?.Object);

  const router = useRouter();
  const id = router.query.key;
  const { data } = useGetFullTextQuery({ id: id });

  const handleDelete = async () => {
    if (!confirm("Xóa block?")) return;
    try {
      await deleteCmsItem(id);
      alert("Xóa blog thành công!");
      load();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "30px",
          }}
        >
          <Image
            width={100}
            height={100}
            alt="avatar"
            src={
              "https://img.pikbest.com/wp/202345/male-avatar-image-in-the-circle_9588978.jpg!w700wp"
            }
          />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              paddingRight: "40px",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontWeight: "bold" }}>Admintrator</span>
              <span>09/05/2023 08:27</span>
            </div>
            <div style={{paddingRight: "20px", paddingTop: "10px  "}}>
              <Link href={`/blog?page=updateBlog&id=${id}`}>
                <EditIcon style={{ cursor: "pointer", marginRight: "20px" }} />
              </Link>
              <DeleteIcon onClick={handleDelete} />
            </div>
          </div>
        </div>
        <p>{removePTags(data?.full_text)}</p>
      </div>

      <div style={{ marginTop: "50px" }}>
        <h3 style={{ fontSize: "22px" }}>Tin liên quan</h3>
        <ul style={{ listStyle: "none" }}>
          {listCms?.Object?.map((e) => (
            <li
              key={e?.id}
              style={{
                display: "flex",
                marginTop: "10px",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <a style={{ fontWeight: "bold", fontSize: "15px" }}>{e?.title}</a>
              <span
                style={{
                  display: "flex",
                  marginTop: "5px",
                  alignItems: "center",
                }}
              >
                <AccessAlarmIcon style={{ fontSize: "17px" }} />
                <span style={{paddingLeft: "10px"}}>{e?.date_post}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default BlogDetail;
