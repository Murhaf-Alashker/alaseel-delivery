// Keep the link directly usable even when no details have been entered.
const requestPanel = document.querySelector('.request');
const whatsapp = requestPanel.querySelector('.cta');
const messageUrl = new URL(whatsapp.href);
const introduction = messageUrl.searchParams.get('text');

function updateMessage() {
  const lines = [introduction];
  for (const input of requestPanel.querySelectorAll('input')) {
    const value = input.value.trim();
    if (value) lines.push(input.labels[0].textContent.trim() + ': ' + value);
  }
  messageUrl.searchParams.set('text', lines.join('\n'));
  whatsapp.href = messageUrl.href;
}

requestPanel.addEventListener('input', updateMessage);
window.addEventListener('pageshow', updateMessage);
