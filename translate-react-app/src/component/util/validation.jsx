export const Validation = (value, type) => {
    switch(type) {
        case 'only-letters':
            let regex = /^[A-Za-z]+$/;
            return regex.test(value);
        default:
            break;
    }
}