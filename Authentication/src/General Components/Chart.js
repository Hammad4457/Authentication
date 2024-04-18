import {Line} from "react-chartjs-2"
import {Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    scales
} from 'chart.js';

ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement
)
function Chart(){
    const data= {
        labels:['Mon','Tue','Wed',"Thur",'Friday','Sat'],
        datasets:[{
            label: 'First Chart' ,
            data:[343.2059,4004,2700,1600,3498],
            fill:false,
            backgroundColor:"black",
            pointBorderColor:'aqua',
            tension:0.1
        }]
    }
        const options={
            plugins:{
                legend: true
            },
            scales:{
                y: {

                }
            }
            

        }
    return (
        <div className="w-52 h-48">
            <Line>
            data={data}
            options = {options}
            </Line>
        </div>
    )
}
export default Chart;