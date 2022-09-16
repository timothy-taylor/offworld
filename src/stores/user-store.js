import { atom } from "jotai";
import { supabase } from "../lib/supabase-client";

export const checkForUser = async () => {
  const { data, error } = await supabase.auth.getUser();
  if (error) console.log("Not logged in", error);
  return data.user;
};

const userAtomPrimitive = atom(undefined);
export const userAtom = atom(
  (get) => get(userAtomPrimitive),
  async (_, set) => {
    const user = await checkForUser();

    set(userAtomPrimitive, user);
  }
);

//
// this piece of state makes sure the Warning component
// is only shown on initially load,
// without the logic pertaining to this, the warning
// would be shown everytime we navigate from Settings to the App
export const newVisitorAtom = atom(true);