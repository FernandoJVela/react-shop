import React from "react"

const useLocalStorage = () => {

    const setLocalStorageItem = (key: string, value: any): void => {
        localStorage.setItem(key, JSON.stringify(value));
    };

    return {
        setLocalStorageItem
    }
}

export {useLocalStorage};