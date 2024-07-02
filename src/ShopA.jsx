import { useLocation, useHistory } from "react-router-dom";

export const ShopA = () => {
  const { state } = useLocation();
  // const location = useLocation();
  // ShopListからstateが受け取れず、undefindになる
  console.log(state);

  const history = useHistory();
  const onClickBack = () => history.goBack();
  return (
    <div>
      <h1>長野店</h1>
      <button onClick={onClickBack}>戻る</button>
    </div>
  );
};
