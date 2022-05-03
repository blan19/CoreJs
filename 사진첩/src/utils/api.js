const API_BASE_URL = 'https://electron-memo.herokuapp.com';
const API_END_POINT = '/api/nodes';

export default {
  async getByAll() {
    try {
      const res = await fetch(`${API_BASE_URL}${API_END_POINT}`);

      if (!res.ok) throw new Error('서버의 상태가 이상합니다!');

      return await res
        .json()
        .then((res) =>
          res.data.map((data) => ({ id: data.id, ...data.attributes })),
        );
    } catch (e) {
      throw new Error(`무언가 잘못 되었습니다! ${e.message}`);
    }
  },
  async getById(nodeId) {
    try {
      const res = await fetch(`${API_BASE_URL}${API_END_POINT}/${nodeId}`);

      if (!res.ok) throw new Error('서버의 상태가 이상합니다!');

      return await res
        .json()
        .then((res) => ({ id: res.data.id, ...res.data.attributes }));
    } catch (e) {
      throw new Error(`무언가 잘못 되었습니다! ${e.message}`);
    }
  },
};
