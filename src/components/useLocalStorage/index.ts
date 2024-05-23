import React from "react"

const useLocalStorage = () => {

    const setLocalStorageItem = (key: string, value: any): void => {
        localStorage.setItem(key, JSON.stringify(value));
    };

    const clearLocalStorage = (): void => {
        localStorage.clear();
    };

    const clearLocalStorageItem = (key: string): void => {
        localStorage.removeItem(key);
    };

    const getLocalStorageItem = (key: string): string => {
        return localStorage.getItem(key) ?? "";
    };

    return {
        setLocalStorageItem,
        clearLocalStorage,
        clearLocalStorageItem,
        getLocalStorageItem,
    }
}

export {useLocalStorage};