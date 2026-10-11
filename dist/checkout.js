// Add the three recurring Stripe Payment Link URLs after the owner provides them.
// Keep checkout closed until the email delivery service is also connected.
const checkoutLinks = Object.freeze({ week: null, month: null, year: null });
const emailDeliveryReady = false;
const checkoutStatus = document.querySelector('#checkout-status');
document.querySelectorAll('[data-plan]').forEach(button => {
  button.addEventListener('click', () => {
    const plan = button.dataset.plan;
    const url = checkoutLinks[plan];
    if (!emailDeliveryReady || !url) {
      checkoutStatus.textContent = 'Subscriptions are being connected. No payment is available yet.';
      checkoutStatus.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      return;
    }
    try {
      const target = new URL(url);
      if (target.protocol !== 'https:' || !['buy.stripe.com', 'checkout.stripe.com'].includes(target.hostname)) throw new Error('Invalid checkout URL');
      window.location.assign(target.href);
    } catch {
      checkoutStatus.textContent = 'Checkout is unavailable right now. Please try again later.';
    }
  });
});
