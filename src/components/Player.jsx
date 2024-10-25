import PropTypes from "prop-types";
const Player = ({player,handleSelectedPlayers}) => {
    const {name,country,image,role,battingBowlingType,biddingPrice}=player;
    // console.log(player)
    return (
        <div>
            <div className="h-[240px]">
                <img className="w-full h-full rounded-lg" src={image} alt="" />
            </div>
            <h3>{name}</h3>
            <div className="flex justify-between">
                <p>{country}</p>
                <p>{role}</p>
            </div>
            <hr />
            <div>
                <h3>Rating</h3>
                <div>
                   {battingBowlingType} 
                </div>
                <div className="flex justify-between">
                    <p>Price: {biddingPrice}</p>
                    <button onClick={()=>handleSelectedPlayers(player)} className="btn">Choose Player</button>
                </div>
            </div>
        </div>
    );
};

Player.propTypes={
    player: PropTypes.object,
    handleSelectedPlayers:PropTypes.func
}
export default Player;