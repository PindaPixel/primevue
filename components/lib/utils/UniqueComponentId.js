var idCounters = {};

export default function (prefix = 'pv_id_') {
    idCounters[prefix] = (idCounters[prefix] || 0) + 1;

    return `${prefix}${idCounters[prefix]}`;
}
