import React from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"
import "./react-datepicker.css"

const date = new Date(Date.now());
const dateCopy = new Date(date);

class ReactDatePicker extends React.Component {

    state = {
        startDate: date,
        startTimeCaption: 'Time',
        endDate: new Date(dateCopy.setDate(dateCopy.getDate() + 1)),
        endTimeCaption: 'Time',
    };

    handleChangeStartDate = startDate => {
        this.setState({
            startDate,
            startTimeCaption: `${startDate.getHours()} ${startDate.getMinutes()}`
        });
    };
    
    handleChangeEndDate = endDate => {
        this.setState({
            endDate,
            endTimeCaption: `${endDate.getHours()} ${endDate.getMinutes()}`
        });
    };

    render() {
        const { startDate, startTimeCaption, endDate, endTimeCaption } = this.state;

        console.error('today', this.state.startDate);
        console.error('tomorrow', this.state.endDate);
        return (
            <>
                <h3>react-datepicker</h3>
                <h4>START DATE</h4>
                <DatePicker
                    dateFormat="dd MMM yyyy, h:mm aa"
                    selected={startDate}
                    showTimeSelect
                    onChange={this.handleChangeStartDate}
                    showPopperArrow={false}
                    timeCaption={startTimeCaption}
                    timeFormat="hh:mm aa"
                    timeIntervals={15}
                />
                <h4>END DATE</h4>
                <DatePicker
                    dateFormat="dd MMM yyyy, h:mm aa"
                    selected={endDate}
                    showTimeSelect
                    onChange={this.handleChangeEndDate}
                    showPopperArrow={false}
                    timeCaption={endTimeCaption}
                    timeFormat="hh:mm aa"
                    timeIntervals={15}
                />
            </>
        );
    }
}

  export default ReactDatePicker;