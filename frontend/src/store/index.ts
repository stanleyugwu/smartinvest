import create from "zustand";

export interface UserProfile {
    fullname:string;
    email:string;
    phoneNumber:string;
    country:string;
    currency:string;
    password:string;
}

export interface UserAccount {
    deposit:number;
    balance:number;
    profit:number;
    credit:number;
    withdrawal:number;
    accountManager:string;
    tradingPercentage:number;
}

/**
 * App store type
 */
export type AppStore = {
  profile?: UserProfile;
  account?:UserAccount;
  accessToken?:string;
  setAccessToken(token?:string):void;
  setProfile(profile:Partial<UserProfile>):void;
  setAccount(accountInfo:Partial<UserAccount>):void;
};

const useAppStore = create<AppStore>((set, get) => ({
  accessToken:undefined,
  account:undefined,
  profile:undefined,
  setAccessToken(token:string){
    set({accessToken:token});
  },
  setAccount(accountInfo:Partial<UserAccount>){
    const oldAcct = get().account;
    if(oldAcct === undefined){
        set({account:accountInfo as UserAccount})
    } else {
        set({account:{...oldAcct,...accountInfo}})
    }
  },
  setProfile(_profile:Partial<UserProfile>){
    const oldProfile = get().profile;
    if(oldProfile === undefined){
        set({profile:_profile as UserProfile})
    } else {
        set({profile:{...oldProfile, ..._profile}})
    }
  },
}));

export default useAppStore;
