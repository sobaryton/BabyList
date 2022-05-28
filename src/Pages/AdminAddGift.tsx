import React, { useState } from 'react'
import { adminAddGift } from '../api/adminAddGift'
import GiftForm, { GiftData } from '../Components/Admin/GiftForm'

export type AddGiftType = {
    title: string
    description: string
    category: string
    image?: string
    store: string
    url: string
    amount: number
    currency: string
    alreadyBought: boolean
}

const defaultFormData: AddGiftType = {
    title: "",
    description: "",
    category: "",
    image: undefined,
    store: "",
    url: "",
    amount: 0.00,
    currency: "EUR",
    alreadyBought: false,
}

const AdminAddGift = () => {
    const [formData, setFormData] = useState(defaultFormData)
    const [message, setMessage] = useState<string | undefined>(undefined)

    const onFormSubmit = (giftData: GiftData) => {
        adminAddGift(giftData)
            .then(gift => {
                setFormData({...defaultFormData});
                setMessage(`Successfully created gift with id ${gift.id}`);
            })
            .catch((exception) => setMessage("Error: " + (exception?.response?.data?.message || exception?.message || exception)))
    };

    return (
        <GiftForm message={message} onSubmit={onFormSubmit} gift={formData} />
    );
};

export default AdminAddGift
