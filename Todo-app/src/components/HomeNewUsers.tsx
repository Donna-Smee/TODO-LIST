import APreviewList from "./APreviewList"
import "./list-preview-styles.css"
import "./list.css"
import { Navigate, useNavigate } from "react-router-dom"

const HomeNewUsers = () => {
    const navigate = useNavigate();
  return (
    <>
   
        <div className="all-preview-lists">
            <APreviewList listName={"Grocery List"} items={["apples", "banana", "cookies"]}></APreviewList>
            <APreviewList listName={"Grocery List"} items={["apples", "banana", "cookies"]}></APreviewList>
            <APreviewList listName={"Grocery List"} items={["apples", "banana", "cookies"]}></APreviewList>
            <APreviewList listName={"Grocery List"} items={["apples", "banana", "cookies"]}></APreviewList>
            <APreviewList listName={"Grocery List"} items={["apples", "banana", "cookies"]}></APreviewList>
            <APreviewList listName={"Grocery List"} items={["apples", "banana", "cookies"]}></APreviewList>
        </div>

        <button onClick={() => navigate("/create-account")}>GET STARTED!</button>
        or
        <button onClick={() => navigate("/login")}>Log in!</button>
    </>
  )
}

export default HomeNewUsers