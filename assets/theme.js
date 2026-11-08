(() => {
  'use strict';
  const root = document.documentElement;
  const system = window.matchMedia('(prefers-color-scheme: dark)');
  const key = 'hermes-weekly-theme';
  let choice = null;
  try { choice = localStorage.getItem(key); } catch (_) { /* Offline storage may be blocked. */ }
  if (choice !== 'light' && choice !== 'dark') choice = null;
  function apply() {
    root.dataset.theme = choice || (system.matches ? 'dark' : 'light');
    const button = document.getElementById('theme-toggle');
    if (button) {
      button.hidden = false;
      button.setAttribute('aria-pressed', String(root.dataset.theme === 'dark'));
      button.textContent = root.dataset.theme === 'dark' ? 'Mode clair' : 'Mode sombre';
    }
  }
  apply();
  if (system.addEventListener) system.addEventListener('change', apply);
  document.addEventListener('DOMContentLoaded', () => {
    apply();
    document.getElementById('theme-toggle').addEventListener('click', () => {
      choice = root.dataset.theme === 'dark' ? 'light' : 'dark';
      try { localStorage.setItem(key, choice); } catch (_) { /* Still works for this page. */ }
      apply();
    });
  });
})();
