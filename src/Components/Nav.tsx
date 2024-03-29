import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <div className="flex  h-12 items-center p-2 justify-between border-b-2 text-sm font-bold bg-slate-50">
      <div className=" w-[16%] flex justify-end ">
        <img src="src/assets/Logo.png" />
      </div>
      <div className="flex justify-between items-center w-[50%]">
        <img className="h-8" src="src/assets/Frame.png" alt="" />
        <ul className="flex w-full justify-around ">
          <li>
            <Link to={"list"}>Lists</Link>{" "}
          </li>
          <li>
            <Link to={"#"}>Gift Exchange</Link>{" "}
          </li>
          <li>
            <Link to={"#"}>Shop</Link>{" "}
          </li>
          <li>
            <Link to={"#"}>Occasions</Link>{" "}
          </li>
          <li>
            <Link to={"#"}>Ecards</Link>{" "}
          </li>
          <li>
            <Link to={"#"}>Blog</Link>{" "}
          </li>
          <li>
            <Link to={"#"}>FAQ</Link>{" "}
          </li>
        </ul>
      </div>
      <div className="flex items-center w-[10%] ">
        <p>jane Smith</p>
        <img
          className="h-6 w-6 mx-1 rounded-full"
          src="https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Nav;
