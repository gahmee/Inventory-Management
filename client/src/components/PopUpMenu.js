
const PopUpMenu = ({ toggle, setToggle }) => {
    return (toggle) ? (
        <div>
            <button onClick={() => setToggle(false)}>close</button>
        </div>
    ) : ""
}

export default PopUpMenu