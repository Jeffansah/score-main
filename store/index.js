import { create } from "zustand";

export const useParticipantStore = create((set) => ({
  participants: [],
  loading: false,
  totalPrice: null,
  cartIsFilled: false,
  setCartIsFilled: (cartIsFilled) =>
    set((state) => ({ ...state, cartIsFilled })),
  setLoading: (loading) => set((state) => ({ ...state, loading })),
  setDestination: (destination) =>
    set((state) => ({ booking: { ...state.booking, destination } })),
  setDate: (date) => set((state) => ({ booking: { ...state.booking, date } })),
  setAdult: (adult) =>
    set((state) => ({
      booking: {
        ...state.booking,
        options: { ...state.booking.options, adult },
      },
    })),
  setChildren: (children) =>
    set((state) => ({
      booking: {
        ...state.booking,
        options: { ...state.booking.options, children },
      },
    })),
  setRoom: (room) =>
    set((state) => ({
      booking: {
        ...state.booking,
        options: { ...state.booking.options, room },
      },
    })),
}));


