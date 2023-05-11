//types
import type { HitType } from 'features/hits/types';
//components
import { Hit } from 'features/hits/components';
//styles
import { FixedSizeList as List } from 'react-window';
import { CSSProperties } from 'react';
import useWindowSize from 'shared/hooks/useWindowSize';

type Props = {
  hits: HitType[];
};

type RowProps = {
  data: HitType[];
  index: number;
  style: CSSProperties;
};

enum Config {
  ITEM_SIZE = 156,
  LIST_MARGIN_TOP = 200,
  LIST_MARGIN_BOTTOM = 96
}

export const HitList = ({ hits }: Props) => {
  const { height, width } = useWindowSize();

  return (
    <List
      height={height}
      width={width}
      itemSize={Config.ITEM_SIZE}
      itemCount={hits.length}
      itemData={hits}
    >
      {({ data, style, index }: RowProps) => {
        const top = Number(style.top) + Config.LIST_MARGIN_TOP;
        const height = Number(style.height) + Config.LIST_MARGIN_BOTTOM;
        return (
          <div className="item" style={{ ...style, top, height }}>
            <Hit hit={data[index]} index={index} />
          </div>
        );
      }}
    </List>
  );
};
