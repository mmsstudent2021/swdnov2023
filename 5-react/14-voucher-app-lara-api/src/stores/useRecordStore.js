import { create } from "zustand";

const useRecordStore = create((set) => ({
  records: [],
  addRecord: (record) => {
    set((state) => ({ records: [...state.records, record] }));
  },
  removeRecord: (id) => {
    set((state) => ({
      records: state.records.filter((record) => record.id !== id),
    }));
  },
  changeQuantity: (id, quantity) => {
    set((state) => ({
      records: state.records.map((record) => {
        if (record.product_id === id) {
          const newQuantity = parseInt(record.quantity) + parseInt(quantity);
          const newCost = record.product.price * newQuantity;
          return { ...record, quantity: newQuantity, cost: newCost };
        }
        return record;
      }),
    }));
  },

  resetRecord: () => set({ records: [] }),
}));

export default useRecordStore;
// { product_id: 1, product_price : 200 , quantity: 2, created_at: "2022-01-01T00:00:00.000Z" }
