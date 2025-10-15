import { useEffect, useState } from 'react';
import { useAuth } from 'react-oidc-context';
import { useParams } from 'react-router-dom';
import { adminUpdateGift } from '../../api/adminUpdateGift';
import { getGift } from '../../api/getGift';
import GiftForm, { type GiftData } from '../../Components/Admin/GiftForm';
import { GiftStatus, type GiftType } from '../../reducers/selectedGift';
import { withAuthenticationRequired } from '../../utils/authentication';

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
    // biome-ignore lint/style/noNonNullAssertion: This is inside a protected route
    adminUpdateGift(id as string, giftData, auth.user!.access_token)
      .then(() => setMessage('Successfully updated!'))
      .catch(exception =>
        setMessage(`Error: ${exception?.response?.data?.message || exception?.message || exception}`),
      );
  };

  return <GiftForm message={message} onSubmit={onFormSubmit} gift={formData} />;
};

export default withAuthenticationRequired(UpdateGift);
