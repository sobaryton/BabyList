import React, { ChangeEvent, FocusEvent, KeyboardEvent, forwardRef, useEffect, useImperativeHandle, useRef, useState, Ref } from "react"
import { createUseStyles } from 'react-jss'
import classNames from "classnames"
import IconButton from "@mui/material/IconButton"
import Input from "@mui/material/Input"
import Paper from "@mui/material/Paper"
import ClearIcon from "@mui/icons-material/Clear"
import SearchIcon from "@mui/icons-material/Search"

const useStyle = createUseStyles({
  root: {
    height: '3rem',
    display: "flex",
    justifyContent: "space-between",
  },
  iconButton: {
    padding: '.75rem !important',
    transform: "scale(1, 1)",
  },
  iconButtonHidden: {
    transform: "scale(0, 0)",
    "& > $icon": {
      opacity: 0,
    },
  },
  searchIconButton: {
    marginRight: '-3rem !important',
  },
  input: {
    width: "100%",
  },
  searchContainer: {
    margin: "auto 1rem",
    width: `calc(100% - 5rem)`,
  },
})

const SearchBar = (inputProps: {
  value?: string,
  onBlur?: (event: FocusEvent) => void,
  onCancelSearch?: () => void,
  onChange?: (value: string) => void,
  onFocus?: (event: FocusEvent) => void,
  onRequestSearch?: (value: string) => void,
  placeholder?: string,
  className?: string
  disabled?: boolean
}, forwardedRef: Ref<Partial<HTMLElement>>) => {
  const classes = useStyle()
  const inputRef = useRef<HTMLElement>();
  const [value, setValue] = useState(inputProps.value ?? '')

  useEffect(() => {
    setValue(inputProps.value ?? '')
  }, [inputProps.value])

  const handleFocus = (e: FocusEvent) => {
    if (inputProps.onFocus) {
      inputProps.onFocus(e)
    }
  }

  const handleBlur = (e: FocusEvent) => {
    setValue((v) => v.trim())
    if (inputProps.onBlur) {
      inputProps.onBlur(e)
    }
  }

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
    if (inputProps.onChange) {
      inputProps.onChange(e.target.value)
    }
  }

  const handleRequestSearch = () => {
    if (inputProps.onRequestSearch) {
      inputProps.onRequestSearch(value)
    }
  }

  const handleCancel = () => {
    setValue("")
    if (inputProps.onCancelSearch) {
      inputProps.onCancelSearch()
    }
  }

  const handleKeyUp = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleRequestSearch()
    } else if (e.key === "Escape") {
      handleCancel()
    }
  }

  useImperativeHandle(forwardedRef, () => ({
    focus: () => {
      inputRef.current?.focus();
    },
    blur: () => {
      inputRef.current?.blur();
    },
  }));

  return (
    <Paper className={classNames(classes.root, inputProps.className)}>
      <div className={classes.searchContainer}>
        <Input
          value={value}
          onBlur={handleBlur}
          onChange={handleInput}
          onKeyUp={handleKeyUp}
          onFocus={handleFocus}
          fullWidth
          className={classes.input}
          disableUnderline
          disabled={inputProps.disabled}
          placeholder={inputProps.placeholder}
        />
      </div>
      <IconButton
        onClick={handleRequestSearch}
        className={classNames(classes.iconButton, classes.searchIconButton, {
          [classes.iconButtonHidden]: value !== "",
        })}
        disabled={inputProps.disabled}
      >
        <SearchIcon />
      </IconButton>
      <IconButton
        onClick={handleCancel}
        className={classNames(classes.iconButton, {
          [classes.iconButtonHidden]: value === "",
        })}
        disabled={inputProps.disabled}
      >
        <ClearIcon />
      </IconButton>
    </Paper>
  )
}

export default forwardRef(SearchBar)
