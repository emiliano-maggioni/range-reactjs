import React, { useState, useRef, useEffect } from 'react';
import styles from "./Range.module.css"
import { coordsRange, rangeProps } from 'utility/types';

const Range = ({minValue, maxValue, minValueInput, maxValueInput, updateMinValue, updateMaxValue}: rangeProps) => {
    const firstMarker:any = useRef();
    const secondMarker:any = useRef();
    const rangeBar:any = useRef();
    const markerSize = 14;
    const barLength = 400;
    const maxRightPos = barLength-markerSize;
    const [coords, setCoords] = useState<coordsRange>();
    const [marker1Pos, setMarker1Pos] = useState(0);
    const [marker2Pos, setMarker2Pos] = useState(0);

    useEffect(() => {
        if(coords){
            //SETTING RANGE BAR COORDS
            let minPos = getPositionFromValue(minValueInput);
            let maxPos = getPositionFromValue(maxValueInput);
            setMarker1Pos(minPos);
            setMarker2Pos(maxPos);
        }
    }, [minValueInput,maxValueInput]);

    useEffect(() => {
        //SETTING RANGE BAR COORDS
        let bar:any = rangeBar!.current!.getBoundingClientRect();
        //setCoords({barLeft:bar.left,barRight:bar.right,minPercentage:minPercentage,maxPercentage:maxPercentage});
        setCoords({barLeft:bar.left,barRight:bar.right});
        let minPos = getPositionFromValue(minValue);
        let maxPos = getPositionFromValue(maxValue);
        setMarker1Pos(minPos);
        setMarker2Pos(maxPos);

    }, [minValue,maxValue]);
    





    const dragStart = (event: React.DragEvent<HTMLDivElement>,markerId:number) => {
        //console.log("drag START:",event);
        // console.log("firstMarker getBoundingClientRect:", firstMarker.current.getBoundingClientRect());
        console.log("1) clientX:", event.clientX);
       // firstMarker.current.classList.add('markerHover');
    }

    const dragEnd = (event: React.DragEvent<HTMLDivElement>,markerId:number) => {
        console.log("coords.barLeft:", coords!.barLeft);
        console.log("2) clientX :", event.clientX);
        // rangeBar.current.style.cursor = 'grab';

        let newPos = event.clientX - coords!.barLeft;
        if(newPos >= maxRightPos)
            newPos = maxRightPos; 
        if(newPos < 0)
            newPos = 0; 

        // let percentage = getRangeValue(newPos);
        // console.log("newPos:",newPos+" - percentage:",percentage);

        if(markerId == 1){
            if(newPos >= marker2Pos)
                newPos = marker2Pos-markerSize; 
            let percentage = getRangeValue(newPos);
            firstMarker!.current!.classList!.remove('markerHover');
            updateMinValue(percentage);
            setMarker1Pos(newPos);
        }  
        else{
            if(newPos <= marker1Pos)
                newPos = marker1Pos+markerSize; 
            let percentage = getRangeValue(newPos);
            secondMarker!.current!.classList!.remove('markerHover');
            updateMaxValue(percentage);
            setMarker2Pos(newPos);
        }  

    };

    const getRangeValue = (pos:number) => {
        //CALCULATE RANGE VALUE FROM MARKER POSITION
        let percentage = maxRightPos/100;
        percentage = pos / percentage;
        return percentage;
    };

    const getPositionFromValue = (val:number) => {
        //CALCULATE MARKER POSITION FROM RANGE VALUE
        let percentage = (maxValue-minValue) / 100;
        percentage = (val - minValue) / percentage;
        let pos = (maxRightPos / 100) * percentage; 
        console.log("pos:",pos);
        return pos;
    };

    return (
        <div className={styles.container}
            // onDragEnter={(e) => dragEnter(e)}
            ref={rangeBar}
        >
            <div 
                draggable="true"
                ref={firstMarker}
                onDragStart={(e) => dragStart(e,1)} 
                onDragEnd={(e) => dragEnd(e,1)} 
                className={styles.firstMarker}
                style={{ left: marker1Pos + 'px' }}
            > </div>
            <div 
                draggable="true"
                ref={secondMarker}
                onDragStart={(e) => dragStart(e,2)} 
                onDragEnd={(e) => dragEnd(e,2)} 
                className={styles.secondMarker}
                style={{ left: marker2Pos + 'px' }}
            > </div>
        </div>
    );
};

export default Range;