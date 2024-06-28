interface TitleProps {
    name: string;
}

const Title: React.FC<TitleProps> = ({ name }) => {
    return (
        <>
            <div className="section-header">
                <h1 className="text-4xl font-medium py-1">{name}</h1>
                <hr />
            </div>
        </>
    );
};

export default Title;