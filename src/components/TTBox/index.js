import './styles.css'

const TTBox = ({playerMark, action}) => {
    return (
        <div className="ticbox" onClick={action}>
            {playerMark}
        </div>
    )
}

export default TTBox;