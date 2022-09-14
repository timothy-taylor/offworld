import { atom } from "jotai";
import { supabase } from "../helpers/supabase-client";

export const checkForUser = async () => {
  const { data, error } = await supabase.auth.getUser();
  if (error) console.error(error);
  return data.user;
};

const userAtomPrimitive = atom(checkForUser());
export const userAtom = atom(
  (get) => get(userAtomPrimitive),
  (get, set) => {
    console.time("in userAtom setter");
    const user = checkForUser();
    set(userAtomPrimitive, user);
    console.timeEnd("in userAtom setter");
  }
);

//
// this piece of state makes sure the Warning component
// is only shown on initially load,
// without the logic pertaining to this, the warning
// would be shown everytime we navigate from Settings to the App
export const newVisitorAtom = atom(true);