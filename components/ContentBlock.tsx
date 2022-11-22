export default function ContentBlock({headline, subhead, body}) {
    return (
        <section className="mt-4">
            <h1 className="text-2xl my-4">{headline}</h1>
            <h2 className="text-lg my-4 italic w-full sm:w-3/4 md:w-2/3">{subhead}</h2>
            <p className="text-sm w-full sm:w-3/4 md:w-2/3">{body}</p>
        </section>
    )
}