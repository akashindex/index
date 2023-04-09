import { store } from "../app/store";
import { setCurrentSection } from "../features/layout/LayoutSlice";

class ScrollListener {
  private debounceTimeout: NodeJS.Timeout | undefined;

  constructor() {
    this.attachScrollListener();
  }

  private debounce(
    func: (...args: any[]) => void,
    wait: number
  ): (...args: any[]) => void {
    return (...args: any[]) => {
      clearTimeout(this.debounceTimeout);
      this.debounceTimeout = setTimeout(() => func.apply(this, args), wait);
    };
  }

  private attachScrollListener(): void {
    window.addEventListener(
      "wheel",
      this.debounce((e) => this.onScroll(e), 300)
    );
  }

  private onScroll(event: WheelEvent): void {
    if (event.deltaY > 0) {
      store.dispatch(
        setCurrentSection(store.getState().layout.currentSection + 1)
      );
    } else if (event.deltaY < 0) {
      store.dispatch(
        setCurrentSection(store.getState().layout.currentSection - 1)
      );
    }
  }
}

export default ScrollListener;
