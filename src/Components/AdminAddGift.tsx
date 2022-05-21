import React, { ChangeEvent, FormEvent, useState } from 'react'
import { createUseStyles } from 'react-jss'
import { TextField } from '@mui/material'
import { adminAddGift } from '../api/adminAddGift';

const useStyle = createUseStyles({
    form: {
        display: 'flex',
        flexDirection: 'column',
        margin: '2rem',
        flexWrap: 'wrap',
        gap: '1rem',
    },
});

export type AddGiftData = {
    title: string,
    description: string,
    category: string,
    image: string,
    store: string,
    url: string,
    amount: number,
    currency: string,
};

const defaultFormData: AddGiftData = {
    title: "",
    description: "",
    category: "",
    image: "",
    store: "",
    url: "",
    amount: 0.00,
    currency: "EUR",
};

const AdminAddGift = () => {
    const [formData, setFormData] = useState(defaultFormData);
    const [error, setError] = useState<string|undefined>(undefined);
    const classes = useStyle();

    const onFormSubmit = (event: FormEvent) => {
        event.preventDefault();

        adminAddGift(formData)
            .then(() => {setFormData(defaultFormData)})
            .catch((exception) => setError(exception))
    };

    const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    };

    return (
        <form onSubmit={onFormSubmit} className={classes.form}>
            <TextField
                label="Gift title"
                value={formData.title}
                name="title"
                required
                onChange={onInputChange}
            />
            <TextField
                label="Description"
                value={formData.description}
                name="description"
                required
                onChange={onInputChange}
            />
            <TextField
                label="Category"
                value={formData.category}
                name="category"
                required
                onChange={onInputChange}
            />
            <TextField
                label="Image (base64-encoded)"
                value={formData.image}
                name="image"
                required
                onChange={onInputChange}
            />
            <TextField
                label="Store name"
                value={formData.store}
                name="store"
                required
                onChange={onInputChange}
            />
            <TextField
                label="Gift URL"
                value={formData.url}
                name="url"
                required
                onChange={onInputChange}
            />
            <TextField
                label="Price"
                value={formData.amount}
                name="amount"
                inputProps={{ inputMode: 'numeric', pattern: '^[0-9]+(?:[.,][0-9]{1,2})?$' }}
                required
                onChange={onInputChange}
            />
            <TextField
                label="Currency"
                value={formData.currency}
                name="currency"
                required
                onChange={onInputChange}
            />
            <button type="submit">Submit</button>
        </form>
    );
};

export default AdminAddGift;
