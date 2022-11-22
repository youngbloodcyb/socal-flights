export default function ContentBlock({headline, body}: String) {
    return (
        <section className="mt-4">
            <h1 className="text-2xl my-4">{headline}</h1>
            <p className="text-sm w-full sm:w-2/3 md:w-1/2">{body}</p>
        </section>
    )
}