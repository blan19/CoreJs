import cash from "./cash.js";

const API_END_POINT =
  "https://uikt6pohhh.execute-api.ap-northeast-2.amazonaws.com/dev/products";

export default {
  async getByAll() {
    if (cash["cash_products"]) {
      return JSON.parse(cash["cash_products"]);
    }

    try {
      const res = await fetch(API_END_POINT, { method: "GET" });

      if (!res.ok) {
        throw new Error(`에러가 발생했습니다 ${e.message}`);
      }

      const data = await res.json();
      cash.setItem("cash_products", JSON.stringify(data));
      return data;
    } catch (e) {
      throw new Error(`에러가 발생했습니다 ${e.message}`);
    }
  },
  async getById(id) {
    try {
      const res = await fetch(`${API_END_POINT}/${id}`, { method: "GET" });

      if (!res.ok) {
        throw new Error(`에러가 발생했습니다 ${e.message}`);
      }

      return await res.json();
    } catch (e) {
      throw new Error(`에러가 발생했습니다 ${e.message}`);
    }
  },
};
