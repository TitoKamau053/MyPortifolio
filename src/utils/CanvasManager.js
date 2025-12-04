class CanvasManager {
  constructor(maxContexts = 6) {
    this.maxContexts = maxContexts;
    this.activeContexts = new Set();
    this.queue = [];
  }

  requestContext(id) {
    if (this.activeContexts.size < this.maxContexts) {
      this.activeContexts.add(id);
      return true;
    }
    return false;
  }

  releaseContext(id) {
    this.activeContexts.delete(id);
  }

  getActiveCount() {
    return this.activeContexts.size;
  }
}

export const canvasManager = new CanvasManager(6);