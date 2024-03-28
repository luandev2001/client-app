interface ConditionProps {
    condition?: boolean,
    data?: any
}

export const unless = (
    { condition = true, data = true }: ConditionProps,
    callback: () => any
) => {
    return (!data || !condition) && callback();
};

export const toPath = (paths: string[]): string => {
    return paths.join("/")
}

export const toCookieName = (names: string[]): string => {
    return names.join(":")
}