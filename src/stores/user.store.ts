import { SignInResponse } from '@type/sign-in/sign-in.type';
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

type UserInfoProps = SignInResponse | null;

interface UserStoreProps {
    // User data
    userInfo: UserInfoProps;

    // Set handler to update the user data
    setUserInfo: (userInfo?: UserInfoProps) => void;
}

export const useUserStore = create<UserStoreProps>()(
    persist(
        (set) => ({
            userInfo: null,
            setUserInfo: (userInfo) => set({ userInfo })
        }), {
            name: 'userInfo',
            storage: createJSONStorage(() => localStorage)
        }
    )
);