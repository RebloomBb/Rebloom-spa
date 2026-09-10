/* ---------- Rebloom Launch Promo ----------
   10% off, for the launch period only.
   To change when the discount ends, edit the date below.
   Format: 'YYYY-MM-DDTHH:MM:SS' (24-hour clock, local time). */
const LAUNCH_DISCOUNT_END = new Date('2026-10-10T23:59:59');
const LAUNCH_DISCOUNT_PCT = 0.10;

function isLaunchDiscountActive() {
  return new Date() <= LAUNCH_DISCOUNT_END;
}

function discountedPrice(price) {
  return Math.round(price * (1 - LAUNCH_DISCOUNT_PCT));
}

function formatJMD(amount) {
  return '$' + amount.toLocaleString('en-JM');
}

/* Renders a price into a container that has data-price="10000".
   If the discount is active, shows the original struck through
   next to the discounted price. Otherwise shows the plain price. */
function renderPrice(el) {
  const price = Number(el.getAttribute('data-price'));
  const amountEl = el.querySelector('.price-amount');
  if (!amountEl || Number.isNaN(price)) return;

  if (isLaunchDiscountActive()) {
    const newPrice = discountedPrice(price);
    amountEl.innerHTML =
      '<span class="price-was">' + formatJMD(price) + '</span> ' +
      '<span class="price-now">' + formatJMD(newPrice) + '</span>';
  } else {
    amountEl.textContent = formatJMD(price);
  }
}

function initPromo() {
  document.querySelectorAll('[data-price]').forEach(renderPrice);
  document.querySelectorAll('.promo-banner').forEach(el => {
    el.style.display = isLaunchDiscountActive() ? '' : 'none';
  });
}

document.addEventListener('DOMContentLoaded', initPromo);
