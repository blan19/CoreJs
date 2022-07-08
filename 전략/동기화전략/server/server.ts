interface DataStore {
  timestamp: number;
  data: string;
}

class Server {
  store: DataStore = {
    timestamp: 0,
    data: "",
  };

  // 단방향일 때
  getData(clientTimestamp: number): DataStore {
    if (clientTimestamp < this.store.timestamp) return this.store;
    else return undefined;
  }

  // 쌍방향일 때
  synchronize(clientDataStore: DataStore): DataStore {
    if (clientDataStore.timestamp > this.store.timestamp) {
      this.store = clientDataStore;
      return undefined;
    } else if (clientDataStore.timestamp < this.store.timestamp) {
      return this.store;
    } else {
      return undefined;
    }
  }
}

export { Server, DataStore };
