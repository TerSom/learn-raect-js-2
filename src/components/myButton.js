const MyButton = (props) => {
    return (
        <div>
            <button onClick={() => props.clicked()}>Click disini bro</button>
        </div>
    )
}

export default MyButton;