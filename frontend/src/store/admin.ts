import create from "zustand";

/**
 * App store type
 */
export type AdminAppStore = {
  accessToken?:string;
  setAccessToken(token?:string):void
};

const useAdminAppStore = create<AdminAppStore>((set, get) => ({
  accessToken:undefined,
  setAccessToken(token?:string){
    set({accessToken:token});
  },
}));

export default useAdminAppStore;
