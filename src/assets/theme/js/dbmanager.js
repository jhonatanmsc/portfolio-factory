
export function ordByDate(list) {
    return list.sort((a, b) => {
        let dateA = a.date_end ? new Date(a.date_end) : new Date()
        let dateB = b.date_end ? new Date(b.date_end) : new Date()
        if(dateA == dateB)
            return 0
        else if(dateA > dateB)
            return -1
        else
            return 1
    })
}

export function strDate(item) {
    let dateEnd;
    let dateStart = new Date(item.date_start);
    var options = { year: 'numeric', month: 'long' };
    if (!item.date_end) {
        dateEnd = 'Atualmente';
    } else {
        dateEnd = new Date(item.date_end);
        dateEnd = dateEnd.toLocaleDateString('pt-BR', options);
        dateEnd = dateEnd.split(' de ');
        dateEnd = `${dateEnd[0].charAt(0).toUpperCase()+dateEnd[0].slice(1)} ${dateEnd[1]}`;
    }
    dateStart = dateStart.toLocaleDateString('pt-BR', options);
    dateStart = dateStart.split(' de ');
    dateStart = `${dateStart[0].charAt(0).toUpperCase()+dateStart[0].slice(1)} ${dateStart[1]}`;
    
    return `${dateStart}${dateEnd ? ' - ' + dateEnd : ''}`;
}