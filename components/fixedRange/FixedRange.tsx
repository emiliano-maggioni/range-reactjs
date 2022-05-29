import React, { useState, useRef, useEffect } from 'react';
import styles from "./FixedRange.module.css"
import { rangeDefValues, rangeValues } from 'utility/types';
import instance from 'utility/callsAPI';
import Loader from 'components/loader/Loader';
import RangeFixedValues from 'components/rangeFixedValues/RangeFixedValues';

const FixedRange = () => {
    const [inputValues, setInputValues] = useState<rangeValues>({ min: 0, max: 50 });
    const [defValues, setDefValues] = useState<rangeDefValues>({ min: 0, max: 50, valuesRange: 50, stepRange: [] });

    useEffect(() => {
        //API TO GET DEFAULT VALUES 
        instance.get('/rangeValues.json')
            .then((response: any) => {
                let rangeVal = response.data.values;
                if (rangeVal?.length > 0) {
                    let min = rangeVal[0];
                    let max = rangeVal[rangeVal.length - 1];
                    setInputValues({ min: min, max: max });
                    setDefValues({ min: min, max: max, valuesRange: max - min, stepRange: rangeVal });
                }
                else {
                    console.log("------- ERROR: Data not found");
                }
            })
            .catch((error: any) => {
                console.log("------- ERROR:", error);
            });


    }, []);

    const changeInputValues = (val: number, type: string) => {
        //CHANGE INPUT VALUES AND TRIGGER FUNCTION TO CHECK IF VALUES ARE CORRECT
        let oldValues = { ...inputValues };
        let newValues: any;

        if (type == "min")
            newValues = { min: val, max: oldValues.max };
        else if (type == "max")
            newValues = { min: oldValues.min, max: val };

        setInputValues(newValues);

        if (type == "min")
            fixInputValues(newValues.min, type);
        else if (type == "max")
            fixInputValues(newValues.max, type);


    }

    const updateMinValue = (fixedVal: number) => {
        //TRIGGER FUNCTION TO CHECK IF VALUES ARE CORRECT
        fixInputValues(fixedVal, "min");
    }

    const updateMaxValue = (fixedVal: number) => {
        //CHANGE MAX INPUT VALUES AND TRIGGER FUNCTION TO CHECK IF VALUES ARE CORRECT
        fixInputValues(fixedVal, "max");
    }

    const fixInputValues = (val: number, type: string) => {
        //FIX VALUES IF INPUT VALUES ARE LOWER OR HIGHER THAN DEFAULT VALUES OR MIN / MAX VALUES
        if (type == "min") {
            if (val) {
                if (val < defValues.min)
                    setInputValues({ min: defValues.min, max: inputValues.max });
                else if (val >= inputValues.max)
                    setInputValues({ min: inputValues.max, max: inputValues.max });
                else
                    setInputValues({ min: val, max: inputValues.max });
            }
            else {
                setInputValues({ min: defValues.min, max: inputValues.max });
            }

        }
        else if (type == "max") {
            if (val) {
                if (val > defValues.max)
                    setInputValues({ min: inputValues.min, max: defValues.max });
                else if (val <= inputValues.min)
                    setInputValues({ min: inputValues.min, max: inputValues.min });
                else
                    setInputValues({ min: inputValues.min, max: val });
            }
            else {
                setInputValues({ min: inputValues.min, max: defValues.max });
            }

        }


    }

    return (
        <div className={styles.container} style={{ cursor: "default" }} onDragOver={(event: any) => {
            event.preventDefault();
        }}  >
            {(defValues!.stepRange!.length > 0) ? (
                <>

                        <select
                            name="minval"
                            onChange={(e: any) => changeInputValues(e.target.value, 'min')}
                            className={styles.input}
                            value={inputValues.min}
                        >
                            {defValues.stepRange?.map(e => <option key={Math.random()} value={e} >{e}</option>)}
                        </select>
                        <div className={styles.containerRange}>
                            <RangeFixedValues
                                minValue={defValues.min}
                                maxValue={defValues.max}
                                minValueInput={inputValues.min}
                                maxValueInput={inputValues.max}
                                updateMinValue={updateMinValue}
                                updateMaxValue={updateMaxValue}
                                stepRange={defValues.stepRange}
                            />
                        </div>
                        <select
                            name="maxval"
                            onChange={(e: any) => changeInputValues(e.target.value, 'max')}
                            className={styles.input}
                            value={inputValues.max}
                        >
                            {defValues.stepRange?.map(e => <option key={Math.random()} value={e} >{e}</option>)}
                        </select>
            </>
              ) : (
                <Loader />
              )}

        </div>
    );
};

export default FixedRange;