import * as React from 'react'
import { default as BasicCard } from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import CardMedia from '@mui/material/CardMedia/CardMedia'
import ChildFriendlyIcon from '@mui/icons-material/ChildFriendly'

type CardType = {
  imageUrl: string
  title: string
  description: string
  price: string
  provider: string
}

const Card = ({ imageUrl, title, description, price, provider }: CardType) => {
  return (
    <BasicCard sx={{ minWidth: 275, maxWidth: 345 }} variant="outlined">
      <CardMedia
        component="img"
        height="140"
        image={`${imageUrl}`}
        alt="item"
      />
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {price}
        </Typography>
        <Typography variant="h5" component="h5">
          {title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {provider}
        </Typography>
        <Typography variant="body2">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="outlined" size="small">Voir</Button>
        <Button variant="contained" size="medium">
          <ChildFriendlyIcon />
          Offrir
        </Button>
      </CardActions>
    </BasicCard>
  )
}

export default Card
