// Choose the captured layout and scene before the original client initializes.
(() => {
  const url = new URL(location.href);
  const bundledGame = document.currentScript?.dataset.game;
  const requestedGame = url.searchParams.get('gn');
  const supported = ['hades', 'golden-seth'];
  const game = supported.includes(requestedGame) ? requestedGame : bundledGame || 'golden-seth';
  // The captured recommendation buttons change gn on the same page. Each
  // independent build contains one game, so switch to its sibling build first.
  if (bundledGame && game !== bundledGame) {
    const key = game === 'hades' ? 'hades' : 'seth2';
    const target = /\/frontend-(hades|seth2)\//.test(url.pathname)
      ? new URL(`../frontend-${key}/index.html`, url) : new URL(`../${key}/`, url);
    target.search = url.search;
    target.searchParams.delete('gt');
    location.replace(target.href);
    return;
  }
  url.searchParams.set('gn', game);
  const explicit = url.searchParams.get('view_mode');
  const layout = url.searchParams.get('layout');
  // Preserve the original Rotate button's explicit view_mode on its reload.
  let mode = ['portrait', 'landscape'].includes(explicit) ? explicit :
    layout === 'desktop' ? 'landscape' : layout === 'mobile' ? 'portrait' : innerWidth >= 800 ? 'landscape' : 'portrait';
  // Hades has one original horizontal game view, including its tall mobile host.
  if (game === 'hades') mode = 'landscape';
  url.searchParams.set('view_mode', mode);
  history.replaceState(history.state, '', url);
  const scene = game === 'hades' || mode === 'landscape' ? 'main' : 'mainPortrait';
  window.__recoveredLaunch = { viewMode: mode, scene: `db://assets/recovered/main/${scene}.scene` };
  document.documentElement.dataset.gameLayout = mode;
})();
