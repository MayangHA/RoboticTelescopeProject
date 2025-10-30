// import { Box, Flex, Select } from '@chakra-ui/react';
// import {
//   CategoryScale,
//   Chart as ChartJS,
//   Legend,
//   LinearScale,
//   LineElement,
//   PointElement,
//   Title,
//   Tooltip,
// } from 'chart.js';
// import { useEffect, useMemo, useState } from 'react';
// import { Line } from 'react-chartjs-2';
// import { getStats } from '../api/files';
// import MainLayout from '../layout/main-layout';
// import useStatsStore from '../store/stats';
// import { avgStatsByHour, groupStatsByHour } from '../utils/charts';
// import { CHARTS_OPTIONS, CHARTS_OPTION } from '../utils/constant';
// import dayjs from 'dayjs';
// import id from 'dayjs/locale/id';

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend
// );

// ChartJS.register({
//   id: 'customCanvasBackgroundColor',
//   beforeDraw: (chart, args, options) => {
//     const { ctx } = chart;
//     ctx.save();
//     ctx.globalCompositeOperation = 'destination-over';
//     ctx.fillStyle = options.color;
//     ctx.fillRect(0, 0, chart.width, chart.height);
//     ctx.restore();
//   }
// })

// function Home() {

//   const [filter, setFilter] = useState(CHARTS_OPTION.HUM);
//   const usedFilter = useMemo(
//     () => CHARTS_OPTIONS.find((o) => o.value === filter),
//     [filter]
//   );
//   const [isChanged, setIsChanged] = useState(false);
//   const stats = useStatsStore((state) => state.stats);
//   const data = useMemo(() => {
//     const group = groupStatsByHour(stats, dayjs().get('hour'));
//     const avg = avgStatsByHour(group);

//     return avg;
//   }, [stats]);
//   const labels = useMemo(() => Object.keys(data).map((k) => `${k}:00`), [data]);
//   const dataSet = useMemo(() => {
//     if (!usedFilter) return [];

//     return Object.values(data).map((s) => s[usedFilter.value]);
//   }, [data, usedFilter]);

//   useEffect(() => {
//     if (!isChanged) return;

//     setTimeout(() => {
//       setIsChanged(false);
//     }, 300);
//   }, [isChanged]);

//   // Chart options (legend top center)
//   const chartOptions = {
//     plugins: {
//       customCanvasBackgroundColor: { color: '#f5f5f5' },
//       legend: {
//         display: true,
//         position: 'top',
//         align: 'center',
//         labels: { font: { size: 13, weight: '600' } },
//       },
//       title: {
//         display: true,
//         text: selected.length === CHARTS_OPTIONS.length ? 'Semua Data Cuaca' : (CHARTS_OPTIONS.find(o => o.value === selected[0])?.title || 'Grafik'),
//         font: { size: 18, weight: 'bold' },
//         padding: { top: 8, bottom: 12 },
//       },
//       tooltip: {
//         backgroundColor: '#ffffff',
//         titleColor: '#000',
//         bodyColor: '#000',
//         borderColor: '#e2e8f0',
//         borderWidth: 1,
//         padding: 8,
//         displayColors: false,
//       },
//     },
//     responsive: true,
//     maintainAspectRatio: false,
//     scales: {
//       x: {
//         ticks: { font: { size: 13 }, color: '#000' },
//       },
//       y: {
//         ticks: { font: { size: 13 }, color: '#000' },
//       },
//     },
//   };

//   return (
//     <Flex w={'full'} h={'auto'} alignItems={'center'} gap={1} flexDirection={'column'} px={5} bgColor={'#f5f5f5'}>
//       <Flex w={'80%'} h={'50vw'} gap={2} px={5} flexDir={'column'} bgColor={'white'} marginTop={10} paddingTop={6} paddingBottom={6} border={1} borderRadius={5} alignItems={'center'} marginBottom={10}>
//         {/* top controls: multi-select menu */}
//         <HStack w="100%" justify="space-between" px={2}>
//           <Menu closeOnSelect={false}>
//             <MenuButton as={Button} rightIcon={<ChevronDownIcon />} size="md" variant="outline">
//               Pilih Data ({selected.length})
//             </MenuButton>
//             <MenuList minW="220px" px={2}>
//               {CHARTS_OPTIONS.map((opt, idx) => (
//                 <MenuItem key={opt.value} minH="40px" closeOnSelect={false}>
//                   <Checkbox
//                     isChecked={selected.includes(opt.value)}
//                     onChange={() => toggle(opt.value)}
//                     width="100%"
//                   >
//                     <Text fontWeight="semibold" ml={2} display="inline">{opt.title}</Text>
//                   </Checkbox>
//                 </MenuItem>
//               ))}
//               <MenuDivider />
//               <MenuItem onClick={() => setSelected(CHARTS_OPTIONS.map((o) => o.value))}>Select All</MenuItem>
//               <MenuItem onClick={() => setSelected([])}>Clear All</MenuItem>
//             </MenuList>
//           </Menu>

//           {/* optional small legend text / right side control */}
//           <Text color="gray.600" fontSize="sm">Tampilkan garis: {selected.length}</Text>
//         </HStack>

//         {/* chart */}
//         <Flex w={'75vw'} justifyContent={'center'} pt={6}>
//           <Box w={'100%'} h={'600px'} borderRadius={'12px'} p={4} boxShadow={'md'} bgColor={'#f5f5f5'}>
//             {!isChanged && (
//               <Line options={chartOptions} data={{ labels, datasets }} />
//             )}
//           </Box>

//         </Flex>
//       </Flex>
      

//     </Flex>
//   );
// }

// function HomeWithLayout() {
//   const [isFetching, setIsFetching] = useState(true);

