const API_END_POINT = "https://jsonplaceholder.typicode.com";

export default {
  async getPostsByAll() {
    try {
      const res = await fetch(`${API_END_POINT}/posts`, { method: "GET" });
      if (!res.ok) {
        throw new Error(`에러가 발생했습니다 ${e.message}`);
      }
      return await res.json();
    } catch (e) {
      throw new Error(`에러가 발생했습니다 ${e.message}`);
    }
  },
};
