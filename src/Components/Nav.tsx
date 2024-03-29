const Nav = () => {
  return (
    <div className="flex  h-12 items-center p-2 justify-between border-b-2 text-sm font-bold bg-slate-50">
      <div className=" w-[16%] flex justify-end ">
        <img src="src/assets/Logo.png" />
      </div>
      <div className="flex justify-between items-center w-[50%]">
        <img className="h-8" src="src/assets/Frame.png" alt="" />
        <p>Lists</p>
        <p>Gift Exchange</p>
        <p>Shop</p>
        <p>Occasions</p>
        <p>Ecards</p>
        <p>Blog</p>
        <p>FAQ</p>
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
