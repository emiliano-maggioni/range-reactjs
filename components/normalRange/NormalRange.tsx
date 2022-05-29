import React, { useState, useRef,  useEffect } from 'react';
import styles from "./NormalRange.module.css"
import Range from "components/range/Range"
import { rangeDefValues, rangeValues } from 'utility/types';
import instance from 'utility/callsAPI';

const NormalRange = () => {
    const minInputRef:any = useRef();
    const maxInputRef:any = useRef();
    const [inputValues, setInputValues] = useState<rangeValues>({min:0,max:50});    
    const [defValues, setDefValues] = useState<rangeDefValues>({min:0,max:50,valuesRange:50});   

    useEffect(() => {
        //API TO GET DEFAULT VALUES 
        instance.get('/limits.json')
        .then((response: any) => {
            let dati = response.data
            let min = dati.min;
            let max = dati.max;
            setInputValues({min:min,max:max});
            setDefValues({min:min,max:max,valuesRange:max-min});
        })
        .catch((error: any) => {
            console.log("------- ERROR:",error);
        });
        

    }, []);

    const changeInputValues = (val:number,type:string) => {
        //CHANGE INPUT VALUES AND TRIGGER FUNCTION TO CHECK IF VALUES ARE CORRECT
        let oldValues = {...inputValues};
        let newValues:any;
        
        if(type == "min")
            newValues = {min:val,max:oldValues.max};        
        else if(type == "max")
            newValues = {min:oldValues.min,max:val};  
            
        setInputValues(newValues); 

        const checkValues = setTimeout(() => { 
            if(type == "min" && newValues.min == minInputRef?.current?.value)
                    fixInputValues(newValues.min, type);                  
            else if(type == "max" && newValues.max == maxInputRef?.current?.value)
                    fixInputValues(newValues.max, type);                
                
        }, 1500); 

        return () => clearTimeout(checkValues);   

    }

    const updateMinValue = (percentage:number) => {
        //CHANGE MIN INPUT VALUES AND TRIGGER FUNCTION TO CHECK IF VALUES ARE CORRECT
        let newVal = ((defValues.valuesRange / 100) * percentage) + defValues.min;
        newVal = Math.floor(newVal);
        fixInputValues(newVal, "min"); 
    }

    const updateMaxValue = (percentage:number) => {
        //CHANGE MAX INPUT VALUES AND TRIGGER FUNCTION TO CHECK IF VALUES ARE CORRECT
        let newVal = ((defValues.valuesRange / 100) * percentage) + defValues.min;
        newVal = Math.floor(newVal);
        fixInputValues(newVal, "max"); 
    }

    const fixInputValues = (val:number,type:string) => {
        //FIX VALUES IF INPUT VALUES ARE LOWER OR HIGHER THAN DEFAULT VALUES OR MIN / MAX VALUES
        if(type == "min"){
            if(val){
                if(val < defValues.min)
                    setInputValues({min:defValues.min,max:inputValues.max});
                else if(val >= inputValues.max)
                    setInputValues({min:inputValues.max-1,max:inputValues.max});
                else
                    setInputValues({min:val,max:inputValues.max});
            }
            else{
                setInputValues({min:defValues.min,max:inputValues.max});            
            }

        }
        else if(type == "max"){
            if(val){
                if(val > defValues.max)
                setInputValues({min:inputValues.min,max:defValues.max});
                else if(val <= inputValues.min)
                    setInputValues({min:inputValues.min,max:inputValues.min+1});
                else
                    setInputValues({min:inputValues.min,max:val});
            }
            else{
                setInputValues({min:inputValues.min,max:defValues.max});          
            }

        }  

           
    }
    
    return (
        <div className={styles.container} style={{cursor:"default"}}  onDragOver={(event:any) =>    {
            event.preventDefault();
        }   }  >
            <input type="number"
                value={inputValues.min}
                ref={minInputRef}
                onChange={(e:any) => changeInputValues(e.target.value,'min')}
                className={styles.input} 
                placeholder={`Min value ${defValues.min}`}
                min={defValues.min}
                max={defValues.max}
                step="1"
            />€
            <div className={styles.containerRange}>
                <Range 
                    minValue={defValues.min} 
                    maxValue={defValues.max} 
                    minValueInput={inputValues.min} 
                    maxValueInput={inputValues.max} 
                    updateMinValue={updateMinValue} 
                    updateMaxValue={updateMaxValue}
                />
            </div>
            <input type="number"
                value={inputValues.max}
                ref={maxInputRef}
                onChange={(e:any) => changeInputValues(e.target.value,'max')}
                className={styles.input} 
                placeholder={`Max value ${defValues.max}`}
                min={defValues.min}
                max={defValues.max}
                step="1"
                data-testid="inputMaxLimit"
            />€

        </div>
    );
};

export default NormalRange;