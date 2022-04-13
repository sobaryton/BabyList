import React, { useState } from 'react'
import { createUseStyles } from 'react-jss'
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard'
import CelebrationIcon from '@mui/icons-material/Celebration'
import { TextField, FormControlLabel, Checkbox, FormGroup, FormControl, FormLabel, Radio, RadioGroup, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material'
import { darkBlue, font20, lightBlue } from './constants'

const formStyles = createUseStyles({
  form: {
    display: 'flex',
    flexDirection: 'column',
    margin: '1rem auto 0 auto',
    width: '95%'
  },
  submitBtn: {
    marginTop: '0.8rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 45,
    width: '50%',
    alignSelf: 'center',
    background: lightBlue,
    color: darkBlue,
    border: 'none',
    cursor: 'pointer',
    transition: '500ms all ease',
    fontWeight: 600,
    fontSize: font20,
    padding: '0.5rem',
    '&:hover': {
      background: darkBlue,
      color: lightBlue
    },
    '& svg': {
      marginRight: '1rem'
    }
  },
  textInput: {
    width: '49%'
  },
  inputWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  participationWrapper: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  checkbox: {
    marginTop: '-2rem'
  },
  participation: {
    marginBottom: '1rem'
  }
})

type FormProps = {
  submitText: string
}

const defaultValues = {
  name: '',
  email: '',
  message: '',
  anonymous: true,
  montant: 0,
  currency: 'euros'
}

const Form = ({ submitText }: FormProps) => {
  const classes = formStyles()
  const [formValues, setFormValues] = useState(defaultValues)

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

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault()
    console.log(formValues)
  }

  return (
    <form onSubmit={handleSubmit} className={classes.form}>
      {
        submitText !== 'OFFRIR' &&
        <div className={classes.participation}>
          <div className={classes.participationWrapper}>
            <FormControl>
              <InputLabel id="demo-simple-select-label">Monnaie</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={formValues.currency}
                label="currency"
                required
                onChange={handleChange}
              >
                <MenuItem value="euros">€ (Euros)</MenuItem>
                <MenuItem value="pounds">£ (Pounds)</MenuItem>
              </Select>
            </FormControl>
            <TextField
              id="outlined-helperText"
              label="Montant"
              name="montant"
              type="number"
              required
              onChange={handleInputChange}
              className={classes.textInput}
            />
          </div>
          <p>Ce qui fait %</p>
        </div>
      }
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
        {
          submitText === 'OFFRIR'
            ? <CardGiftcardIcon />
            : <CelebrationIcon />
        }
        {submitText}
      </button>
    </form>
  )
}

export default Form
