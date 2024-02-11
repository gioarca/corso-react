function CardPersona({ id, nome, cognome, codiceFiscale, città, stato, via, isVisited}) {
    // const visitedLabel = isVisited ? "✅ visitata" : "❌ non visitata";
    return (
    <div className="rounded-md bg-zinc-950">
        <div className="flex flex-col p-4">
            <p className="text-gray-500">{id}</p>
            <h2 className="text-2xl text.white font-bold">{nome}</h2>
            <h2 className="text-2xl text.white font-bold">{cognome}</h2>
            <p className="text-xl text-gray-500">{codiceFiscale}</p>
            <p className="text-xl text-gray-500">{città}</p>
            <p className="text-xl text-gray-500">{stato}</p>
            <p className="text-xl text-gray-500">{via}</p>
             <span>{isVisited ? "✅ Paziente visitato" : "❌ Paziente non visitato"}</span> 
        </div>
    </div>
    );
}

export default CardPersona;