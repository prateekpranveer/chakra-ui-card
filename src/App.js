import logo from './logo.svg';
import './App.css';
import BasicCard from './components/BasicCard';
import CardWithDividers from './components/CardWithDividers';
import CardWithImage from './components/CardWithImage';
import CardWithSize from './components/CardWithSize';
import CardWithVariant from './components/CardWithVariant';
import HorizontalCard from './components/HorizontalCard';
import { Box, Text, Divider } from '@chakra-ui/react';

function App() {
  return (
    <div style={{ maxWidth: '1200px', margin: 'auto', marginTop: '20px' }}>
      <div style={{ display: 'flex', gap: '12px' }}>
        <div style={{ minWidth: '400px' }}>
          <BasicCard />
        </div>
        <div style={{ minWidth: '400px' }}>
          <CardWithDividers />
        </div>
        <div style={{ minWidth: '400px' }}>
          <CardWithImage />
        </div>
      </div>
      <div style={{ display: 'flex', gap: '12px' }}>
        <div style={{ marginTop: '12px' }}>
          <CardWithSize />
        </div>
        <div style={{ marginTop: '12px' }}>
          <CardWithVariant />
        </div>
      </div>
      <div>
        <HorizontalCard />
      </div>
    </div>
  );
}

export default App;
