import Emoji from "./components/Emoji";
import Title from "./components/Title";
import Text from "./components/Text";

export default function Card({symbol, title, keywords}) {

    return (
            <div className="card">
                <Emoji emoji={symbol}/>
                <div className="card-body">
                    <Title titulo={title}/>
                    <Text text={keywords}/>
                </div>
            </div>
    )
}