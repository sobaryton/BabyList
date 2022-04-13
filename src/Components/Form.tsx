import React, { useState } from 'react'
import { createUseStyles } from 'react-jss'
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard'
import CelebrationIcon from '@mui/icons-material/Celebration'
import { TextField, FormControlLabel, Checkbox, FormGroup } from '@mui/material'
import { darkBlue, font20, lightBlue } from './constants'

const formStyles = createUseStyles({
  form: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '1rem',
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
  checkbox: {
    marginTop: '-2rem'
  }
})

type FormProps = {
  submitText: string
}

const defaultValues = {
  name: '',
  email: '',
  message: '',
  anonymous: true
};

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

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault()
    console.log(formValues)
  }

  return (
    <form onSubmit={handleSubmit} className={classes.form}>
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
