import type { User } from "@supabase/supabase-js";
import { atom } from "jotai";
import { supabase } from "../lib/supabase-client";

export const checkForUser = async () => {
    const { data, error } = await supabase.auth.getUser();
    if (error) console.log("Not logged in:", error);
    return { user: data.user, error };
};

const userAtomPrimitive = atom<User | null>(null);
export const userAtom = atom(
    (get) => get(userAtomPrimitive),
    async (_, set) => {
        const { user, error } = await checkForUser();

        set(userAtomPrimitive, user);
        return { user, error };
    },
);
