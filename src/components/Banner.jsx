import PropTypes from "prop-types";
import banner from '../assets/banner-main.png'
const Banner = ({ handleFreeCredit }) => {
    return (
        <><div className="bg-black p-10 bg-[url('/src/assets/bg-shadow.png')] bg-cover rounded-lg ">
            <div className="flex justify-center">
                <img className="w-fit" src={banner} alt="" />
            </div><div className="text-center">
                <h3 className="text-[#FFFFFF] text-4xl font-bold m-4">Assemble Your Ultimate Dream 11 Cricket Team</h3>
                <p className="text-[#FFFFFFB3] m-4">Beyond Boundaries Beyond Limits</p>
                <button onClick={handleFreeCredit} className="border-2 border-[#E7FE29] p-1 rounded-lg "><div className="btn bg-[#E7FE29] text-lg font-bold border-none">Claim Free Credit</div></button>
            </div></div></>
    );
};
Banner.propTypes = {
    handleFreeCredit: PropTypes.func
}
export default Banner;