function Card({ title, imgURL, isVisited, children }) {
    // const visitedLabel = isVisited ? "✅ visitata" : "❌ non visitata";
    return (
    <div className="rounded-md bg-zinc-950">
        <img src={imgURL} alt="" height="200" />
        <div className="flex flex-col p-4">
            <h2 className="text-2xl text.white font-bold">{title}</h2>
            <p className="text-gray-500">{children}</p>
             <span>{isVisited ? "✅ visitata" : "❌ non visitata"}</span> 
        </div>
    </div>
    );
}

export default Card;