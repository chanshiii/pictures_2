import { getStorage, ref, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-storage.js";

// Firebase Storageから画像を取得する関数
export const getPhotoUrl = async (imageName) => {
    const storage = getStorage();
    const storageRef = ref(storage, imageName);
    const downloadURL = await getDownloadURL(storageRef);
    return downloadURL;
};
