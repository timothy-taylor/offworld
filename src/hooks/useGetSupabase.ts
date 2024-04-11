import { useEffect, useState } from "react";

//
// cb is a supabase postgres query closure,
// ie: () => supabase.from("posts").select("*")
// TODO: react query plz
export const useGetSupabase = (cb: any) => {
    const [data, setData] = useState([]),
        [loading, setLoading] = useState(true),
        [error, setError] = useState(undefined);

    useEffect(() => {
        const getData = async () => {
            const { data: response } = await cb();
            setData(response);
        };

        getData()
            .catch((err) => setError(err))
            .finally(() => setLoading(false));
    }, []);

    return { data, loading, error };
};
