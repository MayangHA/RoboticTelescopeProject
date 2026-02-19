import { Box, Flex, Menu, MenuButton, MenuList, MenuItem, MenuDivider, Checkbox, Button, HStack, Text } from '@chakra-ui/react';
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
import { CHARTS_OPTIONS } from '../utils/constant';
import dayjs from 'dayjs';
import DownloadAws from '../components/download-aws';

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

// soft theme-friendly colors for each dataset (order must match CHARTS_OPTIONS)
const DATASET_COLORS = [
  { hex: '#F6C84C', rgba: 'rgba(246,200,76,0.18)' }, // HUM - soft yellow
  { hex: '#60A5FA', rgba: 'rgba(96,165,250,0.18)' }, // SKY - soft blue
  { hex: '#9AE6B4', rgba: 'rgba(154,230,180,0.18)' }, // AMB - soft green
  { hex: '#F3A683', rgba: 'rgba(243,166,131,0.18)' }, // WIND - soft coral
  { hex: '#C4B5FD', rgba: 'rgba(196,181,253,0.18)' }, // ADAY - soft purple
];

const TOOLTIP_CONFIG = {
  HUM: { label: 'Humidity', unit: '%' },
  SKY: { label: 'Sky Temperature', unit: '°C' },
  AMB: { label: 'Ambient Temperature', unit: '°C' },
  WIND: { label: 'Wind Speed', unit: 'm/s' },
  ADAY: { label: 'Air Density', unit: 'kg/m^3' },
};

function Home() {
  const [isChanged, setIsChanged] = useState(false);
  const stats = useStatsStore((state) => state.stats);

  // compute aggregated data
  const data = useMemo(() => {
    const group = groupStatsByHour(stats, dayjs().get('hour'));
    const avg = avgStatsByHour(group);
    return avg;
  }, [stats]);

  const labels = useMemo(() => Object.keys(data).map((k) => `${k}:00`), [data]);

  // selected dataset values (multi-select). Default: all selected
  const [selected, setSelected] = useState(() => CHARTS_OPTIONS.map((o) => o.value));

  // toggle a dataset on/off
  const toggle = (value) => {
    setSelected((prev) => (prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]));
    setIsChanged(true);
  };

  // build datasets based on `selected`
  const datasets = useMemo(() => {
    return CHARTS_OPTIONS
      .map((option, idx) => {
        // if not selected, skip
        if (!selected.includes(option.value)) return null;
        const color = DATASET_COLORS[idx % DATASET_COLORS.length];
        return {
          key: option.value,
          label: option.title,
          data: Object.values(data).map((s) => s[option.value]),
          borderWidth: 3,
          borderColor: color.hex,
          backgroundColor: color.rgba, // soft filled area
          pointBackgroundColor: color.hex,
          pointRadius: 4,
          tension: 0.36,
          fill: true,
        };
      })
      .filter(Boolean);
  }, [data, selected]);

  useEffect(() => {
    if (!isChanged) return;
    const t = setTimeout(() => setIsChanged(false), 200);
    return () => clearTimeout(t);
  }, [isChanged]);

  // Chart options (legend top center)
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
        text: selected.length === CHARTS_OPTIONS.length ? 'Semua Data Cuaca' : (CHARTS_OPTIONS.find(o => o.value === selected[0])?.title || 'Grafik'),
        font: { size: 18, weight: 'bold' },
        padding: { top: 8, bottom: 12 },
      },
      tooltip: {
  backgroundColor: '#ffffff',
  titleColor: '#000',
  bodyColor: '#000',
  borderColor: '#e2e8f0',
  borderWidth: 1,
  padding: 10,
  displayColors: false,

  callbacks: {
    title: (context) => {
      return `Jam ${context[0].label}`;
    },

    label: (context) => {
      const datasetKey = context.dataset.key;
      const value = context.parsed.y;

      const config = TOOLTIP_CONFIG[datasetKey];

      if (!config) {
        return `${context.dataset.label}: ${value}`;
      }

      return `${config.label}: ${value} ${config.unit}`;
    },
  },
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
    <Flex w={'full'} h={'auto'} alignItems={'center'} gap={1} flexDirection={'column'} px={5} bgColor={'#f5f5f5'}>
      <Flex w={'80%'} h={'50vw'} gap={2} px={5} flexDir={'column'} bgColor={'white'} marginTop={10} paddingTop={6} paddingBottom={6} border={1} borderRadius={5} alignItems={'center'} marginBottom={10}>
        {/* drop-down untuk pilihan data */}
        <HStack w="100%" justify="space-between" px={2}>
          <Menu closeOnSelect={false}>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />} size="md" variant="outline">
              Pilih Data ({selected.length})
            </MenuButton>
            <MenuList minW="220px" px={2}>
              {CHARTS_OPTIONS.map((opt, idx) => (
                <MenuItem key={opt.value} minH="40px" closeOnSelect={false}>
                  <Checkbox
                    isChecked={selected.includes(opt.value)}
                    onChange={() => toggle(opt.value)}
                    width="100%"
                  >
                    <Text fontWeight="semibold" ml={2} display="inline">{opt.title}</Text>
                  </Checkbox>
                </MenuItem>
              ))}
              <MenuDivider />
              <MenuItem onClick={() => setSelected(CHARTS_OPTIONS.map((o) => o.value))}>Pilih Semua</MenuItem>
              <MenuItem onClick={() => setSelected([])}>Hapus Semua</MenuItem>
            </MenuList>
          </Menu>

          <Text color="gray.600" fontSize="sm">Tampilkan garis: {selected.length}</Text>
        </HStack>

        {/* chart */}
        <Flex w={'75vw'} justifyContent={'center'} pt={6}>
          <Box w={'100%'} h={'600px'} borderRadius={'12px'} p={4} boxShadow={'md'} bgColor={'#f5f5f5'}>
            {!isChanged && (
              <Line options={chartOptions} data={{ labels, datasets }} />
            )}
          </Box>
        </Flex>

        <Box pt={4} w="100%" px={2}>
          <DownloadAws />
        </Box>
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
        <Flex alignItems={'center'} justifyContent={'center'} w={'full'} h={'full'} bgColor={'black'}>
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
