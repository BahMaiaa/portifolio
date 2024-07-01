function Badge({ text }) {
    return (
        <>
            <div className="bg-violet-800 p-1.5 px-4 rounded-full">
                <span className="text-primary font-medium">{text}</span>
            </div>
        </>
    )
}

export default Badge