//   useEffect(() => {
//     getStats()
//       .then(() => {})
//       .catch(() => {})
//       .finally(() => {
//         setIsFetching(false);
//       });
//   }, []);

//   if (isFetching) {
//     return (
//       <MainLayout>
//         <Flex
//           alignItems={'center'}
//           justifyContent={'center'}
//           w={'full'}
//           h={'full'}
//           bgColor={'black'}
//         >
//           Loading...
//         </Flex>
//       </MainLayout>
//     );
//   }

//   return (
//     <MainLayout>
//       <Home />
//     </MainLayout>
//   );
// }

// export default HomeWithLayout;

import { Box, Flex, HStack, Menu, MenuButton, MenuList, MenuItem, MenuDivider, Button, Checkbox, Text } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
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
});

function Home() {
  // State
  const [filter, setFilter] = useState(CHARTS_OPTION.HUM);
  const [isChanged, setIsChanged] = useState(false);

  // track which datasets are selected
  const [selected, setSelected] = useState(CHARTS_OPTIONS.map((o) => o.value));

  const toggle = (value) => {
    setSelected((prev) =>
      prev.includes(value)
        ? prev.filter((v) => v !== value)
        : [...prev, value]
    );
  };

  // Data logic
  const stats = useStatsStore((state) => state.stats);
  const usedFilter = useMemo(
    () => CHARTS_OPTIONS.find((o) => o.value === filter),
    [filter]
  );

  const data = useMemo(() => {
    const group = groupStatsByHour(stats, dayjs().get('hour'));
    const avg = avgStatsByHour(group);
    return avg;
  }, [stats]);

  const labels = useMemo(() => Object.keys(data).map((k) => `${k}:00`), [data]);

  // Build datasets dynamically based on selected items
  const datasets = useMemo(() => {
    return selected.map((sel) => {
      const opt = CHARTS_OPTIONS.find((o) => o.value === sel);
      return {
        label: opt?.title || sel,
        data: Object.values(data).map((s) => s[sel]),
        borderColor: opt?.color || 'blue',
        backgroundColor: opt?.color || 'blue',
        borderWidth: 2,
        tension: 0.3,
        fill: false,
      };
    });
  }, [selected, data]);

  // Animation refresh when changed
  useEffect(() => {
    if (!isChanged) return;
    const timer = setTimeout(() => setIsChanged(false), 300);
    return () => clearTimeout(timer);
  }, [isChanged]);

  // Chart options
  const chartOptions = {
    plugins: {
      customCanvasBackgroundColor: { color: '#f5f5f5' },
      legend: {
        display: true,
        position: 'top',
        align: 'center',
        labels: { font: { size: 13, weight: '600' } },
      },
      title: {
        display: true,
        text:
          selected.length === CHARTS_OPTIONS.length
            ? 'Semua Data Cuaca'
            : CHARTS_OPTIONS.find((o) => o.value === selected[0])?.title ||
              'Grafik',
        font: { size: 18, weight: 'bold' },
        padding: { top: 8, bottom: 12 },
      },
      tooltip: {
        backgroundColor: '#ffffff',
        titleColor: '#000',
        bodyColor: '#000',
        borderColor: '#e2e8f0',
        borderWidth: 1,
        padding: 8,
        displayColors: false,
      },
    },
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        ticks: { font: { size: 13 }, color: '#000' },
      },
      y: {
        ticks: { font: { size: 13 }, color: '#000' },
      },
    },
  };

  return (
    <Flex
      w="full"
      h="auto"
      alignItems="center"
      gap={1}
      flexDirection="column"
      px={5}
      bgColor="#f5f5f5"
    >
      <Flex
        w="80%"
        h="50vw"
        gap={2}
        px={5}
        flexDir="column"
        bgColor="white"
        marginTop={10}
        paddingTop={6}
        paddingBottom={6}
        border={1}
        borderRadius={5}
        alignItems="center"
        marginBottom={10}
      >
        {/* top controls: multi-select menu */}
        <HStack w="100%" justify="space-between" px={2}>
          <Menu closeOnSelect={false}>
            <MenuButton
              as={Button}
              rightIcon={<ChevronDownIcon />}
              size="md"
              variant="outline"
            >
              Pilih Data ({selected.length})
            </MenuButton>
            <MenuList minW="220px" px={2}>
              {CHARTS_OPTIONS.map((opt) => (
                <MenuItem key={opt.value} minH="40px" closeOnSelect={false}>
                  <Checkbox
                    isChecked={selected.includes(opt.value)}
                    onChange={() => toggle(opt.value)}
                    width="100%"
                  >
                    <Text fontWeight="semibold" ml={2} display="inline">
                      {opt.title}
                    </Text>
                  </Checkbox>
                </MenuItem>
              ))}
              <MenuDivider />
              <MenuItem
                onClick={() =>
                  setSelected(CHARTS_OPTIONS.map((o) => o.value))
                }
              >
                Select All
              </MenuItem>
              <MenuItem onClick={() => setSelected([])}>Clear All</MenuItem>
            </MenuList>
          </Menu>

          {/* optional small legend text / right side control */}
          <Text color="gray.600" fontSize="sm">
            Tampilkan garis: {selected.length}
          </Text>
        </HStack>

        {/* chart */}
        <Flex w="75vw" justifyContent="center" pt={6}>
          <Box
            w="100%"
            h="600px"
            borderRadius="12px"
            p={4}
            boxShadow="md"
            bgColor="#f5f5f5"
          >
            {!isChanged && <Line options={chartOptions} data={{ labels, datasets }} />}
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
          alignItems="center"
          justifyContent="center"
          w="full"
          h="full"
          bgColor="black"
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
