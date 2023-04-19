import Button from '@mui/material/Button';
import { useRecoilState } from 'recoil';
import { countListState } from './store';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Grid from '@mui/material/Grid';

function App() {
  const [countList, setCountList] = useRecoilState(countListState);
  return (
    <div className="App">
      <Grid container spacing={2}>
        {[0, 1, 2].map((id) => (
          <Grid item xs={4} key={id}>
            <CountCard
              count={countList[id]}
              onClick={() =>
                setCountList((prev) =>
                  prev.map((count, i) => (id === i ? count + 1 : count))
                )
              }
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default App;

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
