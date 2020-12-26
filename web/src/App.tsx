import React from 'react'
import { makeStyles, Typography } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center',
    padding: theme.spacing(4),
  },
}))

function App() {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Typography variant="h2">Good Badge</Typography>
      <Typography variant="subtitle1">
        Embed links for charities you support
      </Typography>
    </div>
  )
}

export default App
