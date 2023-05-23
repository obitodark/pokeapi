import {FC} from "react";

import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
} from "chart.js";


import { Radar } from "react-chartjs-2";
import { Stat } from '../../interface/pokemonData';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);


const options = {
    plugins: {
        legend: {
          labels: {
            color: 'white'
          }
        }
      },
    scales: {
      
          
      r: {   
        angleLines: {     
          lineWidth: 1,
          color: "rgba(255,255,255,.2)"
        },
        ticks: {
          beginAtZero: true,
          display: false,
        //   font: {
            color: 'red'
        //   }
        },
        grid: {
            color: "rgba(255,255,255,.2)"
          },
          pointLabels: {
            font: {
              size: 13,
              color:'white'
            }
          } ,
          borderCapStyle: 'butt' 
      },
      
  
    }
  };
  export interface Props {
    stats:  Stat[];
  }
 const RadarChart:FC <Props> = ({stats}) => {
    console.log('namessss',stats[0].stat.name)
    const data = {
        labels: [stats[4].stat.name, stats[1].stat.name, stats[2].stat.name, stats[3].stat.name, stats[0].stat.name, stats[5].stat.name],
        datasets: [
          {
            label: "Estadisticas",
            data: [
                stats[4].base_stat,
                stats[1].base_stat,
                stats[2].base_stat,
                stats[3].base_stat,
                stats[0].base_stat,
                stats[5].base_stat,
                 ],
                 lineTension: 0.4,
                 
            backgroundColor: "rgba(248, 199, 77 , 0.2)",
            borderColor: "#F8C74D ",
            pointBorderColor:'white',
            borderWidth: 1
          }
        ]
      };
  return <Radar data={data} options={options}/>
}
export default RadarChart