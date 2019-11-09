import React from 'react';
import { FlickingEvent, SelectEvent, ChangeEvent, NeedPanelEvent } from '@egjs/flicking';
import Flicking from '@egjs/react-flicking';

type CurationProps = {
  titleImage: HTMLImageElement;
  title: string;
};

const dummyData = [
  'Top 10\nMost Impactful\nAI\nStartups in Toronto',
  'Top 6\nFast Growing\nFintech\nStartups in New York',
  'Top 7\nFast Growing\nFood Tech\nStartups in Vancouver',
];

export const CurationCard = ({ titleImage, title }: CurationProps) => (
  <Flicking
    tag="div"
    onNeedPanel={(e: NeedPanelEvent) => {}}
    onMoveStart={(e: FlickingEvent) => {}}
    // onMove={e => {
    //   const flicking = e.currentTarget;

    //   flicking.getAllPanels(true).forEach(panel => {
    //     panel.getElement().innerHTML = panel.getProgress().toFixed(2);
    //   });
    // }}
    onMove={(e: FlickingEvent) => {}}
    onMoveEnd={(e: FlickingEvent) => {}}
    onHoldStart={(e: FlickingEvent) => {}}
    onHoldEnd={(e: FlickingEvent) => {}}
    onRestore={(e: FlickingEvent) => {}}
    onSelect={(e: SelectEvent) => {}}
    onChange={(e: ChangeEvent) => {}}
    classPrefix="eg-flick"
    deceleration={0.0075}
    horizontal={true}
    circular={false}
    infinite={false}
    infiniteThreshold={0}
    lastIndex={Infinity}
    threshold={40}
    duration={100}
    panelEffect={x => 1 - Math.pow(1 - x, 3)}
    defaultIndex={0}
    inputType={['touch', 'mouse']}
    thresholdAngle={45}
    bounce={10}
    autoResize={true}
    adaptive={true}
    zIndex={2000}
    bound={false}
    overflow={false}
    hanger={'30%'}
    anchor={'50px'}
    gap={10}
    moveType={{ type: 'snap', count: Infinity }}
    // moveType = {{type: "freeScroll"}}
    collectStatistics={false}
  >
    {dummyData.map((data, index) => (
      <div className="bg-orange-500 p-5 rounded-exlg w-auto" key={index}>
        <div className="w-full">
          {data.split('\n').map((item, i) => (
            <span className="text-white font-bold text-lg whitespace-no-wrap overflow-hidden" key={i}>
              {item}
              <br />
            </span>
          ))}
        </div>
      </div>
    ))}
  </Flicking>
);

export default CurationCard;
