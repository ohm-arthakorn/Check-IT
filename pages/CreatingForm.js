export default function CreatingForm() {
    return (
        <div className="flex justify-center">
            <form className="flex justify-center flex-col " action="">
                <label>
                    Name
                </label>
                <input type="text" placeholder="Input your name" className="border border-solid border-black"/>
                <label>
                    Lastname
                </label>
                <input type="text" placeholder="Input your lastname" className="border border-solid border-black"/>
                <label>
                    Birthday
                </label>
                <input type="date"/>
                <button type="submit">
                    submit
                </button>
            </form>
        </div>
    )
}