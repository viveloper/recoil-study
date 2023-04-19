import Button from '@mui/material/Button';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { countListState, countState } from './store';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Grid from '@mui/material/Grid';
import { useCallback } from 'react';

function App() {
  return (
    <div className="App">
      <Grid container spacing={2}>
        {[0, 1, 2].map((id) => (
          <Grid item xs={4} key={id}>
            <CountCardContainer id={id} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default App;

function CountCardContainer({ id }: { id: number }) {
  const count = useRecoilValue(countState(id));
  const setCountList = useSetRecoilState(countListState);

  const handleClick = useCallback(
    () =>
      setCountList((prev) =>
        prev.map((count, i) => (id === i ? count + 1 : count))
      ),
    []
  );
  return <CountCard count={count} onClick={handleClick} />;
}

function CountCard({ count, onClick }: { count: number; onClick: () => void }) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography>{count}</Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" size="small" onClick={onClick}>
          count
        </Button>
      </CardActions>
    </Card>
  );
}
