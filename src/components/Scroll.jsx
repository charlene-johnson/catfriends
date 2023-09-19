const Scroll = (props) => {
    return (
        <div style={{overflowY: 'scroll', border: '5px solid #ffa3d7', height: '800px'}}>
            {props.children}
        </div>
    )
};

export default Scroll