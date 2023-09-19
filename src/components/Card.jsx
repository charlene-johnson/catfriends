// Card Component

const Card = ({name, email, id}) => {
    return (
        <>
            <div className="bg-light-pink ba b--dark-pink dib br3 pa3 ma2 grow bw2 shadow-5">
                <img src = {`https://robohash.org//set_set4/${id}?200x200`} alt='cats'/>
                <div>
                    <h2>{name}</h2>
                    <p>{email}</p>
                </div>
            </div>
        </>
    );
}

export default Card