type Mods = Record<any, boolean | string | undefined>

export function classNames (cls: string, mods: Mods = {}, additional: string[] = []): string {
    return [
        cls,
        ...additional.filter(Boolean),
        ...Object.entries(mods)
            .filter(([_, value]) => value !== undefined && Boolean(value))
            .map(([className]) => className)
    ].join(' ').trim()
}
