import { useState } from 'react';
import { useAuth } from 'react-oidc-context';
import { adminAddGift } from '../../api/adminAddGift';
import GiftForm, { type GiftData } from '../../Components/Admin/GiftForm';
import { withAuthenticationRequired } from '../../utils/authentication';

export type AddGiftType = {
  title: string;
  description: string;
  category: string;
  image?: string;
  store: string;
  url: string;
  amount: number;
  currency: string;
  alreadyBought: boolean;
};

const defaultFormData: AddGiftType = {
  title: '',
  description: '',
  category: '',
  image: undefined,
  store: '',
  url: '',
  amount: 0.0,
  currency: 'EUR',
  alreadyBought: false,
};

const AddGift = () => {
  const [formData, setFormData] = useState(defaultFormData);
  const [message, setMessage] = useState<string | undefined>(undefined);
  const auth = useAuth();

  const onFormSubmit = (giftData: GiftData) => {
    // biome-ignore lint/style/noNonNullAssertion: This is inside a protected route
    adminAddGift(giftData, auth.user!.access_token)
      .then(gift => {
        setFormData({ ...defaultFormData });
        setMessage(`Successfully created gift with id ${gift.id}`);
      })
      .catch(exception =>
        setMessage(`Error: ${exception?.response?.data?.message || exception?.message || exception}`),
      );
  };

  return <GiftForm message={message} onSubmit={onFormSubmit} gift={formData} />;
};

export default withAuthenticationRequired(AddGift);
