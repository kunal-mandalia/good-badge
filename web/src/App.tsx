import React from 'react'
import {
  createMuiTheme,
  makeStyles,
  Paper,
  ThemeProvider,
  Typography,
} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center',
    padding: theme.spacing(4),
    color: theme.palette.text.primary,
    minHeight: `calc(100vh - ${theme.spacing(8)}px)`,
    borderRadius: 0,
  },
}))

export const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
  },
})

function App() {
  const classes = useStyles()
  return (
    <ThemeProvider theme={darkTheme}>
      <Paper className={classes.root}>
        <Typography variant="h2" color="textPrimary">
          Good Badge
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          Embed links for charities you support
        </Typography>
      </Paper>
    </ThemeProvider>
  )
}

export default App
