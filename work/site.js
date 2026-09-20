document.querySelectorAll('.share-button').forEach(button => {
  button.addEventListener('click', async () => {
    const area = button.closest('.share-area');
    const status = area.querySelector('.share-status');
    const fallback = area.querySelector('.share-fallback');
    try {
      if (!navigator.clipboard) throw new Error('Clipboard unavailable');
      await navigator.clipboard.writeText(location.href);
      status.textContent = 'URLをコピーしました。';
      fallback.hidden = true;
    } catch {
      fallback.value = location.href;
      fallback.hidden = false;
      fallback.focus();
      fallback.select();
      status.textContent = '下のURLを選択してコピーできます。';
    }
  });
});
const selected = location.hash.slice(1);
const route = document.getElementById(selected);
if (route instanceof HTMLDetailsElement) route.open = true;
document.querySelectorAll('.route-note').forEach(note => note.addEventListener('toggle', () => {
  if (note.open) document.querySelectorAll('.route-note').forEach(other => { if (other !== note) other.open = false; });
}));
