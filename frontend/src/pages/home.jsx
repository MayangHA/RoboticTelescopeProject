import { Box, Flex, Select } from '@chakra-ui/react';
import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js';
import { useEffect, useMemo, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { getStats } from '../api/files';
import MainLayout from '../layout/main-layout';
import useStatsStore from '../store/stats';
import { avgStatsByHour, groupStatsByHour } from '../utils/charts';
import { CHARTS_OPTIONS, CHARTS_OPTION } from '../utils/constant';
import dayjs from 'dayjs';
import id from 'dayjs/locale/id';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

ChartJS.register({
  id: 'customCanvasBackgroundColor',
  beforeDraw: (chart, args, options) => {
    const { ctx } = chart;
    ctx.save();
    ctx.globalCompositeOperation = 'destination-over';
    ctx.fillStyle = options.color;
    ctx.fillRect(0, 0, chart.width, chart.height);
    ctx.restore();
  }
})

function Home() {

  const [filter, setFilter] = useState(CHARTS_OPTION.HUM);
  const usedFilter = useMemo(
    () => CHARTS_OPTIONS.find((o) => o.value === filter),
    [filter]
  );
  const [isChanged, setIsChanged] = useState(false);
  const stats = useStatsStore((state) => state.stats);
  const data = useMemo(() => {
    const group = groupStatsByHour(stats, dayjs().get('hour'));
    const avg = avgStatsByHour(group);

    return avg;
  }, [stats]);
  const labels = useMemo(() => Object.keys(data).map((k) => `${k}:00`), [data]);
  const dataSet = useMemo(() => {
    if (!usedFilter) return [];

    return Object.values(data).map((s) => s[usedFilter.value]);
  }, [data, usedFilter]);

  // Animation refresh when changed
  useEffect(() => {
    if (!isChanged) return;

    setTimeout(() => {
      setIsChanged(false);
    }, 300);
  }, [isChanged]);


  return (
    <Flex
    //home background
      w={'full'}
      h={'full'}
      alignItems={'center'}
      gap={1}
      flexDirection={'column'}
      px={5}
      bgColor={'#f5f5f5'}
    >
      <Flex
        //section select & chart
        w={'80%'}
        h={'auto'}
        gap={2}
        px={5}
        flexDir={'column'}
        bgColor={'white'}
        marginTop={10}
        paddingTop={10}
        paddingBottom={10}
        border={1}
        borderRadius={5}
        alignItems={'center'}
      >
        <Select
          value={filter}
          onChange={(e) => {
          setFilter(e.target.value);
          setIsChanged(true);
        }}
          placeholder="Pilih opsi"
          size="lg"
          borderRadius="12px"
          bg="white"
          boxShadow="md"
          _hover={{ boxShadow: "lg" }}
          _focus={{ borderColor: "blue.500", boxShadow: "0 0 0 2px #3182ce" }}
        >
        {CHARTS_OPTIONS.map((o) => (
          <option key={o.value} value={o.value}>
            {o.title}
          </option>
        ))}
      </Select>
      
        <Flex w={'75vw'}
          justifyContent={'center'}
          pt={10}
        >
          <Box
            w={'100%'}
            h={'600px'}
            // border={'2px solid #000'}
            borderRadius={'12px'}
            p={4}
            boxShadow={'md'}
            bgColor={'#f5f5f5'}
          >
                      {!isChanged && (
            <Line
              options={{
                plugins: {
                  customCanvasBackgroundColor: {
                    color: "#f5f5f5",
                  },
                  title: {
                    display: true,
                    text: usedFilter?.title,
                    font: {size: 18, weight: 'bold', color: 'black'},
                    padding: {top: 10, bottom: 10},
                  }
                },
              responsive: true,
              scales: {
                x: {
                  ticks: {
                    font: {size: 14},
                    weight: 'bold',
                    family: 'arial',
                  },
                  color: "#000",
                },
                y: {
                  ticks: {
                    font: {size: 14},
                    weight: 'bold',
                    family: 'arial',
                  },
                  color: "#000",
                },
              },
              maintainAspectRatio: false,
              // plugins: {     
              //     tooltip: {
              //       backgroundColor: 'magenta',
              //       titleColor: 'black',
              //       bodyColor: 'black',
              //       borderColor: 'magenta',
              //       borderWidth: 2,
              //       padding: 10,
              //       displayColors: false,
              //     },

              //     legend: {
              //       labels: {
              //         font: {size:14}
              //       }
              //     }
          
              // }
              }}
              data={{
              labels: labels,
              datasets: [
                  {
                    label: usedFilter?.title,
                    data: dataSet,
                    borderWidth: 3,
                    borderColor: "blue",
                    pointRadius: 5, // titik bulat ✅
                    fill: true,
                    tension: 0.4, // smooth ✅
                    
    
            
                  },
                ],
              }}
            />
          )}
          </Box>

        </Flex>
      </Flex>
      

    </Flex>
  );
}

function HomeWithLayout() {
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    getStats()
      .then(() => {})
      .catch(() => {})
      .finally(() => {
        setIsFetching(false);
      });
  }, []);

  if (isFetching) {
    return (
      <MainLayout>
        <Flex
          alignItems={'center'}
          justifyContent={'center'}
          w={'full'}
          h={'full'}
          bgColor={'black'}
        >
          Loading...
        </Flex>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <Home />
    </MainLayout>
  );
}

export default HomeWithLayout;
