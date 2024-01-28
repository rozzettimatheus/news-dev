import { publicEnv } from '@/config/public-env'
import { loadStripe } from '@stripe/stripe-js'

export async function getStripeJs() {
  return await loadStripe(
    /* publicEnv.NEXT_PUBLIC_STRIPE_PUBLIC_KEY*/
    'pk_test_51OUDvsJhgMIq6zjeGdnqIL14wq7yF0kBJLbbV7p9XQpsJX9Q61jn3RzTcDBHsB0P3E2zommYVKoB7MwlKRtWEy0U005Dp8qPSG'
  )
}
