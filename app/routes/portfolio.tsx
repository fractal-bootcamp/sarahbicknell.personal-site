export default function Portfolio() {
    return (
        <div className="flex justify-center" >
            <div className="flex flex-col items-left w-[75%]">
                <h2 className="font-serif font-bold text-2xl text-pink-950">  Portfolio </h2>
                <div className="flex flex-2 flex-wrap w-[100%]">
                    <div className="w-[50%]">
                        <img src="/gallery1.jpeg" className="w-full h-full p-1" />
                    </div>
                    <div className="w-[50%]">
                        <img src="/gallery2.jpeg" className="w-full h-full p-1" />
                    </div>
                    <div className="w-[50%]">
                        <img src="/gallery3.jpeg" className="w-full h-full p-1" />
                    </div>
                    <div className="w-[50%]">
                        <img src="/gallery4.webp" className="w-full h-full p-1" />
                    </div>
                </div>
            </div>
        </div>
    )
}

