export type NavAction = 'next' | 'prev' | 'select' | 'back' | 'home';

type NavListener = (action: NavAction) => void;

const listeners = new Set<NavListener>();

function emit(action: NavAction): void {
  listeners.forEach((listener) => listener(action));
}

export function subscribeNav(listener: NavListener): () => void {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function navNext(): void {
  emit('next');
}

export function navPrev(): void {
  emit('prev');
}

export function navSelect(): void {
  emit('select');
}

export function navBack(): void {
  emit('back');
}

export function navHome(): void {
  emit('home');
}
