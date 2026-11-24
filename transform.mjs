function fail(message) {
    throw new Error(message);
}
const lines = text => text.split(/\r?\n/).map(line => line.trim()).filter(Boolean);
export function transform(s) {
    if (!s.trim()) fail('Enter some source text.');
    return lines(s).map(l => {
        const u = new URL(l);
        if (!['http:', 'https:'].includes(u.protocol)) fail('Expected HTTP links');
        for (const k of [...u.searchParams.keys()])
            if (/^utm_/i.test(k) || ['fbclid', 'gclid', 'msclkid'].includes(k.toLowerCase())) u.searchParams.delete(k);
        return u.href
    }).join('\n')
}
