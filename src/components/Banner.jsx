const Banner = () => {
    return (
        <><div className="bg-black p-10 bg-[url('/src/assets/bg-shadow.png')] bg-cover ">
            <div className="flex justify-center">
                <img className="w-fit" src="/src/assets/banner-main.png" alt="" />
            </div><div className="text-center">
                <h3 className="text-white">Assemble Your Ultimate Dream 11 Cricket Team</h3>
                <p className="text-white">Beyond Boundaries Beyond Limits</p>
                <button className="btn">Claim Free Credit</button>
            </div></div></>
    );
};

export default Banner;