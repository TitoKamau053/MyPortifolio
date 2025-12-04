class CanvasQueue {
  constructor(maxActive = 4) {
    this.maxActive = maxActive;
    this.active = new Set();
    this.queue = [];
  }

  request(id, callback) {
    if (this.active.has(id)) {
      return true;
    }

    if (this.active.size < this.maxActive) {
      this.active.add(id);
      callback(true);
      return true;
    }

    // Add to queue
    this.queue.push({ id, callback });
    return false;
  }

  release(id) {
    this.active.delete(id);
    this.processQueue();
  }

  processQueue() {
    while (this.queue.length > 0 && this.active.size < this.maxActive) {
      const { id, callback } = this.queue.shift();
      this.active.add(id);
      callback(true);
    }
  }

  clear() {
    this.active.clear();
    this.queue = [];
  }
}

export const canvasQueue = new CanvasQueue(4); // Only 4 ball canvases at once