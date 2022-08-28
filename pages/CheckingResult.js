import Head from "next/head"

export default function CreatingForm() {
   
    return (
        <div className="flex justify-center">
            <Head>
                <title>
                    Creating Class
                </title>
            </Head>
            <form className="flex justify-center flex-col">
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