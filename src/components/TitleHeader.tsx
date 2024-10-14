interface TitleHeaderProps {
    first: string;
    second: string;
}

const TitleHeader: React.FC<TitleHeaderProps> = ({ first, second }) => {
    return (
        <>
            <div className="flex flex-col sm:flex-row justify-center items-center m-4 mb-10 pt-6 text-3xl md:text-5xl font-bold italic underline underline-offset-8 decoration-1 decoration-dark_rutgers_red">
                <h1 className="">{first}</h1>
                <h1 className="text-dark_rutgers_red">&nbsp;{second}</h1>
            </div>
        </>
    );
};

export default TitleHeader;