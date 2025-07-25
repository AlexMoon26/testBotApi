declare global {
    interface Window {
        onTelegramAuth?: (userData: TelegramUser) => void;
    }
}

export type User = {
    id: string | number;
    first_name?: string;
    last_name?: string;
    username?: string;
    photo_url?: string;
    authDate?: number;
    token?: string;
} | null

export type LoginUserData = {
    id: string | number;
    first_name?: string;
    last_name?: string;
    username?: string;
    photo_url?: string;
    auth_date?: number;
    hash?: string;
}