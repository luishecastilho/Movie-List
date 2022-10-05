interface Movie_showProps {
    bannerUrl: string;
    title: string;
    platform: string;
    score: number;
}

export function Movie_show(props: Movie_showProps) {
    return (
        <a href="#" className="relative rounded-lg overflow-hidden">
            <img src={props.bannerUrl} alt="" />

            <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
                <strong className="font-bold text-white">{props.title}</strong>
                <div className="flex flex-horizontal items-center" style={{justifyContent: 'space-between'}}>
                    <span className="text-zinc-300 text-sm block">Nota {props.score}</span>
                    <img src={props.platform} alt="" />
                </div>
            </div>
        </a>
    )
}