import { useCallback, useEffect, useState } from "react";
import { SearchForm } from "./components/SearchForm/SearchForm";
import { SearchContext } from "./components/SearchResults/SearchContext";
import { SearchResults } from "./components/SearchResults/SearchResults";
import { deBounce } from "./utils";
import { User } from "./types";

const uri = "https://dummyjson.com/users/search?q=";

export default function App() {
    const [users, setUsers] = useState<User[]>([]);

    const getData = useCallback((value: string) => {
        fetch(`${uri}${value}`)
            .then((response) => response.json())
            .then((data: { users: User[] }) => {
                setUsers(data.users);
            });
    }, []);

    useEffect(() => {
        getData("");
    }, [getData]);

    const onChange = deBounce(getData, 200);

    return (
        <SearchContext.Provider value={{ users }}>
            <SearchForm onChange={onChange} />
            <SearchResults />
        </SearchContext.Provider>
    );
}
