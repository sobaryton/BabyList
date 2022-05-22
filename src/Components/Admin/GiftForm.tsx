import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { createUseStyles } from 'react-jss'
import { TextField } from '@mui/material';
import { GiftType } from '../../reducers/selectedGift';
import { AddGiftType } from '../../Pages/AdminAddGift';

const useStyle = createUseStyles({
    form: {
        display: 'flex',
        flexDirection: 'column',
        margin: '2rem',
        flexWrap: 'wrap',
        gap: '1rem',
    },
});

export type GiftData = {
    title: string,
    description: string,
    category: string,
    image: string | undefined,
    store: string,
    url: string,
    amount: number,
    currency: string,
};

export type FormData = {
    title: string,
    description: string,
    category: string,
    image: File|undefined,
    store: string,
    url: string,
    amount: number,
    currency: string,
};

type GiftFormType = {
    message: string|undefined,
    onSubmit: (gift: GiftData) => void,
    gift: GiftType | AddGiftType,
};

const GiftForm = ({message, onSubmit, gift}: GiftFormType) => {
    const [formData, setFormData] = useState({} as FormData);
    const classes = useStyle();

    useEffect(() => {
        setFormData({
            ...gift,
            image: undefined,
        });
    }, [gift]); // eslint-disable-line react-hooks/exhaustive-deps

    // const dataUriToFile = (dataUri: string) => fetch(dataUri)
    //     .then(res => res.blob())
    //     .then(blob => new File([blob], "filename", { type: dataUri.substring(dataUri.indexOf(":") + 1, dataUri.indexOf(";")) }));

    const fileToDataUri = (file: File|undefined) => new Promise<string|undefined>((resolve, reject) => {
        if (!file) {
            resolve(undefined);
            return;
        }

        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = () => resolve(fileReader.result?.toString() || "");
        fileReader.onerror = error => reject(error);
    });

    const onTextInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const onFileInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.files?.item(0) || undefined,
        });
    };

    const onFormSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        Object.keys(formData)
            .forEach(key => {
                const value = formData[key as keyof FormData];
                if (key !== "amount" && !value) {
                    delete formData[key as keyof FormData];
                }
            });

        fileToDataUri(formData.image)
            .then(data => onSubmit({
                    ...formData,
                    image: data,
                }));
    };

    return (
        <>
            {message && <h2>{message}</h2>}
            <form onSubmit={onFormSubmit} className={classes.form}>
                <TextField
                    label="Gift title"
                    value={formData.title}
                    name="title"
                    onChange={onTextInputChange}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField
                    label="Description"
                    value={formData.description}
                    name="description"
                    onChange={onTextInputChange}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField
                    label="Category"
                    value={formData.category}
                    name="category"
                    onChange={onTextInputChange}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField
                    // Not a controlled input on purpose, as it's impossible to set the file programatically.
                    label="Image"
                    name="image"
                    onChange={onFileInputChange}
                    type="file"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField
                    label="Store name"
                    value={formData.store}
                    name="store"
                    onChange={onTextInputChange}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField
                    label="Gift URL"
                    value={formData.url}
                    name="url"
                    onChange={onTextInputChange}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField
                    label="Price"
                    value={formData.amount}
                    name="amount"
                    inputProps={{ inputMode: 'numeric', pattern: '^[0-9]+(?:[.,][0-9]{1,2})?$' }}
                    onChange={onTextInputChange}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField
                    label="Currency"
                    value={formData.currency}
                    name="currency"
                    onChange={onTextInputChange}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <button type="submit">Submit</button>
            </form>
        </>
    );
};

export default GiftForm;
