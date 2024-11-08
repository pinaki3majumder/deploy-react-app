import { loremIpsum } from 'lorem-ipsum';
import { List as VirtualizedList, ListRowRenderer } from 'react-virtualized';
import './List.css';

function MyList() {

  const rowCount = 5000;
  const listHeight = 400;
  const rowHeight = 50;
  const rowWidth = 700;

  const list = Array(rowCount).fill(null).map((val, idx) => {
    return {
      id: idx,
      name: 'John Doe',
      image: 'https://via.placeholder.com/40',
      text: loremIpsum({
        count: 1,
        units: 'sentences',
        sentenceLowerBound: 4,
        sentenceUpperBound: 8
      })
    };
  });

  const renderRow: ListRowRenderer = ({ index, key, style }) => {
    return (
      <div key={key} style={style} className="row">
        <div className="image">
          <img src={list[index].image} alt="" />
        </div>
        <div className="content">
          <div>{list[index].name}</div>
          <div>{list[index].text}</div>
        </div>
      </div>
    );
  };

  return (
    <div className="App">
      <div className="list">
        <VirtualizedList // Updated component reference
          width={rowWidth}
          height={listHeight}
          rowHeight={rowHeight}
          rowRenderer={renderRow}
          rowCount={list.length}
          overscanRowCount={3} 
        />
      </div>
    </div>
  );
}

export default MyList;
