
export function SobreCard({titulo, descricao, margemTitulo, }) {
    return (<>
        <div className="card-sobre m-3 z-10">
            <div className={`bg-accent p-2 pb-0 w-fit ${margemTitulo}`}>
                <h1>{titulo}</h1>
            </div>

            <div className="bg-accent p-4 rounded-2xl w-md h-fit">
                <p>{descricao}</p>
            </div>
        </div>

    </>)
}