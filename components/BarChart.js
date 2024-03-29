"use client"
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale, 
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = () => {
  const chartData = {
    labels: ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Sales $',
        data: [18127, 22201, 19490, 17938, 24182, 17842, 22475],
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgb(53, 162, 235, 0.4)',
      }, 
    ]
  };

  const chartOptions = {
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Daily Revenue'
      }
    },
    maintainAspectRatio: false,
    responsive: true
  };
  // const [chartData, setChartData] = useState({
  //   datasets: [],
  // });

  // const [chartOptions, setChartOptions] = useState({});

  // useEffect(() => {
  //   console.log("chartData")
  //   setChartData({
  //       labels: ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'],
  //       datasets: [
  //           {
  //               label: 'Sales $',
  //               data: [18127, 22201, 19490, 17938, 24182, 17842, 22475],
  //               borderColor: 'rgb(53, 162, 235)',
  //               backgroundColor: 'rgb(53, 162, 235, 0.4)',
  //             }, 
  //       ]
  //   })
  //   setChartOptions({
  //       plugins: {
  //           legend: {
  //               position: 'top',
  //           },
  //           title: {
  //               display: true,
  //               text: 'Daily Revenue'
  //           }
  //       },
  //       maintainAspectRatio: false,
  //       responsive: true
  //   })
  // }, [])

  console.log('chart data' + JSON.stringify(chartData));
  console.log('chartOptions' + JSON.stringify(chartOptions));
  return (
    <>
      <div className='w-full md:col-span-2 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white'>
        <Bar data={chartData} options={chartOptions}  />
      </div>
    </>
  );
};

export default BarChart;