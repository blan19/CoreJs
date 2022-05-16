const API_END_POINT = 'https://jsonplaceholder.typicode.com';

export default {
  async getPosts() {
    try {
      const res = await fetch(`${API_END_POINT}/posts`);

      if (!res.ok) {
        throw new Error(`에러가 발생했습니다 ${e.message}`);
      }

      const data = await res.json();

      return data;
    } catch (e) {
      throw new Error(`에러가 발생했습니다 ${e.message}`);
    }
  },
  async getPostById(id) {
    try {
      const res = await fetch(`${API_END_POINT}/posts/${id}`);

      if (!res.ok) {
        throw new Error(`에러가 발생했습니다 ${e.message}`);
      }

      const data = await res.json();

      return data;
    } catch (e) {
      throw new Error(`에러가 발생했습니다 ${e.message}`);
    }
  },
  async getUserById(id) {
    try {
      const res = await fetch(`${API_END_POINT}/users/${id}`);

      if (!res.ok) {
        throw new Error(`에러가 발생했습니다 ${e.message}`);
      }

      const data = await res.json();

      return data;
    } catch (e) {
      throw new Error(`에러가 발생했습니다 ${e.message}`);
    }
  },
  async getCommentById(id) {
    try {
      const res = await fetch(`${API_END_POINT}/posts/${id}/comments`);

      if (!res.ok) {
        throw new Error(`에러가 발생했습니다 ${e.message}`);
      }

      const data = await res.json();

      return data;
    } catch (e) {
      throw new Error(`에러가 발생했습니다 ${e.message}`);
    }
  },
};
