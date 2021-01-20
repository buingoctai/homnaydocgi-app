import React, { useRef } from 'react';
import { List, AutoSizer, CellMeasurer } from 'react-virtualized';

import Shape from 'srcRoot/pages/components/skeleton/shape';
import enhance from './enhance';
import './style.scss';

const Article = (props) => {
  const { totalRecord, heightStore, renderItem } = props;
  const listRef = useRef();

  return totalRecord ? (
    <div className="article" id="article">
      {/* <button id="btn-add" className="button-home">
        Add To Home Screen
      </button> */}
      <div className="article-list">
        <AutoSizer>
          {({ width, height }) => {
            return (
              <List
                width={width}
                height={height}
                rowHeight={heightStore.rowHeight}
                rowRenderer={({ index, key, style, parent }) => (
                  <CellMeasurer
                    cache={heightStore}
                    key={key}
                    parent={parent}
                    rowIndex={index}
                    columnIndex={0}
                  >
                    {renderItem({
                      index,
                      style,
                      listRef: listRef,
                    })}
                  </CellMeasurer>
                )}
                rowCount={totalRecord}
                ref={listRef}
              />
            );
          }}
        </AutoSizer>
      </div>
    </div>
  ) : (
    <span>Loading...</span>
  );
  // return (<div className='loading'>
  // <Shape/>

  // </div>);
};

export default enhance(Article);
