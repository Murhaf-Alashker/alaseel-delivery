document.addEventListener('click', function (event) {
  const link = event.target.closest('a[href]');
  if (!link || event.defaultPrevented) return;

  if (link.href === 'tel:+971544909251') {
    gtag('event', 'conversion', {
      send_to: 'AW-18579482796/n_A9CMOO57kdEKzRsZtF',
      value: 1.0,
      currency: 'AED'
    });
    return;
  }

  if (link.hostname !== 'wa.me' || link.pathname !== '/971544909251') return;

  const conversion = {
    send_to: 'AW-18579482796/zOB7CMyY6bkdEKzRsZtF',
    value: 1.0,
    currency: 'USD'
  };

  if (!event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey &&
      (!link.target || link.target === '_self')) {
    event.preventDefault();
    let opened = false;
    const openWhatsApp = function () {
      if (opened) return;
      opened = true;
      window.location.assign(link.href);
    };
    window.setTimeout(openWhatsApp, 800);
    conversion.event_callback = openWhatsApp;
  }

  gtag('event', 'conversion', conversion);
});
