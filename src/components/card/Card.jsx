import Emoji from './components/Emoji';
import Title from './components/Title';
import Text from './components/Text';

export default function Card({ emoji, titulo, text }) {
  return (
    <div className='card'>
      <Title title={titulo} />
      <div className='card-body'>
        <Emoji symbol={emoji} />
        <Text keywords={text} />
      </div>
    </div>
  );
}
