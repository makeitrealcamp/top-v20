import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

import CheckoutForm from './components/CheckoutForm';
import './App.css';

const stripePromise = loadStripe('pk_test_51KqGveB6sNWQgpFYla4y7jYcuXRnbRefsjEb7u6nDTQikw3V3RRe5Dm6cRptnxllcyau0BkurTtPRp76RpYFhoMc005UEwwZNV')

function App() {
  return (
    <div className="App">
      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
    </div>
  );
}

export default App;
