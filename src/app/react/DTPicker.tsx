import * as React from "react";
import flatpickr from 'flatpickr'
import 'flatpickr/dist/flatpickr.min.css'
import 'flatpickr/dist/themes/dark.css'

export interface IAratiComponentProps {
    onDateChanged? : () => void;
}


export default React.forwardRef((props: IAratiComponentProps, ref) => {
   const [date, setDate] = React.useState(null);
   const [picker, setPicker] = React.useState(null);
   const refFlatPickr = React.useRef(null);
   const refInput = React.useRef(null);

   const onDateChanged = (selectedDates : any) => {
       setDate(selectedDates[0]);
       if(props.onDateChanged) {       
        props.onDateChanged();
       }
   };

   React.useEffect(() => {
    //    setPicker(flatpickr(refFlatPickr.current, {
    //        onChange: onDateChanged,
    //        dateFormat: 'Z',
    //        wrap: true,
    //        enableTime: true,
    //        enableSeconds: true
    //    }));
   }, []);

   React.useEffect(() => {
       if (picker) {
        //    picker.calendarContainer.classList.add('ag-custom-component-popup');
       }
   }, [picker]);

   React.useEffect(() => {
       if (picker) {
        //    picker.setDate(date);
       }
   }, [date, picker]);

   React.useImperativeHandle(ref, () => ({
       getDate() {
           return date;
       },

    //    setDate(date) {
    //        setDate(date);
    //    },

    //    setInputPlaceholder(placeholder) {
    //        if (refInput.current) {
    //            refInput.current.setAttribute('placeholder', placeholder);
    //        }
    //    },

    //    setInputAriaLabel(label) {
    //        if (refInput.current) {
    //            refInput.current.setAttribute('aria-label', label);
    //        }
    //    }
   }));

   return (
       <div className="ag-input-wrapper custom-date-filter" role="presentation" ref={refFlatPickr}>
           <input type="text" ref={refInput} data-input style={{ width: "100%" }} />
           <a className='input-button' title='clear' data-clear>
               <i className='fa fa-times'></i>
           </a>
       </div>
   );
});