const withModal = (WrapperComponent) => {
  const showModal = ({ message }) => {
    window.alert(message);
  };

  return function () {
    return <WrapperComponent showModal={showModal} />;
  };
};
export default withModal;
