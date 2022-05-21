import React, { useState } from 'react'
import { createUseStyles } from 'react-jss'
import CelebrationIcon from '@mui/icons-material/Celebration'
import { TextField, FormControlLabel, Checkbox, FormGroup, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material'
import { darkBlue, font20, font32, green, lightBlue } from '../../utils/constants'
import { useAppDispatch, useAppSelector } from '../../utils/hooks'
import { participate } from '../../api/participate'
import { randomizeGif } from '../../utils/gifRandomizer'
import { GiftType } from '../../reducers/selectedGift'
import { setGiftList } from '../../reducers/giftList'
import { getGift } from '../../api/getGift'
import ParticipateInformation from './ParticipateInformation'

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
  participationWrapper: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  checkbox: {
    marginTop: 0,
    '@media (min-width: 1200px)': {
      marginTop: '-2rem',
    }
  },
  participation: {
    marginBottom: '1rem'
  },
  currency: {
    margin: '0.5rem 0.5rem 0.5rem 0'
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
  },
})

const defaultValues = {
  name: '',
  email: '',
  message: '',
  anonymous: false,
  amount: 0,
  currency: 'euros'
}

const ParticipateForm = () => {
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

  const handleChange = (event: SelectChangeEvent) => {
    setFormValues({
      ...formValues,
      currency: event.target.value,
    })
  }

  const refreshGift = async () => {
    const refreshedGift = await getGift(selectedGift.id)
    dispatch(setGiftList(gifts.map(gift => gift.id === selectedGift.id ? refreshedGift : gift)))
  }

  const onParticipate = () => participate(
    {
      ...formValues,
      amount: formValues.amount,
      giftId: selectedGift.id,
      giftVersion: selectedGift.version
    }
  )

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault()

    onParticipate()
      .then(refreshGift)

    setContent('thanks')
  }

  return (
    <>
      {content === 'form'
        ? <>
          <ParticipateInformation />
          <form onSubmit={handleSubmit} className={classes.form}>
            <div className={classes.participation}>
              <div className={classes.participationWrapper}>
                <FormControl>
                  <InputLabel id="demo-simple-select-label">Monnaie</InputLabel>
                  <Select
                    className={classes.currency}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={formValues.currency}
                    label="currency"
                    required
                    onChange={handleChange}
                  >
                    <MenuItem value="euros">€ (Euros)</MenuItem>
                    <MenuItem disabled={true} value="pounds">£ (Pounds)</MenuItem>
                  </Select>
                </FormControl>
                <TextField
                  id="outlined-helperText"
                  label="Montant"
                  name="amount"
                  type="number"
                  required
                  onChange={handleInputChange}
                  className={classes.textInput}
                />
              </div>
              {
                (!!formValues.amount && totalAmount !== 0)
                && <p>Ce qui fait {Math.floor((formValues.amount / totalAmount) * 100)}%</p>
              }
            </div>
            <p>Merci de remplir les informations suivantes, afin qu'on puisse vous faire un gros bisou ! &hearts; (et aussi vous recontacter)</p>
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
              onChange={handleInputChange}
            />
            <button type='submit' className={classes.submitBtn}>
              <CelebrationIcon />
              PARTICIPER
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

export default ParticipateForm
