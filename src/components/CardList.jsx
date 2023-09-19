import Card from "./Card.jsx";

const CardList = ({cats}) => {
    return(
        <>
        {cats.map((_user, id) => {
            return(
                <Card
                    key={id}
                    id={cats[id].id}
                    name={cats[id].name}
                    email={cats[id].email}
                    />
            );
        })
        }
        </>
    );
}

export default CardList