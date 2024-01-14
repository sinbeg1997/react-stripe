import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
  "pk_test_51OY7bmB4sOCgCHOzr7E9DXvq9KIZcmeALqDgdg70GFW95zudf2eqkJ9OLOlai6MOJ90d5ZIjEFod0RNB9Vwap3gc00lKPAZwZO"
);

export default function App() {
  const options = {
    // passing the client secret obtained from the server
    clientSecret:
      "pi_3OY8BIB4sOCgCHOz0k7XK7Gh_secret_CRcv4kULA8f7YUl5xO6nSjKak",
    appearance: {
      theme: "night",
      // labels: "floating",
      variables: {
        // colorPrimary: '#0570de',
        // colorBackground: '#ffffff',
        // colorText: '#30313d',
        // colorDanger: '#df1b41',
        // fontFamily: 'Ideal Sans, system-ui, sans-serif',
        // spacingUnit: "0px",
        fontSizeBase: "0.875rem",
        // gridRowSpacing: "0",
        gridColumnSpacing: "0",
        borderRadius: "0px",
        colorBackground: "#374561",
      },
    },
    locale: "vi",
  };

  return (
    <div
      style={{
        width: 600,
      }}
    >
      <Elements stripe={stripePromise} options={options}>
        <CheckoutForm />
      </Elements>
    </div>
  );
}
