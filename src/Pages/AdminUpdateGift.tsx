import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { adminUpdateGift } from '../api/adminUpdateGift';
import { getGift } from '../api/getGift';
import GiftForm, { GiftData } from '../Components/Admin/GiftForm';
import { GiftType } from '../reducers/selectedGift';

export type AddGiftType = {
    title: string,
    description: string,
    category: string,
    image: string|undefined,
    store: string,
    url: string,
    amount: number,
    currency: string,
};

const AdminUpdateGift = () => {
    const { id } = useParams()
    const [formData, setFormData] = useState({} as GiftType);
    const [message, setMessage] = useState<string|undefined>(undefined);

    useEffect(() => {
        getGift(id as string)
            .then(setFormData)
    }, [id]);

    const onFormSubmit = (giftData: GiftData) => {
        adminUpdateGift(id as string, giftData)
            .then(() => setMessage("Successfully updated!"))
            .catch((exception) => setMessage("Error: " + (exception?.response?.data?.message || exception?.message || exception)))
    };

    return (
        <GiftForm message={message} onSubmit={onFormSubmit} gift={formData} />
    );
};

export default AdminUpdateGift;
