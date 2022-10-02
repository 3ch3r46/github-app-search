import useSWR from "swr"

export const useSearch = (search: any) => {
    const { data, error } = useSWR(search ? `https://api.github.com/search/users?q=${search}` : null)
    return {
        data: data,
        isLoading: !error && !data && (search != null && search != ''),
        isError: error
    }
}

export const useUser = (username:any) => {
    const { data, error } = useSWR(username ? `https://api.github.com/users/${username}` : null)
    
    return {
        data: data,
        isLoading: !error && !data && (username != null && username != ''),
        isError: error
    }
}

export const useRepositories = (username:any) => {
    const { data, error } = useSWR(username ? `https://api.github.com/users/${username}/repos?sort=pushed&direction=desc` : null)
    return {
        data: data,
        isLoading: !error && !data && (username != null && username != ''),
        isError: error
    }
}


export const useRepository = (path:any) => {
    const { data, error } = useSWR(path ? `https://api.github.com/repos/${path}` : null)
    return {
        data: data,
        isLoading: !error && !data && (path != null && path != ''),
        isError: error
    }
}

export const useReadme = (path:any) => {
    const { data, error } = useSWR(path ? `https://api.github.com/repos/${path}/readme` : null)
    return {
        data: data,
        isLoading: !error && !data && (path != null && path != ''),
        isError: error
    }
}