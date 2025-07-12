export const playWarpSound = () => {
  if (typeof window !== 'undefined' && window.Audio) {
    const audio = new Audio('/assets/sounds/warp.mp3');
    audio.volume = 0.3;
    audio.play().catch(e => console.log('Audio play failed:', e));
  }
};

export const playPortalSound = () => {
  if (typeof window !== 'undefined' && window.Audio) {
    const audio = new Audio('/assets/sounds/portal.mp3');
    audio.volume = 0.4;
    audio.play().catch(e => console.log('Audio play failed:', e));
  }
};