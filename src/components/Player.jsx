import PropTypes from "prop-types";
const Player = ({ player, handleSelectedPlayers }) => {
    const { name, country, image, role, battingBowlingType, biddingPrice } = player;
    return (
        <div className="border border-3 p-6 rounded-lg">
            <div className="h-[240px]">
                <img className="w-full h-full rounded-lg" src={image} alt="" />
            </div>
            <h3 className="text-lg font-semibold my-4 gap-4"><i className="fa-solid fa-user mr-3"></i>{name}</h3>
            <div className="flex justify-between my-3">
                <p className="text-[#131313B3]"><i className="fa-solid fa-flag mr-3"></i>{country}</p>
                <p>{role}</p>
            </div>
            <hr />
            <div>
                <h3 className="my-3 font-bold">Rating</h3>
                <div className="font-bold">
                    {battingBowlingType}
                </div>
                <div className="flex justify-between items-center">
                    <p className="font-bold my-3">Price: ${biddingPrice}</p>
                    <button onClick={() => handleSelectedPlayers(player)} className="btn font-bold">Choose Player</button>
                </div>
            </div>
        </div>
    );
};

Player.propTypes = {
    player: PropTypes.object,
    handleSelectedPlayers: PropTypes.func
}
export default Player;