export const closeModalReducer = (state: { openModal: any }, action: { type: any }) => {
  switch (action.type) {
    case 'toggleModal':
      return { openModal: !state.openModal }
    default:
      throw new Error();
  }
}
