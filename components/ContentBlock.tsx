export default function ContentBlock({headline, body}: String) {
    return (
        <section className="mt-4">
            <h1 className="text-2xl my-1">{headline}</h1>
            <p className="text-sm">{body}</p>
        </section>
    )
}