import {
  // PaymentElement,
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
} from "@stripe/react-stripe-js";
import cx from "classnames";
import { useState } from "react";

const CardFieldWrap = ({ children, className }) => {
  return (
    <div className={cx("px-[12px] py-[12px] border-[#697586]", className)}>
      {children}
    </div>
  );
};

const defaultInputOptions = {
  style: {
    base: {
      color: "#C0CBE4",
      fontSize: "14px",
      "::placeholder": {
        color: "#C0CBE4",
      },
    },
  },
};

const cardBrandImgs = {
  visa: "/assets/imgs/visa.svg",
  mastercard: "/assets/imgs/master.svg",
  amex: "/assets/imgs/amex.svg",
  discover: "/assets/imgs/discover.svg",
  diners: "",
  jcb: "",
  unknown: "",
};

const CheckoutForm = () => {
  const [brandImg, setBrandImg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const setBrandIcon = (brand) => {
    setBrandImg(cardBrandImgs?.[brand]);
  };

  const setOutCome = (result) => {
    setErrorMsg(result?.error?.message);
  };

  return (
    <div className="w-[440px] p-[24px]">
      <div>Card information</div>
      <form className="border border-[#697586] rounded-[8px] bg-[#374561]">
        <CardFieldWrap className="border-b flex items-center justify-between">
          <div className="grow">
            <CardNumberElement
              onChange={(e) => {
                setBrandIcon(e.brand);
                setOutCome(e);
              }}
              options={{ ...defaultInputOptions, showIcon: false }}
            />
          </div>
          {brandImg && <img className="w-[24px] h-[16px]" src={brandImg} />}
        </CardFieldWrap>
        <div className="flex items-center">
          <CardFieldWrap className=" grow shrink-0 border-r">
            <CardExpiryElement
              onChange={(e) => setOutCome(e)}
              options={defaultInputOptions}
            />
          </CardFieldWrap>
          <CardFieldWrap className="grow shrink-0">
            <CardCvcElement
              onChange={(e) => setOutCome(e)}
              options={{ ...defaultInputOptions }}
            />
          </CardFieldWrap>
        </div>
      </form>
      {errorMsg && <div>{errorMsg}</div>}
    </div>
  );
};

export default CheckoutForm;
