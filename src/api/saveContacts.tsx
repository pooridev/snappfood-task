type TSaveContacts = (data: string[]) => Promise<any>;
export const saveContacts:TSaveContacts = (data) => {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, 1500, true);
    })
}