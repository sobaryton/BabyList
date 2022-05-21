import React, { useState } from 'react'
import { createUseStyles } from 'react-jss'
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard'
import CelebrationIcon from '@mui/icons-material/Celebration'
import { TextField, FormControlLabel, Checkbox, FormGroup } from '@mui/material'
import { darkBlue, font20, font32, green, lightBlue, red } from '../../utils/constants'
import { useAppDispatch, useAppSelector } from '../../utils/hooks'
import { sendOffer } from '../../api/sendOffer'
import { randomizeGif } from '../../utils/gifRandomizer'
import { GiftType, selectGift } from '../../reducers/selectedGift'
import { setGiftList } from '../../reducers/giftList'
import { getGift } from '../../api/getGift'
import BuyInformation from './BuyInformation'

const formStyles = createUseStyles({
  form: {
    display: 'flex',
    flexDirection: 'column',
    margin: '2rem auto 0 auto',
    width: '95%',
    flexWrap: 'wrap'
  },
  submitBtn: {
    marginTop: '0.8rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 45,
    width: '90%',
    alignSelf: 'center',
    background: lightBlue,
    color: darkBlue,
    border: 'none',
    cursor: 'pointer',
    transition: '500ms all ease',
    fontWeight: 600,
    fontSize: font20,
    padding: '0.5rem',
    '@media (min-width: 1024px)': {
      width: '50%',
    },
    '&:hover': {
      background: darkBlue,
      color: lightBlue
    },
    '& svg': {
      marginRight: '1rem'
    }
  },
  textInput: {
    width: '100%',
    minWidth: '20rem !important',
    '@media (min-width: 1200px)': {
      width: '49%',
    }
  },
  inputWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    flexDirection: 'row'
  },
  checkbox: {
    marginTop: 0,
    '@media (min-width: 1200px)': {
      marginTop: '-2rem',
    }
  },
  thanksBox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  textIcon: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: '4rem'
  },
  red: {
    color: red
  }
})

const defaultValues = {
  name: '',
  email: '',
  message: '',
  anonymous: false
}

const BuyForm = () => {
  const dispatch = useAppDispatch()
  const classes = formStyles()
  const [formValues, setFormValues] = useState(defaultValues)
  const [content, setContent] = useState('form')
  const totalAmount = useAppSelector((state) => state.modal.data.amount)
  const selectedGift = useAppSelector((state) => state.selectedGift.selectedGift) as GiftType
  const gifts = useAppSelector((state) => state.giftList.gifts)

  const handleInputChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target
    setFormValues({
      ...formValues,
      [name]: value,
    })
  }

  const handleCheckBoxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({
      ...formValues,
      anonymous: event.target.checked,
    })
  }

  const refreshGift = async () => {
    const refreshedGift = await getGift(selectedGift.id)
    dispatch(setGiftList(gifts.map(gift => gift.id === selectedGift.id ? refreshedGift : gift)))
    dispatch(selectGift(refreshedGift))
  }

  const onBuy = () => sendOffer({
    ...formValues,
    amount: totalAmount,
    giftId: selectedGift.id,
    giftVersion: selectedGift.version
  })

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault()
    onBuy()
      .then(refreshGift)
    setContent('thanks')
  }

  return (
    <>
      {content === 'form'
        ? <>
          <BuyInformation />
          <form onSubmit={handleSubmit} className={classes.form}>
            <p>Merci de remplir les informations suivantes, afin qu'on puisse vous faire un gros bisou ! <span className={classes.red}>&hearts;</span> (et aussi vous recontacter)</p>
            <div className={classes.inputWrapper}>
              <TextField
                id="outlined-helperText"
                label="Votre nom"
                name="name"
                required
                onChange={handleInputChange}
                className={classes.textInput}
                margin="normal"
              />
              <TextField
                id="outlined-helperText2"
                type="email"
                label="Votre email"
                helperText="Nous n'afficherons pas votre email."
                required
                name="email"
                onChange={handleInputChange}
                className={classes.textInput}
                margin="normal"
              />
            </div>
            <FormGroup className={classes.checkbox}>
              <FormControlLabel control={<Checkbox onChange={handleCheckBoxChange} />} label="Rester anonyme sur le site" />
            </FormGroup>
            <TextField
              placeholder="Laissez-nous un message !"
              name="message"
              multiline
              rows={3}
              required
              onChange={handleInputChange}
            />
            <button type='submit' className={classes.submitBtn}>
              <CardGiftcardIcon />
              OFFRIR
            </button>
          </form>
        </>
        : <div className={classes.thanksBox}>
          <div className={classes.textIcon}>
            <CelebrationIcon sx={{ color: green, marginRight: '1.5rem', fontSize: font32 }} />
            <p>
              Merci beaucoup! On essaye de vous recontacter dans les 3 jours. Si vous n'avez pas de nouvelles de nous, merci de nous envoyer un email à l'adresse suivante : <a target="_blank" href="mailto:team.nico.soso@gmail.com" rel="noreferrer">team.nico.soso@gmail.com</a>.
            </p>
          </div>
          <div dangerouslySetInnerHTML={{ __html: randomizeGif() }} />
        </div>
      }
    </>
  )
}

export default BuyForm
