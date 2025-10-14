import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { adminUpdateGift } from '../../api/adminUpdateGift';
import { getGift } from '../../api/getGift';
import GiftForm, { GiftData } from '../../Components/Admin/GiftForm';
import { GiftStatus, GiftType } from '../../reducers/selectedGift';
import { withAuthenticationRequired } from '../../utils/authentication';
import { useAuth } from 'react-oidc-context';

const defaultGiftData: GiftType = {
  id: '',
  wishlistId: '',
  title: '',
  description: '',
  category: '',
  image: '',
  store: '',
  url: '',
  amount: 0.0,
  currency: 'EUR',
  alreadyBought: false,
  status: GiftStatus.TO_OFFER,
  createdAt: new Date(),
  version: 1,
  remainingAmount: 0,
};

const UpdateGift = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState(defaultGiftData);
  const [message, setMessage] = useState<string | undefined>(undefined);
  const auth = useAuth();

  useEffect(() => {
    getGift(id as string).then(setFormData);
  }, [id]);

  const onFormSubmit = (giftData: GiftData) => {
    adminUpdateGift(id as string, giftData, auth.user!.access_token)
      .then(() => setMessage('Successfully updated!'))
      .catch(exception =>
        setMessage('Error: ' + (exception?.response?.data?.message || exception?.message || exception))
      );
  };

  return <GiftForm message={message} onSubmit={onFormSubmit} gift={formData} />;
};

export default withAuthenticationRequired(UpdateGift);
