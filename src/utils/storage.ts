/**
 * @ionic/storage 离线本地存储
 * **/

import {Storage} from "@ionic/storage";
const storage = new Storage();
// export default {
//     install: async (app: any) => {
//         const storage = new Storage();
//         app.config.globalProperties.$storage = await storage.create();
//     }
// }
export const storageInstance = await storage.create();