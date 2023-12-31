import './Chart.css';
import ChartBar from "./ChartBar";

function Chart (props) {
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
    const Max = Math.max(...dataPointValues);

    return <div className='chart'>
        {props.dataPoints.map(dataPoint => (
            <ChartBar
                key={dataPoint.label}
                value={dataPoint.value}
                max={Max}
                label={dataPoint.label}
            />
        ))}
    </div>
}

export default Chart;