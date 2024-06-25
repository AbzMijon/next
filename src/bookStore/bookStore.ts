import { create } from "zustand";

interface buttonType {
    id: number,
    label: string,
    active: boolean,
}

interface useAuthStoreTypes {
    authButtons: buttonType[];
    redirectAfterSuccess: string;
    setActiveButton: (id:number) => any;
    setRedirectAfterSuccess: (label:string) => any;
}

export const useAuthStore = create<useAuthStoreTypes>((set) => ({
    authButtons: [
        {
            id: 0,
            label: 'Log in',
            active: true,
        },
        {
            id: 1,
            label: 'Sing up',
            active: false,
        },
    ],
    redirectAfterSuccess: '',
    setActiveButton: (id:number) => set(state => ({
        authButtons: state.authButtons.map(
        (btn: buttonType) => id === btn.id 
        ? { ...btn, active: true } 
        : { ...btn, active: false })
    })),
    setRedirectAfterSuccess: (label:string) => {
        set(() => ({
            redirectAfterSuccess: label,
        }))
    }
}));